window.BENCHMARK_DATA = {
  "lastUpdate": 1739208825341,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "iisaev@amazon.co.uk",
            "name": "Isaev Ilya",
            "username": "IsaevIlya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ace3093f899257dfd1b9c074b75883749595429c",
          "message": "Add source uri to headers for COPY request (#1228)\n\nThis changes is to address gap in supporting buckets with dots in the\nname for COPY requests.\nFirst encountered in s3-torch-connector\nhttps://github.com/awslabs/s3-connector-for-pytorch/issues/295\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Ilya Isaev <iisaev@amazon.com>\nSigned-off-by: Isaev Ilya <iisaev@amazon.co.uk>\nCo-authored-by: Ilya Isaev <iisaev@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-16T13:11:30Z",
          "tree_id": "e29fd95b60737addbbdc3eb51e8326e96c17fbfe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace3093f899257dfd1b9c074b75883749595429c"
        },
        "date": 1737041110152,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5212.14462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4677.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5779.94892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.06103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.9390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.6224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.42763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.17021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6022.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5195.41220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.13984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.81845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1394.93330078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.366015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.77666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1492.9404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1063.76982421875,
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
          "id": "ef20898e36247aa358417da999efeb65e2fe195f",
          "message": "Customise benchmark page (#1233)\n\nCurrently the benchmark page\n[loads](https://github.com/awslabs/mountpoint-s3/blob/gh-pages/dev/bench/index.html#L107)\nthe chart.js library from CDN, this PR changes that and adds CSP to\nensure that no other resources are loaded from external locations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-17T11:22:40Z",
          "tree_id": "73f091cf39308090ed070559383a6161c84dc60a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef20898e36247aa358417da999efeb65e2fe195f"
        },
        "date": 1737121005776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5308.730078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4728.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5999.0328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.21611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.14228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.7876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.42685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.298046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6074.911328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.934375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5251.21572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 512.7150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.2845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.749609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1477.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.159765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1646.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.1447265625,
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
          "id": "228d598ff46830e56f19be1c4d3c85069d6321b3",
          "message": "Publish client crates (#1237)\n\nUpdate changelogs for the client crates to prepare for publication. \n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-20T14:07:56Z",
          "tree_id": "3581193e2c158506008c692ca1658a1118846022",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/228d598ff46830e56f19be1c4d3c85069d6321b3"
        },
        "date": 1737390261542,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5163.2876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4670.66162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5904.7716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.6609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.7126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.1818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.592578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.0806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.87978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.9431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.26826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5923.71455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.21953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5309.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2020.2259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.508984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1530.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1298.9552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.62236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1856.47958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1043.03994140625,
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
          "id": "d199f672d84c899cf68033701469761d156196aa",
          "message": "Increment crates version numbers for next release (#1238)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-21T11:02:46Z",
          "tree_id": "2844ebefdbb9cca96321c6708e6e6066bb78132b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d199f672d84c899cf68033701469761d156196aa"
        },
        "date": 1737465394179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5236.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4752.95869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5903.9080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.3736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.3119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.03681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.39326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.45146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6183.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5206.4095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.85673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1798.81220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.7232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1557.32177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1320.52255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.86298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1739.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1019.44921875,
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
          "id": "814c5c707bd4180b1ba33d23275c4bb893bd84f2",
          "message": "Update CRT submodules to latest releases (#1242)\n\nUpdate the CRT to the latest releases.\n\nThis change also updates the exclude list, primarily due to one of the\ntest files being replaced by a compressed (but still large) file:\nhttps://github.com/aws/aws-lc/pull/2123/\n\nThis change pulls in a bug fix\n(https://github.com/awslabs/aws-c-auth/pull/259/), addressing\nhttps://github.com/awslabs/mountpoint-s3/issues/1207.\n\n### Does this change impact existing behavior?\n\nOne bug fix is included in CRT changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log entry added for the CRT fix. It is a bug fix, so patch\nversion bump to `mountpoint-s3-client` remains appropriate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-23T00:32:37Z",
          "tree_id": "b72914763f4527bc2013976b2a10445e812b765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814c5c707bd4180b1ba33d23275c4bb893bd84f2"
        },
        "date": 1737600385626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5198.58046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4664.00986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5857.67001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.67041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.05927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.28125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.70126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.40185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.70087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.39365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5987.3763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5089.77890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1855.0734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.14775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1372.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.59833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1794.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.8845703125,
            "unit": "MiB/s"
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
        "date": 1737724981871,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5239.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4663.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5812.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.98486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.3234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.85380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.1853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.301171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.93076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.6548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.74697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6057.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.63994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5150.3634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.69609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1824.25029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.93212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1664.9173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1388.334765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.13125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1897.22255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1158.47275390625,
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
          "id": "73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663",
          "message": "Add `second_account_tests` feature flag (#1243)\n\nAdd and enable the feature flag `second_account_tests` in the selected\nworkflow for [the\ntest](https://github.com/awslabs/mountpoint-s3/pull/1241/files).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T14:51:25Z",
          "tree_id": "350f93733f575a6746944729e813834e3f945f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663"
        },
        "date": 1737738458820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5202.181933593751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4691.7572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5824.7267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.20244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.30146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.82392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.2560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.88388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.76396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6016.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.34462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5267.43427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.7513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1771.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.37978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1518.09892578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1376.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.614453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1693.95576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1056.17197265625,
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
          "id": "b54596424d2aced7fd4548a9dab47f5deb04a8dd",
          "message": "Add expected bucket owner test for shared XZ cache (#1241)\n\nAdd the expected bucket owner test. The test attempts to use a bucket in\nanother AWS account as a cache and verifies that:\n\n- write to the cache is not done if the expected bucket owner check is\nenabled\n- write to the cache is done if the check is disabled\n- write to the cache is done if the cache bucket belongs to the expected\naccount\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T16:54:20Z",
          "tree_id": "7bbdc36dee746459682a6351b404c67543af1be1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b54596424d2aced7fd4548a9dab47f5deb04a8dd"
        },
        "date": 1737745549766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5231.023828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4654.98115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5893.716894531251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.04443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.62158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.40498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.23837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.4865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.59521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6221.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.18994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5219.10693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.1544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1924.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1464.45078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1316.6267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.93046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.28271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.4927734375,
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
          "id": "2089a3ba642848795ae23abdc4f129c4df41fafe",
          "message": "Add support for CRC64-NVME checksum algorithm (#1235)\n\nThis change adds support for the CRC64-NVME checksum algorithm when\nusing relevant operations in `mountpoint-s3-client` and when appending\nto existing objects through Mountpoint (using `--incremental-upload`\nmode).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T11:39:26Z",
          "tree_id": "88df3e48f0124a259d382f52d18e2942be629b5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2089a3ba642848795ae23abdc4f129c4df41fafe"
        },
        "date": 1737986117766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5208.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4656.71884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.3107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.55712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.35751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6023.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5098.48427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1806.75791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.51416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1487.70654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1259.40390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1484.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.22861328125,
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
          "id": "4924fa966b6e763165146b6268fc9fb436273e27",
          "message": "Add to cache read failure log 'falling back to S3' (#1245)\n\nWhen a cache read fails, there have been open questions in support cases\nabout if that will have then failed the whole read or asked S3. This is\na simple change to address that ambiguity.\n\n### Does this change impact existing behavior?\n\nSimple logging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, simple log content change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T12:30:35Z",
          "tree_id": "6e295730e5e461af09fd687549099e648d776247",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4924fa966b6e763165146b6268fc9fb436273e27"
        },
        "date": 1737989114671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5247.50869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4682.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5936.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 96.7876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 87.91318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.36376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.89189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.97548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.2080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5973.08828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 513.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5213.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 512.94365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1791.922265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1556.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1317.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1538.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.3759765625,
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
          "id": "b8338af6019cbe2cbecdccf2805edafefef6a766",
          "message": "Update cargo dependencies (#1234)\n\nUpdate dependencies by running `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-27T16:45:03Z",
          "tree_id": "73188134f639a747bc4599126dd3cd8d8451582b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8338af6019cbe2cbecdccf2805edafefef6a766"
        },
        "date": 1738004510425,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5241.81279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4718.751757812501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.20478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.86806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.23662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 133.079296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.796484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.02119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.1060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6096.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 526.95712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5189.246484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 523.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2003.57294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1572.50380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1374.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1919.74345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1140.30126953125,
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
          "distinct": true,
          "id": "6c576d1a0257432a38ce0e49aa472918a47d7694",
          "message": "Use custom endpoint and region setting for all fork tests (#1249)\n\nSome of our fork tests did not set the custom endpoint for the binary,\nif this is provided. This change should fix all of them to use a custom\nendpoint and to set the region, if that is configured.\n\nDoes not need a changelog entry, as it only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-30T15:34:19Z",
          "tree_id": "1514115bf5d402099ef04421d19bba2b8c343529",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c576d1a0257432a38ce0e49aa472918a47d7694"
        },
        "date": 1738259447761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5245.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4739.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5895.62958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 95.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.61474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 89.1091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.8033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.6751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.6509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.290234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6118.965625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.74521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5207.07626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.73876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.03974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.97421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1540.965625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1394.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.015234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1732.66572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.93779296875,
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
          "id": "fed028dc69c48a1859cf3a27f185b277234d58a7",
          "message": "Export missing types in mountpoint-s3-client API (#1248)\n\nThe S3 client API in `mountpoint-s3-client` used many types directly\nfrom `mountpoint-s3-crt`. This change makes sure that all types used in\nthe API are re-exported in `mountpoint-s3-client`, so that users do not\nneed to depend on `mountpoint-s3-crt` directly.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it includes an entry in the `client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-31T10:02:31Z",
          "tree_id": "73271d036ccf89bfc837e55f2209b2fc62ffc730",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fed028dc69c48a1859cf3a27f185b277234d58a7"
        },
        "date": 1738325922477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5238.221875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4670.84638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5893.1373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.23193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.325,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.2912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.88515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.727734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.95439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.82333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6104.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.11826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5202.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.59833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.96025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.37724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1572.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1265.87861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.42724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1807.878515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1013.78681640625,
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
          "id": "a7ed6b7efefc8055cb15e3474790934759eaa25c",
          "message": "Publish client crates (#1252)\n\nUpdate changelogs for the client crates to prepare for publication.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T10:09:22Z",
          "tree_id": "fa32465c46876c22bb8b704422659fe91b10aa26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7ed6b7efefc8055cb15e3474790934759eaa25c"
        },
        "date": 1738585273763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5262.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4632.63974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5895.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.0513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.97060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.1517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.49248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.5404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.08828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.05087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6071.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5101.8494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1850.93134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1510.0216796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.83369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.382421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1527.77421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.17431640625,
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
          "id": "8075c204939c66b8a5732a27bb00562243dfa8df",
          "message": "Increment crates version numbers for next release (#1253)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T11:03:12Z",
          "tree_id": "0c6673e0b1dd662d816fe5d0e593341b6ff7e10a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8075c204939c66b8a5732a27bb00562243dfa8df"
        },
        "date": 1738588506040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5267.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4672.92783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5868.412890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.13291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.73291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.03798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.1166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.4841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.81474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.1265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6163.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.70302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5094.544140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.80126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1882.29521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.76494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1646.63486328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1327.912890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1493.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1209.83564453125,
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
          "id": "2bf0385cf026539bb52e59473683d1c1c84e3653",
          "message": "Update CRT submodules to latest releases (#1255)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* S3Express CreateSession Allowlist Headers\n([awslabs/aws-c-s3#492](https://github.com/awslabs/aws-c-s3/pull/492))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5bc67797..b513db4b:\n  > A bunch of CMake fixes (#258)\n  > Add Account Id to Credentials (#260)\n  > Skip Transfer-Encoding from signing (#261)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fbbe2612..7299c6ab:\n  > Fix Findcrypto.cmake (#205)\n  > A bunch of CMake fixes (#203)\n  > Switch CI to use roles (#202)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7a6f5df2..0e7637fa:\n  > A bunch of CMake fixes (#1178)\n  > Fix heap overflow on uri parsing (#1185)\n  > (take 2) Detect when AVX is disabled via OSXSAVE (#1184)\n  > Fixup IPv6 validation logic (#1180)\n  > Detect when AVX is disabled via OSXSAVE (#1182)\n  > proof_ci.yaml must use latest upload-artifact (#1183)\n  > change PR template to ask for clearer wording (#1177)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression c6c1191e..f951ab2b:\n  > A bunch of CMake fixes (#72)\n  > Switch CI to use roles (#71)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#69)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http fc3eded2..590c7b59:\n  > A bunch of CMake fixes (#497)\n  > Fix CI for GCC-13 on Ubuntu-18  (#496)\n  > Switch CI to use roles (#494)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io fcb38c80..3041dabf:\n  > A bunch of CMake fixes (#701)\n  > Event Loop & Socket Type Multi-Support (#692)\n  > fix typo in log message (#702)\n  > Fix CI for GCC-13 on Ubuntu-18 (#700)\n  > Switch CI to use roles (#698)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 a3b401bf..6eb8be53:\n  > A bunch of CMake fixes (#480)\n  > S3Express CreateSession Allowlist Headers (#492)\n  > Auto - Update S3 Ruleset & Partition (#491)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 1ae8664f..ba6a28fa:\n  > A bunch of CMake fixes (#50)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 3e4101b9..fb8bd0b8:\n  > A bunch of CMake fixes (#101)\n  > Switch CI to use roles (#100)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc ffd6fb71..138a6ad3:\n  > Prepare AWS-LC v1.44.0 (#2153)\n  > Fix issue with ML-DSA key parsing (#2152)\n  > Add support for PKCS7_set/get_detached (#2134)\n  > Prepare Docker image for CI integration jobs (#2126)\n  > Delete OpenVPN mainline patch from our integration build (#2149)\n  > SHA3/SHAKE Init Updates via FIPS202 API layer (#2101)\n  > Support keypair calculation for PQDSA PKEY (#2145)\n  > Optimize x86/aarch64 MD5 implementation (#2137)\n  > Check for MIPSEB in target.h (#2143)\n  > Ed25519ph and Ed25519ctx Support (#2120)\n  > Support for ML-DSA public key generation from private key (#2142)\n  > Avoid mixing SSE and AVX in XTS-mode AVX512 implementation (#2140)\n  > Remove remaining support for Trusty and Fuchsia operating systems (#2136)\n  > ACVP test harness for ML-DSA (#2127)\n  > Minor symbols to work with Ruby's mainline (#2132)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-05T16:30:06Z",
          "tree_id": "19b94c8888edb337bb0a9962ee13e8ba88fd29cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2bf0385cf026539bb52e59473683d1c1c84e3653"
        },
        "date": 1738781036818,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5412.9212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4663.09775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5925.92294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.58720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.88935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.04248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.858984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.7876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6011.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.14658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5221.9171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.03642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1967.04140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1583.68671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1329.2537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.8404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1859.18447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.03984375,
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
          "id": "98fb461f25aa30be3ee8c61ecf278a651ec2733e",
          "message": "Add an Express bucket with KMS default SSE to the CI (#1256)\n\nAddition of this bucket to the CI will enable us to test [the\ncase](https://github.com/vladem/mountpoint-s3/commit/0bab01c5037c80f0c245ebd881276ad8652818c4#diff-280514ac541c555aa616d3bfa819ad7cc7a23c372e9c37d9fc6c62477e63503dR145),\nwhen KMS encryption is enforced on a cache xz bucket.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-07T10:59:07Z",
          "tree_id": "ba5d77b35187c3962fd42f9c5b57f1223102c658",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98fb461f25aa30be3ee8c61ecf278a651ec2733e"
        },
        "date": 1738933905656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5211.94345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4667.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5826.692578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.61005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.827734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.9615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 125.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.21669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.87021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6066.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.97470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5252.971875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.5875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1914.540625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.30185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1436.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1334.152734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1559.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.54736328125,
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
          "id": "157ef8d3df463d10b0e169714ead6176b0d40842",
          "message": "Update reftests with small refactor and renames for clarity (#1225)\n\nThis change makes minor updates to improve clarity in the reference\ntests.\n\n### Does this change impact existing behavior?\n\nNo, refactors reftests only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T13:02:21Z",
          "tree_id": "d3a9d3760722ea7d4a785ffce9bd5490274e5590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/157ef8d3df463d10b0e169714ead6176b0d40842"
        },
        "date": 1739200515491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5225.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4675.01982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5835.88681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.581640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.15947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.35517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.68369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.05751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.769140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.84794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5943.4095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.57177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5188.4423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.93486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.81767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1485.01162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1698.42578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1032.2619140625,
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
          "id": "812970714b42c6f28686302eef3d2c768332b955",
          "message": "Fix fs_benchmark to correctly configure backpressure (#1260)\n\nWhen running the benchmark script, it fails to run due to client errors\nwhere backpressure isn't enabled. This is due to Mountpoint's prefetcher\nrelying on this being enabled, or returning\n`BackpressurePreconditionFailed`.\n\nThis change configures the backpressure on the S3 client used by this\nbenchmark and has been tested on my own Linux machine.\n\n### Does this change impact existing behavior?\n\nFixes a benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark script change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:15:40Z",
          "tree_id": "e029f970f65ac62fc8ab00b77027452c092deb23",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/812970714b42c6f28686302eef3d2c768332b955"
        },
        "date": 1739208525373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5231.0841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4662.41103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5828.170214843751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.437890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.39599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.3275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.0271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6018.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.69462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5119.0544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 522.72841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1851.38876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1559.2306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1229.93095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1688.57294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.9568359375,
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
          "id": "8c68c1dea2530871f0e19f3bd75e6046c3790d1c",
          "message": "Update examples/benchmarks to use Clap derive syntax (#1258)\n\nSome of the benchmarks and other examples use the non-derive syntax of\nClap. Meanwhile, the main CLI for Mountpoint uses the derive syntax\nproviding much better ergonomics.\n\nThis change migrates to derive syntax for all benchmarks/examples,\nmaintaining existing behavior and aliasing to match the main CLI for\nconsistency. By using aliasing, we can avoid old command history or any\nscripts failing to run.\n\n### Does this change impact existing behavior?\n\nThis change does not change any behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:19:55Z",
          "tree_id": "8c38034fe2c2ce2cc41bcd0bdae8f5155272a453",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c68c1dea2530871f0e19f3bd75e6046c3790d1c"
        },
        "date": 1739208824612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5206.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4786.78525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5896.743359374999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.5296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.69677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.13125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.88642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.77783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6114.69052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.27939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5253.49658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 512.8748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2013.394140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1410.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.1568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.53876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1582.023828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.83291015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}