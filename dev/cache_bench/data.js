window.BENCHMARK_DATA = {
  "lastUpdate": 1747133275626,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "0c9c094c50e1b655dbcec43f0678cb0557d8f624",
          "message": "Update benchmark chart max datapoints from 20 to 30 (#1372)\n\nBefore this change, benchmark graphs\n(https://awslabs.github.io/mountpoint-s3/dev/bench/) show up to 20 data\npoints where each data point represents a previous commit. One instance\nwe review this is in a weekly meeting, and we feel that more data points\nwould provide more contextual information of what changed as we could\nhave in excess of 20 commits over a period of one or two weeks.\n\nThis change updates the graphs to maintain 30 data points at the expense\nof clarity.\n\n### Does this change impact existing behavior?\n\nNo changes to Mountpoint or its crates. This will allow future benchmark\nruns to maintain 30 data points in graphs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-17T07:47:39Z",
          "tree_id": "bf7d1bfa466a3ec0f341fb43840bb505df56a4b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c9c094c50e1b655dbcec43f0678cb0557d8f624"
        },
        "date": 1744883390903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.36484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2025.7498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 817.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.62998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 408.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.3951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3581.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1175.8787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.02919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1085.44501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1402.77607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1104.89169921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1187.99677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 936.7091796875,
            "unit": "MiB/s"
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
          "id": "a88bdf3157419313e550da7f9ba4fdbc307b252a",
          "message": "Compile instance types into rust function  (#1369)\n\nFollow up to #1368.\n\nChanges the script to automatically generate a single rust match\nexpression (wrapped in a function) to get the instance throughput,\ninstead of parsing a `json` file. Additionally, now queries all regions.\n\nThis allows for better maintainability in the future, as we can see any\nchanges to the throughput numbers by looking at the diff in the\ngenerated function.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-17T09:26:27Z",
          "tree_id": "e81ec621eef76ef9a118dd3262587773d78d47c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a88bdf3157419313e550da7f9ba4fdbc307b252a"
        },
        "date": 1744889049844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1287.7853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.2162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1464.2740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.812109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 576.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3710.87294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4015.65146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.71328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1377.43642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 864.8939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1109.368359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.6060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1347.05546875,
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744894945097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1929.39052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.5806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 565.25068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3527.27646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3982.6466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1197.24287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1267.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1185.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.9869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 995.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 958.33876953125,
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904036807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1280.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.23193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1499.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.48330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.3451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.511328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.99091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 754.50341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1129.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1329.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.50927734375,
            "unit": "MiB/s"
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
          "id": "1dcafbb49b0f9060b558f451ffab1d41eeec7861",
          "message": "Allow changing log level dynamically with `USR2` signal  (#1367)\n\nThis PR makes Mountpoint capable of changing log verbosity dynamically\nwith `USR2` Unix signal. The users can send a `USR2` signal to\nMountpoint process, e.g., `kill -USR2 <mount-s3-pid>`, to toggle between\nthe following log verbosity levels:\n  1. Default logging verbosity\n  2. Debug logging for all except CRT (i.e., `debug,awscrt=off`)\n  3. Debug logging for all (i.e., `debug,awscrt=debug`)\n  4. Trace logging for all except CRT (i.e., `trace,awscrt=off`)\n  5. Trace logging for all (i.e., `trace,awscrt=trace`)\n\n### Does this change impact existing behavior?\n\nNo breaking change, a new runtime behavior with `USR2` Unix signal.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, will update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-17T13:52:06Z",
          "tree_id": "6d5f6cdff76b161f33ccb8173ed1b7bae72f4f31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1dcafbb49b0f9060b558f451ffab1d41eeec7861"
        },
        "date": 1744905153427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1988.05322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1464.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.51875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3581.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4053.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.93271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1410.23349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 911.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1184.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1246.09833984375,
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745324907299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.1109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.12646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 485.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.34912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.60625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3633.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4119.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1135.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 951.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 818.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1025.4783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 938.314453125,
            "unit": "MiB/s"
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
          "id": "f2f2a597b2737a84a54f20893076aebb7c2511a0",
          "message": "Add `fstab` CLI parser (#1362)\n\nIntroduce support for invoking Mountpoint with fstab style arguments:\n```\n./mount-s3 example-bucket /mnt/mountpoint -o rw,auto-unmount,allow-root\n```\n\n### Does this change impact existing behavior?\n\nNo breaking changes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, but not yet. This is still WIP\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-04-24T10:53:24Z",
          "tree_id": "49e84d64c478f8a338ef7d2e63f5fb1595e070ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2f2a597b2737a84a54f20893076aebb7c2511a0"
        },
        "date": 1745499227234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1474.815625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.0685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 520.651953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.413671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.3283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3837.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4100.1896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1189.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1219.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 860.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1446.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1009.05,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745518178037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.78583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.89716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 554.71845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3998.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1188.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.9236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 870.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1413.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.4802734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.45869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 929.61201171875,
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745582371667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.16875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1497.04052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.62275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 477.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 330.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3710.7580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4011.58955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1218.35576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 797.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 860.667578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1432.956640625,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590043740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.70771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.3287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.57578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3613.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.81171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1186.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 854.601953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1061.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1250.45126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1005.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 995.26220703125,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745594807055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.7005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1468.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 515.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3556.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3916.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1227.15283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.71572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 854.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1055.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1088.5541015625,
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
          "id": "2063e98a96f4b70fb7753af59c2d634b9fbc5aba",
          "message": "Extract ClientConfig from CliArgs (#1380)\n\nThe new `ClientConfig` type captures all the configuration settings used\nto initialize the S3 client. A `ClientConfig` instance can be built from\nthe relevant arguments in `CliArgs`, integrated with the settings\ndetected from `InstanceInfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T15:30:14Z",
          "tree_id": "4843b7a5a432fcabaa7d23f7a278160d718b8f7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2063e98a96f4b70fb7753af59c2d634b9fbc5aba"
        },
        "date": 1745602198640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.0794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.69189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.2400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.3443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.13173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.5580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3620.5689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4052.46455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1212.100390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.29873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 875.60625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1374.72626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.92265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1032.843359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1201.46279296875,
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
          "id": "28278732ffe316bba78560829259cd1590d9c172",
          "message": "Use manifest in readdir and lookup operations (#1383)\n\nUse metadata stored in an sqlite database instead of s3, when performing\nlookup and readdir.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-28T09:07:25Z",
          "tree_id": "6a8e4cbdd5b12523180c4fa1104f10fd5db0acab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28278732ffe316bba78560829259cd1590d9c172"
        },
        "date": 1745838735049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1275.48876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 444.29072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.2580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 291.31181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3611.22666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3937.68251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1195.2962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1191.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1117.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1056.496875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1047.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 965.89775390625,
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
          "id": "fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b",
          "message": "Extract file system configuration from CliArgs (#1387)\n\nMinor change to extract a `S3FilesystemConfig` from `CliArgs`. Part of\nthe effort to move `CliArgs` out of the `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-28T10:28:42Z",
          "tree_id": "852ed279033cf08b021ab42ac8b398ae15fda01f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b"
        },
        "date": 1745843272366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.52666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.43876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.778125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.58330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.0083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 533.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.23173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3780.19228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1237.69560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.671484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 885.8107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1163.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.61748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1069.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 946.10283203125,
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
          "id": "b170c5355e085f9b324b4fd882a1c253fdb20fb5",
          "message": "Disable ANSI colors where not supported for fs and client examples (#1385)\n\nSimple change - currently, redirecting the logs to a file will keep ANSI\ncolors. With this change, the scripts will automatically turn off ANSI\ncolors when the standard error output is redirected.\n\nThis change is not urgent as users can turn off ANSI colors using\n`NO_COLOR=1`.\n\n### Does this change impact existing behavior?\n\nFor relevant examples/benchmarks only, ANSI color will be disabled when\nnot supported (i.e. not console output).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-29T10:02:07Z",
          "tree_id": "3d71b5cdead38a987fc6ef47b3582598d33c79cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b170c5355e085f9b324b4fd882a1c253fdb20fb5"
        },
        "date": 1745928298505,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.028125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.87138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.489453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3695.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4008.38681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1185.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 912.75654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1091.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.96455078125,
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
          "id": "2d811308c3e1ed7f62f45fa6fa8538076b074bc3",
          "message": "Remove Prefetch trait (#1388)\n\nSimplify the type signature of `S3Filesystem` and related types by\nremoving the `Prefetch` trait and replacing it with a single\n`Prefetcher` implementation, which has an `ObjectClient` generic\nparameter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T15:20:30Z",
          "tree_id": "8cd468e41a7e85c77349c86f2c06fa1722161e8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d811308c3e1ed7f62f45fa6fa8538076b074bc3"
        },
        "date": 1745947244704,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.8724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 774.84599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 545.74306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3761.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4343.28046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1174.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.79755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1346.68623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 879.85771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1011.8498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1243.15654296875,
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
          "id": "be17e42d1e9c1e859ac9e203beef5e870dc339bf",
          "message": "Adopt finish_non_exhaustive in manual Debug implementations (#1393)\n\nMinor change to improve manual `Debug` implementations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T16:23:20Z",
          "tree_id": "e2ed10a362552378fa47d5f30e45a1327e896da3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be17e42d1e9c1e859ac9e203beef5e870dc339bf"
        },
        "date": 1745951012342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.24833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.99501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.58037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.1751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 443.70888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.88642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.9685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3509.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3997.79130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.668359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.3775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1370.46474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1037.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1278.55185546875,
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
          "id": "dac707f5639842a6d1dfd7aaf27b43e703e15c7d",
          "message": "Add `disk_data_cache.disk_usage_mib` metric (#1392)\n\nAdd a metric to record the amount of space used by cache as estimated by\nMP internally. Relevant for\nhttps://github.com/awslabs/mountpoint-s3/issues/1389.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-30T10:08:46Z",
          "tree_id": "36914fe0b2e80ff06496de9a8159a89bc410732c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dac707f5639842a6d1dfd7aaf27b43e703e15c7d"
        },
        "date": 1746014986629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1946.57734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1492.656640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.3419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.12724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 296.78828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3738.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.35,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1276.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1173.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 929.05107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1025.96611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.23515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 982.66123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 912.27197265625,
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746191685971,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1282.54267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.88212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.003125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.01640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.98876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 517.4046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.52880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 279.33837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3641.12041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4070.6775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1187.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1196.21845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 925.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 856.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.56865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.3369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.749609375,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746209264576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.876171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.90009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.50458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 565.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.96923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.54921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3663.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4153.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.60615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1139.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 829.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1282.09375,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746209408001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1947.92041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 819.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.1826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 602.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 309.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3640.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4000.21611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1205.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1177.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1429.52861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 867.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.93291015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.77333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1295.775390625,
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746545284188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.72919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2023.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.497265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 398.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3549.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3946.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1136.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 924.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 870.9505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1098.1927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1018.01318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1161.2478515625,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746551216666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1195.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.73291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 484.26328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.15263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3872.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.45908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.62587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 950.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1116.15146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 980.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1169.38642578125,
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746618881162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1981.78935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.16259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.13037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.57119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.18310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3682.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4136.16083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1134.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1381.2046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 929.384375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1234.07509765625,
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746634388523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.98076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1433.74375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.757421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 326.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3632.941796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4203.8419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1220.7927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.98388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1302.86357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1014.4615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 996.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1082.98828125,
            "unit": "MiB/s"
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
        "date": 1746792340093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.15927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 413.15966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.199609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3608.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3988.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1179.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 939.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 907.15166015625,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746802675894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1480.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.53681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.56875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3546.738671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3953.92841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1163.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1112.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 932.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.60751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1220.8451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 919.729296875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746806591356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.21728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1948.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 306.4943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3624.33447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4061.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.79375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 878.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 889.030078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1086.0177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.79619140625,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747051306728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.63837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 448.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.22333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.16484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3665.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3955.76376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 876.47099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 833.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1105.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1138.69501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 977.3021484375,
            "unit": "MiB/s"
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
        "date": 1747133274819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.174609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.448046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.81904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.1755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.253515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.7974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1186.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 874.36279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1324.6505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1038.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1074.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1243.17578125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}