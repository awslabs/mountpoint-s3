window.BENCHMARK_DATA = {
  "lastUpdate": 1690291402106,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d03df14abcc5a1bb38c671865faa7cf9e623bf5",
          "message": "Adds region in tests (#375)\n\n* adds region when running fuse tests\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds in secondary region\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* removes extra new lines\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds domain env variable\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds fips_tests feature to CI\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* use full domain\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* rustfmt\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T18:55:28Z",
          "tree_id": "1cf94e31943f473dc7d81e8fb0b22079b05e91ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d03df14abcc5a1bb38c671865faa7cf9e623bf5"
        },
        "date": 1689620765631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.775,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.8169815,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.4767916,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a3aa4c1ab89b28bcafeb28066475888ed659c47",
          "message": "Fix missing feature in CI (#385)\n\nWe missed this in #375 and it broke mainline.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:00-05:00",
          "tree_id": "c667c5c19ef67e4006b3f81dd2e179f0870de3d8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a3aa4c1ab89b28bcafeb28066475888ed659c47"
        },
        "date": 1689635119284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.788,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.836777,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.1290775,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "839ccfd1ba98ca9613eae8686bb4c369e691fe29",
          "message": "Remove inodes from their parent in `forget` (#380)\n\n* Remove inodes from their parent in `forget`\r\n\r\nThe parent directory still holds onto an `Inode` (an `Arc<InodeInner>`),\r\nso right now our `forget` is leaking the actual inode. We need to remove\r\nit from its parent at `forget` time. Also updated the tests to check\r\nthat the inode is in fact free'd.\r\n\r\nI tested this by listing a directory with 2M objects on an instance with\r\n1GiB of memory, and saw constant memory usage.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't forget the wrong inode\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:27-05:00",
          "tree_id": "43b8c9e97bc4a356b830f058f2c753fa3dc62e5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/839ccfd1ba98ca9613eae8686bb4c369e691fe29"
        },
        "date": 1689635194959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.583,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.6129949,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.294875600000005,
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
          "id": "d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04",
          "message": "Report current file size during writes (#384)\n\n* Report current file size during writes\r\n\r\nMountpoint currently reports file size as 0 until the upload is complete.\r\nIn this commit, we instead report how many bytes have been streamed to S3\r\nas some applications want to know current size of the file during writes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add some tests\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comment\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-18T13:21:12-05:00",
          "tree_id": "7a1093c09b1491d093d3da81c8188987e79f8422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04"
        },
        "date": 1689705110763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.07,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 107.8219483,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.730252799999995,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53",
          "message": "Reconcile remote and existing inodes at `update` time (#386)\n\n* Reconcile remote and existing inodes at `update` time\r\n\r\nTo date we haven't thought too carefully about what happens if objects\r\nare put/deleted from the S3 bucket while conflicting state is present\r\nlocally. There are a lot of edge cases here -- the Cartesian product of\r\nexisting state (local/remote file/directory) and new remote state\r\n(file/directory), as well as two paths for inodes to be updated (readdir\r\nvs lookup).\r\n\r\nThis change defines a semantics for these permutations. The overall idea\r\nis that (a) remote state shadows local state, and (b) directories shadow\r\nfiles. But those axioms alone aren't enough to break all ties; for\r\nexample, what if the existing state is a local directory but the new\r\nstate is a remote file -- which should win? I chose to break the tie by\r\nsaying that remote directories > any local state > remote files. So, for\r\nexample, if a user creates a local directory, and then a conflicting\r\nobject appears in the remote bucket, the directory will still be\r\nvisible instead of the new file.\r\n\r\nI spent some time trying to patch the existing inode update path to do\r\nwhat I needed but it ended up being easier to just refactor it. I think\r\nwe could still find a better factoring for this path, but it now\r\nexplicitly accounts for all the permutations above and does the right\r\nthing (at least according to our reference model) for them all.\r\nHappily, proptest has done a good job at rooting out the many edge\r\ncases, as you can see by all the new regression tests in this change.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:54:35+01:00",
          "tree_id": "f6cf307ab27e2014dcf378a5e1ca71657aab26ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53"
        },
        "date": 1689761092460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.637,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.3692873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.762178799999994,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d09e1e6420fe752d649e93c6ee528a3f9c48e4c",
          "message": "Add detailed CRT metrics and tweak per-request logging (#390)\n\n* Add detailed CRT metrics and tweak per-request logging\r\n\r\nThis change is a few related things to make logging more useful:\r\n- Include verbose CRT request metrics at trace level. We emit what we\r\n  think is the \"interesting\" stuff at higher levels, but for detailed\r\n  investigation we might want to see the raw CRT view.\r\n- Add parameters to request spans. This ensures that we know _which_\r\n  request is going wrong when we see log messages about requests.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Make ThreadId work on macOS\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:06:17-05:00",
          "tree_id": "51fcc97646b0631752b11d87573f4403107f776c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d09e1e6420fe752d649e93c6ee528a3f9c48e4c"
        },
        "date": 1689779863469,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.827,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.6939922,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.6924571,
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
          "id": "5364fccfe87a61229386ded5f169cf6e131440ad",
          "message": "Maintain metadata checksums and verify on unlink (#388)",
          "timestamp": "2023-07-19T19:33:08-05:00",
          "tree_id": "f2e2116eaab1cc33d960d0ff52ee2a128fb56e6d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5364fccfe87a61229386ded5f169cf6e131440ad"
        },
        "date": 1689813816847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.058,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.746,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.16426440000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.83569759999999,
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
          "id": "7786053d72d2fe17e8a8d626bc33604616406b5f",
          "message": "Add merge_group as workflow trigger for tests and integ tests (#392)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-19T19:36:32-05:00",
          "tree_id": "165da5841a00ecab9327d1ed62ac1f0c95bcf966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7786053d72d2fe17e8a8d626bc33604616406b5f"
        },
        "date": 1689814044068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.643,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.221777100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.3091312,
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
          "id": "ef351495f187968c1560aa04289ecff67f9ef453",
          "message": "Fix sequential write test with O_RDWR flag (#393)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-20T13:39:44Z",
          "tree_id": "63d7d31461e454c0842eb6f2da239264cdcda5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef351495f187968c1560aa04289ecff67f9ef453"
        },
        "date": 1689863946351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.112,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.332,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.5888238,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.351189,
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
          "id": "6a717f9d47f5089ac599525371b402270e47ba07",
          "message": "Add always-successful workflow for DCO on merge_group event only (#397)\n\n* Add always-successful workflow for DCO on merge_group event only\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Address PR feedback adding comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-20T18:53:55Z",
          "tree_id": "41a2e65f93a5473540367262ca7fcf60401fd5d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a717f9d47f5089ac599525371b402270e47ba07"
        },
        "date": 1689881456910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.974,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.57959770000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.6401404,
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
          "id": "8efeaa86a48e5cc1060a4b09b048bfe2affa2736",
          "message": "Remove IMDS call for instance throughput when IMDS is disabled (#394)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-20T19:11:39Z",
          "tree_id": "4471f9e0af433629d399f71ffa01093aa1225ca0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8efeaa86a48e5cc1060a4b09b048bfe2affa2736"
        },
        "date": 1689882367131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.908,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 55.6995083,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.080882200000005,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac",
          "message": "Emit warning-level logs to syslog when log directory is unset (#387)\n\n* Move logging module into its own file\n\nNo code changes, just relocating the module in preparation for the next\ncommit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Emit warning-level logs to syslog when log directory is unset\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Document a little better\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-20T19:11:16Z",
          "tree_id": "56a8333ad423022072998a743a49c99225519511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac"
        },
        "date": 1689882396074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.925,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.1157978,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.7960815,
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
          "id": "183a20c9674a6d3bd29d8b52d675fec06658f3ee",
          "message": "Implement setattr to support changing time attributes (#391)\n\n* Implement setattr to support changing time attributes\n\nSome applications like `touch` requires the file system to support\nchanging file last access and modification times. We don't support this\noperation because the last modification time for objects can't be set\nvia S3 API. However, it's possible to allow this only for the files that\nare being written because at that time it's still a temporary stat in\nMountpoint.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix unit test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-21T09:08:07Z",
          "tree_id": "cf342407259005b6637707b616589c96a495585a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/183a20c9674a6d3bd29d8b52d675fec06658f3ee"
        },
        "date": 1689932778224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.647,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.5839771,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.570943799999995,
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
          "id": "bb0f479c07bc5630115a4e2105b85a5ebcd88fad",
          "message": "Introduce option to allow delete (#398)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T11:07:28Z",
          "tree_id": "0e493c7a85839afb80dc790ec83a81b53a43cd0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb0f479c07bc5630115a4e2105b85a5ebcd88fad"
        },
        "date": 1689939524646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.533,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.1572519,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.526025700000005,
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
          "id": "d3a8d05fb9dc9957fa45acf96d36367984392163",
          "message": "Remove delete feature (#399)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T12:32:28Z",
          "tree_id": "2c00fb0956349d9812db28d2559140fcf7e50e92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a8d05fb9dc9957fa45acf96d36367984392163"
        },
        "date": 1689944714820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.67,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.3610801,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.7623197,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dpresteg@gmail.com",
            "name": "Derek Prestegard",
            "username": "dprestegard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96",
          "message": "Refactor Dockerfile and update README (#402)\n\nSigned-off-by: Derek Prestegard <dpresteg@gmail.com>",
          "timestamp": "2023-07-24T15:15:22Z",
          "tree_id": "53ef58e75f84dce0df03968dfe1f2514f15b0ad7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96"
        },
        "date": 1690213778257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.656,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 122.3062623,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.0053283,
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
          "id": "c90fe480c5562bbbeda7426f3c91c8d59861c8fc",
          "message": "Update inode status on fsync or write failure (#395)\n\n* Update inode status on fsync\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove sleep calls in tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove additional sleep calls\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-24T15:28:44Z",
          "tree_id": "211a1b6ca8bb7d523aaff0925b54db9b6031d910",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c90fe480c5562bbbeda7426f3c91c8d59861c8fc"
        },
        "date": 1690214785586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.888,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.6333704,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.8607041,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690221399407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.4471653,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.7174329,
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
          "id": "147f0b3448be5b0cbeeb081ca3ee940420a81e53",
          "message": "Adds support for storage class in client (#406)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-25T12:51:17Z",
          "tree_id": "d7bf7d38c7ef3913bc3bba6c4fc8322e14ed30c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/147f0b3448be5b0cbeeb081ca3ee940420a81e53"
        },
        "date": 1690291388442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.102,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.716,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.0355165,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.193048299999994,
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
          "id": "c40ff340fcde9c6500d57982578bdcc4384a31f6",
          "message": "Update CRT submodules to latest releases (#407)\n\n* Update CRT\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update UPDATING_CRT.md to show diff for all CRT submodules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-25T12:53:01Z",
          "tree_id": "29af0fbd4d978fe3466394ae1a717140c62f41fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c40ff340fcde9c6500d57982578bdcc4384a31f6"
        },
        "date": 1690291401296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.516,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.0094647,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.9825278,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}