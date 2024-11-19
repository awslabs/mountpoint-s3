window.BENCHMARK_DATA = {
  "lastUpdate": 1732016584658,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Latency Benchmark (S3 Express One Zone)": [
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
          "distinct": false,
          "id": "9d48a7207dc0feec9d2176e6e86f40350b0ddf84",
          "message": "Add GetObject support for object metadata (#1065)\n\n## Description of change\n\n<!-- Please describe your contribution here. What and why? -->\n\nAdds support for fetching user defined object metadata in GetObject\ncalls.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, for mountpoint-s3-client.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-07T15:28:42Z",
          "tree_id": "86102dca7576a85c9e8f02354ce72d9c66efead3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d48a7207dc0feec9d2176e6e86f40350b0ddf84"
        },
        "date": 1730994812207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.88,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.524,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.3470084,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.4626439,
            "unit": "milliseconds"
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
          "id": "e3540671baac9d34d280e6815f3d58778dac7eed",
          "message": "Ensure that the file system in tests is unmounted before removing the temp dir (#1116)\n\n## Description of change\n\nEnsure that the file system in integration tests is unmounted before\nremoving the temporary directory. The introduction of `TestSession` in\n#1096 inadvertently changed the order in which the temporary directory\nand the FUSE session are dropped. Previously it was hidden in the\ndeclaration order. This change makes it explicit in `drop`.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-07T17:03:39Z",
          "tree_id": "e43376caad9c90efa6772986f7d033c45ce6ea68",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3540671baac9d34d280e6815f3d58778dac7eed"
        },
        "date": 1731000441238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.908,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.937,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.4275006,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.3291495,
            "unit": "milliseconds"
          }
        ]
      },
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
        "date": 1731075429383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.878,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.827,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.3574997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8050624,
            "unit": "milliseconds"
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
        "date": 1731077264518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.911,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.472,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.889997800000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 9.9956996,
            "unit": "milliseconds"
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
        "date": 1731084832185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.855,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.409,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.2007385,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.0253188,
            "unit": "milliseconds"
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
        "date": 1731284878332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.913,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.766,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6284443,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.3917528,
            "unit": "milliseconds"
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
        "date": 1731339520754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.045,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.911,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.538,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.85649,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6652248,
            "unit": "milliseconds"
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
        "date": 1731340363039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.917,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.746,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1561306,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.347778400000001,
            "unit": "milliseconds"
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
        "date": 1731349740059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.956,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.398,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.003652800000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.118421300000001,
            "unit": "milliseconds"
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
        "date": 1731505164291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.913,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.155,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.750852400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.5473232,
            "unit": "milliseconds"
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
          "id": "1c6f819c9365e01e5ba1dda5ec585129c17ca0e6",
          "message": "Lay out files using fio in the benchmark. (#1108)\n\n## Description of change\n\nThis makes the benchmarks more self-contained, creating the state that\nthey need to run rather than relying on pre-created state (potentially\nwith different/unknown mount options and/or object properties).\n\nIt does change behaviour a little: previously the multi-thread tests\nwould use the same object whereas now each thread uses its own object --\narguably this is a more useful test but results in higher S3 usage.\n\nAlso note that the cache benchmark is unchanged in this commit, because\nit makes assumptions about the filename used by the tests.\n\nRemoving the assumption that each test will operate on a single file\nprepares us for future mixed read/write tests, and allows different fio\njobs to be run in parallel safely.\n\n## Does this change impact existing behavior?\n\nYes, see above: previously the multi-thread tests would use the same\nobject whereas now each thread uses its own object -- arguably this is a\nmore useful test but results in higher S3 usage.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>\nSigned-off-by: Andy Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-13T13:38:42Z",
          "tree_id": "b4310376c893070907103204412e34cee107007e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c6f819c9365e01e5ba1dda5ec585129c17ca0e6"
        },
        "date": 1731506502539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.911,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.393,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.4936112,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.13122,
            "unit": "milliseconds"
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
        "date": 1731507652175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.943,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.186,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2992181999999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9956902,
            "unit": "milliseconds"
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
        "date": 1731584073068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.948,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.321,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2142061000000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7315973,
            "unit": "milliseconds"
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
        "date": 1731597649130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.932,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.577,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.0642603,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.6100721,
            "unit": "milliseconds"
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
        "date": 1731600947025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.946,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.8272565,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9846992000000006,
            "unit": "milliseconds"
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
        "date": 1731694317833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.934,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.747,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2893008000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7161672,
            "unit": "milliseconds"
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
        "date": 1731933533641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.92,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.114,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2045257,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7001756,
            "unit": "milliseconds"
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
        "date": 1731934286685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.924,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.376,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.4599252,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.2150675,
            "unit": "milliseconds"
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
        "date": 1731947289827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.952,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.838,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.5077786000000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.3813462,
            "unit": "milliseconds"
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
        "date": 1732016584047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.944,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.099,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2768487,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.841713599999999,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}