window.BENCHMARK_DATA = {
  "lastUpdate": 1744723593617,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518258899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15135.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26124.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39900.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1327.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 432.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 939.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41975.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41020.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10729.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12881.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11622.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.40625,
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
        "date": 1743524165705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12156.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26041.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41418.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1280.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 435.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 975.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 295.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37119.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37161.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15048.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13193.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13228.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.875,
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
        "date": 1743532609528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17284.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30198.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 44370.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1317.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 939.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39450.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40394.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12596.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14058.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13598.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.640625,
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
          "id": "c717bdb788024b96da7b5678a8ff62176e24bac8",
          "message": "Release Mountpoint v1.16.0 and Rust crates (#1342)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:59:49Z",
          "tree_id": "d762fcd5550e42bb84246e815dfeac5c788fcf3a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c717bdb788024b96da7b5678a8ff62176e24bac8"
        },
        "date": 1743534810242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16357.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29156.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45342.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1334.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 950.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37209.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40655.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14283.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12220.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11673.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.04296875,
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
        "date": 1743614358557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15141.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26856.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41422.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1344.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 438.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 287.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 979.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 291.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36718.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38273,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11713.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14379.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10100.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.5,
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
        "date": 1743690590001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16994.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28412.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41186.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1340.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 951.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 288.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36227.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39027.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12102.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12327.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13674.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.125,
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
        "date": 1743693641973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15821.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28808.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39114.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1249.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 443.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 295.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 948.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 298.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39223.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12917.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11562.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11270.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.0234375,
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
        "date": 1743699412860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14962.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27111.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38599.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1296.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 424.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 934.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 278.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39084.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37688.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12840.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12658.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12638.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.04296875,
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
        "date": 1743789349065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14947.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26482.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38818.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1321.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 289.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 917.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36109.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38146.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14120.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13749.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12784.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.82421875,
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
        "date": 1744023513409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15270.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28634.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40480.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1472.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 295.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 956.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 291.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36036.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38018.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12582.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13002.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10612.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.3515625,
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
        "date": 1744036279048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14594.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28749.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38654.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 410.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1298.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 930.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37546.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39034.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12135.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13426.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11654.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.02734375,
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
        "date": 1744205054646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16979.69140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24777.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39476.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 181.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38615.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38439.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13733.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13166.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11384.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.7890625,
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
        "date": 1744215528235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15395.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30720.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38043.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 409.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 171.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40743.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40759.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12603.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12860.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13437.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.54296875,
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
      }
    ]
  }
}