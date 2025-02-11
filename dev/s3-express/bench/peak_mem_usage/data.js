window.BENCHMARK_DATA = {
  "lastUpdate": 1739290647813,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "ef20898e36247aa358417da999efeb65e2fe195f",
          "message": "Customise benchmark page (#1233)\n\nCurrently the benchmark page\n[loads](https://github.com/awslabs/mountpoint-s3/blob/gh-pages/dev/bench/index.html#L107)\nthe chart.js library from CDN, this PR changes that and adds CSP to\nensure that no other resources are loaded from external locations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-17T11:22:40Z",
          "tree_id": "73f091cf39308090ed070559383a6161c84dc60a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef20898e36247aa358417da999efeb65e2fe195f"
        },
        "date": 1737121007632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12481.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26442.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38273.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40269.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37842.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12151.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11971.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9400.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.4296875,
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
          "id": "228d598ff46830e56f19be1c4d3c85069d6321b3",
          "message": "Publish client crates (#1237)\n\nUpdate changelogs for the client crates to prepare for publication. \n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-20T14:07:56Z",
          "tree_id": "3581193e2c158506008c692ca1658a1118846022",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/228d598ff46830e56f19be1c4d3c85069d6321b3"
        },
        "date": 1737390263440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17155.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23285.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34238.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 171.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33650.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37896.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12638.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10394.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13890.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 336.0078125,
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
          "id": "d199f672d84c899cf68033701469761d156196aa",
          "message": "Increment crates version numbers for next release (#1238)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-21T11:02:46Z",
          "tree_id": "2844ebefdbb9cca96321c6708e6e6066bb78132b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d199f672d84c899cf68033701469761d156196aa"
        },
        "date": 1737465395431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16261.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25971.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39634.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38422.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41136.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12980.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10493.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.30078125,
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
          "id": "814c5c707bd4180b1ba33d23275c4bb893bd84f2",
          "message": "Update CRT submodules to latest releases (#1242)\n\nUpdate the CRT to the latest releases.\n\nThis change also updates the exclude list, primarily due to one of the\ntest files being replaced by a compressed (but still large) file:\nhttps://github.com/aws/aws-lc/pull/2123/\n\nThis change pulls in a bug fix\n(https://github.com/awslabs/aws-c-auth/pull/259/), addressing\nhttps://github.com/awslabs/mountpoint-s3/issues/1207.\n\n### Does this change impact existing behavior?\n\nOne bug fix is included in CRT changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log entry added for the CRT fix. It is a bug fix, so patch\nversion bump to `mountpoint-s3-client` remains appropriate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-23T00:32:37Z",
          "tree_id": "b72914763f4527bc2013976b2a10445e812b765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814c5c707bd4180b1ba33d23275c4bb893bd84f2"
        },
        "date": 1737600387260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15452.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23947.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43041.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 412.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 241.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33289.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33684.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13347.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13339.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10082.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.2109375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66806474+ericjheinz@users.noreply.github.com",
            "name": "ericjheinz",
            "username": "ericjheinz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76c36003006246811a584f648d902432bb70d7df",
          "message": "Update S3ClientConfig to support configurable EventLoop thread count (#1240)\n\nFor our use case, we run many mountpoint-s3 clients on a single machine\nand want to restrict the number of threads each client uses in order to\nreduce heap fragmentation and CPU contention.\n\n### Does this change impact existing behavior?\n\nNo, this only allows for overriding the default value.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there are no breaking changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Eric Heinz <eheinz@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Eric Heinz <eheinz@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-24T11:09:35Z",
          "tree_id": "9aff381d9cb70d94a6fe122de28606f85d5aee64",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/76c36003006246811a584f648d902432bb70d7df"
        },
        "date": 1737724983245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26438.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34855.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39660.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34416.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10268.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13434.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14717.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 425.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.046875,
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
          "id": "73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663",
          "message": "Add `second_account_tests` feature flag (#1243)\n\nAdd and enable the feature flag `second_account_tests` in the selected\nworkflow for [the\ntest](https://github.com/awslabs/mountpoint-s3/pull/1241/files).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T14:51:25Z",
          "tree_id": "350f93733f575a6746944729e813834e3f945f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663"
        },
        "date": 1737738460076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13955.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26949.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41187.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 161.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 227.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41785.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38662.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11799.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13898.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14206,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.03125,
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
          "id": "b54596424d2aced7fd4548a9dab47f5deb04a8dd",
          "message": "Add expected bucket owner test for shared XZ cache (#1241)\n\nAdd the expected bucket owner test. The test attempts to use a bucket in\nanother AWS account as a cache and verifies that:\n\n- write to the cache is not done if the expected bucket owner check is\nenabled\n- write to the cache is done if the check is disabled\n- write to the cache is done if the cache bucket belongs to the expected\naccount\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T16:54:20Z",
          "tree_id": "7bbdc36dee746459682a6351b404c67543af1be1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b54596424d2aced7fd4548a9dab47f5deb04a8dd"
        },
        "date": 1737745551026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16563.23828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28585.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39679.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 169.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39787.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33458.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12036.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12020.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10362.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.28125,
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
          "id": "2089a3ba642848795ae23abdc4f129c4df41fafe",
          "message": "Add support for CRC64-NVME checksum algorithm (#1235)\n\nThis change adds support for the CRC64-NVME checksum algorithm when\nusing relevant operations in `mountpoint-s3-client` and when appending\nto existing objects through Mountpoint (using `--incremental-upload`\nmode).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T11:39:26Z",
          "tree_id": "88df3e48f0124a259d382f52d18e2942be629b5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2089a3ba642848795ae23abdc4f129c4df41fafe"
        },
        "date": 1737986119147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15877.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28177.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40050.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 227.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39451.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33738.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13714.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12582.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10405.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.6796875,
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
          "id": "4924fa966b6e763165146b6268fc9fb436273e27",
          "message": "Add to cache read failure log 'falling back to S3' (#1245)\n\nWhen a cache read fails, there have been open questions in support cases\nabout if that will have then failed the whole read or asked S3. This is\na simple change to address that ambiguity.\n\n### Does this change impact existing behavior?\n\nSimple logging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, simple log content change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T12:30:35Z",
          "tree_id": "6e295730e5e461af09fd687549099e648d776247",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4924fa966b6e763165146b6268fc9fb436273e27"
        },
        "date": 1737989116477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16738.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28019.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39046.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 153.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 402.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35627.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40320.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12377.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11209.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12182.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 353.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.01953125,
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
      }
    ]
  }
}