window.BENCHMARK_DATA = {
  "lastUpdate": 1746546101141,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "b04724d929f2c529332e71d744a06be7a2c9c1bb",
          "message": "Update client_benchmark to report Gib/s, disable ANSI in logs (#1361)\n\nReport throughput in Gib/s and disable ANSI escape characters in\nbenchmark logs.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-10T13:55:01Z",
          "tree_id": "6e40bdae66b7c4bad63691031ac3c046c43567f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04724d929f2c529332e71d744a06be7a2c9c1bb"
        },
        "date": 1744301243464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16203.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24085.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40548.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41599.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35743.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12472.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14300.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11642.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.5390625,
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
          "id": "e85566e5bd85e295f490b5f80ae05f5d0fe966e3",
          "message": "Make CRT memory limit configurable in Mountpoint's S3 client (#1363)\n\nThis is useful for benchmarking Mountpoint client with different memory\nlimits.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for the client. Updated minor version of `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-11T11:18:49Z",
          "tree_id": "91d35f68fc39337602d0811b5a2ab0f567841a51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e85566e5bd85e295f490b5f80ae05f5d0fe966e3"
        },
        "date": 1744378384773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15378.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24425.02734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43616.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 160.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36148.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42195.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12375.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11194.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10917.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.04296875,
            "unit": "MiB"
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
          "distinct": false,
          "id": "d3572ed4b64cec0852afc1a14be375bb7667f37d",
          "message": "Return `GetRequestTerminatedUnexpectedly` error if first `GetObject` request terminates early (#1360)\n\nTo read data from S3, we use `read_from_client_stream` method. This\nmethod creates two `GetObject` requests, with different ranges (if there\nare enough data to read):\n1. Starting position to `initial_read_window_size` (by default 1.125\nMiB)\n2. Starting position + `initial_read_window_size` to end position (by\ndefault end of the object)\n\nTo limit memory usage, `read_from_client_stream` applies a back pressure\nbetween these two requests. It doesn't send the second request until the\nhalf of the first request has been consumed (signalled via\n`BackpressureController::send_feedback`). It understands this by using\n`BackpressureLimiter::wait_for_read_window_increment(<second request\nstarting pos>).await`. Therefore, the `read_from_client_stream` assumes\nthat, the consumer will consume first request and then will increase the\nread window. This could fail if a faulty `ObjectClient` returns a\n`GetObject` stream that terminates early before producing the whole\nrequested range.\n\nThis PR fails at runtime if a faulty client returns less data than we\nexpect. Previously, the `read_from_client_stream` would hang at\n`wait_for_read_window_increment` call forever.\n\n\n### Does this change impact existing behavior?\n\nNo breaking change, Mountpoint will return an `read_from_client_stream`\nerror instead of hanging forever if this issue happens.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nProbably doesn't require a changelog entry. This PR also makes some\nbreaking changes on `FailureClient` in `mountpoint-s3-client` crate, but\nthe `FailureClient` seems like doc hidden and not sure if it requires a\nchangelog entry as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:17:27Z",
          "tree_id": "4cce47aaa62b9ae47b854c8792c219e2eb923fdd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3572ed4b64cec0852afc1a14be375bb7667f37d"
        },
        "date": 1744392725263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15988.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26565.80859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 47648.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40205.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38070.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12313.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10659.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9556.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.1328125,
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
          "id": "c60658bbafad5fc405746dde8e7af72b7f6597e4",
          "message": "Update CONTRIBUTING.md to describe in more detail version number changes (#1365)\n\nThis change updates the contributing guide following the decision to\ninterpret new features/functionality as \"patch\" versions for unstable\ncrates (0.x.y). We document it here to avoid future ambiguity.\n\nSome minor outdated documentation is also updated.\n\n### Does this change impact existing behavior?\n\nOnly to repository processes - namely how we update versioning. We will\nensure that for unstable crates, behavior changes will update the second\nnumber (0.X.y) while feature additions or bug fixes will update the\nthird number (0.x.Y).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, process and docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-11T15:22:46Z",
          "tree_id": "36aff5f595ac2c6d0a8975afe8daf9f66253b50e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c60658bbafad5fc405746dde8e7af72b7f6597e4"
        },
        "date": 1744393023130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17082.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24120.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40301.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 163.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36681.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36371.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11148.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13758.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9783.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.37890625,
            "unit": "MiB"
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
          "id": "8571e0b376911b351cd86e1d02188806c4e34a7a",
          "message": "Apply `EnvFilter` as a global filter rather than a per-layer filter (#1364)\n\nCurrently, the `EnvFilter` – the filter that decides which spans and\nevents should be processed or ignored – applied to each layer (i.e.,\nfile layer, syslog layer, and console layer). This would allow us to\ndecide what spans and events should be processed at layer-level, but\ncurrently we use the same filter at each layer.\n\nThis PR updates logging configuration to apply the filter at\nglobal-level rather than at layer-level. The main motivation is adding\nthings like\nhttps://github.com/awslabs/mountpoint-s3/pull/1347/commits/e821cf6fbcd24f473ddfb8619ff1a3bd849b6fd3,\nwhere we could have only one global filter, and we could tweak that\nfilter in some cases. Doing this with per-layer filter would also be\nokay, but it would require a bit more effort to handle/decide.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:24:50Z",
          "tree_id": "965768b536f40ada466ed2740736b9c6ea8df8f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8571e0b376911b351cd86e1d02188806c4e34a7a"
        },
        "date": 1744393540797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15218.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27505.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41731.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 249.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43014.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40881.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12651.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11629.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10876.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.41015625,
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
          "id": "0e0ab01e8373d20228b9ad3e9c22af44594d3dd7",
          "message": "Make fio io engine configurable in benchmark. (#1359)\n\nCurrently we pick a different io engine based on direct io\nconfiguration. However, the io engine configuration should be\nindependent.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-14T09:41:56Z",
          "tree_id": "b169226cec2c64ccc4b787f309c97465989ef4b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e0ab01e8373d20228b9ad3e9c22af44594d3dd7"
        },
        "date": 1744631696373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15232.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27322.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38385.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37068.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35806.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12773.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13711.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10762.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.84375,
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
          "id": "aab77aba23e60ac1f732ffdef38815db0de8673a",
          "message": "Inline ObjectInfo to ReaddirEntry (#1366)\n\nThe type `object_client::ObjectInfo` is `#[non_exhaustive]` so it cannot\nbe constructed outside of the defining crate. In future we may want to\nconstruct `ReaddirEntry`-s without using the client, but from data\nstored on disk. As a workaround we inline ObjectInfo to ReaddirEntry.\n\n### Does this change impact existing behavior?\n\nNo. This change is an implementation detail of the `readdir` module.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-15T11:12:30Z",
          "tree_id": "d6cc3e9d82bb7a7c651ce4b0367b2224cb9836b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aab77aba23e60ac1f732ffdef38815db0de8673a"
        },
        "date": 1744723593568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16784.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27990.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38468.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39077.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38629.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13623.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15612.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9383.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.91796875,
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
          "id": "0c9c094c50e1b655dbcec43f0678cb0557d8f624",
          "message": "Update benchmark chart max datapoints from 20 to 30 (#1372)\n\nBefore this change, benchmark graphs\n(https://awslabs.github.io/mountpoint-s3/dev/bench/) show up to 20 data\npoints where each data point represents a previous commit. One instance\nwe review this is in a weekly meeting, and we feel that more data points\nwould provide more contextual information of what changed as we could\nhave in excess of 20 commits over a period of one or two weeks.\n\nThis change updates the graphs to maintain 30 data points at the expense\nof clarity.\n\n### Does this change impact existing behavior?\n\nNo changes to Mountpoint or its crates. This will allow future benchmark\nruns to maintain 30 data points in graphs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-17T07:47:39Z",
          "tree_id": "bf7d1bfa466a3ec0f341fb43840bb505df56a4b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c9c094c50e1b655dbcec43f0678cb0557d8f624"
        },
        "date": 1744884155708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15244.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27125.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38790.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36106.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38706.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12417.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11336.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12229.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.5390625,
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
          "distinct": false,
          "id": "a88bdf3157419313e550da7f9ba4fdbc307b252a",
          "message": "Compile instance types into rust function  (#1369)\n\nFollow up to #1368.\n\nChanges the script to automatically generate a single rust match\nexpression (wrapped in a function) to get the instance throughput,\ninstead of parsing a `json` file. Additionally, now queries all regions.\n\nThis allows for better maintainability in the future, as we can see any\nchanges to the throughput numbers by looking at the diff in the\ngenerated function.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-17T09:26:27Z",
          "tree_id": "e81ec621eef76ef9a118dd3262587773d78d47c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a88bdf3157419313e550da7f9ba4fdbc307b252a"
        },
        "date": 1744889888127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17628.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27889.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39770.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37027.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38359.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14679.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12378.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11841.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.3046875,
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744895738164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14305.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26024.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42049.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37575.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37755.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14057.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13514.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11736.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 270.56640625,
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904915978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14767.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29222.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35354.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 214.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37876.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38906.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12734.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12074.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13305.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.9140625,
            "unit": "MiB"
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
          "id": "1dcafbb49b0f9060b558f451ffab1d41eeec7861",
          "message": "Allow changing log level dynamically with `USR2` signal  (#1367)\n\nThis PR makes Mountpoint capable of changing log verbosity dynamically\nwith `USR2` Unix signal. The users can send a `USR2` signal to\nMountpoint process, e.g., `kill -USR2 <mount-s3-pid>`, to toggle between\nthe following log verbosity levels:\n  1. Default logging verbosity\n  2. Debug logging for all except CRT (i.e., `debug,awscrt=off`)\n  3. Debug logging for all (i.e., `debug,awscrt=debug`)\n  4. Trace logging for all except CRT (i.e., `trace,awscrt=off`)\n  5. Trace logging for all (i.e., `trace,awscrt=trace`)\n\n### Does this change impact existing behavior?\n\nNo breaking change, a new runtime behavior with `USR2` Unix signal.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, will update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-17T13:52:06Z",
          "tree_id": "6d5f6cdff76b161f33ccb8173ed1b7bae72f4f31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1dcafbb49b0f9060b558f451ffab1d41eeec7861"
        },
        "date": 1744905963903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12916.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29802.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37426.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35318.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40278.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13657.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14335.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11428.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.1171875,
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
          "id": "2e293cf8334db3db4bfa3aae53e63d820a91c127",
          "message": "Move FuseSessionConfig out of cli (#1375)\n\nRefactor `FuseSessionConfig` out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T16:09:25Z",
          "tree_id": "6f2a9ebc10aa77c1413d618eb3dfff22120c6f11",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e293cf8334db3db4bfa3aae53e63d820a91c127"
        },
        "date": 1744914212371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17340.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23448.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45609.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42025.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33613.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11033.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12919.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13052.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 470.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.19140625,
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745325731305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17292.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25398.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39010.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 158.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39554.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33152.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10983.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12790.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12822.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.3984375,
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
          "id": "f2f2a597b2737a84a54f20893076aebb7c2511a0",
          "message": "Add `fstab` CLI parser (#1362)\n\nIntroduce support for invoking Mountpoint with fstab style arguments:\n```\n./mount-s3 example-bucket /mnt/mountpoint -o rw,auto-unmount,allow-root\n```\n\n### Does this change impact existing behavior?\n\nNo breaking changes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, but not yet. This is still WIP\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-04-24T10:53:24Z",
          "tree_id": "49e84d64c478f8a338ef7d2e63f5fb1595e070ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2f2a597b2737a84a54f20893076aebb7c2511a0"
        },
        "date": 1745500000774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15393.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26670.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39072.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37068.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41846.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14914.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13566.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10658.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.3671875,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745518942608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16557.625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28048.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43241.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 211.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40189.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38775.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13550.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14334.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8765.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.78515625,
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745583199232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14068.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23728.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37252.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37045.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39399.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12949.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14039.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11325.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.5390625,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590868354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15039.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26035.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45411.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36328.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36961.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13033.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12777.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10262.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.7890625,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745595548400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14950.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28392.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39233.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 412.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39100.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40409.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11049.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13532.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12936.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.25,
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
          "id": "2063e98a96f4b70fb7753af59c2d634b9fbc5aba",
          "message": "Extract ClientConfig from CliArgs (#1380)\n\nThe new `ClientConfig` type captures all the configuration settings used\nto initialize the S3 client. A `ClientConfig` instance can be built from\nthe relevant arguments in `CliArgs`, integrated with the settings\ndetected from `InstanceInfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T15:30:14Z",
          "tree_id": "4843b7a5a432fcabaa7d23f7a278160d718b8f7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2063e98a96f4b70fb7753af59c2d634b9fbc5aba"
        },
        "date": 1745603089474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16587.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26609.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41682.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34758.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36877.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11929.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13547.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10759.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.6484375,
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
          "id": "28278732ffe316bba78560829259cd1590d9c172",
          "message": "Use manifest in readdir and lookup operations (#1383)\n\nUse metadata stored in an sqlite database instead of s3, when performing\nlookup and readdir.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-28T09:07:25Z",
          "tree_id": "6a8e4cbdd5b12523180c4fa1104f10fd5db0acab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28278732ffe316bba78560829259cd1590d9c172"
        },
        "date": 1745839505817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14416.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22762.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37656.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 401.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41112.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40400.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12069.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15391.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11582.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 352.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.0625,
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
          "id": "fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b",
          "message": "Extract file system configuration from CliArgs (#1387)\n\nMinor change to extract a `S3FilesystemConfig` from `CliArgs`. Part of\nthe effort to move `CliArgs` out of the `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-28T10:28:42Z",
          "tree_id": "852ed279033cf08b021ab42ac8b398ae15fda01f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b"
        },
        "date": 1745844093873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14033.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28509.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41837.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36127.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37737.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15463.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10487.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.91015625,
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
          "id": "b170c5355e085f9b324b4fd882a1c253fdb20fb5",
          "message": "Disable ANSI colors where not supported for fs and client examples (#1385)\n\nSimple change - currently, redirecting the logs to a file will keep ANSI\ncolors. With this change, the scripts will automatically turn off ANSI\ncolors when the standard error output is redirected.\n\nThis change is not urgent as users can turn off ANSI colors using\n`NO_COLOR=1`.\n\n### Does this change impact existing behavior?\n\nFor relevant examples/benchmarks only, ANSI color will be disabled when\nnot supported (i.e. not console output).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-29T10:02:07Z",
          "tree_id": "3d71b5cdead38a987fc6ef47b3582598d33c79cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b170c5355e085f9b324b4fd882a1c253fdb20fb5"
        },
        "date": 1745929006968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17133.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27473.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39312.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34633.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37614.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11111.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12716.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12690.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.9765625,
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
          "id": "2d811308c3e1ed7f62f45fa6fa8538076b074bc3",
          "message": "Remove Prefetch trait (#1388)\n\nSimplify the type signature of `S3Filesystem` and related types by\nremoving the `Prefetch` trait and replacing it with a single\n`Prefetcher` implementation, which has an `ObjectClient` generic\nparameter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T15:20:30Z",
          "tree_id": "8cd468e41a7e85c77349c86f2c06fa1722161e8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d811308c3e1ed7f62f45fa6fa8538076b074bc3"
        },
        "date": 1745948054610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14859.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27683.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43266.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 246.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37766.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34364.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11306.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13772.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10503.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.83984375,
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
          "id": "be17e42d1e9c1e859ac9e203beef5e870dc339bf",
          "message": "Adopt finish_non_exhaustive in manual Debug implementations (#1393)\n\nMinor change to improve manual `Debug` implementations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T16:23:20Z",
          "tree_id": "e2ed10a362552378fa47d5f30e45a1327e896da3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be17e42d1e9c1e859ac9e203beef5e870dc339bf"
        },
        "date": 1745951854890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17756.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28817.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43885.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 162.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39047.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47809.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12377.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12398.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10516.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.2265625,
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
          "id": "dac707f5639842a6d1dfd7aaf27b43e703e15c7d",
          "message": "Add `disk_data_cache.disk_usage_mib` metric (#1392)\n\nAdd a metric to record the amount of space used by cache as estimated by\nMP internally. Relevant for\nhttps://github.com/awslabs/mountpoint-s3/issues/1389.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-30T10:08:46Z",
          "tree_id": "36914fe0b2e80ff06496de9a8159a89bc410732c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dac707f5639842a6d1dfd7aaf27b43e703e15c7d"
        },
        "date": 1746015759937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16545.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25687.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40294.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37703.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36213.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12551.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11789.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8906.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.82421875,
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746192571022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16334.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26105.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41812.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 411.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41319.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36159.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12559.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15365.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11577.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.02734375,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746210215397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16961.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25593.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40767.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40570.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38226.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10776.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13368.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13640.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.046875,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746246520821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15429.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 31232.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37297.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 387.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35738.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36553.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12625.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15128.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11109.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3359375,
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746546101088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15908.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28217.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40388.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38238.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44675.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13033.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13322.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11944.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.21875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}