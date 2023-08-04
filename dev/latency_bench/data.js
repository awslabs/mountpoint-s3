window.BENCHMARK_DATA = {
  "lastUpdate": 1691161925614,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "47d06c127d482212b89291ffc62a3604169c5db6",
          "message": "Fix region detection with specified region (#409)\n\n* Fix region detection with specified region\n\nWe weren't setting the region in the endpoint config if it was specified\nmanually. This passed our tests because it was defaulting to us-east-1\nand that's where our CI is. Instead, let's start with an obviously wrong\nplaceholder region and fill it in when creating the client.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix warning message\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T10:32:22Z",
          "tree_id": "1f8f7ef8166bb0826a3dfe764d766c116237b52b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47d06c127d482212b89291ffc62a3604169c5db6"
        },
        "date": 1690369868089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.186,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6899559,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.968576799999994,
            "unit": "milliseconds"
          }
        ]
      },
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
          "id": "7dfc30c1d591b273274ec870af9caf8a34dd3ca0",
          "message": "Adds storage class (#400)\n\n* Adds in support to configure storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* removes default storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds integration tests\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* changes as per review comments\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fix lint error\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds in tests for mock client\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* removes unused imports\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* return storage class in option\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* throw error if obj not found\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2023-07-26T14:22:08Z",
          "tree_id": "5820419ade3f78e5eb2a31b92c87f32bdd726f69",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dfc30c1d591b273274ec870af9caf8a34dd3ca0"
        },
        "date": 1690383311425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.162,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.04148070000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2295033,
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
          "id": "c1720bc41e22cf9c199285151218e0c41dd21200",
          "message": "Add flags for logging configuration (#404)\n\nThis simplifies how we ask customers to configure logging by no longer\nexposing them to RUST_LOG or filtering directives. Instead, we add a\n`--debug` flag to enable verbose logs, and `--debug-crt` to enable\nverbose CRT logs (which are spammier). We also add a `--no-log` flag to\ncompletely turn off logging, and `--log-metrics` to emit the summarized\nperformance metrics.\n\nThis change also fixes a bug in the syslog implementation with events\nthat come via `tracing-log` (the adapter for emitting `tracing` events\nfrom the `log` facade). We use this adapter for adapting CRT logs into\n`tracing`, since `tracing` is very picky about log events having static\nmetadata but CRT logs are necessarily dynamic. The `tracing-log` adapter\nrecords metadata in some custom fields, which we weren't correctly\nhandling, so our log messages had the wrong `target` and a bunch of\nextra fields. This change is annoying to write a test for because `log`\nis global, but I tested it manually.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:23:44Z",
          "tree_id": "c103b9eae65b848eb73ab31a92e460e33a8a970c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c1720bc41e22cf9c199285151218e0c41dd21200"
        },
        "date": 1690387114533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.58790859999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.6444631,
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
          "id": "3832ccadee82326a9adb19e38322bdbe6ff9bec5",
          "message": "fuse: log all operation failures (#408)\n\nI was going to do this in a proc macro but this is way simpler. This\njust follows up on #404 by recording all the errors, using a small macro\nin place of the existing calls to `reply.error(libc::c_int)`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:24:22Z",
          "tree_id": "6b928023b6fda77ffd055facd6f5e634ac98fd16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3832ccadee82326a9adb19e38322bdbe6ff9bec5"
        },
        "date": 1690387151185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.312,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.0277925,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.851445,
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
          "id": "c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a",
          "message": "Add S3_SUBSESSION_IAM_ROLE environment variable (#412)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T17:15:13Z",
          "tree_id": "36fd375f542617b4e3c07587e8aed7c3ed5b3260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a"
        },
        "date": 1690393758572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.514,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.5009041,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.7914713,
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
          "id": "54851a95c609bcae7226cecb198d0a9fb9b59679",
          "message": "Add new subsession IAM role for auth integration tests (#410)\n\nWe want to be able to write tests with various permutations of IAM\ncredentials and policies (read only, prefix only, etc). Rather than\nmanually building new infrastructure for them, we're creating a single\nnew IAM role that tests can call AssumeRole on, using a session policy\nto scope down the credentials to those they want to test.\n\nI'll be using this in a follow-up commit to switch from HeadBucket to\nListObjects for region detection. I suspect we can also use it to get\nrid of our \"forbidden\" bucket, but don't plan on doing that right now.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T18:10:21Z",
          "tree_id": "ca4cf30996edbb4fad5511fa24b4b1de3b9e2ee2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54851a95c609bcae7226cecb198d0a9fb9b59679"
        },
        "date": 1690396902289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.209,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.419,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1858736,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.0150985,
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
          "id": "df4087bd63de7ff31984d9cc0e4a0db951359c11",
          "message": "Use ListObjectsV2 instead of HeadBucket for region detection  (#413)\n\n* Refactor error handling for S3CrtClient\n\nThere are some generic errors like region redirects and permissions that\nwe'd like to parse in only one place rather than all over the code. This\nchange moves those errors to S3RequestError and rejigs the parsing code\nappropriately.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Use ListObjectsV2 instead of HeadBucket for region detection\n\nHeadBucket requires `s3:ListBucket` permissions for the root of the\nbucket, but some customers scope their users' access down to only a\nprefix of the bucket. This makes it impossible for them to use prefix\nmounts today. Instead, we want to use ListObjects on the prefix as the\nregion detection mechanism.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:19:15Z",
          "tree_id": "233f258f7f59f2628e626917305d3675d057bebe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df4087bd63de7ff31984d9cc0e4a0db951359c11"
        },
        "date": 1690496763154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.377,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2173245,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.210845,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690496816449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.8216756,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.1393615,
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
          "id": "d6b530f3dc6d5ea5c5c50e79afad283da16333a6",
          "message": "Dynamically scale fuse threads (#411)\n\n* Update vendored fuser to 07f1987\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Dynamically scale fuse threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Replace --thread-count with --max-threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update benchmark scripts\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-28T18:41:35Z",
          "tree_id": "0066a6468f3ac391fa53698f63152e4a4e7c438c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d6b530f3dc6d5ea5c5c50e79afad283da16333a6"
        },
        "date": 1690571720302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.161,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.9086966,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.5444695,
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
          "id": "0beb3227c1a1eedc2264ae2a2052c32719d9cf0d",
          "message": "Fix clippy error on macOS (#421)\n\nlibc::mode_t has a different width on macOS (u16 vs u32), so we need to cast the result of metadata.permissions().mode() before masking it.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-31T15:19:42Z",
          "tree_id": "0af61f336418dc1f5a4fcc863f647e887e6f1666",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0beb3227c1a1eedc2264ae2a2052c32719d9cf0d"
        },
        "date": 1690819235044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.941,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.40934159999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.9070582,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690831813119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.099,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.2829103,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.8638087,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690907321906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.064,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.888456,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.9156641,
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
          "id": "c61d0cbca272f652fd11314a7d1e12453954067c",
          "message": "Prepare release workflow (#424)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-02T10:07:58-05:00",
          "tree_id": "0a7e9aa1670e9a62ddecde703ea8c1d96152ad00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c61d0cbca272f652fd11314a7d1e12453954067c"
        },
        "date": 1690989530793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 119.6654746,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.591325600000005,
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
          "id": "10110867188a2a53c6dd9c81a63e1b8cad9fdea6",
          "message": "Bump version of mountpoint-s3 to v0.4.0 (#425)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-02T10:13:13-05:00",
          "tree_id": "8bd870fb7566d745b9ac16d87bfd7e0891779362",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10110867188a2a53c6dd9c81a63e1b8cad9fdea6"
        },
        "date": 1690989816408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.458,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.7842377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.1580712,
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
          "id": "ae18473cf5668df8fd6e09b49b7a665464786b8b",
          "message": "Use AWS_REGION and IMDS to determine region (#422)\n\n* Add support for AWS_REGION to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * default region (us-east-1).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add get_identity_document to the IMDS client\n\nExtend the IMDS client to query the identity document of the current EC2 instance. The identity document is returned as a json response, which is parsed (using serde) to extract  the region and the instance type. The new `get_identity_document()` is tested by comparing its result to those obtained via the SDK.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use AWS_REGION and IMDS to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * EC2 instance region (using the IMDS client),\n  * default region (us-east-1).\n\nIn order to avoid querying the IMDS twice, this change also refactors the retrieval of the instance type (used in the calculation of the maximum network throughput). The new type `InstanceInfo` will lazily query the IMDS client for both value if and when required.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move InstanceInfo into a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor all region handling logic into get_region\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unused methods in ImdsCrtClient and ImdsClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-08-03T03:58:05Z",
          "tree_id": "b9587bef66f6f489e6b0a9ee5282036eb2af2c89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae18473cf5668df8fd6e09b49b7a665464786b8b"
        },
        "date": 1691036984075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.979,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.8422021,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.7139604,
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
          "id": "de2e9a2ef49ce50c7680839bd7d12e0d5383a669",
          "message": "Make inode-related errors more user-friendly (#416)\n\nInode numbers aren't very useful for debugging, since you have to go\nreconstruct which object they refer to, which is only possible with\nfairly detailed (trace-level?) logs. Since many of these errors become\ncustomer-facing in logs (e.g. opening an existing file with O_WRONLY),\nwe can make them at least a little more parseable by attaching some info\nto them.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T17:02:53Z",
          "tree_id": "bf815758290172df56ff554c6f7fe8604b6387e9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de2e9a2ef49ce50c7680839bd7d12e0d5383a669"
        },
        "date": 1691084371842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.161,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.7505608,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.877932,
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
          "id": "ab7501a6ef8cd39de8b6cbb8848da9d05e4f310c",
          "message": "Update network throughput (#426)\n\n* Update network throughput\n\nIt's been a while since we ran this, and there are new instance types.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Remove unused line\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T18:02:32Z",
          "tree_id": "120b1e31fa6fb93be0a9ac8201d4313bb99c07db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab7501a6ef8cd39de8b6cbb8848da9d05e4f310c"
        },
        "date": 1691087812748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.12,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.9859135,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.0674465,
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
          "id": "eae8b4d204ccc1c8607c280b4cba5416fd5c6861",
          "message": "Print a message when mount succeeds (#427)\n\n* Print a message when mount succeeds\n\nIt's not obvious that mounting succeeded in the default background mode\n-- the process just silently exits. Let's make it a bit more obvious\nthat things went well.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Drop args before fork\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Oops\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T18:14:05Z",
          "tree_id": "acd92371baaf8bc89c74c066020ce82a7a598f45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eae8b4d204ccc1c8607c280b4cba5416fd5c6861"
        },
        "date": 1691088824671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.646,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.4282829,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.516307600000005,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "014b9c75c6f6df72455bd445dec16b56cbe240aa",
          "message": "Parse endpoint property of Auth Scheme from endpoint resolver (#423)\n\n* AuthScheme parsing from endpoint Resolver.\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Update mountpoint-s3-client/src/endpoint_config.rs\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-08-04T08:18:51Z",
          "tree_id": "673749397ecf2f8422d346f02cacef81406c9ff9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/014b9c75c6f6df72455bd445dec16b56cbe240aa"
        },
        "date": 1691139445283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.717,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.3903695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.8894032,
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
          "id": "28f31ce2766628cd0e871b9c91330086297ea8b2",
          "message": "Change artifact names for aarch64 package (#431)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-04T14:33:07Z",
          "tree_id": "9d74fa514de2f145823e057d798212f0a5ded8e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28f31ce2766628cd0e871b9c91330086297ea8b2"
        },
        "date": 1691161924602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.459,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.1266334,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.6311277,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}