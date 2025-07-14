window.BENCHMARK_DATA = {
  "lastUpdate": 1752532778671,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Latency Benchmark (S3 Express One Zone)": [
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
          "id": "c8d1eb5960bcc820e881c497db188e59b572d896",
          "message": "Move syscalls to dev-dependencies (#1479)\n\nThe `syscalls` crate is only used in tests. Move to the\n`dev-dependencies` section.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-24T07:04:11Z",
          "tree_id": "71f31ac446c20f99ad510bb9a0f3220286d626d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8d1eb5960bcc820e881c497db188e59b572d896"
        },
        "date": 1750750202649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.488796239999985,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.923,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.67,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.2300252,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3018673,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.1772043,
            "unit": "milliseconds"
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
          "id": "55ba7de089446cfdf421b3c1ad92b1036c4e3dcf",
          "message": "Move object client into Superblock (#1476)\n\nThis PR moves the client into the Superblock, thus a superblock will\nalways interact with the same instantiation of an `ObjectClient + Send +\nSync`.\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact existing behaviour, as is only an\ninternal re-organisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, does not need a Changelog entry, as it only moves around where we\nstore the client.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-24T12:28:42Z",
          "tree_id": "23e9d9e1fb4d816c8b682ed0ca7fb58f01fa2680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55ba7de089446cfdf421b3c1ad92b1036c4e3dcf"
        },
        "date": 1750769539445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 46.25816110999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.959,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.841,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.7373085,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.1674053,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.1290879,
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
          "id": "43aa6f7cadaeb8bf580741502e53d761d063ed6d",
          "message": "Update CRT submodules to latest releases (#1484)\n\nUpdate `aws-c-s3` in order to pick up the latest addition to the Memory\npool interface (awslabs/aws-c-s3#529).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 29ceb352..1762f839:\n  > Add user data to pool factory (#529)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-25T07:33:36Z",
          "tree_id": "0ac46076318b295e9075b00d708a491b227fed32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43aa6f7cadaeb8bf580741502e53d761d063ed6d"
        },
        "date": 1750838120217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.434982659999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.939,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.859,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.5244859,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3604914,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.2220498,
            "unit": "milliseconds"
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
          "id": "20f3c0202371b8f012bd25067093dfcc97653d8a",
          "message": "Add support to collect perf stat counters in benchmark.py (#1474)\n\nAdd support to collect perf stat counters in benchmark.py\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only affects benchmark.py\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-06-25T14:15:10Z",
          "tree_id": "4a663775b6bd393e9e4638b97df3bb28c05c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/20f3c0202371b8f012bd25067093dfcc97653d8a"
        },
        "date": 1750862427976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 43.33331383999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.937,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.187,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.3123477,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3793263999999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8605718,
            "unit": "milliseconds"
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
          "id": "09db8afebc61bfd4717172b4ccbe57b9dd47c9b6",
          "message": "Move `reader_count` out of inode (#1475)\n\nMoves the reader count out of the inode and instead stores the reader\ncounts for all inodes with non-zero reader count in a HashMap (that is\nprotected by a lock).\n\n### Does this change impact existing behavior?\n\nThis should not have breaking changes, it could potentially reduce\nunlikely issues with the reader count getting messed up in highly\nconcurrent scenarios involving re-creation of inodes with the same\nnumber.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDoes not need a Changelog entry or version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-26T06:09:43Z",
          "tree_id": "b7465e39b2af7d265f25563d8bd047b7770a50c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09db8afebc61bfd4717172b4ccbe57b9dd47c9b6"
        },
        "date": 1750919698322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 46.304753500000025,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.937,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.092,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.5273858,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.513033,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9905527,
            "unit": "milliseconds"
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
          "id": "f4d7df30fff3cc17c85578b0df51f5895523f6ab",
          "message": "Move lookup count into InodeMap (#1473)\n\nThis PR re-organises the way we lookup count by moving the lookup count\ninto inode HashMap (i.e, this hashmap now stores an association of\nInodeID -> (inode, lookup_count)). This more closely mirrors real file\nsystem's behaviour w.r.t. inodes that are re-created with the same inode\nnumber. It introduces some additional locking.\n\nThis should not have any difference in behaviour, as we do not replace\ninodes if they are currently open for writing or reading.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-27T06:44:45Z",
          "tree_id": "05178bedb883fbe00b7acb30e8ed313b47b4f73b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4d7df30fff3cc17c85578b0df51f5895523f6ab"
        },
        "date": 1751008124628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 43.39931015,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.942,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.188,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 5.9888891,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2161331000000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.6517445,
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
          "id": "7e45834ac4e73aa648d8f62583c1b3becb12d2b8",
          "message": "Add private option to disable disk cache cleanup for testing/benchmarking (#1483)\n\nThis updates the `ManagedCacheDir` struct to optionally perform cleanup\nat creation and drop. It also provides an environment variable for\nswitching this on at `mount-s3` invocation time. This will allow us to\nturn this cleanup off when trying to perform benchmarking comparing\n\"warming\" phases, as well as \"hot\" phases - i.e. to understand how\nMountpoint performs when loading the cache versus a full cache, where\nall requests are served from it.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change. One log is downgraded from `warn` to\n`debug`. The warning was not providing much valuable information - if\nneeded, we can turn on debug logs if any strange behavior is observed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no public changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T09:30:14Z",
          "tree_id": "cf1054344fd2f3a909e34fb60f31b42590dd3d0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e45834ac4e73aa648d8f62583c1b3becb12d2b8"
        },
        "date": 1751018082719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.25464641999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.937,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.251,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4308045,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2370346,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.763846099999999,
            "unit": "milliseconds"
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
          "id": "240108b8ab0386a9f7c6ca2f8de2901ebadd8c00",
          "message": "Remove inodes from file handles  (#1486)\n\nThis PR removes the reference to the inodes from the file handle and\ninstead uses the inode number and full key.\n\n### Does this change impact existing behavior?\n\nNo - is just an internal reorganisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNeeds no Changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T11:06:31Z",
          "tree_id": "45ca3fcb229ab13f55fcedaef59105acffefaaf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/240108b8ab0386a9f7c6ca2f8de2901ebadd8c00"
        },
        "date": 1751023870768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.27123330000002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.95,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.923,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.3169149,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.1166321000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7619428,
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751030738387,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.985828340000005,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.942,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.797,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.1631182,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.1223653,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7595919,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751038871977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 48.11255997999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.949,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.305,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.8254799,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.4783144,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.0979461,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751045234904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.91792331999998,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.939,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.935,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 5.7171139,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2098904,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7508422999999995,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751045415734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 48.70553271999998,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.954,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.24,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4073123,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2290857,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.6790686,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751045567737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.06016860999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.906,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.837,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.2854605999999995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2838273,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8692782999999995,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751282332532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.87316653000002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.917,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.742,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.1903107,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3494749,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8627019,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751364310943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.74736885999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.918,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.811,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 7.1573307,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2862748,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.1837048,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751378759582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.50892942999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.952,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.933,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4135151,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.5274518000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.1669555,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751389850795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.275637770000024,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.94,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.866,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4217451,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2403818999999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.0327532,
            "unit": "milliseconds"
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
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751456902943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.64773799,
            "unit": "milliseconds"
          },
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
            "value": 0.932,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.852,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.2083174,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.1781171000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7896777,
            "unit": "milliseconds"
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
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751648098766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.78573007000001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.921,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.627,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.508956,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.728056,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.2258610999999995,
            "unit": "milliseconds"
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751876511939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 43.81318378000001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.916,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.779,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.0063115,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.4504571000000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.7632545,
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751904533363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.323044020000005,
            "unit": "milliseconds"
          },
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
            "value": 0.933,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.195,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.731560900000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3888805,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8236221,
            "unit": "milliseconds"
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
        "date": 1751963499251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.394200379999994,
            "unit": "milliseconds"
          },
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
            "value": 0.942,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.852,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.775566400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.1005177,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.1462701,
            "unit": "milliseconds"
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
        "date": 1751996624001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.67161998000002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.933,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.996,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.8119509,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3755822,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.2791483,
            "unit": "milliseconds"
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
        "date": 1752115518596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 47.707892230000006,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.941,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.893,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4732582,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.938309,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9311643,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752160558138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 43.46939631,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.932,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.641,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.408738400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.4054421000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.760504200000001,
            "unit": "milliseconds"
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
        "date": 1752163654230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.87592122,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.942,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.841,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.700028400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3842381000000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9485575,
            "unit": "milliseconds"
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
        "date": 1752239210721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 43.82269708999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.931,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.128,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.7412031,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3618915,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8920269,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752487523874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.08657248999998,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.919,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.857,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.4484222,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3080234,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 6.0610347,
            "unit": "milliseconds"
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
        "date": 1752489538856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 45.272172920000024,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.934,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.591,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.7128945,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.3681086,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.9259072999999995,
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
          "id": "500986305934dc89b9457a6dfad2532476332862",
          "message": "Update the aws-c-s3 submodule to the latest release (#1515)\n\nUpdate the `aws-c-s3` submodule to\n[v0.8.4](https://github.com/awslabs/aws-c-s3/releases/tag/v0.8.4),\npicking up in particular: [ Avoid releasing pending mem ticket future\nwhile holding the lock #533\n](https://github.com/awslabs/aws-c-s3/pull/533).\n\n\nChange details:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1762f839..f8ae82e3:\n  > Avoid releasing pending mem ticket future while holding the lock (#533)\n  > More request metrics (#530)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T22:17:50Z",
          "tree_id": "208673de285dd84fdc1214be27868ca27e9310f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/500986305934dc89b9457a6dfad2532476332862"
        },
        "date": 1752532777729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 44.62885161000001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.914,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.915,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 6.5549675,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 1.2870555,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 5.8316275,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}