window.BENCHMARK_DATA = {
  "lastUpdate": 1743443198107,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0",
          "message": "Install active toolchain by default with `rustup` in `package/Dockerfile` (#1299)\n\nStarting with v1.28, `rustup` will not install active toolchain\nautomatically:\nhttps://blog.rust-lang.org/2025/03/02/Rustup-1.28.0.html#whats-new-in-rustup-1280.\nThis PR updates `package/Dockerfile` to install active toolchain\nautomatically if it's not installed.\n\nThis should fix our recent CI failures in packaging step:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13633623152/job/38107451366\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-04T09:23:50Z",
          "tree_id": "519892fb68a6953f7ef5f4023d750544e9954b46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0"
        },
        "date": 1741087391595,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.12392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1434.71669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 462.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.10830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3759.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3990.4263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1206.5900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.729296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1430.54267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 879.1025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1071.05400390625,
            "unit": "MiB/s"
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
          "id": "3d56190ef82ce45002287f0e8f160c84120393ec",
          "message": "Rename Mountpoint's fuser fork (#1295)\n\n### Overview\nWe renamed our fuser fork and reset its version info as we're staring to\npublish it to crates.io.\nIn this PR we\n* revert the submodule approach for consuming the fork's crate\n* move the code from `vendor/fuser` to `mountpoint-s3-fuser` folder\n* consume the renamed and synched FUSER Fork  from `fuser/fork`\n* update dependency\n* change `vendor/fuser` to `mountpoint-s3-fuser` in aux scripts and\ndocumentation\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior it only affects the\nproject's structure.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nIt does not require neither version change not change log entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-04T09:27:06Z",
          "tree_id": "759c407fe58982ea916eb18c2b45410396467382",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d56190ef82ce45002287f0e8f160c84120393ec"
        },
        "date": 1741087587705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.8052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1956.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.16953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1430.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.65859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.0125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 300.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3489.53564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4047.603125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1162.803515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1300.30771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1480.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1231.9021484375,
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
          "id": "ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae",
          "message": "Fix benchmark script column names for sweeped params (#1280)\n\nIf the column names are not defined in the Hydra script, they will be\nprefixed by `+`. In order to keep things simple on the analysis side,\nwe'll name the columns with placeholder values which will be replaced\nwhen running the script with multiple experiments.\n\n### Does this change impact existing behavior?\n\nIt changes output of the benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no changelog entry or version change as no change to Mountpoint\nitself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-05T11:26:43Z",
          "tree_id": "0935df6eff19d6c2a420ac938995a8c991e2b781",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae"
        },
        "date": 1741181247133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.49619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1994.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.0080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1461.005078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.79765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 441.3748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 307.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.45439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.69130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.97421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 918.81591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1122.0580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.662890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 965.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.93349609375,
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
          "id": "3246e7f6a227895c019a7fc1f5d067fd1f427788",
          "message": "Add Python lints to CI (#1301)\n\nBefore this change, there is no linting or style checks enforced on\nPython code outside of manual review.\n\nThis change introduces both using [Ruff](https://docs.astral.sh/ruff/),\na linter/checker written by the same organization owning\n[uv](https://docs.astral.sh/uv/) which we use as the package\nmanager/runner in `benchmark/` project.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint. No functional changes to the Python scripts.\nTwo new GitHub CI jobs are introduced to add checks on the Python code.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint itself nor its crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-05T14:59:17Z",
          "tree_id": "6b695c93d72bfd145ea7304a91eedfee963b9083",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3246e7f6a227895c019a7fc1f5d067fd1f427788"
        },
        "date": 1741193972120,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.67880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2017.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1451.19609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.27060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 326.51259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3542.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3979.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1223.16171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1151.8529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 860.8625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 829.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.327734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 997.2904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 965.75205078125,
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
          "id": "d4dc7569154cb2e42b4568f9975339ce9e405936",
          "message": "Remove prefix from inodes (#1303)\n\nWhen Mountpoint is configured with the `--prefix` flag, all S3 requests\ncontain the specified prefix as part of the key. Currently, the prefix\nis duplicated in each `Inode` entry in the `full_key` field. This change\nremove the unnecessary duplication by only storing the partial `key` and\nreconstructing the `full_key` by adding the prefix before performing any\nS3 request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`mountpoint-s3` changelog entry. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-06T14:53:44Z",
          "tree_id": "603a5be7a26d27aed6daaa7b3ffd896a922b70e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4dc7569154cb2e42b4568f9975339ce9e405936"
        },
        "date": 1741280089827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1235.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2005.359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 815.97001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1460.77314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 401.6154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 298.94072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3547.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3927.06015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.46162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.38330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 767.45400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1230.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1256.14462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.540234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1419.39150390625,
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
          "distinct": false,
          "id": "6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5",
          "message": "Update Cargo dependencies (#1306)\n\nUpdate Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo change in behavior.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-07T12:55:38Z",
          "tree_id": "9b393ea325557646752e984e5ad4e12ac77860fc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5"
        },
        "date": 1741359344899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.52568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.4767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1446.00947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.8396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 468.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 316.36943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3540.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3952.9310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1180.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1121.0181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 740.98974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 995.07919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.87939453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.73173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 955.70751953125,
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
          "id": "631fe4cd2a2377bbd96f0f018d182ba7c2fb632b",
          "message": "Prevent failures in benchmark actions (#1307)\n\nBenchmarks currently fail when recording a worse than 2x regression.\nHowever, failed runs are not included in the workflow summary or in the\n[performance\ncharts](https://github.com/awslabs/mountpoint-s3/blob/main/doc/BENCHMARKING.md).\nWith this change, a regression will only result in an alert, and not\nlead to an action failure.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-07T14:43:19Z",
          "tree_id": "c755dfa3d813352466348597c2232f761972a463",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631fe4cd2a2377bbd96f0f018d182ba7c2fb632b"
        },
        "date": 1741365725283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.604296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 796.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1448.76103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.8650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 484.84521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.87626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3668.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3981.4927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1224.02255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 851.6626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1105.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1119.578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1096.725390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 987.7248046875,
            "unit": "MiB/s"
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
          "id": "4e54b477a76b16a730d2a1d6e53c30f883e4daab",
          "message": "Set \"ring\" version to \"0.17.12\" (#1310)\n\nWe set `ring = \"=0.17.12\"` because the latest version ring = \"=0.17.13\"\nhas the [issue](https://github.com/briansmith/ring/issues/2463) with old\nGNU builds.\n\n`ring` is a test dependency of Mountpoint. Update was done previously in\nthis [PR](https://github.com/awslabs/mountpoint-s3/pull/1306/files) to\naddress vulnerability warnings.\nPinned version is also fine from RustSec point of view\n([link](https://rustsec.org/advisories/RUSTSEC-2025-0009.html))\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior \n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-10T10:55:01Z",
          "tree_id": "8d01828a4688e66e478e2e1df4ccf1e1a6f56461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e54b477a76b16a730d2a1d6e53c30f883e4daab"
        },
        "date": 1741611311880,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.3986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.22978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.56611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.68330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.6857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3709.758984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4053.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1165.8546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1175.50498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1392.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1338.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1041.28955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1065.0568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 924.73486328125,
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
          "distinct": false,
          "id": "a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54",
          "message": "Bump `env_logger` to latest version (#1314)\n\n`humantime`, a dependency of `env_logger`, is unmaintained. Latest\nversion of `env_logger` switches maintained `jiff` crate to provide the\nsame functionality.\n\nSee https://rustsec.org/advisories/RUSTSEC-2025-0014\nSee CI failure\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13785440971/job/38552284966#step:4:359\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T15:05:11Z",
          "tree_id": "c178adc5e809b62b2bf7eb48e40ea83cd5c3c65e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54"
        },
        "date": 1741712750787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.97822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1449.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.3185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 401.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.57529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 330.44091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3546.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3941.15068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1192.5802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1424.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 959.530078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1045.4294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1221.46552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1023.425390625,
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
          "id": "84781108333090a17d6c4c93c44b78326bf87482",
          "message": "Update CRT submodules to latest releases (#1312)\n\n## Description of change\n\nNotably, includes https://github.com/awslabs/aws-c-auth/pull/263 for\nhttps://github.com/awslabs/mountpoint-s3/issues/1203.\n\nSize:\n```bash\n$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\n   Packaging mountpoint-s3-crt-sys v0.12.1 (~/Code/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n<details>\n  <summary>CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth b513db4b..01dd06ac:\n  > Support Endpoint Override for CredentialsProviders (#263)\n  > aws_hex_encode() no longer adds null-terminator (#264)\n  > Account ID support for Crendentials Providers (#262)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 7299c6ab..298122a0:\n  > do not include crypto when doing byo_crypto (#207)\n  > Ed25519 support. (#206)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 0e7637fa..568f46b1:\n  > New Get_ENV Functions (#1141)\n  > aws_base64_compute_encoded_len() is now exact, doesn't add 1 extra for null-terminator (#1188)\n  > Make aws_byte_cursor_from_string NULL tolerant (#1187)\n  > Integration test for CPU feature detection (#1186)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 3041dabf..318f7e57:\n  > Revert win TLS 1.3 (#712)\n  > Fix Windows server-side for TLS 1.3 (#710)\n  > Tls1.3 win update (#676)\n  > Add PQ_DEFAULT enum to aws_tls_cipher_pref (#707)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 6eb8be53..1d0091c7:\n  > Adapt to aws_base64_compute_encoded_len() no longer adding 1 extra for null terminator (#497)\n  > Make public bucket optional (#495)\n  > add life cycle to s3 express to test helper (#494)\n  > Auto - Update S3 Ruleset & Partition (#493)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 138a6ad3..7bca7e96:\n  > Add IbmTpm to our CI (#2231)\n  > Revert BIO_get_mem_data back to macro (#2261)\n  > Update patch for Postgres (#2232)\n  > Add missing algorithms to benchmark (#2056)\n  > Update internal IANA values of PQ SupportedGroups (#2235)\n  > Add CMAC benchmark for AWS-LC (#2218)\n  > Added ML-DSA to break-kat framework (#2253)\n  > Update EVP_PKEY ED keygen to use an internal function that can return the result of the PWCT (#2256)\n  > Remove unused CMake options for break tests (#2249)\n  > Adding no-op X509_TRUST_cleanup for select application compatibility (#2257)\n  > Add LibRdKafka to our CI (#2225)\n  > Add public wrapper to internal bn_minimal_width function (#2245)\n  > Prepare v1.48.1 (#2252)\n  > Make BIO_get_mem_data a function again (#2246)\n  > Move OCSP ASN1 type functions to public header (#2239)\n  > Prepare for release v.1.48.0 (#2248)\n  > Migrate last batch of jobs (#2214)\n  > Enforce FIPS callback is only enabled for static builds (#2241)\n  > Update to using Clang 18 on Windows (#2240)\n  > Don't 'dllexport' Windows symbols on static build (#2238)\n  > Check pagesize is non-negative in AES-XTS test (#2237)\n  > Coverity Fix (#2236)\n  > Increase required CMake version to 3.5 (#2219)\n  > Remove BORINGSSL_FIPS_BREAK_FFC_DH (#2216)\n  > Bump version, preparing for release v1.47.0 (#2229)\n  > Add support to export ML-DSA key-pairs in seed format (#2194)\n  > Integration test for libgit2 (#2215)\n  > Fix out-of-bound (OOB) input read in AES-XTS Decrypt in AVX-512 implementation (#2227)\n  > Integration test for libssh2 (#2222)\n  > Reset DTLS1_BITMAP without resorting to memset (#2223)\n  > Use AWSLC_SOURCE_DIR and AWSLC_BINARY_DIR (#2208)\n  > Update ABI Diff Action to work correctly on push events (#2188)\n  > Add SSL_CTX_use_cert_and_key   (#2163)\n  > Add support to define a callback for FIPS test failures instead of aborting the process (#2162)\n  > Move Ed25519ph into module boundary (#2186)\n  > Add utility for querying and comparing the BORINGSSL_bcm_text_hash (#2217)\n  > Add guidance around certificate auto-chaining in TLS (#2205)\n  > SHAKE Incremental Byte Squeezes && EVP_ Tests (#2155)\n  > Migrate 3rd batch of CI jobs (#2183)\n  > Avoid duplicated definition of standalone test executable variables (#2212)\n  > Modify SSL to inherit ciphersuites from SSL_CTX at initialization (#2198)\n  > Prepare release v1.46.1 (#2210)\n  > Remove access() call from Snapsafe detection (#2197)\n  > Simplify IsFlag check logic (#2209)\n  > Update pairwise consistency test failures to support gracefully continiung (#2201)\n  > Enable RSA keygen becnhmarks by default (#2206)\n  > Fix C++98 compatibility in our header files (#2193)\n  > Add pq-tls interop test with BoringSSL (#2199)\n  > Refactor AWS_LC_FIPS_failure to always exist (#2200)\n  > Improve tool-openssl compatability for x509 and verify subcommands (#2196)\n  > Prepare release v1.46.0 (#2204)\n  > Add SPARCV9 target (#2202)\n  > Simplify OpenSSH mainline build (#2158)\n  > ML-KEM: Move FIPS-abort upon PCT failure to top-level ML-KEM API (#2195)\n  > Add runtime options to break the pairwise consistency test for Ed, ML-KEM, and ML-DSA (#2192)\n  > Update pkcs8_corpus files to include ML-DSA (#2191)\n  > Refactor TLS 1.3 cipher selection and fix SSL_get_ciphers (#2092)\n  > Add suport for asl and rol to match existing support for asr and ror (#2185)\n  > SCRUTINICE fixes (#2180)\n  > Make install_shared_and_static test more robust (#2179)\n  > MacOS-12 GH runner no longer supported (#2190)\n  > Add integration patches/CI for Ruby main and 3.3 (#2071)\n  > Move ML-DSA to fipsmodule (#2175)\n  > Expand spki fuzz corpus (#2187)\n  > Update PQREADME.md (#2151)\n  > Setup X509 CodeBuild Project for Limbo Report Generation (#2171)\n  > Add msl to ARMConstantTweak and recognise ldrsw to prevent delocator errors (#2177)\n  > Remove DEPENDS from add_custom_command as CMake made the behavior clear (#2178)\n  > Update BORINGSSL_FIPS_abort to AWS_LC_FIPS_failure which takes a message (#2182)\n  > Fix Nginx build (#2181)\n  > Add EVP API Support for ED25519ph (#2144)\n  > Update benchmark to skip chunk sizes that doesn't work with the algorithm (#2146)\n  > Add new CAST tests to break-kat.go (#2173)\n  > Migrate 2nd batch of CI jobs (#2091)\n  > Ensure enabling local symbols doesn't change the module hash (#2169)\n  > Move PQDSA to FIPSMODULE (#2166)\n  > Ensure service indicator is incremented only once, update RSA and ED25519 to ensure the state is locked (#2112)\n  > CAST and PCT for ML-DSA (#2148)\n  > Validate or define ARM HWCAP2_XXX macros (#2164)\n  > Prepare AWS-LC v1.45.0 (#2172)\n  > Wrap pointers to s2n-bignum functions - delocator fix (#2165)\n  > ML-DSA private keys from seeds (#2157)\n  > SHA3 and SHAKE - New API Design (#2098)\n  > Add support for PKCS12_set_mac (#2128)\n  > Fix policy grant on ECR resource policy (#2159)\n  > Cross library PQ interop test with s2n-tls (#2138)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 6cc9f53d..4ed4f1a6:\n  > tests: try to make s2n_mem_usage_test more useful (#5139)\n  > chore: git-blame-ignore ruff formatting (#5151)\n  > chore(bindings): change in rustup behavior (#5160)\n  > refactor: remove unused prf hmac impls (#5148)\n  > chore(ci): make the awslc fips install script version aware (#5100)\n  > fix: memory leak during STEK rotation (#5146)\n  > refactor: add alternative EVP signing method (#5141)\n  > refactor: cleanup prf header (#5144)\n  > feat(bindings): expose context on cert chain (#5132)\n  > Ruff Formatting and add to CI (#5138)\n  > chore(nix): Add aws-lc-fips 2022/4 (#5109)\n  > test(integv2): fixes to allow test_record_padding to partially run (#5099)\n  > build(deps): update rtshark requirement from 2.9.0 to 3.1.0 in /tests/pcap in the all-cargo-updates group across 1 directory (#5087)\n  > tests: use sig schemes as source of truth for valid hash+sig algs (#5129)\n  > ci: always set values for command line defines (#5126)\n  > fix: update callback return value (#5136)\n  > refactor: always use EVP hashing (#5121)\n  > ci: add check for third-party-src in disable rand override buildspec (#5137)\n  > feat: add async cert validation support (#5110)\n  > chore: remove unused well-known-endpoints.py (#5127)\n  > fix(bindings): remove mutation behind Arc (#5124)\n  > chore: binding release 0.3.12 (#5128)\n  > refactor: use EVP_MD_fetch() if available (#5116)\n  > feat: Option to disable RAND engine override (#5108)\n  > fix(bindings): make Context borrow immutable (#5071)\n  > build(deps): update rand requirement (#5125)\n  > chore: fix a typo in API comments (#5123)\n  > bindings: unpin openssl crate from a specific patch version (#5120)\n  > refactor: move \"s2n_libcrypto_is\" methods into s2n_libcrypto.h (#5117)\n  > Add new security policy (20250211) (#5111)\n  > Revert \"refactor: remove unused evp support for md5+sha1 (#5106)\" (#5118)\n  > ci: add default provider to openssl-3.0-fips (#5114)\n  > fix: don't enable custom random for openssl fips (#5093)\n  > fix: allow b64 decoding using libcrypto for sidechannel resistance (#5103)\n  > refactor: remove unused evp support for md5+sha1 (#5106)\n  > refactor: remove s2n_hmac_is_available (#5104)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.0.2 to 4.1.0 in /.github/workflows in the all-gha-updates group across 1 directory (#5107)\n  > fix(integrationv2): Skip unsupported client auth tests (#5096)\n  > chore: bindings release 0.3.11 (#5098)\n  > chore: ktls buildspec (#5083)\n  > Fixed formatting for debugging statements (#5094)\n  > feat(bindings): add external psk apis (#5061)\n  > test: add minimal openssl-3.0-fips test (#5081)\n  > fix(ci): Allow validate_start_codebuild to run on pushes to main (#5080)\n  > fix: don't use DEPENDS with add_custom_command(TARGET) (#5074)\n  > fix: error for uninit psk, check for all-zero psk (#5084)\n  > fix: calculation of session ticket age (#5001)\n  > fix: add support for `S2N_INTERN_LIBCRYPTO` with FetchContent (#5076)\n  > fix(integration): Update PQ integration test expectations (#5082)\n  > ci: fix dependabot, commit & check Cargo.toml (#5065)\n  > docs(s2n-tls-hyper): Add hyper client/server example (#5069)\n  > docs(integv2): add architecture diagram (#5072)\n  > fix(bindings): prevent temp connection free after panic (#5067)\n  > ci: Emit benchmark metrics from scheduled runs (#5064)\n  > ci: change rust-toolchain format to toml (#5070)\n  > Revert \"ci: remove openssl-1.0.2-fips builds (#4995)\" (#5060)\n  > feat(bench): impl into for base config type (#5056)\n  > refactor: cleanup CBMC proofs after #5048 (#5058)\n  > ci: Adding integ tests back to integv2 (#5054)\n  > refactor: remove openssl-1.0.2-fips 'allow md5' logic (#5048)\n  > ci: pin duvet version (#5057)\n  > build(deps): bump cross-platform-actions/action from 0.26.0 to 0.27.0 in /.github/workflows in the all-gha-updates group (#5053)\n  > chore: fix typos (#5052)\n  > chore: bump osx Openssl to latest (#5041)\n  > chore: bindings release for 0.3.10 (#5046)\n  > fix: initial config should not influence sslv2 (#4987)\n  > ci: add openssl-3.0-fips builds (#5037)\n  > Add Security Policy Deprecation API (#5034)\n  > docs: add C / s2n-tls-sys doc references to s2n-tls docs (#5012)\n  > test: add sslv2 client hello test w/ jvm (#5019)\n  > ci: add timeout for cbmc proof (#5038)\n  > fix(bindings): Specify correct minimum versions (#5028)\n```\n</details>\n\n## Does this change impact existing behavior?\n\nNothing expected.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T16:44:07Z",
          "tree_id": "dbb833fbd63455d31d5a4c92e46a203146d65f8d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84781108333090a17d6c4c93c44b78326bf87482"
        },
        "date": 1741718698481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.7150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2008.98583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1494.4416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 473.21455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.41083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 317.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3603.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4049.75888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1178.57041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1153.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 863.96162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 884.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1256.7474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1068.25322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1037.0666015625,
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
          "distinct": false,
          "id": "3da74af4a8be6895a92eb7ecbfe33603d0b59dc0",
          "message": "Add network config to all component benchmarks (#1284)\n\nThis change introduces both the CRT's target network throughput\nconfiguration and the network interface configuration to each of the\nbenchmarks for layers/components in Mountpoint's read path.\n\nThese are added primarily to support performance investigations, so we\ncan identify where there are gaps in performance and narrow them to\nimprove throughput of Mountpoint overall.\n\nThe target throughput default of 10.0 Gbps is removed on the lowest\nlevel of the benchmark, given we don't know what the default is for the\nCRT itself. It is left in place on all other layers as we default the\nvalue to 10.0 Gbps inside Mountpoint's S3 client.\n\n### Does this change impact existing behavior?\n\nNo, adds new arguments to benchmark scripts only. Even in those scripts,\nwe alias any command line arguments that change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is benchmarking changes only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-11T17:25:57Z",
          "tree_id": "239122751eb86b7e7b70e08fc5aa289c060170d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3da74af4a8be6895a92eb7ecbfe33603d0b59dc0"
        },
        "date": 1741721190984,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.92646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2019.353125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.88271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 417.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.1095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 284.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3518.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3984.91083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1198.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1398.90869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 798.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1099.10126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1029.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1121.11240234375,
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
          "distinct": false,
          "id": "d0ab7b9054d983652a8d4073eb598bf30b478f42",
          "message": "Pass `--foreground` in `mounthelper.go` to easily access Mountpoint logs (#1308)\n\nUpdate sample `mounthelper.go` for FUSE file descriptor mounting to see\nMountpoint logs in stdout to understand what's going on easily.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T19:12:02Z",
          "tree_id": "d0038230a4d52412dfb48e6823e9aa9f3f19678b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ab7b9054d983652a8d4073eb598bf30b478f42"
        },
        "date": 1741727588435,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.84384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1983.77021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.0955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.28154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.85947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3673.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4112.13046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1168.8880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1196.6244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1137.58076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1128.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1183.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.5796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 890.316015625,
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
          "id": "0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29",
          "message": "Update Cargo dependencies (#1315)\n\nPull in the latest Cargo dependencies. Notably, includes fix for `ring`\nbuild failures: https://github.com/briansmith/ring/issues/2463.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-12T10:11:59Z",
          "tree_id": "24d10ed6534a042c3685b2bac68033c5ec38f7be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29"
        },
        "date": 1741781473484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.61982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.48759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.9388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.56181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 400.2203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.077734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.6556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3678.831640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3930.33779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.6369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1160.52392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1109.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1519.52509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1070.1337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.975390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1459.09794921875,
            "unit": "MiB/s"
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
        "date": 1741795433071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.699609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.3435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 772.11201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.9828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 450.90546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 338.25673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3608.22734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4137.59404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1160.88798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1170.94765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 798.8328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 952.63525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1357.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 929.518359375,
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
          "id": "5a74b446eb106a24445b8acdacc448f00e428efc",
          "message": "Reduce memory used to store inode names (#1305)\n\nEach inode currently stores two separate strings for the key and the\nname (always contained in the key string), resulting in redundant memory\nusage. This change introduces a new `ValidKey` type which avoids the\nduplication by only storing the key and the offset of the name for O(1)\nretrieval.\n`ValidKey` (and the related type `ValidName`) also enforce validation\nfor the name and the whole key at construction time, allowing calling\ncode to rely on the strings to be well-formed.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-13T10:31:00Z",
          "tree_id": "80131daaac7c2c98987392ee3bbb6b646e4c015f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a74b446eb106a24445b8acdacc448f00e428efc"
        },
        "date": 1741869026888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.92734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1968.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.980859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1454.812109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.65283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.08271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.852734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.05048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3802.69521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4046.29404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1205.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 746.7921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1227.00126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1070.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.024609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1086.32978515625,
            "unit": "MiB/s"
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
        "date": 1741892984310,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.6548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.43203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1444.707421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.748828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 457.8375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.05400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 351.56591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3690.3064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4022.83369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1158.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1147.34443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 773.50693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1016.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.06435546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.07822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1071.18173828125,
            "unit": "MiB/s"
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
        "date": 1741973339523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1255.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1942.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1467.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.17841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.9009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 202.27451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 325.565234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3823.99169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4110.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1190.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.01630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1414.87822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.86875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1145.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1121.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1264.90458984375,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742502431892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.71171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1937.14521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.68857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.8353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.94794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.839453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3658.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4042.83154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.612890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1165.80546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 907.35244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 879.401953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1059.97685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 908.055078125,
            "unit": "MiB/s"
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
        "date": 1743175333514,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1979.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.3703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 549.62216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 209.8326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3798.05537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3899.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1181.88125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.34013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1330.39267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1078.96865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1195.74375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1049.36494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1091.219140625,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743443197389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1967.2548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 812.43798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.444140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.68740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 553.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.1427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 305.47607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3507.3880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4077.2259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1185.183203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1203.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 918.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 885.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1104.6685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 978.1919921875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}