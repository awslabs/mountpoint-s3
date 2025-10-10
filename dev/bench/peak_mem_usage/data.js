window.BENCHMARK_DATA = {
  "lastUpdate": 1760057439164,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9374ac123f8ed6811be4c9eca1ca72c7d62c3848",
          "message": "Remove locking assertion from unlink (#1596)\n\nDuring unlink we currently have an assumption related to locking and we\nassert it. However, we have seen some cases where the assumption does\nnot hold. The assumption is that, when removing the child node from the\nparent node, the VFS will hold a lock on the parent and child.\n\nThis change removes the assumption and its assertion. Instead, we\ninvalidate the cache in the case where concurrent operations within the\nsame Mountpoint process were made to to the file and its parent.\n\nFor testing, we created scenarios to trigger the existing assertions in\nthe current implementation of unlink:\n1. To trigger the `expect()` statement that follows the removal of the\n`inode`:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n- Workload: create a new file, remove it and (in a separate terminal)\nexecuted a `stat` on the file\n- The `stat` only completes after the deletion completes. The deletion\nthread panics holding a lock and poisons the other threads. Mountpoint\nunmounts.\n2. To trigger the `assert()` statement that handles `inode` number\nmismatch:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n     - We added a 45s sleep statement in forget (`fs.rs`)\n- Workload: create a new file, remove it, created a file with the same\nname using `aws cli` and (in a separate terminal) a `stat` on the file\n- Mountpoint behaviour is the same as the first case except the message\nis from the assert.\n\nWith the changes in this PR, Mountpoint does not unmount and the `stat`\nresults are as expected (non existent in the first case and the most\nrecent file in the second case).\n\n### Does this change impact existing behavior?\n\nNo, this is a fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, entires were added to the `CHANGELOG.md` files and the version of\nthe `mountpoint-s3-fs` crate was bumped to `0.7.1`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-10T13:58:27Z",
          "tree_id": "7fafe0ce4428c5c53d1e0c4bac7fe4fb6b0c63ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9374ac123f8ed6811be4c9eca1ca72c7d62c3848"
        },
        "date": 1757520853485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3533.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4972.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8505.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 46.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8176.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.4296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8862a35451dc573c7f123ceb9d53e72d57553e7d",
          "message": "Change ioctl log level from warn to debug (#1598)\n\nReduces log noise in production environments by changing ioctl function\nlogging from WARN to DEBUG level. This change improves the\nsignal-to-noise ratio in logs without affecting functionality.\n\nDoes this change impact existing behavior? \nNo functional impact - only reduces log noise by moving expected ioctl\nfailures from WARN to DEBUG level.\n\nDoes this change need a changelog entry? Does it require a version\nchange?\nAdded entry to CHANGELOG.md. No version change required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-10T16:32:07Z",
          "tree_id": "8c9045f859b1a6ea3e48303f61230942bc8cabd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8862a35451dc573c7f123ceb9d53e72d57553e7d"
        },
        "date": 1757529931113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3634.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4925.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8530.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8209.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8105.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 666.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 493.38671875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e65af8a82499b8ff23ebead21e3003ba770bfbf",
          "message": "Release v1.20.0 (#1604)\n\nUpdate `CHANGELOG.md` files of the `fs` and `client` crates to prepare\nfor release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-15T10:14:45Z",
          "tree_id": "b122f3dbc19ae8f068289386a2cf03f5123b833d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e65af8a82499b8ff23ebead21e3003ba770bfbf"
        },
        "date": 1757939537050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3500.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4813.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8509.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8213.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8144.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 807.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.484375,
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
          "id": "d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed",
          "message": "Benchmark sweeper fix (#1608)\n\nUpdate benchmarks to load sweeper parameters only from benchmark\nspecific configuration files\n\nUntil this change, we load configuration parameters from all benchmark\nconfiguration files\nand pick only the relevant benchmark parameters using regex matching.\nWhile this works\nfor most cases, it doesn't work for mountpoint parameters that don't\nhave benchmark-type\nsubstring and those parameters are picked up by all benchmarks. This\nchange will restrict\nsweeping through config parameters defined in the benchmark specific\nfile.\n\nThis also includes a change to replace the unused fuse threads\nconfiguration with the correct parameter that gets used in benchmarks.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only updates benchmarks. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T09:57:35Z",
          "tree_id": "65532a76286833542c0cc4e5e1070026199c0b49",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed"
        },
        "date": 1758283969489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3537.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4883.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8470.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8260.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8191.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 731.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 477.6484375,
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
          "id": "d598453968b10b55c01371f0f594d586fcd8be43",
          "message": "Remove benchmark config parser (#1609)\n\nAs we shifted to using benchmark specific sweeper files, config.yaml\nwill define the defaults for all benchmark parameters and should not\nhave any overrides. So we don't need an additional parser to ensure\nbenchmarks are defaulting to appropriate values.\n\nAfter this change, all the default values except for\nnetwork.maximum_throughput_gbps. The config parser was defaulting to 100\nbut now picks the default resolved by Mountpoint.\n\n### Does this change impact existing behavior?\n\nNo benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T12:13:45Z",
          "tree_id": "9bd334a5122cf64ce83e0cef3bcef8f8f2149c25",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d598453968b10b55c01371f0f594d586fcd8be43"
        },
        "date": 1758292087285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3520.79296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4858.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8540.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 23.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8192.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8263.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 605.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.4453125,
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
          "id": "e6a938add8d3e752bffc1f188c533cfde7a69917",
          "message": "Bump actions/setup-python from 5 to 6 (#1594)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Breaking Changes</h3>\n<ul>\n<li>Upgrade to node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1164\">actions/setup-python#1164</a></li>\n</ul>\n<p>Make sure your runner is on version v2.327.1 or later to ensure\ncompatibility with this release. <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">See\nRelease Notes</a></p>\n<h3>Enhancements:</h3>\n<ul>\n<li>Add support for <code>pip-version</code> by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1129\">actions/setup-python#1129</a></li>\n<li>Enhance reading from .python-version by <a\nhref=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li>Add version parsing from Pipfile by <a\nhref=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Clarify pythonLocation behaviour for PyPy and GraalPy in environment\nvariables by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1183\">actions/setup-python#1183</a></li>\n<li>Change missing cache directory error to warning by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1182\">actions/setup-python#1182</a></li>\n<li>Add Architecture-Specific PATH Management for Python with --user\nFlag on Windows by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1122\">actions/setup-python#1122</a></li>\n<li>Include python version in PyPy python-version output by <a\nhref=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li>Update docs: clarification on pip authentication with setup-python\nby <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1156\">actions/setup-python#1156</a></li>\n</ul>\n<h3>Dependency updates:</h3>\n<ul>\n<li>Upgrade idna from 2.9 to 3.7 in /<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/843\">actions/setup-python#843</a></li>\n<li>Upgrade form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\nby <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1163\">actions/setup-python#1163</a></li>\n<li>Upgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIndex.download by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1165\">actions/setup-python#1165</a></li>\n<li>Upgrade actions/checkout from 4 to 5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1181\">actions/setup-python#1181</a></li>\n<li>Upgrade <code>@​actions/tool-cache</code> from 2.0.1 to 2.0.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1095\">actions/setup-python#1095</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li><a href=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li><a href=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6.0.0\">https://github.com/actions/setup-python/compare/v5...v6.0.0</a></p>\n<h2>v5.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Workflow updates related to Ubuntu 20.04 by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1065\">actions/setup-python#1065</a></li>\n<li>Fix for Candidate Not Iterable Error by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1082\">actions/setup-python#1082</a></li>\n<li>Upgrade semver and <code>@​types/semver</code> by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1091\">actions/setup-python#1091</a></li>\n<li>Upgrade prettier from 2.8.8 to 3.5.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1046\">actions/setup-python#1046</a></li>\n<li>Upgrade ts-jest from 29.1.2 to 29.3.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1081\">actions/setup-python#1081</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v5.6.0\">https://github.com/actions/setup-python/compare/v5...v5.6.0</a></p>\n<h2>v5.5.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements:</h3>\n<ul>\n<li>Support free threaded Python versions like '3.13t' by <a\nhref=\"https://github.com/colesbury\"><code>@​colesbury</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/973\">actions/setup-python#973</a></li>\n<li>Enhance Workflows: Include ubuntu-arm runners, Add e2e Testing for\nfree threaded and Upgrade <code>@​action/cache</code> from 4.0.0 to\n4.0.3 by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1056\">actions/setup-python#1056</a></li>\n<li>Add support for .tool-versions file in setup-python by <a\nhref=\"https://github.com/mahabaleshwars\"><code>@​mahabaleshwars</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1043\">actions/setup-python#1043</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Fix architecture for pypy on Linux ARM64 by <a\nhref=\"https://github.com/mayeut\"><code>@​mayeut</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1011\">actions/setup-python#1011</a>\nThis update maps arm64 to aarch64 for Linux ARM64 PyPy\ninstallations.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/e797f83bcb11b83ae66e0230d6156d7c80228e7c\"><code>e797f83</code></a>\nUpgrade to node 24 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1164\">#1164</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3d1e2d2ca0a067f27da6fec484fce7f5256def85\"><code>3d1e2d2</code></a>\nRevert &quot;Enhance cache-dependency-path handling to support files\noutside the w...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/65b071217a8539818fdb8b54561bcbae40380a54\"><code>65b0712</code></a>\nClarify pythonLocation behavior for PyPy and GraalPy in environment\nvariables...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5b668cf7652160527499ee14ceaff4be9306cb88\"><code>5b668cf</code></a>\nBump actions/checkout from 4 to 5 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1181\">#1181</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f62a0e252fe7114e86949abfa6e1e89f85bb38c2\"><code>f62a0e2</code></a>\nChange missing cache directory error to warning (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1182\">#1182</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/9322b3ca74000aeb2c01eb777b646334015ddd72\"><code>9322b3c</code></a>\nUpgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIn...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/fbeb884f69f0ac1c0257302f62aa524c2824b649\"><code>fbeb884</code></a>\nBump form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1163\">#1163</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/03bb6152f4f691b9d64579a1bd791904a083c452\"><code>03bb615</code></a>\nBump idna from 2.9 to 3.7 in /<strong>tests</strong>/data (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/843\">#843</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/36da51d563b70a972897150555bb025096d65565\"><code>36da51d</code></a>\nAdd version parsing from Pipfile (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1067\">#1067</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3c6f142cc0036d53007e92fa1e327564a4cfb7aa\"><code>3c6f142</code></a>\nupdate documentation (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1156\">#1156</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/setup-python&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:37:10Z",
          "tree_id": "7a3a898a2b8ef7d9a15cf008088ab3167f21fd6d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a938add8d3e752bffc1f188c533cfde7a69917"
        },
        "date": 1758639218826,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3552.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4908.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8466.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8235.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8324.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 822.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 552.4375,
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
          "id": "be4c8de456427069591f7fa48bf312063a475956",
          "message": "Bump aws-actions/configure-aws-credentials from 4 to 5 (#1595)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.1...v5.0.0\">5.0.0</a>\n(2025-09-03)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\">8c45f6b</a>)</li>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/74b3e27aa80db064b5bb8c04b22fc607e817acf7\">74b3e27</a>)</li>\n<li>support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\">c4be498</a>)</li>\n</ul>\n<h2>v4.3.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2>v4.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<p>NOTE: This release tag originally pointed to\n59b441846ad109fa4a1549b73ef4e149c4bfb53b, but a critical bug was\ndiscovered shortly after publishing. We updated this tag to\nd0834ad3a60a024346910e522a81b0002bd37fea to prevent anyone using the\n4.3.0 tag from encountering the bug, and we published 4.3.1 to allow\nworkflows to auto update correctly.</p>\n<h3>Features</h3>\n<ul>\n<li>dependency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2>v4.2.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<h3>Features</h3>\n<ul>\n<li>depenency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>ensure explicit inputs take precedence over environment variables\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e56e6c4038915cd5a7238a671fe97f44c98a40b0\">e56e6c4</a>)</li>\n<li>prioritize explicit inputs over environment variables (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/df9c8fed6b364f0d1fb0e6e03a0ec26f1ea4e3fc\">df9c8fe</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.1.0...v4.2.0\">4.2.0</a>\n(2025-05-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>add Expiration field to Outputs (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a4f326760c1c1bf49ab86051c658d6501816b930\">a4f3267</a>)</li>\n<li>Document role-duration-seconds range (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5a0cf0167f837dfa7af7d951ba6a78a38dc2b79e\">5a0cf01</a>)</li>\n<li>support action inputs as environment variables (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1338\">#1338</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2c168adcae62d67531ba83842723c8f30695116a\">2c168ad</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>make sure action builds, also fix dependabot autoapprove (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c401b8a98c5067672f52e0387cdd87d54acfe1fd\">c401b8a</a>)</li>\n<li>role chaning on mulitple runs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1340\">#1340</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9e386419117a9edd458297e4f1822a5df7506a03\">9e38641</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a03048d87541d1d9fcf2ecf528a4a65ba9bd7838\"><code>a03048d</code></a>\nchore(main): release 5.0.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1451\">#1451</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/337f510212e7ae7a530e307fb43b87fa8916feb1\"><code>337f510</code></a>\nchore: Fix markdown link formatting in README.md (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1466\">#1466</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/f001d79eaa8d7e42dd7d421b18870b03c8097135\"><code>f001d79</code></a>\nchore: update README with versioning (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1465\">#1465</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cf5f2acba3ed5c403d00f6f9531a2dc3a5ef8d9a\"><code>cf5f2ac</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b394bdd9f0f03bd410ac15b3ca088d66be1fbd67\"><code>b394bdd</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1463\">#1463</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b632c0b5e467d8b4a89c389b6885a71a90ee4f62\"><code>b632c0b</code></a>\nchore(deps-dev): bump memfs from 4.38.1 to 4.38.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1462\">#1462</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/978e44aa3602bf5a26b98e2823c7f87ce78d4af8\"><code>978e44a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\"><code>c4be498</code></a>\nfeat: support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c5a43c32e1873343614c533eb83ffabbe5bc53bc\"><code>c5a43c3</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\"><code>8c45f6b</code></a>\nfeat: add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:39:08Z",
          "tree_id": "7a80e80a652a9dace298ead0be70e6ac0ec50e41",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be4c8de456427069591f7fa48bf312063a475956"
        },
        "date": 1758639489272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3580.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4891.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8486.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8219.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8224.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2114.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 808.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 495.671875,
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
          "distinct": false,
          "id": "175c3bafbb8d3e927e0871d7d170d67f02b868f6",
          "message": "Option to export OTLP metrics during benchmarks (#1610)\n\nAdds a flag to export OTLP metrics during benchmarks\n\nWith the change, we can test the impact of metrics on Mountpoint\nthroughput. This change also includes some refactoring that was missed\nwhile removing benchmark config parsing logic in #1609.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-24T14:01:48Z",
          "tree_id": "bda3f0062a32bcd8b48fae7d8a1d77fff4d324e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/175c3bafbb8d3e927e0871d7d170d67f02b868f6"
        },
        "date": 1758730768994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3602.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4983.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8602.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8221.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2114.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 806.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.71484375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdec4dbfe2610cd1b97428c61b88773aa86e3bf9",
          "message": "Change default logging level from WARN to INFO. (#1605)\n\nFixes #1244\n- Purpose: Improve visibility of important operational messages (mount\nsuccess, location) without requiring --debug flag\n- Users can now see essential mount information by default\n### What changed and why?\n1. Default Logging Level:\n- Changed default logging level from WARN to INFO in cli.rs\n- Added test_info_level_logging to verify the change\n- Default INFO logs now show important operational messages:\nINFO ThreadId(01) mountpoint_s3::cli: target network throughput 10 Gbps\nINFO ThreadId(01) fuser::session: Mounting /tmp/test-mount-new\nINFO ThreadId(01) mountpoint_s3::run: successfully mounted bucket \n\n2. Metrics Logging:\n- Metrics now show when either --log-metrics is set OR debug level is\nenabled\n- Explicitly turn off metrics when neither condition is met\n\n3. Log Level Optimization:\n- Changed setattr logging from INFO to DEBUG level as it's\nimplementation detail is more appropriate for debugging rather than\nregular operation\n\n### Does this change impact existing behavior?\n- All existing log levels (--debug, --no-log) continue to work as before\n- Only changes the default level to show more information\n- Setattr logging moved to DEBUG level to reduce noise\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n- Changelog entries added:\n* mountpoint-s3: Change default logging level from WARN to INFO to\nimprove visibility of important operational messages\n* mountpoint-s3-fs: Downgrade setattr logging level from INFO to DEBUG\nto reduce log noise\n- Version changes:\n  * mountpoint-s3: v1.20.0 -> v1.21.0 (for default logging level change)\n  * mountpoint-s3-fs: v0.7.1 -> v0.7.2 (for setattr logging change)\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-24T14:13:18Z",
          "tree_id": "1bd8347fd588fe82d13460d23d83beb8133fb5ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdec4dbfe2610cd1b97428c61b88773aa86e3bf9"
        },
        "date": 1758731199689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3688.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4877.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8605.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8289.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8289.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 854.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 475.4296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d02c7df053b52dc26a23534fdf8534b74e11dec9",
          "message": "Add checking step to PUBLISHING_CRATES.md (#1607)\n\nWe currently don't have a step for checking the newly published\nversions. This change adds links to `crates.io` to facilitate this.\n\n### Does this change impact existing behavior?\n\nNo, only change to documentation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only change to documentation.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-25T10:26:28Z",
          "tree_id": "733e8027290feb2699337893d9da209f89279e08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d02c7df053b52dc26a23534fdf8534b74e11dec9"
        },
        "date": 1758804124984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3641.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4965.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8401.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8232.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8131.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 887.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 542.15234375,
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
          "id": "5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1",
          "message": "Adding Unicode 3 to Accepted Licenses (#1617)\n\n**What changed and why?**\nAdded \"Unicode-3.0\" to the licensing whitelist.\nIt is already included in the /mountpoint-s3/deny.toml\nhttps://github.com/awslabs/mountpoint-s3/blob/main/deny.toml allowlist,\nbut it wasn't added here aswell. This fixes that.\n\nThe license's absense from the attribution.toml also means the command\nto generate our third party dependancies fails.\n\n```rust\ncargo about generate --config package/attribution.toml --output-file THIRD_PARTY_LICENSES package/attribution.hbs\nerror: failed to satisfy license requirements\n   ┌─ /home/user/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-ident-1.0.18/Cargo.toml:36:36\n   │\n36 │ license = \"(MIT OR Apache-2.0) AND Unicode-3.0\"\n   │                                    -----------\n\n2025-09-25 12:20:14.780429812 +00:00:00 [ERROR] encountered 1 errors resolving licenses, unable to generate output\n\n```\nSo this fix addresses a need for us to be able to generate these\nlicenses at will, outside of the release process.\n\n### Does this change impact existing behaviour?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, very minor bug fix\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-25T15:55:59Z",
          "tree_id": "f2e242baa82d8b202b17d8006036db286f297396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1"
        },
        "date": 1758823901832,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3650.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4959.97265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8559.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8149.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8310.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.92578125,
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
          "id": "7854f020d9f31efaf0e392367cf844f059c30b47",
          "message": "Use multi-threaded FuseSession in tests (#1462)\n\nTests for the `mountpoint-s3-fs` crates now use the multi-threaded\n`FuseSession` used in `mount-s3` rather than the single-threaded\n`BackgroundSession` from `fuser`.\n\n### Does this change impact existing behavior?\n\nNo, it only affects tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2025-09-25T17:22:01Z",
          "tree_id": "7950e7c591b0f94d9ad587ff4aba8eb7581f993c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7854f020d9f31efaf0e392367cf844f059c30b47"
        },
        "date": 1758829032070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3752.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4938.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8511.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8241.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8207.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 860.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 545.140625,
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
          "id": "a67f2631964cca1892d4aa2bcc42afef6fa56c37",
          "message": "Switch to real-time recording for OTLP metrics.  (#1615)\n\nSwitch OTLP metrics from batch recording to real-time recording directly\nto OTel SDK instruments. This eliminates the need for batch aggregation\nof histogram samples. This change also adds support for histogram export\nvia OTLP. Log-based metrics remain unchanged.\n\nWith this change, we are also removing the use of counter.absolute()\nmethod as OTel SDK doesn't provide an equivalent method to set absolute\nvalues for counters. We should use gauge or histogram to record absolute\nvalues.\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-26T13:12:37Z",
          "tree_id": "6940a6ae0c872a312ec23baf17cf6fe42ac7f918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a67f2631964cca1892d4aa2bcc42afef6fa56c37"
        },
        "date": 1758900562290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3659.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4908.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8542.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8203.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8221,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 751.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.43359375,
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
          "id": "b6a64b6129b573ab2ff3758cb948c5a2d15c1e82",
          "message": "Implement integrity checks for the metadata store (#1563)\n\nIntroduce checksum verification of:\n\n1. entries provided in the input CSV manifest (and for the whole file)\n2. entries stored in the metadata store\n\nSlightly refactored `ManifestEntry` in order to avoid huge `match`\nblocks. This PR also adds an example of the manifest creation.\n\n### Does this change impact existing behavior?\n\nNo, only `mount_from_config` example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, an entry for `mountpoint-s3-fs` crate, and a minor version bump of\nthis crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:12:13Z",
          "tree_id": "3c062f3c4a62ce4452388ef7dcad17531e0b0ac5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6a64b6129b573ab2ff3758cb948c5a2d15c1e82"
        },
        "date": 1759148805870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3557.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4886.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8574.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8276.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8237.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 774.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.15625,
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
          "id": "38714cff667ae612376003567f6e006e6a650086",
          "message": "Add an option to configure cache in `mount_from_config` example (#1616)\n\nAdd an option to configure cache in `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:13:58Z",
          "tree_id": "b5e04047b825ac9d30290d01a146dba9a4b688ff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38714cff667ae612376003567f6e006e6a650086"
        },
        "date": 1759149022335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3521.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4881.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8375.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8290.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 788.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.1171875,
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
          "id": "c08eb3fe54de0bef794946eae6851579f3812925",
          "message": "Release mountpoint-s3-fs 0.8.0 (#1623)\n\nBump the version of `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-09-30T13:30:12Z",
          "tree_id": "d2a77237bfca5bea93a5620e498ba0f36f07990f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c08eb3fe54de0bef794946eae6851579f3812925"
        },
        "date": 1759247166848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3564.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4904.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8586.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8268.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 491.15234375,
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
          "distinct": false,
          "id": "6ebfad0752a0aa3acc4582a963661dee94208c74",
          "message": "Use OTel's exponential histograms for histogram metrics. (#1624)\n\nWith explicit hitograms, OTel uses fixed bucket bounds, which don't work\nwell for all Mountpoint metrics as they don't fall within the default\nrange. So we need to manually configure the bucket bounds for different\nmetrics with different boundaries. However, with exponential histograms,\nthe bucket boundss are automatically scaled and provide more accurate\nmetrics. However, this relies on OTel SDK's unstable feature.\n\nIn case this isn't supported in the future, we need to switch to\nexplicit Buckets with different bounds for different metrics.\n\n### Does this change impact existing behavior?\n\nNo, changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n\nNo, changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-30T18:17:39Z",
          "tree_id": "3ac3848aedf3c41ee75862d6373b5a10df33f68c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6ebfad0752a0aa3acc4582a963661dee94208c74"
        },
        "date": 1759264346479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3489.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4870.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8599.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8187.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8238.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 786.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 508.44921875,
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
          "id": "18bfb9da77cd131ea38a27b8336d918c9e1376a0",
          "message": "Use delta temporality as default for exporting OTLP metrics (#1625)\n\nBy default, we will use Delta temporality instead of Cumulative\ntemporality to minimise the network payload size while exporting\nmetrics. However, cutomers can switch to Cumulative temporality if their\nbackends don't support Delta temporality\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-02T14:19:01Z",
          "tree_id": "951fa54b689dd4e3456a600b7caed5a584a479a8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18bfb9da77cd131ea38a27b8336d918c9e1376a0"
        },
        "date": 1759422790070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3629.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8506.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8243.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8166.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 776.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.96484375,
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
          "id": "baaaf2d4deb94af1821392c7e6b43116c8a5ca86",
          "message": "Fix lifetime elision warnings and other lints (#1626)\n\nTo be ready for newer Rust versions, fix some lints which will start\nfailing builds if we upgrade.\n\n### Does this change impact existing behavior?\n\nNo, this only addresses lints by removing ambiguous code or updating to\nuse new methods that make code clearer.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-02T15:40:15Z",
          "tree_id": "6e79c86e93ac6bcef6b7469cc675332ec775b4ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/baaaf2d4deb94af1821392c7e6b43116c8a5ca86"
        },
        "date": 1759427603966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3459.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4844.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8525.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8241.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8251.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 725.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 543.6640625,
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
          "id": "a911c7b46ed31de610a7f27e06be25f6f0109165",
          "message": "Upgrade toolchain to Rust 1.89 (#1628)\n\nUpgrade toolchain to Rust 1.89. Address relevant clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated crate versions as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-03T14:12:46Z",
          "tree_id": "71a490a5005dcba0128e6af3573eb590ac5da550",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a911c7b46ed31de610a7f27e06be25f6f0109165"
        },
        "date": 1759509032872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3536.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4879.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8477.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 20.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8284.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8196.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 737.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 473.2265625,
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
          "id": "a0289d73bddbdb4a287ea962392716ce8e0692f1",
          "message": "Update CI approvals to use single job with 'needs' relationship (#1632)\n\nThis change reduces noise from CI approvals by using one single job with\nits own approval, which all other jobs \"need\" before they start.\n\n`needs` definition:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds\n\nReference: https://github.com/awslabs/s3-connector-for-pytorch/pull/373/\n\n### Does this change impact existing behavior?\n\nCI change only. It now has all jobs requiring approval wait on a single\njob to succeed, which is itself gated by the GitHub environment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-06T10:58:34Z",
          "tree_id": "744a0fcb1bf8efb6a795df948f1e81274814172d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0289d73bddbdb4a287ea962392716ce8e0692f1"
        },
        "date": 1759756345174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3421.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8591.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8205.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 638,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 457.41015625,
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
          "id": "85833e267c3bb8dd2ed34b86e2b5b74f440f051a",
          "message": "Fix typos in github workflows comments (#1634)\n\nFix a number of typos in the comments in github workflow definition.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T12:00:21Z",
          "tree_id": "fe4722fbfb82b913bfbe297e61f2441b399ab1b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85833e267c3bb8dd2ed34b86e2b5b74f440f051a"
        },
        "date": 1759760166854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3509.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4874.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8527.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8135.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8077.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2094.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 412.71484375,
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
          "id": "015d318aec8e5f43281d07852353c1f1b8a368cc",
          "message": "Skip fuser tests on macOS in CI (#1636)\n\nAvoid running unit tests in CI for the `mountpoint-s3-fuser` crate on\nmacOS. Since `fuser` also removed their macOS CI, we don't want to\ntrigger spurious failures on a platform we do not support.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T18:13:23Z",
          "tree_id": "ff50d59281f16f62a8c959e6eea1d364317bef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/015d318aec8e5f43281d07852353c1f1b8a368cc"
        },
        "date": 1759782700624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3560.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4825.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8441.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8237.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8270.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2114.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 803.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 524.7890625,
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
          "id": "f46fd4e5b85d3253e5a26625db0430c42edfe9b1",
          "message": "Upgrade cargo dependencies (#1638)\n\nUpgrade cargo dependencies to latest versions. Required one minor code\nchange in 2 tests to adapt to changes in `nix::fcntl`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated `crt` and `crt-sys` crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T09:28:52Z",
          "tree_id": "3d2c78f32d5530c9b3411488cade56007956e49b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f46fd4e5b85d3253e5a26625db0430c42edfe9b1"
        },
        "date": 1759923946970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3701.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4956.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8549.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8226.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 851.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 555.7421875,
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
          "id": "02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8",
          "message": "Upgrade rand crate (#1639)\n\nVersion 0.9 of the `rand` crate introduced significant breaking changes.\nThis change upgrades the dependency and adopts the new API, following\nthe guidance provided in the [Rust Rand\nBook](https://rust-random.github.io/book/update-0.9.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T13:45:05Z",
          "tree_id": "22257c8d2faa8c330e95ecb7f7018779d42f5f48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8"
        },
        "date": 1759939273901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3570.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4945.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8509.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8132.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 821.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 554.15625,
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
          "id": "8ad2378bd2ef1f7384a0624c540d2daa47bc102d",
          "message": "Remove dependency from rand_chacha (#1641)\n\nReplace `ChaCha20Rng` with `SmallRng`:\n* Simpler, smaller, and faster generator,\n* One fewer dependency,\n* Not cryptographically secure, but irrelevant for our usage.\n\nSee [comparison of different generators in the Rust Rand\nBook](http://rust-random.github.io/book/guide-rngs.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T16:19:02Z",
          "tree_id": "6df34246190a87a96513561a44329fb9eb38da46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8ad2378bd2ef1f7384a0624c540d2daa47bc102d"
        },
        "date": 1759948793914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3657.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8520.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8181.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8078.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 836.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.88671875,
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
          "id": "0279442c074f667703177f59f5f37be35241d50d",
          "message": "Update S3 request metrics for OTLP export (#1630)\n\nThis PR defines metric configuration for OTLP export and adds support\nfor passing units and filtering stable metrics for otlp export.\n\nThis change also updates S3 request metrics to use the new metric names\nand attributes in both logs and OTLP export.\n\n### Does this change impact existing behavior?\n\nChanges log format for S3 request metrics in logs. The rest of the\nchanges are under the otlp_integration feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires a changelog entry as it updates the format of logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-09T12:17:57Z",
          "tree_id": "2244101d8ab391462b5a526bcb30ee08b2e532d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0279442c074f667703177f59f5f37be35241d50d"
        },
        "date": 1760020435824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
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
          "id": "0a84b07f3e5f759de17b50f9236b52f135ae9efa",
          "message": "Fix instructions for updating CRT dependencies (#1644)\n\nThe command to fetch tags could fail in case of conflict and bail out\nbefore upgrading the remaining submodules.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-09T12:41:41Z",
          "tree_id": "f3dbc9776d94d3fac2487f917acb4e89ac1cb1d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a84b07f3e5f759de17b50f9236b52f135ae9efa"
        },
        "date": 1760021852699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
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
          "id": "dbefa1f1d0229833dacf2303c524ce2ed299fc84",
          "message": "Fix typing in benchmark script (#1646)\n\n`any` isn't a type; also no need for the shortcut, instead specify the\nproper return type for the resource monitoring functions.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-09T21:51:32Z",
          "tree_id": "ab3bcc184a310ee59ec075bbd5aa477f99d51345",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dbefa1f1d0229833dacf2303c524ce2ed299fc84"
        },
        "date": 1760054912922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
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
          "id": "ff8483df46863cccee72e9f17e13d05a49ce9283",
          "message": "Disable rustdoc tests for mountpoint-s3-crt-sys in CI (#1645)\n\nRemove dedicated rustdoc tests workflow, and enable rustdoc tests by\ndefault in all but `mountpoint-s3-crt-sys` crate.\n\nThe workflow was erroneously added to cover tests not being run, however\nthis is the default behavior unless opted out. This change removes the\nopt-out where we don't want it and drops the now redundant workflow.\n\n### Does this change impact existing behavior?\n\nCI only. No rustdoc tests will be run at all in `mountpoint-s3-crt-sys`.\nThere are no tests currently written anyway today.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no crate behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-09T22:28:07Z",
          "tree_id": "3d2cde86b135fa4ba567139a5b6e707f0955377e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff8483df46863cccee72e9f17e13d05a49ce9283"
        },
        "date": 1760057439107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
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
      }
    ]
  }
}