window.BENCHMARK_DATA = {
  "lastUpdate": 1732106200992,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "chagem@hagemeier.ch",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb9a4183a3fe35c34effd2adf7a3232d2717092",
          "message": "Add debug print for inode number in mknod (#1111)\n\n## Description of change\n\n`mknod` now prints the newly created inode number. This can help with\ntracing the lifetime of an inode between FUSE requests.\n\n## Does this change impact existing behavior?\n\nNo, small debug log addition only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: Christian Hagemeier <>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-08T13:52:45Z",
          "tree_id": "a7f83fab59b361993e6e7e7cce0adc4510a6daa8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bfb9a4183a3fe35c34effd2adf7a3232d2717092"
        },
        "date": 1731081037825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "c4ec299af6f2dd4076f5942fec086fad49143c8a",
          "message": "Fix ANSI escape codes being included in log files on macOS (#1115)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nBefore this change, log files written on macOS would include ANSI escape\ncodes (#1050). It's unclear why this is not reproducible on Linux.\n\nThis change reorders the logging layers such that the console layer\n(with ANSI) is evaluated last, and so the mutations to add ANSI escapes\nis not applied when writing log files. This issue appears related:\nhttps://github.com/tokio-rs/tracing/issues/658.\n\nRelevant issues: #1050 \n\n## Does this change impact existing behavior?\n\nThis fixes log files written on macOS (which is an unsupported\nplatform).\n\n## Does this change need a changelog entry in any of the crates?\n\nThis is a minor bug fix on an unsupported platform, so no changelog\nentry needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-08T14:23:37Z",
          "tree_id": "40f87fdb33e428eb9082b185ca050405fbcffb59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c4ec299af6f2dd4076f5942fec086fad49143c8a"
        },
        "date": 1731082747903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d0188555c07e3d75b0b7495d03a2520713d7bf1",
          "message": "Use separate endpoint URLs for benchmark CI (#1112)\n\n## Description of change\n\nThis allows integration test workflows and benchmark workflows to run\nagainst different endpoint URLs.\n\n## Does this change impact existing behavior?\n\nNo, only CI change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-08T16:24:29Z",
          "tree_id": "0add5a30ae8c656eb5143033dc7f888143a432b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d0188555c07e3d75b0b7495d03a2520713d7bf1"
        },
        "date": 1731090428988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "b644b7e58d06c37427fb9cb5ea5453614806f5e3",
          "message": "Refactor `ObjectClient.get_object` to use an `GetObjectParams` parameter (#1121)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactor `ObjectClient.get_object` to use an `&GetObjectParams`\nparameter.\n\nMigrates the two existing parameters, `range` and `if_match` to\n`GetObjectParams` and changes all call sites.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes. Breaking change in mountpoint-s3-client. \n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T00:02:13Z",
          "tree_id": "475a0f75b91d3155a61eb67dd3c7160b92e275d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b644b7e58d06c37427fb9cb5ea5453614806f5e3"
        },
        "date": 1731290373946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "ef011228e62945645a312012d5e39392f2d75e70",
          "message": "Enable metric emission in benchmark runs (#1120)\n\n## Description of change\n\nWe opted to disable debug logging in #1104 as this may impact\nperformance, however it was not known that the memory usage monitoring\nwas dependent on metrics being emitted implicitly due to `--debug`. This\nchange restores metrics in logs to fix the peak memory usage\nbenchmarking.\n\nRelevant issues: #1104\n\n## Does this change impact existing behavior?\n\nNo change to Mountpoint.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-11T15:14:53Z",
          "tree_id": "97c865f3407f6be22c87a7bb112b0d8618b93eba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef011228e62945645a312012d5e39392f2d75e70"
        },
        "date": 1731345096712,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 118.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 115.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 391.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36652.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44114.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 498.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11898.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9754.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13480.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 604.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 424.2421875,
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
          "id": "e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0",
          "message": "Add support for getting object checksums in GetObject (#1123)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\n- Adds new method `get_object_checksum` to `get_object` to retrieve the\nwhole object checksum.\n- Adds new parameter `checksum_mode` to `GetObjectParams` to configure\nif we want to request checksums from S3.\n- If checksums aren't requested, `get_object_checksum` returns an error.\n- Refactor `S3CrtClient` to store a cell of the object headers rather\nthan metadata.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: <!-- Please add issue numbers. -->\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T15:27:43Z",
          "tree_id": "94e98dac006159667d8dc0d4b62f44ca8c001033",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0"
        },
        "date": 1731345922138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 120.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 119.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 391.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35651.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 410.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 50719.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 528.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11258.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11146.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11912.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 716.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 459.91015625,
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
          "id": "822712cf8d11227e1572ce4196ab1cc858f8d90f",
          "message": "Avoid joining the fuse background thread when dropping test sessions (#1124)\n\n## Description of change\n\nThe change #1116 fixed the order in which the file system was unmounted\nand the temporary mount directory was removed. In order to unmount, we\nadded a call to `join()` on the FUSE session, which also waits for its\nbackground thread to join and can occasionally fail with a\n`ECONNABORTED` (ConnectionAborted, \"Software caused connection abort\")\nerror.\nThis change addresses the issue by only dropping the FUSE session,\nwithout waiting for the thread to terminate.\n\n## Does this change impact existing behavior?\n\nNo. Only affects tests.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo. Only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-11T18:06:23Z",
          "tree_id": "fd1c0cef4022ce67bed2f7da65541170a65d7fa3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/822712cf8d11227e1572ce4196ab1cc858f8d90f"
        },
        "date": 1731355364095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 119.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 109.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 388.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39396.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43161.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12794.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12429.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13935.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 654.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.74609375,
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
          "id": "f8ca2ba4eb6cbc2009ca318ab4342b95ab7c3f9e",
          "message": "Update vendored fuser to daad5673 (#1129)\n\n## Description of change\n\nThis change updates the vendored fuser version. The changes include an\namended README to include information on how to maintain the fork, as\nwell as rebasing our patches on top of the upstream fuser repository.\n\nThe main changes we're interested in here is to eliminate many of the\nbuild warnings that are currently showing up in pull requests.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo change in behavior of any crate.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo change log needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-13T13:15:53Z",
          "tree_id": "63be6bd94b20cf8230dfb36fad6ef365abbc7e87",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f8ca2ba4eb6cbc2009ca318ab4342b95ab7c3f9e"
        },
        "date": 1731510772000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 106.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 116,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 394.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40290.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 46510.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 515.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11145.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9943.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13247.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 778.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.60546875,
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
          "id": "9206ed4847bbf2574dc7650483e2126b89a14d10",
          "message": "Bypass the shared cache for large objects (#1117)\n\n## Description of change\n\nThis change makes `get_block` and `put_block` for objects larger than\n`1MiB` be a no-op in the shared cache.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it is under the feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, in the following PRs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-13T13:56:48Z",
          "tree_id": "2954eb36742819cb93403083daa8fbb8e3507b28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9206ed4847bbf2574dc7650483e2126b89a14d10"
        },
        "date": 1731513295601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 78.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 293.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26569.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 373.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 28182.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7798.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8504.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9715.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 564.5,
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
          "id": "f14667fc65ff4c5b2ee2f5cf0e8eab8c2d1535e6",
          "message": "Add mixed read/write tests to the benchmark. (#1130)\n\n## Description of change\n\nAs we make changes that might impact mixed read/write workloads it is\nuseful to have some examples of these in our benchmarks. This change\nadds a 20/80, 50/50, and 80/20 read/write workload to the benchmarks.\n\nThe results reporting is updated to support multiple job types in a\nsingle benchmark. This works by continuing to average over iterations as\nbefore, but averages each job separately then sums the averages to\nproduce the final throughput number for that benchmark (i.e. (avg(read\nthroughput) + avg(write throughput)) for the mixed benchmarks).\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-14T11:10:48Z",
          "tree_id": "18cfee4dd5ad4708f3e6b72b4c2fd07527cfde44",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f14667fc65ff4c5b2ee2f5cf0e8eab8c2d1535e6"
        },
        "date": 1731590693846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10269.22265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 15195.23828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28913.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 77.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 347.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29097.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 28743.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7683.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9486.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8596.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 893.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.8671875,
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
          "id": "4af19445a4e2d2d9ea134751aef92c4cf53dfd4d",
          "message": "Add an integration test for the shared cache (#1071)\n\n## Description of change\n\nAdd an integration test for the shared cache. It uses\n`S3_EXPRESS_ONE_ZONE_BUCKET_NAME` as a cache bucket and `S3_BUCKET_NAME`\nas a regular bucket.\n\nRelevant issues: No\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-14T14:56:59Z",
          "tree_id": "3134e0e3fd4484916e9f9549e9e43f3731a1ba37",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4af19445a4e2d2d9ea134751aef92c4cf53dfd4d"
        },
        "date": 1731604280608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11001.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 14905.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 27515.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 348.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26228.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 28722.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8324.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 244.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7377.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8423.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 894.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.20703125,
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
          "id": "625d7dbb9b9b0ed4f072cfad48ef859522f3075b",
          "message": "Verify object metadata in Express cache (#1125)\n\n## Description of change\n\n- Verify S3 Express cache objects have valid object metadata which\nmatches the keys\n- Verifies the CRC32C of the object content post-download from S3\n  - If checksum is missing, return `BlockChecksumMissing`.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nChanges S3 Express cache to require object metadata and CRC32C to be\npresent. Old caches will not be used.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-14T15:49:49Z",
          "tree_id": "ed8468dd3fab76e53de1d182aebd2d30d80d48c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625d7dbb9b9b0ed4f072cfad48ef859522f3075b"
        },
        "date": 1731607489574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9945.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16598.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 27913.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 76.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 349.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 298.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26263.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 372.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32057.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8582.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9415.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9555.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 806.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 514.37890625,
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
          "id": "3738860dcdd8be73b222fdebd21677f7ad4070f9",
          "message": "Add a test for an invalid cache block (#1139)\n\n## Description of change\n\nJust adds a test that if a block in the shared cache is invalid, it is\nnot served to the client application.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-15T17:20:55Z",
          "tree_id": "17db2c6fd7dd7ce63582c3b0141ba7b6e4e29323",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3738860dcdd8be73b222fdebd21677f7ad4070f9"
        },
        "date": 1731700958586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10282.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16534.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32268.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 296.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29141.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 372.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32338.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8684.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 249.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9997.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8085.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 856.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 547.24609375,
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
          "distinct": false,
          "id": "7198bc8097aac0496ddcaf926622db0da447c972",
          "message": "Set max_background FUSE config to 64 by default. (#1137)\n\nThis improves sequential read performance on instances with multiple\n100Gbps network interfaces. It controls the number of requests that are\nallowed in the pending queue that are classified as background, which\nincludes at least some read requests. It also indirectly controls the\n\"congestion threshold\", which is set by default to 75% of the max\nbackground value. When the congestion threshold is reached, FUSE will\nstop sending the asynchronous part of readaheads from paged IO to the\nfilesystem.\n\nTesting on 2 NIC instances shows up to approximately 29% speed-up on a\nsequential read workload with 32 open files, from 76.74 to 99Gbps, for\npaged IO. Although we don't have enough instrumentation to fully\nunderstand the change in queueing behaviour in FUSE, we think it is\nlikely because we're able to serve sufficient readahead requests for the\nobject before hitting the congestion threshold when the limit is higher,\nthus allowing mountpoint to start prefetching later parts of the object\nsooner.\n\nThe value of 64 was picked by experimentation with values between 16\n(the default) and 256, as well as specifically setting the congestion\nthreshold. Increasing the value generally led to better performance up\nto 64, after which performance doesn't improve further (at least not\nsignificantly). We wanted to choose the lowest value that seemed\nreasonable for the desired performance improvement, to reduce the chance\nof affecting a workload that wasn't being tested.\n\nAs well as the standard regression tests, the change was tested on trn1\ninstances with a 256KB sequential read workload reading 32 files in\nparallel over 1, 2, and 4 network interfaces. It does not regress our\nstandard benchmarks nor performance on this test with 1 NIC in use.\n\nThis change also temporarily introduces two environment variables to\ntune the behaviour, so we can isolate this change if a particular\nworkload is found to regress.\n\n## Does this change impact existing behavior?\n\nThis improves performance on large instance types. There's a risk of\nregression for workloads we don't test.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, will submit a separate PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>\nSigned-off-by: Andy Peace <andrew.peace@gmail.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-11-18T12:15:43Z",
          "tree_id": "a0af1991c8a30d4b830d6a692a4e716d87376306",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7198bc8097aac0496ddcaf926622db0da447c972"
        },
        "date": 1731940198010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11910.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 15713.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32278.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29444.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31476.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7876.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9407.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9549.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 662.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.43359375,
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
          "id": "1e30bff37aa35be2e54e06a0bc92f7a684414bc8",
          "message": "Update user-agent on express cache usage (#1122)\n\n## Description of change\n\nAdd `mp-cache-express` to the user agent when caching in express is\nenabled.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-18T12:27:52Z",
          "tree_id": "aac263066f2f280609c1413e05ad01a64b2ec469",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e30bff37aa35be2e54e06a0bc92f7a684414bc8"
        },
        "date": 1731940894904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9851.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18287.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31458.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30314.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33944.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9479.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9969.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10594.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 696.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.76171875,
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
          "id": "378a56c2efbdbc423d745bbcf7cf3018d770dc7c",
          "message": "Validate that shared cache bucket is usable (#1141)\n\n## Description of change\n\n- Validates the shared cache bucket is write-able\n- Validates the shared cache bucket supports the `EXPRESS_ONEZONE`\nstorage class\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, the shared cache bucket is now validated that it supports the\n`EXPRESS_ONEZONE` storage class\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-18T16:04:15Z",
          "tree_id": "f3f7e68465c924b7f18f84e29f68d921bd948dd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/378a56c2efbdbc423d745bbcf7cf3018d770dc7c"
        },
        "date": 1731953943205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9750.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16373.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 29567.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 80.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28355.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31014.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9634.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8226.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9665.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 866.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 507.5,
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
          "id": "02f8dda257177db60771033445afbc31bd6768af",
          "message": "Retrieve server-side encryption setting on HeadObject (#1143)\n\n## Description of change\n\nAdd two new fields to `HeadObjectResult`: \n* `sse_type`: The server-side encryption algorithm used to store the\nobject (header: \"x-amz-server-side-encryption\"),\n* `sse_kms_key_id`: The ID of the KMS key was used for object\nencryption, if present (header:\n\"x-amz-server-side-encryption-aws-kms-key-id\").\n\n## Does this change impact existing behavior?\n\nNo. Only adds fields to a non-exhaustive type.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes: `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-19T11:16:56Z",
          "tree_id": "1288023535a01babbf21054209f701e3eebaf39c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02f8dda257177db60771033445afbc31bd6768af"
        },
        "date": 1732023216672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9382.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20054.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32352.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 77.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 80.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 296.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 298.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27776.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30424.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7285.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7497.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10003.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 250.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 824.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.5234375,
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
          "id": "b61f4b966f616ed3d231857403946149520aad2a",
          "message": "Express cache cleanup (#1142)\n\n## Description of change\n\nRemove unneeded todo\n\nRelevant issues:\nhttps://github.com/awslabs/mountpoint-s3/pull/1141#discussion_r1846841259\n\n## Does this change impact existing behavior?\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-19T16:53:40Z",
          "tree_id": "d8291a54b3efb561d89bdee136233e17a36748de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b61f4b966f616ed3d231857403946149520aad2a"
        },
        "date": 1732043281527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10889.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16343.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28953.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27698.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29512.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7637.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8928.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9982.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 685.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 513.6015625,
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
          "id": "84c3e5467d252830d5297d1d6b67f5915e32933b",
          "message": "Rename the shared cache CLI flag (#1144)\n\n## Description of change\n\nRename the CLI flag for the shared cache. New help message:\n\n```bash\n--cache-xz <BUCKET>\n    Enable caching of object content to the specified bucket on S3 Express One Zone (same region only)\n```\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it's behind a feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:05:27Z",
          "tree_id": "b7946c1f0149cfed9838ace088cbec96f2ee3b92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c3e5467d252830d5297d1d6b67f5915e32933b"
        },
        "date": 1732105253278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9588.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18875.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 29305.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29208.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29268.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7579.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10080.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9951.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 708.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 468.71484375,
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
          "id": "87ce33f3376e98e91fea351187bc0c9048ea543c",
          "message": "Improve the corrupted block test (#1147)\n\n## Description of change\n\nJust test improvements. Addresses comments from the\nhttps://github.com/awslabs/mountpoint-s3/pull/1139.\n\nRelevant issues: N/A.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:22:48Z",
          "tree_id": "46e17a13aaedf014b55589a894220ff007d27565",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/87ce33f3376e98e91fea351187bc0c9048ea543c"
        },
        "date": 1732106200954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9577.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19809.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32560.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32498.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33388.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9339.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9279.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10495.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.8515625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}