window.BENCHMARK_DATA = {
  "lastUpdate": 1708565848315,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "53e22be32f9a3c0b0f7550c4d4a247837a7bccc5",
          "message": "Introduce negative metadata cache entries (#696)\n\n* Extract Expiry type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce negative cache\n\nReduce latency when repeatedly looking up non-existing files or directories (when cache is enabled).\n\nThis change adds negative metadata cache entries: whenever a lookup fails because an object does not exist, we cache a “negative” entry with the same TTL as for successful lookups and use it to reply to subsequent kernel requests for the same name.\n\nThe negative entries are maintained separately from the inode tree using the new `NegativeCache` type, which enforces an upper limit to the number of entries and handles their expiration.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Enforce maximum value for metadata TTL (100 years)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Document negative cache limit\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-07T10:14:02Z",
          "tree_id": "5439d3f4271fb7ea02febddef9f9b63441cced7f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53e22be32f9a3c0b0f7550c4d4a247837a7bccc5"
        },
        "date": 1707302839737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.913,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.3826441,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.2463165,
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
          "id": "911255fa7df0b093eb52c68e68eb8cef15d901a7",
          "message": "Update to GA release of Rust SDK (#732)\n\nThis is mostly pretty straightforward with the exception of handling S3\nExpress One Zone, which isn't yet supported in the Rust SDK, but the SDK\nis now aware of its existence. The new SDK doesn't understand the\n`sigv4-express` auth scheme that Express buckets resolve to, and falls\nback to no auth at all. And we can't skip over the endpoint resolution\nby leaving out the bucket name any more because the SDK now validates\nthat bucket is present.\n\nOur new workaround is to insert an endpoint resolver that just forces\nSigV4. We still get to use the real endpoint resolver to figure out\neverything else, including the endpoint URL (so that variable can be\nremoved). We can remove this hack once the SDK gains Express support.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-07T15:38:48Z",
          "tree_id": "1feaca574a8fb31ac42498f3d1e21231e22710e3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/911255fa7df0b093eb52c68e68eb8cef15d901a7"
        },
        "date": 1707322470824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.546,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.71523429999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.05377440000001,
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
          "id": "14e1496716b3dd02d1033951ba045d8d24df7f5f",
          "message": "Update CRT submodules to latest releases (#737)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T16:12:13Z",
          "tree_id": "d4ec4f76c2799c694da9d1e2f42697cb4d520de6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/14e1496716b3dd02d1033951ba045d8d24df7f5f"
        },
        "date": 1707324635399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.578,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.1393427,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.0180539,
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
          "id": "d959640b34b0607be4ece382482f893a4b851069",
          "message": "run the binary mount-s3 for benchamrks (#739)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T22:27:13Z",
          "tree_id": "a939a0e2631e002dbef8a2abe8c4d39ac9eb4fa7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d959640b34b0607be4ece382482f893a4b851069"
        },
        "date": 1707346363930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.102,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.5050163,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.876934299999995,
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
          "id": "61a0133dfb8ee7e7f1722c6ed89070d9b1141736",
          "message": "Fix the updated clippy error (#742)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-09T15:49:39Z",
          "tree_id": "b091aa65ba5ed58f7ce53df94f8d9852fbe5875a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61a0133dfb8ee7e7f1722c6ed89070d9b1141736"
        },
        "date": 1707495275455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.347,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.067146,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.120595,
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
          "id": "cfc11cd0020cd6118231d08795484197d890f72c",
          "message": "Fix packaging workflow on AL2023 (#741)\n\nIt sets a much higher ulimit for open files, and that seems to interact\nbadly with `yum` on Centos 7. The net result is that our packaging\nworkflow takes hours\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-09T16:07:02Z",
          "tree_id": "86dd6c761c7ce31b7578ebdda9aae965cf9b6fb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfc11cd0020cd6118231d08795484197d890f72c"
        },
        "date": 1707496333669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.69,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.2408309,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 89.9979684,
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
          "id": "0b980a0fc8c50e75b2a3ef45ba56a8766a51528a",
          "message": "Add support for --sse, --sse-kms-key-id flags under a feature flag (#715)\n\n* Add support for --sse, --sse-kms-key-id flags\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor erroneous_write_sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix clippy\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-09T16:32:49Z",
          "tree_id": "f9d3a161ff7c6eadd8529a9c80bdfbb46abd1282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b980a0fc8c50e75b2a3ef45ba56a8766a51528a"
        },
        "date": 1707497887804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
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
            "value": 10.184,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2928392,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.325006,
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
          "id": "0ef41589b9e273fc1ca02e05aa3319c26d29b3ba",
          "message": "Update libgit2-sys 0.16.1 to 0.16.2 (#746)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-12T11:52:22Z",
          "tree_id": "43ea5f45665640e346ef7dd5a2e6138f34709b0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ef41589b9e273fc1ca02e05aa3319c26d29b3ba"
        },
        "date": 1707740286409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.275,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.57773909999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.68498029999999,
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
          "id": "a3e61687ff58fbb9b2b32e81f1e9def07eccc876",
          "message": "Release new mountpoint-s3-client crate version (#747)\n\n* Release new mountpoint-s3 client crate version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the release to v0.7.0\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-12T17:31:34Z",
          "tree_id": "23059aa1f9f81d3d9821e639e646f72540a2dca2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3e61687ff58fbb9b2b32e81f1e9def07eccc876"
        },
        "date": 1707760772887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.431,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.7393823,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.0981847,
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
          "id": "dce1480c723aa6ecfef7e0caca6581c64266c9c7",
          "message": "Raise filter for metrics tracing spans to WARN (#748)\n\nThis change avoids unnecessary invocations of the CRT log handlers,\nwhich are fairly expensive and therefore worth avoiding, but it's a bit\nof a journey to explain why and how.\n\nThe `MetricsTracingSpanLayer` is how we get end-to-end latencies for\nFUSE operations. It tracks the spans created by the `fuse` module and\nemits latency metrics at the end of them. To do this, it filters for\nthose spans, and that filter specifies both a target name and a maximum\nlevel, which is currently DEBUG. This tracing layer gets added to the\nregistry we construct in `init_tracing_subscriber` at mount time.\n\nBecause this filter asks for DEBUG-level spans, the overall tracing\nsubscriber sets its maximum level to DEBUG, even though (in our default\nconfiguration) we only emit logs at WARN and below. This maximum level\nis how `tracing` and `log` can cheaply check whether to skip\nconstructing a log event -- they check if the log event's level is\nhigher than the maximum level. So setting the maximum level to DEBUG\nmakes this cheap filtering less effective, and some log messages will be\nconstructed but not emitted (because they'll fail the actual, more\nexpensive check) as a result.\n\nOne place that uses this cheap filtering is our CRT log adapter. The CRT\nlogging macros call `get_log_level` to find out what the maximum log\nlevel currently being emitted is, and skip calling the actual log method\nif they're trying to emit a log message at a higher level than that. Our\nimplementation of `get_log_level` checks the maximum level set by the\ntracing subscriber (via `log::max_level()`, which is set by\n`tracing-log`).\n\nThe net result is that the CRT logging macros end up calling their\nactual log methods more often than they need to, because even though we\nset CRT logging to off by default, the `log::max_level()` is set to\nDEBUG because of the logic above. And because of some Rust/C FFI\nweirdness, these methods are somewhat expensive: they need to construct\nthe entire log message before they can filter to decide if the message\nshould actually be emitted (this is what the the\n`aws_crt_s3_rs_logging_shim_log_fn_trampoline` method does). In\nbenchmarks, this log construction can show up in profiles as up to 5% of\nour CPU cycles even though none of these log messages will actually be\nemitted.\n\nTo fix this, we can change the maximum level of the\n`MetricsTracingSpanLayer`'s filter to WARN. The spans it's interested in\nhave been at warning severity for quite a while, so this doesn't change\nanything about our actual logging. But it does mean that the tracing\nsubscriber can now set its maximum level to WARN instead of DEBUG, which\nmakes the cheap filtering effective for the CRT log handlers, avoiding\nconstructing every DEBUG-or-below log message only to throw it away.\n\nAs a simple test, we can use perf to count how often the CRT log handler\nis invoked:\n\n    $ sudo perf probe -x target/release/mount-s3 -a aws_crt_s3_rs_logging_shim_log_fn\n\nBefore this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:05:56.471429Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=33.846617ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                592      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\nAfter this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:01:17.588700Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=41.092086ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                    8      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\n        0.071456784 seconds time elapsed\n\n        0.019072000 seconds user\n        0.012727000 seconds sys\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-13T14:04:05Z",
          "tree_id": "567dd0565fdd8f5903e618e6acd24741334987e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dce1480c723aa6ecfef7e0caca6581c64266c9c7"
        },
        "date": 1707834602262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.192,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.0265695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.45742059999999,
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
          "id": "18f774ef6162f8c8bca3bc6a5603ada8224d3045",
          "message": "Set default binary in mountpoint-s3 crate manifest (#753)\n\n* Set default run binary in mountpoint-s3 manifest\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert \"run the binary mount-s3 for benchamrks (#739)\"\n\nThis reverts commit d959640b34b0607be4ece382482f893a4b851069.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-15T16:47:33Z",
          "tree_id": "2075c9ab82c2ab82b1afb563f4fb5ed87d2aff72",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f774ef6162f8c8bca3bc6a5603ada8224d3045"
        },
        "date": 1708017425973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.246,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.1905733,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.81547909999999,
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
          "id": "77ee71d30d3085c33485b0b2d2b6f5074f69daec",
          "message": "Split up overwrite tests (#756)\n\nSeparate tests should make it easier to isolate workloads with race conditions.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-16T10:20:47Z",
          "tree_id": "7df93f376fafb25ba9e7ef228b4dd699a40692c0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77ee71d30d3085c33485b0b2d2b6f5074f69daec"
        },
        "date": 1708081943964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.745,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.53205109999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 73.29146109999999,
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
          "id": "dd901f33cdd8483f1988bd692f99cb66799c39ac",
          "message": "Fix issue preventing reads after flush on a file handle (#751)\n\n* Add test to reproduce bad descriptor issue\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix issue preventing reads after flush on a file handle\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Initialize file handle type at open\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore overwrite after read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add entry in CHANGELOG\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Raise logging of file handle type choice to debug\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix panic message in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure consistent behavior in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add test for write-only handle opening empty file and closing it\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry refering to eager file handle initialization\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:08:50Z",
          "tree_id": "1a591bbe417c980a79453bf6edfa2b4cf5e09422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd901f33cdd8483f1988bd692f99cb66799c39ac"
        },
        "date": 1708097802054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.442,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.2787843,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.0330528,
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
          "id": "1c00fd3084d59a8b72db2b4cf39785342ea87736",
          "message": "Release v1.4.1 (#758)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:58:36Z",
          "tree_id": "5b3ac2f4989cae21137add0b87ca6d59e3010be9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c00fd3084d59a8b72db2b4cf39785342ea87736"
        },
        "date": 1708099767555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.887,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.8144135,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.5770723,
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
          "id": "022f915f76535e517175a8e11291eedaeec92932",
          "message": "Add example for low-level CRT S3 client (#760)\n\nThis is just to have a simple benchmark for estimating entitlement when\nmost of the Rust datapath is out of the picture.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-19T17:07:30Z",
          "tree_id": "6b475fa94980471600e9c858b3f4b16043f1ad02",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/022f915f76535e517175a8e11291eedaeec92932"
        },
        "date": 1708363970315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.809,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.1949437,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.1748867,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708528394975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.648,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.0749807,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.76308279999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708528597615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.488,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.2571152,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.7909384,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce",
          "message": "Fixing the benchmark tool to be customBiggerIsBetter.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:06:41Z",
          "tree_id": "223186e5f2570285810c699dd553261fd9878ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce"
        },
        "date": 1708528819635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.444,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.8887592,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.61385,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "f7278d7f2a209770579d876deb0785d9dae54777",
          "message": "Make caching benchmark do 10 iterations.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:37:23Z",
          "tree_id": "651de54e211fda4c7d9a02874fedfacd23e7d60e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f7278d7f2a209770579d876deb0785d9dae54777"
        },
        "date": 1708534505116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 57.231568100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.883121700000004,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "158502535+andrewatamzn@users.noreply.github.com",
            "name": "andrewatamzn",
            "username": "andrewatamzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a67f78995879857cff5003ff900f5793d945abc",
          "message": "update caching docs (#763)\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>",
          "timestamp": "2024-02-22T01:12:31Z",
          "tree_id": "65a84a5bd829b46bb56d2c3fd3afd4b4fbc08a5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a67f78995879857cff5003ff900f5793d945abc"
        },
        "date": 1708565847846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.371,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.8969205,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.7937735,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}