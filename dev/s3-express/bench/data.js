window.BENCHMARK_DATA = {
  "lastUpdate": 1733148726817,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
          "id": "ff191c1159e7d32b9fdeb2b0f0ca84628958c60a",
          "message": "Fix warnings for test struct variant not used (#1151)\n\nThis addresses the only build warning we have in Mountpoint's own\ncrates. The remaining build warnings come from the fuser forked crate,\nwhich we plan to address through an upstream contribution.\n\n### Does this change impact existing behavior?\n\nNo, avoids import of unused code in a test only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-21T15:05:50Z",
          "tree_id": "b622a43ba2266970019ee419fe25ee45d32db6f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff191c1159e7d32b9fdeb2b0f0ca84628958c60a"
        },
        "date": 1732209561151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5186.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4561.72685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5801.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.67744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.3107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.92958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.17138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.79306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.43583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6254.69609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.72724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5167.83974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1778.492578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.991796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1576.4302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.1787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.11552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1671.07412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1163.30654296875,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732211856942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5256.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4633.0845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5752.57900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.16806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 125.82392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6235.2724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.5873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5105.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.3119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1768.2771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.332421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1572.54384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1246.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1818.58388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.66640625,
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
          "id": "2337bf97ebcd5a016590732232c40f3ecd0728d2",
          "message": "Fix compilation error on macOS/arm (#1156)\n\nAdd a cast in the new `statfs` test: `libc::fsfilcnt_t` is not `u64` on\nall platforms.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:12:28Z",
          "tree_id": "68865d2183ede13e86586bb99ce19978c1ff8093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2337bf97ebcd5a016590732232c40f3ecd0728d2"
        },
        "date": 1732274732691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5198.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4584.737890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5775.5779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.97158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.9181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.3919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.93974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.0453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.11611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6108.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.39599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5079.60654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.65888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.88515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.1818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2009.52021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1080.69697265625,
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
          "id": "ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e",
          "message": "Fix build on macOS CI runners (#1158)\n\nIn order to work around a homebrew issue with pkg-config on github\nrunners (see https://github.com/actions/runner-images/issues/10984),\ntemporarily run a command to uninstall `pkg-config@0.29.2`.\n\n### Does this change impact existing behavior?\n\nNo. Workflow change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:24:07Z",
          "tree_id": "6aba7e44177506e395ec9a9d51a40d5c2de1f559",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e"
        },
        "date": 1732275353399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5152.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4621.9029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5782.88203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.40078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.34619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 133.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.00634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.09892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.77666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.71376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5999.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.3951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5081.4703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.38916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1775.764453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1462.07587890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1244.36103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.4595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1849.454296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.78037109375,
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
          "id": "4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b",
          "message": "Update vendored fuser to bc31e4d2 (#1159)\n\nThis change pulls in the current state of our fuser fork, recently\nrebased on the latest commits upstream. Most importantly, we want to\ntackle build warnings which should be resolved by\nhttps://github.com/cberner/fuser/pull/315.\n\n### Does this change impact existing behavior?\n\nNo, build warning fixes only.\n\n### Does this change need a changelog entry?\n\nNo, no API or behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-22T10:25:11Z",
          "tree_id": "771eef70d5bb240a786b7dfb591f6eb48d3b84e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b"
        },
        "date": 1732279194779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5183.85205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4576.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5794.3142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.062109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.1783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.86005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.32578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.3744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.39130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.5564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.74423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5099.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.4142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1861.47080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.24453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.42080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1272.3478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.346875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1779.3939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1038.36142578125,
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
          "id": "47e1d56e8899806b5c6f217cee291a8f9c57c4a9",
          "message": "Refactor MemoryLimiter to specify tracked 'area' when reserving memory (#1161)\n\nThe memory limiter currently tracks the amount of memory reserved for\nprefetching. We plan to extend this as part of supporting appends in S3\nExpress One Zone (#1160).\n\nThis change (originally authored by @monthonk) refactors the memory\nlimiter API to allow specifying the \"area\" we'd like to reserve in, for\nthe purpose of metrics for now.\n\n### Does this change impact existing behavior?\n\nNo change to existing behavior.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-22T12:59:03Z",
          "tree_id": "3ea920b54b9b8a47eefad798421f49cd86a90af3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47e1d56e8899806b5c6f217cee291a8f9c57c4a9"
        },
        "date": 1732288296430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5229.823828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4674.29384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.26298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.8833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.18994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.52236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.95048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6113.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 526.249609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5192.76552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1798.489453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1615.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1298.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.82451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1653.25078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.983203125,
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
          "id": "458ffdcd17717d7af944c2d7af8384c4f7b2d111",
          "message": "Improve support for additional checksum algorithms in mountpoint-s3-client (#1157)\n\nAllows to specify any of the supported checksum algorithms when\nuploading objects.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nYes, adding an entry to the `mountpoint-s3-client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T14:13:13Z",
          "tree_id": "87dbdf991dd2ef2df65ebcbee18f08b30c36b845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/458ffdcd17717d7af944c2d7af8384c4f7b2d111"
        },
        "date": 1732292796353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5233.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4603.679980468751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5837.01796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.2603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.57890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.94404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.79228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6095.408984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5139.46220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.6287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.053125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1424.23779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1501.902734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.5771484375,
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
          "id": "61dc41779154633ea8c6e15e07ed9e75348870bb",
          "message": "Introduce incremental upload mode and support for append (#1165)\n\nIntroduce a new option for Mountpoint to upload files incrementally and\nsupport appending to existing files. The new option can be enabled by\nsetting the `--incremental-upload` flag at mount time and is available\nwhen mounting directory buckets in S3 Express One Zone.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1160.\n\n### Does this change impact existing behavior?\n\nNo changes under default settings.\n\n### Does this change need a changelog entry?\n\nYes, added entry to the `mountpoint-s3` changelog, under \"New Features\".\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T12:39:32Z",
          "tree_id": "b1a5ead0ea75de63b7dd8fe5209eea4e57412a09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61dc41779154633ea8c6e15e07ed9e75348870bb"
        },
        "date": 1732546421160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5140.26767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4706.120410156251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5830.6736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.82587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.731640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.2564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6054.76416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.6501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5074.715625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.27216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2098.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1317.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.18095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1605.61337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.57685546875,
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
          "id": "c66546af1b31b1908d74ecd82c403142ef728aa2",
          "message": "Release v1.12.0 (#1166)\n\nBump version to 1.12.0\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo, just added a section for the release today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T13:17:49Z",
          "tree_id": "a2988234c7d2f7f37305f6eeb6d0c2cc270bbe91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c66546af1b31b1908d74ecd82c403142ef728aa2"
        },
        "date": 1732548654936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5248.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4708.7896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5821.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.3255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.92880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.52509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6063.0966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.21005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5182.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.731640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.95458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1594.53134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1224.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1577.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.5322265625,
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
          "id": "e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e",
          "message": "Remove old TODO (#1167)\n\nThe issue has already been addressed in Cancel S3 requests when dropped\n[#794](https://github.com/awslabs/mountpoint-s3/pull/794).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T17:20:29Z",
          "tree_id": "97be414ede808c088863bc696d7602794a2b26f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e"
        },
        "date": 1732563236781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5246.276953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4565.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5698.239160156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.49775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.194140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.79853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6103.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.79599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5072.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.24130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1765.07734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1690.307421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.793359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1774.713671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1047.8185546875,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732626852151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5183.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4655.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5767.8865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.6623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.51240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.2466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.586328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.9603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6026.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.9884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5094.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.932421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1963.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.56318359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.37705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.9875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.60966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1037.661328125,
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
          "id": "4ec847aa49b05c04b072540a50253139e7e6dfb1",
          "message": "Upgrade cargo-deny action, remove deprecated deny configurations (#1168)\n\nThe `cargo-deny` action we depend on release v2 in August, and with it\nmade breaking changes. Dependabot was unable to merge due to these\nbreaking changes: https://github.com/awslabs/mountpoint-s3/pull/969/\n\nThis change removes the deprecated configurations. `cargo-deny` now\nmarks all of those we configured as denied rather than allowing the\nviolations to be downgraded to warnings or allowed. This impacts us only\nfor 'unmaintained' crates which is fine, if needed we can always create\nan exception entry.\n\n### Does this change impact existing behavior?\n\nThis is a CI change only. We upgrade, removing unused and deprecated\nfields. Unmaintained crates will now fail CI.\n\n### Does this change need a changelog entry?\n\nNo, there is no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T11:16:25Z",
          "tree_id": "1d1cb34260301af398846e1b8de7766a9a4eced7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ec847aa49b05c04b072540a50253139e7e6dfb1"
        },
        "date": 1732627771951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5230.225390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4649.98837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5799.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.31337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.424609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6167.66591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5060.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.53642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2130.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.48310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1482.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1538.83095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.1513671875,
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
          "id": "13687edd9f9ff04b11ac2cb932a0ef5d3033a57b",
          "message": "Add additional Rustdoc to incremental upload module (#1169)\n\nJust adding more Rustdoc to help give pointers and get new readers up to\nspeed.\n\n### Does this change impact existing behavior?\n\nNo, documentation / style change only.\n\n### Does this change need a changelog entry?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T14:18:55Z",
          "tree_id": "af4a94cb2c47da8c87e41f2344452205339d8080",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13687edd9f9ff04b11ac2cb932a0ef5d3033a57b"
        },
        "date": 1732638758650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5199.734082031249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4642.89853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5791.9587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.66318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.191015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5959.43935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.548046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5101.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.0708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2144.99970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.31728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.31875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1227.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1539.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.1908203125,
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
          "id": "896a10bb9c6c70d6928c19d04f4bd4168b289cd8",
          "message": "Fix flaky write_with_sse_kms_key_id_ok test (#1140)\n\nFixes the flakiness of write_with_sse_kms_key_id_ok test, which was\ncaused by not properly unmounting and dropping child.\n\nThis is not a breaking change; no changelog entry required (as this just\nfixes a test).\n\n\nBefore this change, this test fails in ~10 out of 100 runs, after this\nchange it fails 0 times out of 100 runs.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-26T14:37:17Z",
          "tree_id": "0d9a1126b207277215874e303deb01a097575a2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896a10bb9c6c70d6928c19d04f4bd4168b289cd8"
        },
        "date": 1732639851125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5202.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4601.7388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5738.2798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.82626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.81484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.101171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.7810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.59091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.778125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6147.27890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.41279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5111.23798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.34287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1851.60185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1839.995703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1473.02001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.428125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1554.0974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.3236328125,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732725479638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5208.51748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4617.59853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5758.07177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.67880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.59033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.80947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.69931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5790.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.51865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5095.53037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2045.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1487.55576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.76474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1761.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1079.27353515625,
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
          "id": "b04177565a641e7c5f6be18cbefe6fcdc583732e",
          "message": "Fix Clippy warnings on Rust 1.83 (#1175)\n\nRust 1.83 has been released with new Clippy lints, and it [broke our\nCI](https://github.com/awslabs/mountpoint-s3/actions/runs/12072806349/job/33667591504?pr=1103)\nas we use stable toolchain.\n\nThis PR fixes Clippy warnings on Rust 1.83. Most fixes are done with\n`cargo clippy --fix` and manually checked.\n\n### Does this change impact existing behavior?\n\nNone expected, it just changes the code style.\n\n### Does this change need a changelog entry?\n\nNo, as there is no behavioral change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-28T21:25:18Z",
          "tree_id": "f55ad261e9c05377bf58e76e528730db2b4866bf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04177565a641e7c5f6be18cbefe6fcdc583732e"
        },
        "date": 1732837210868,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5225.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4614.46728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5854.02470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.68720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.4908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6039.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5161.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 521.08671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.03681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.80341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1805.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1307.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.40791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1837.42548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.5208984375,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732900606060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5252.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4631.53984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5787.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.0923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.48837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.54130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.20498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6109.02978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.19541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5066.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.7994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2010.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1561.71552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.8501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1659.2720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.660546875,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733139169028,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5191.487109375001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4582.145703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5767.098339843749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.77421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.183984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.91533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.0232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.69990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.8380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6310.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5137.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.00947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1495.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1306.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1746.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.642578125,
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
          "id": "59f7ba56f45c7ff6834b79853c12c2b6fcafa216",
          "message": "Update documentation for supported bucket types (#1176)\n\nUpdate the documentation to enumerate supported bucket types.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T10:04:26Z",
          "tree_id": "344cf5fb725eedee6eeb53ccca9cc4c1dd4f7f5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f7ba56f45c7ff6834b79853c12c2b6fcafa216"
        },
        "date": 1733141748139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5169.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4633.894140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5804.187695312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.6361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.08271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.7990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5903.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5096.20400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.08427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2070.5296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.08720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1550.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.347265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1174.63017578125,
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
          "id": "d14655adf91c734ef21f5dcdeeeed110e13de68a",
          "message": "Release v1.13.0 (#1178)\n\nBump version to 1.13.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T12:00:14Z",
          "tree_id": "cd1c649007a4f066ef26d85a0659a38f30fe85b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d14655adf91c734ef21f5dcdeeeed110e13de68a"
        },
        "date": 1733148726171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5118.868359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4687.14521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5849.759375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.03564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.075,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.84755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.5431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5943.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.05361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5140.3537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.7931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2095.68544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.6046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1760.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1502.379296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.12294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1846.8052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1000.7951171875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}