window.BENCHMARK_DATA = {
  "lastUpdate": 1744301252383,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "5a74b446eb106a24445b8acdacc448f00e428efc",
          "message": "Reduce memory used to store inode names (#1305)\n\nEach inode currently stores two separate strings for the key and the\nname (always contained in the key string), resulting in redundant memory\nusage. This change introduces a new `ValidKey` type which avoids the\nduplication by only storing the key and the offset of the name for O(1)\nretrieval.\n`ValidKey` (and the related type `ValidName`) also enforce validation\nfor the name and the whole key at construction time, allowing calling\ncode to rely on the strings to be well-formed.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-13T10:31:00Z",
          "tree_id": "80131daaac7c2c98987392ee3bbb6b646e4c015f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a74b446eb106a24445b8acdacc448f00e428efc"
        },
        "date": 1741869925245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12152.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23226.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36643.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35844.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38964.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11950.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12195.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10381.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 503.78515625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "17cfb00ffb727624c45d934bedcdf430b22a6c1b",
          "message": "Extract the mountpoint code into mountpoint-s3-fs library crate (#1304)\n\n* Move the code from `mountpoint-s3/src` binary crate to the new\n`mountpoint-s3-fs` library crate\n* Move all the tests except based on binary path (`cli.rs` and part of\n`fork_tests.rs`) from `mountpoint-s3/tests` to `mountpoint-s3-fs/tests`\n* Move the examples from `mountpoint-s3/examples` to\n`mountpoint-s3-fs/examples`\n* Move the network performance script from `mountpoint-s3/scripts` to\n`mountpoint-s3-fs/scripts`\n* In app's main.rs and in `mock-mount-s3.rs` call the `main` function\nfrom the library crate\n* Add a third argument to the `main` function's interface for passing\ncontext parameters. Currently it's just an app's full version from the\nbuild info which is required for building user agent.\n* Add a third argument to the `mount` function's interface for passing\n`context_params`\n* Move `version` field from `CliArgs` struct to the newly introduced\n`AppCliArgs` which sits in the main app\n* Lock `futures` version as Cargo doesn't allow to publish crates with\nwild-carded dependencies' versions\n* Keep build info inside the `mountpoint-s3` crate to preserve version\ninfo\n* Keep tests based on binary inside the `mountpoint-s3` crate\n* Keep some of the common tests helpers inside the `mountpoint-s3` (code\nduplication)\n* Keep filesystem benchmarks inside the `mountpoint-s3` crate\n\nThis PR is marked as performance to test benchmark scripts.\n\n### Does this change impact existing behavior?\n\nThis change doesn't change the behavior, it changes the repository\nstructure and introduces the new crate.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAs a next step we need to add an entry in the `mountpoint-s3` change log\nmentioning the new `mountpoint-s3-fs` namespace in logs and metrics\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-13T17:11:34Z",
          "tree_id": "6858aae4b841823fa5790484253bf709ab9a46a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17cfb00ffb727624c45d934bedcdf430b22a6c1b"
        },
        "date": 1741893873915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10123.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19902.94140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31088.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34329.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33876.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9840.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9887.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12220.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 938.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 531.640625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b21c746ee46b875e166f332eeab275004d9a24",
          "message": "Update CRT submodules to latest releases (#1318)\n\n* Update to latest CRT dependencies and prepare release for:\n\n  * `mountpoint-s3-crt-sys`\n  * `mountpoint-s3-crt`\n  * `mountpoint-s3-client`\n\n ```$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\nPackaging mountpoint-s3-crt-sys v0.12.1\n(/local/home/evdolgy/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version change?\n\n`Unreleased` sections were aded in crates' change logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license and I agree to the terms of the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-14T15:28:56Z",
          "tree_id": "bd77f30bc20b14277c67bdc48ea6989881399494",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02b21c746ee46b875e166f332eeab275004d9a24"
        },
        "date": 1741974288762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14002.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22717.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34670.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32531.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38609.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11665.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12096.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12208.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 785.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.94140625,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742503292534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12641.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17964.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31810.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35801.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30609.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9359.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10829.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11166.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1091.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 707.0546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "evdolgy@amazon.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7f6b98915b7fce7dacf6703c2a363073484f0",
          "message": "Update the changelog for mountpoint-s3 (#1319)\n\nAs a follow-up for this\n[PR](https://github.com/awslabs/mountpoint-s3/pull/1304#pullrequestreview-2682411235)\nwe add a new entry in the `mountpoint-s3` change log.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log was updated. No version change requred.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-28T13:21:37Z",
          "tree_id": "52fc13f9da26c7fa8752cb1d6fb0cfd72cf087b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7f6b98915b7fce7dacf6703c2a363073484f0"
        },
        "date": 1743176307187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12774.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22557.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36416.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31461.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33239.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10941.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10849.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10995.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 872.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 583.40234375,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743444145559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10382.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21779.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35554.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 370.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 903.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 824.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33640.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37814.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8500.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12591.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11676.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 944.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 583.28515625,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743511237984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11876.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21659.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33979.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 924.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 842.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36354.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34666.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10321.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11640.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11040.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 546.421875,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518254382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13014.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21903.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34497.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 926.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 378.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37112.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36579.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10171.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10687.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11617.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 862.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.2578125,
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
          "id": "a776670203be61492db27865158ab5a0fd38a323",
          "message": "Refactor internal S3 client methods to initiate meta-requests (#1337)\n\nRe-organize the group of internal methods in the S3 client used to\ninitiate CRT meta-requests. Follow-up to the changes in #1334.\n\nWith this change, `S3CrtClientInner` provides 4 methods:\n* `meta_request_with_callbacks`: the lowest-level method, which allows\nmore customization through callbacks. It is the basis for the other\nmethods and it is used directly by `get_object` and `put_object`.\n* `meta_request_with_body_payload`: simpler variant that returns the\nresponse body. Used by `list_object` and `get_object_attributes`.\n* `meta_request_with_headers_payload`: variant returning the headers,\nbut no body. Used by `head_object` and `put_object_single`.\n* `meta_request_without_payload`: simplest variant, only returns error.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Internal change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T14:01:57Z",
          "tree_id": "f180fa28ec38620e474990e96c4f5c2d9f485fa0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a776670203be61492db27865158ab5a0fd38a323"
        },
        "date": 1743524224121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12978.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20312.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31246.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 904.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34217.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34205.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10343.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11601.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12383.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 632.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.28515625,
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
          "id": "829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4",
          "message": "Bump `mountpoint-s3` version to 1.16.0 (#1341)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:22:09Z",
          "tree_id": "455fb125eca9141a8377ce09f5b30ccedfea1c51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4"
        },
        "date": 1743532640909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11436.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16935.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31617.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 925.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 761.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35284.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29490.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10725.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11349.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11527.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 599.875,
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
          "id": "338e400b2e6dae2ad2a231f01e4d2de4149bdd25",
          "message": "Create a package with custom extension (#1340)\n\nAdd a `--pkg-extensions` CLI flag which specifies which packages to\nbuild and how to name them. Package type is inferred from top-level\ncomponent of the provided extension.\n\nAlso add a validation script for such packages.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-02T15:06:43Z",
          "tree_id": "ba352c13bf71fbe020d339a581abd0e4b8f6e095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338e400b2e6dae2ad2a231f01e4d2de4149bdd25"
        },
        "date": 1743614411655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12775.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20665.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32785.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 368.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 941.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 379.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 294.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 852.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34629.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36439.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10134.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9471.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11156.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.53515625,
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
          "id": "6611aaf5822d42dbb208a18e626ab462163a80cf",
          "message": "Reduce memory usage for strings in inode metadata (#1346)\n\nReduce memory usage for strings included in inode metadata, like object\nkeys, etags, and inode names. Using a `Box<str>` instead of a `String`\nensures that no slack capacity is wasted and saves the `usize` field to\nkeep track of the buffer capacity.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-03T12:14:24Z",
          "tree_id": "25051904ee5fec89f725aaa1df0b2bb0cff986a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6611aaf5822d42dbb208a18e626ab462163a80cf"
        },
        "date": 1743690645157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12744.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21734.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34782.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 905.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 825.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31456.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30599.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9534.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10579.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12154.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 874.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.89453125,
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
          "id": "f248ce85c9a43b1a6411050c9129d0cdebfe4670",
          "message": "Release 1.16.1 (#1349)\n\nUpdate the changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T13:04:52Z",
          "tree_id": "b72211dcdd3f5ad08ef54972072c4ce78b027872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f248ce85c9a43b1a6411050c9129d0cdebfe4670"
        },
        "date": 1743693672253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11301.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22697.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32866.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 908.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 773.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32757.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35802.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9199.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8783.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11301.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 861.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 513.7578125,
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
          "id": "f488a2d17a96131408602da5cb8b9a46a0116b01",
          "message": "Update changelog for mountpoint-s3-fs 0.1.2 (#1351)\n\nUpdate changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T14:41:22Z",
          "tree_id": "3013fb2a4653732d870d6e1ec6b2c4e31b82f41b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f488a2d17a96131408602da5cb8b9a46a0116b01"
        },
        "date": 1743699464601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13693.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21775.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36262.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 923.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 817.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36226.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40110.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9265.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10032.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11358.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 844.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.03515625,
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
          "id": "59391ff3850b3b6fc76e904095c61f47692f4bc1",
          "message": "`GetObjectResponse` returns part content as `Bytes` rather than `Box<[u8]>` (#1348)\n\nModify the `GetBodyPart` type streamed from `GetObjectResponse` so that\nit exposes the part content as a `Bytes` type, rather than as a\n`Box<[u8]>`. This is an API breaking change for `mountpoint-s3-client`,\nwhich will require minor adjustments for users consuming the part\ncontent. The switch to `Bytes` will enable the introduction of different\nbuffer allocation strategies in future releases.\n\n### Does this change impact existing behavior?\n\nNo functional changes, but it is a minor API breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it changes `mountpoint-s3-client` public API.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-04T15:42:58Z",
          "tree_id": "29daff49b3e017df05f0335eea6222067446765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59391ff3850b3b6fc76e904095c61f47692f4bc1"
        },
        "date": 1743789344024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13627.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21675.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31681.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 892.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 796.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37078.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36296.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8894.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12144.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10032.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 735.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.64453125,
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
          "id": "1053739c23bcf5f2e44b46bc0ff84b91ff22e62a",
          "message": "Update tokio versions (#1353)\n\nUpdate tokio to newest version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-07T08:43:36Z",
          "tree_id": "3d1184a87bc0645686b4851484fe84075f4c9872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1053739c23bcf5f2e44b46bc0ff84b91ff22e62a"
        },
        "date": 1744023521539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14009.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21242.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34975.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 908.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 378.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 807.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34398.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36726,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10406.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9820.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12337.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 784.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.37890625,
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
          "id": "2a2f84fc979af46e6333bbc21cb6592cbe25b713",
          "message": "Update instructions for publishing crates (#1350)\n\nUpdate the guidance for publishing crates to include `mountpoint-s3-fs`\nand `mountpoint-s3-fuser`, in addition to the client crates.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-07T12:18:48Z",
          "tree_id": "a48f3eb0e3a5bf03430d8eb54716991b0b95f9d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a2f84fc979af46e6333bbc21cb6592cbe25b713"
        },
        "date": 1744036328603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15065.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20455.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31312.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 910.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 824.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33150.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 369.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34566.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9932.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11179.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12775.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 748.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 418.28515625,
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
          "id": "fc73518864ad2aac7e1eeb6d1ae2afb58a55663e",
          "message": "Fix an issue where GetObject requests may not be cancelled (#1355)\n\nThe change in #1334 introduced an issue where a GetObject request would\nstill run to completion if the future returned by the `get_object`\nmethod in `S3CrtClient` was dropped before being ready.\n\nIn Mountpoint, this would affect random read workloads where dropped\nprefetcher requests would not always be cancelled, resulting in reduced\nthroughput and increased memory usage.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2025-04-09T11:10:41Z",
          "tree_id": "3896bb8143c896f86c4cad3afaa50c5d7f8fa84f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc73518864ad2aac7e1eeb6d1ae2afb58a55663e"
        },
        "date": 1744205138494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11783.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20200.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36452.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30053.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35481.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12573.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11452.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12054.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 745.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.5390625,
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
          "id": "a56801141e8c48b3138bf4ce666f900af22ab5e0",
          "message": "Prepare for 1.16.2 release (#1357)\n\nUpdate CHANGELOGs (including changes from\n`mountpoint-s3-client-0.13.3`).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-09T14:03:28Z",
          "tree_id": "7c98bc87c139e924fe379a0b5b4cc650a05ca982",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a56801141e8c48b3138bf4ce666f900af22ab5e0"
        },
        "date": 1744215579036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13760.1015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20205.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37567.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34629.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34246.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11841.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9443.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12270.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.5859375,
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
          "id": "b04724d929f2c529332e71d744a06be7a2c9c1bb",
          "message": "Update client_benchmark to report Gib/s, disable ANSI in logs (#1361)\n\nReport throughput in Gib/s and disable ANSI escape characters in\nbenchmark logs.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-10T13:55:01Z",
          "tree_id": "6e40bdae66b7c4bad63691031ac3c046c43567f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04724d929f2c529332e71d744a06be7a2c9c1bb"
        },
        "date": 1744301252335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13001.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22044.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33317.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34265.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37173.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10491.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12720.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12717.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 516.5390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}