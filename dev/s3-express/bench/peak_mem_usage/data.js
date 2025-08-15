window.BENCHMARK_DATA = {
  "lastUpdate": 1755262731821,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753324688690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15521.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25335.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40391.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 296.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31517.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36803.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12619.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12048.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9786.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.03125,
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
          "distinct": true,
          "id": "5732b47f04ed2b9280ada532c5346306625ae218",
          "message": "Add thread ID to log messages. (#1460)\n\nThis helps us to understand what's happening with concurrent operations.\n\n### Does this change impact existing behavior?\n\nChanges log message format slightly by adding thread IDs, which may\nmeans scripts that parse these messages need to change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-07-24T09:15:20Z",
          "tree_id": "350586199d5c03f8d368771e4cf3cd4567db03da",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5732b47f04ed2b9280ada532c5346306625ae218"
        },
        "date": 1753356371062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13138.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28709.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40002.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 318.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38873,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41291.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12268.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10607.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10113.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 299.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.0546875,
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
          "id": "c20dd804d324e55767cb3ee62665ccad264c37ec",
          "message": "Implement Deref on pool buffers (#1533)\n\nMinor usability improvement on the buffers for the newly introduced\nmemory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T10:04:25Z",
          "tree_id": "2a15f64dea6a3d194b44019d00f1e909c8c8b414",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c20dd804d324e55767cb3ee62665ccad264c37ec"
        },
        "date": 1753359281083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17139.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27305.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39145.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35244.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35909.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12348.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13440.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11654.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.2421875,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753363950546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28374.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35934.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 291.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 148.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 319.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 228.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30220.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33367.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14250.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12971.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12669.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.44921875,
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
          "id": "6633db0048d429838f09f65ade1804ff666b6def",
          "message": "Set `mem_limit` in `mount_from_config` example (#1537)\n\nSet `mem_limit` in `mount_from_config` example. The value is retrieved\nfrom a json config.\n\n### Does this change impact existing behavior?\n\nNo, only the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-24T16:52:03Z",
          "tree_id": "dc0a7ab42e8372c268cb4c7db30508a4048c0093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6633db0048d429838f09f65ade1804ff666b6def"
        },
        "date": 1753383876293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14374.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26019.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37956.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31667.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39626.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13820.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12430.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13741.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 362.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.265625,
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
          "id": "06deaaac0a57e2527c80d90ec2728309ea1ae45a",
          "message": "Fix issue preventing incremental upload to handle very large write part sizes (#1538)\n\nThe append upload queue tries to limit the total memory used to buffer\nthe data to write to 2 GiB. However, when setting `--write-part-size` to\nvalues greater than 2 GiB, it would incorrectly set the queue capacity\nto 0 buffers and panic.\n\nThis change ensures that the queue allows for at least 1 buffer, even if\nthat means exceeding the 2 GiB cap.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:05:59Z",
          "tree_id": "48ab171e8600cb851f60d9a591acd1968efe1fa2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06deaaac0a57e2527c80d90ec2728309ea1ae45a"
        },
        "date": 1753453037662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15309.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24173.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45493.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 235.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38545.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42668.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13881.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12267.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12733.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.765625,
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
          "id": "15fe956a9e7588de2128f52108af9533cf9ea956",
          "message": "Use a unified memory pool in Mountpoint (#1511)\n\nIntroduces a unified memory pool in Mountpoint. The pool adopts the CRT\npool interface, so it can be used by the CRT client when requesting\nbuffers. Ownership of the buffers is then passed to the prefetcher when\nthey are returned from GetObject requests. The same memory pool is also\nused to serve reads from the local disk cache and for incremental\nuploads.\n\nThe main goal is to reduce overall memory usage and mitigate memory\nfragmentation issues. We may also observe performance gains in some\nscenarios since we can avoid copying the data received from GetObject.\n\n### Does this change impact existing behavior?\n\nNo changes in file system behavior. It will publish new memory-related\nmetrics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires entries in the `fs` and `mount-s3` changelogs and new major\nversions.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:06:27Z",
          "tree_id": "cad4f86f83dd9db2ce67cd92790761cbaedfeb08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15fe956a9e7588de2128f52108af9533cf9ea956"
        },
        "date": 1753453306921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2851.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4546.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8344.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8159.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2096.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.3046875,
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
          "id": "097ab2ee264cbde065592f39155d0cdfc9465f76",
          "message": "Replace full key with S3Location in file handles (#1539)\n\nInternal change to directly propagate `S3Location` in file handles\nrather than the derived `full_key` string. The value is used for logging\nand error report, so we can postpone formatting the string until it is\nneeded.\n\n### Does this change impact existing behavior?\n\nMinor change in string formatting in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:11:05Z",
          "tree_id": "7f0e1c8539c41864f9f3143677aca300f98c9a5d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/097ab2ee264cbde065592f39155d0cdfc9465f76"
        },
        "date": 1753453589261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2833.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4597.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8319.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8164.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2081.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.32421875,
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
          "id": "884323ea89ed9dc7ad612b67c7903cb80e35e9ba",
          "message": "Add usages of INITIAL_READ_WINDOW_SIZE (#1541)\n\nReplaces hard-coded initial read window sizes with usages of the\nconstant `INITIAL_READ_WINDOW_SIZE`.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T15:00:09Z",
          "tree_id": "918432d509e5398a0dc5d3e70734fce49b9dc8ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/884323ea89ed9dc7ad612b67c7903cb80e35e9ba"
        },
        "date": 1753463497037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2877.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4548.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8298.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8308.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.02734375,
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
          "id": "581fdeb95dc511ca5ee39409093a75e4ddee0767",
          "message": "Enforce valid buffer sizes for the memory pool (#1540)\n\nThe memory pool will only accept buffer sizes in the range (0, 64MiB]\nfor the primary memory (i.e. allocated in pages of 16 buffers). For\nlarger sizes, it will only use secondary memory (i.e. ad-hoc allocation\nfor a single buffer).\n\nThe 64MiB cap reproduces the behavior of the internal CRT memory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - part of the memory pool change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T15:35:33Z",
          "tree_id": "40d197e8687e15aaff1c27602db0f85d11c71282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/581fdeb95dc511ca5ee39409093a75e4ddee0767"
        },
        "date": 1753465617368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2847.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8389.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8268.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2095.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.9453125,
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
          "id": "4a5f914f2fda3b4bad1aea57b16da784b41212a4",
          "message": "Make ObjectClient part sizes no longer optional (#1542)\n\nThe `ObjectClient` trait currently defines `read_part_size` and\n`write_part_size` as optional. This abstraction does not apply to any of\nthe existing implementations of the trait and we currently have no plans\nof using it. This change removes this unnecessary abstraction,\nsimplifying the code and avoiding possible confusion.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T16:15:33Z",
          "tree_id": "66d926af874bfa2c6e10d8bfce747ecf98112c80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a5f914f2fda3b4bad1aea57b16da784b41212a4"
        },
        "date": 1753468005495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2836.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4582.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8312.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8159.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8229.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 232.7890625,
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
          "id": "dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e",
          "message": "Prepare for release of the fs crate v0.7.0 (#1544)\n\nUpdate changelogs of the `fs` and `client` crates to prepare for\nrelease.\n\nAlso include previously missing entry in `client` changelog for #1542,\nand increase the crate version number.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-28T11:01:31Z",
          "tree_id": "13558d258862673afe79a1f9a4eb98ca18ce89ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e"
        },
        "date": 1753708541760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2846.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8207.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8130.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8174.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2080.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.40234375,
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
          "id": "2a9a494442fe164e2119e3c020989c19ce198aae",
          "message": "Automated Benchmark Result Upload (#1527)\n\n### What changed and why?\n\nThis PR adds functionality to automatically upload benchmark results to\nan S3 bucket when benchmarks complete. The implementation includes:\n\n1. A new `detect_result_folder()` function that determines the\nappropriate result folder path and source path based on Hydra's runtime\nconfiguration\n2. A new `upload_results_to_s3()` function that uses AWS CLI to sync\nlocal benchmark results to the specified S3 bucket\n\nThese changes enable automated collection of benchmark results in a\ncentralized S3 location, making it easier to analyze performance trends\nover time.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-07-29T13:13:56Z",
          "tree_id": "a81582905f9e86c18ed7af6a4bd2fb58fc16fe0b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a9a494442fe164e2119e3c020989c19ce198aae"
        },
        "date": 1753802661880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2837.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4907.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8294.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8139.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8186.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2091.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 216.3515625,
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
          "id": "720b2e17720e0b2ff7791e2614d20401c72b1f67",
          "message": "Use release flag for prefetcher benchmark (#1547)\n\nHarmonises the use of `--release` compile time flag across benchmarks.\n\nDoes not need a Changelog entry, as it neither changes existing\nbehaviour nor is customer-facing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:28:44Z",
          "tree_id": "3823efe7516dc0113e8565fbcc0cd226ee3b422b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720b2e17720e0b2ff7791e2614d20401c72b1f67"
        },
        "date": 1753890350780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2868.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8432.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8163.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8195.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.28515625,
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
          "id": "315db6035a33a4c9fc568cd9f30a191c0ca3127d",
          "message": "Explicitly specify opt-level, use link-time optimisations (#1548)\n\nExplicitly set the optimisation level for our release builds to 3,\nadditionally enables link time optimisations and uses a single\ncompilation unit -- this enables more optimisations across the full\nlinked codebase.\n\nDoes not need a changelog entry, as it does not change mountpoint's\nbehaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:35:37Z",
          "tree_id": "4f5c1f207414e5cc5e4a8c90029400a3226e1e35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/315db6035a33a4c9fc568cd9f30a191c0ca3127d"
        },
        "date": 1753890783721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8320.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8205.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8141.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 300.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.26953125,
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
          "id": "8392342436f86c0f05698ab7d545b68a169a54fa",
          "message": "Add versioning of the configuration format in mount_from_config example (#1545)\n\nExample binary `mount_from_config` now accepts `config_version`\nparameter. This may be used to ensure that user is aware of updates to\nthe configuration format and prevent from silent failures.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-31T12:47:38Z",
          "tree_id": "94ffd5ae46b249ae2e2b817a62a3028d22aecdf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8392342436f86c0f05698ab7d545b68a169a54fa"
        },
        "date": 1753974192384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2867.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4595.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8237.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8244.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2089.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 346.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 247.0703125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ed5273266768cddf36c4d04f4b175d0e02fb16f",
          "message": "Update logging docs for CSI Driver v2 (#1551)\n\nUpdate logging docs for CSI Driver v2 as in v2 logs are no longer in\nsyslog.\n\nSee\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/LOGGING.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:16:16Z",
          "tree_id": "d963e4a4b4c26756dc660760dbe4085622b7c966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ed5273266768cddf36c4d04f4b175d0e02fb16f"
        },
        "date": 1754314314869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2881.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4583.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8347.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8206.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8202.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 218.859375,
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
          "id": "b8e905035064f1040e09ba1e120dde8f0aa6b14f",
          "message": "Add helpful script for generating summary table from benchmark runs (#1557)\n\nAdds a script that parses the benchmark output and autoamtically creates\na table with only the parameters that changed between runs.\n\nDoes not need a changelog entry, as the script only parses hydra runs. \n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-06T17:32:47Z",
          "tree_id": "ebca5100846db4d4f196c8688795b2ebe287ae85",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8e905035064f1040e09ba1e120dde8f0aa6b14f"
        },
        "date": 1754509485369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2905.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4546.87890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8325.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8203.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8245.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2079.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.12890625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peterxcli@gmail.com",
            "name": "Peter Lee",
            "username": "peterxcli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816",
          "message": "If using custom endpoint, force path style in benchmark script (#1560)\n\n### What changed and why?\n\n**What changed:**\n- Added `--force-path-style` flag to the `optional_args` in\n`mountpoint-s3/scripts/fs_bench.sh` when `S3_ENDPOINT_URL` is set\n- This change ensures that when using S3-compatible endpoints (like\nApache Ozone, MinIO, etc.), mountpoint-s3 uses path-style addressing\ninstead of virtual hosted-style addressing\n\n**Why:**\n- S3-compatible services often don't support virtual hosted-style\naddressing (e.g., `bucket1.localhost:9878`)\n- By default, mountpoint-s3 uses virtual hosted-style addressing which\ncauses 404 errors when connecting to S3-compatible endpoints\n- The `--force-path-style` flag forces path-style addressing (e.g.,\n`localhost:9878/bucket1/`) which is compatible with most S3-compatible\nservices\n- This fix resolves the \"Invalid response status from request\" error\nwhen connecting to non-AWS S3 endpoints\n\n### Does this change impact existing behavior?\n\n**No breaking changes:**\n- This change only affects the behavior when `S3_ENDPOINT_URL` is\nexplicitly set\n- When using AWS S3 (the default), this change has no impact since AWS\nS3 supports both addressing styles\n- The `--force-path-style` flag is additive and doesn't remove any\nexisting functionality\n- Users connecting to AWS S3 will continue to work exactly as before\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n**Changelog entry:** Yes, recommended\n**Version change:** No, this is a bug fix\n\n**Justification:**\n- This is a bug fix that improves compatibility with S3-compatible\nservices\n- It doesn't introduce new features or breaking changes\n- The fix aligns with existing behavior in other benchmark scripts\n(`fs_latency_bench.sh` and `fs_cache_bench.sh` already have this fix)\n- Users connecting to S3-compatible services will now have a better\nout-of-the-box experience\n\n**Suggested changelog entry:**\n```\n## [Unreleased]\n### Fixed\n- Fixed benchmark scripts to use path-style addressing when connecting to S3-compatible endpoints\n  - Added `--force-path-style` flag to `fs_bench.sh` when `S3_ENDPOINT_URL` is set\n  - This resolves connection issues with Apache Ozone, MinIO, and other S3-compatible services\n```\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: peterxcli <peterxcli@gmail.com>",
          "timestamp": "2025-08-07T12:15:28Z",
          "tree_id": "0a3dd7a8082a91c1ee8e4ce44cb83604527979ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816"
        },
        "date": 1754576838188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.33203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4555.87890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8325.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8166.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2085.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2093.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 230.4921875,
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
          "id": "a06f2ef58750be6a56a360734d6f6e2f2b1cb61f",
          "message": "Add changelog for #1560 (#1561)\n\nAdds changelog for #1560.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-07T13:47:56Z",
          "tree_id": "c7e2061319582a6f64d101c7489db6d64b478776",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a06f2ef58750be6a56a360734d6f6e2f2b1cb61f"
        },
        "date": 1754582635314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2840.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4548.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8477.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8209.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8107.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2099.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2087.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 394.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.26171875,
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
          "id": "608dc266af4e6824d66beaecbdc5a0fec2697f70",
          "message": "Add option to disable download checksums in performance tests (#1555)\n\nAdds an option to our benchmarking code to disable verification of\ndownloaded objects integrity.\n\nDoes not change existing behaviour, as it is only enabled when\n`EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION ` is set, and\nthus does not need a changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-07T16:13:09Z",
          "tree_id": "3cf1a53da09c0b84e24d577db0bb2f612bc79b33",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/608dc266af4e6824d66beaecbdc5a0fec2697f70"
        },
        "date": 1754591104184,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2981.56640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8126.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8198.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8173.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2094.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.30078125,
            "unit": "MiB"
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
          "distinct": true,
          "id": "0990c625c346dce35c122bc0c1854b9a5da34373",
          "message": "Add max_memory_target configuration to Mountpoint benchmarks (#1564)\n\nAdd `max_memory_target` configuration and `mem_limiter` Cargo feature\nflag to Mountpoint benchmarks. This is to enable testing mountpoint\nusing Fio benchmarks with a maximum memory limit that the mem_limiter\ncan then react on.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-08T12:24:47Z",
          "tree_id": "5e9c976ce32257eb6e4c4daab823cea3b4357811",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0990c625c346dce35c122bc0c1854b9a5da34373"
        },
        "date": 1754664028345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2884.59765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4543.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8366.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8075.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8142.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2087.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 379.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 217.77734375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64593798+15skumar@users.noreply.github.com",
            "name": "15skumar",
            "username": "15skumar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9235f1138490d1b05a158f217cd309678744b7f9",
          "message": "OpenTelemetry integration with metrics (#1550)\n\nThis PR adds an implementation of OpenTelemetry Exporting of metrics\nthrough the OpenTelemetry protocol (OTLP). Changes are: a new\nOtlpMetricsExporter struct which handles exporting metrics to an OTLP\nendpoint, and integration of the OTLP exporter with the existing metrics\nsystem.\n\nAll of this code is under a compile time flag, named `otlp_integration`\n\nTesting:\nI tested the implementation with a test otlp_metrics() in metrics.rs and\nran a docker container running the OpenTelemetry Collector at the\ndefault port\n\ndocker run -d --name otel-collector \\\n  -p 4318:4318 -p 4317:4317 \\\n  -v $(pwd)/collector-config.yaml:/etc/otelcol/config.yaml \\\n  otel/opentelemetry-collector-contrib:latest\n\nOnce I ran the test, I verified that the test metrics can be viewed in\nthe collector logs. (viewed using 'docker logs otel-collector'). Here is\na screenshot of an example of a test metric collected at the endpoint:\n<img width=\"391\" alt=\"Screenshot 2025-06-18 at 15 32 16\"\nsrc=\"https://github.com/user-attachments/assets/aab7e20a-0472-495b-af1d-23e966495e21\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-11T16:08:44Z",
          "tree_id": "847951c7445398d2f45372b484538f2c564d6405",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9235f1138490d1b05a158f217cd309678744b7f9"
        },
        "date": 1754936640974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4546.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8304.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8180.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8105.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2090.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 359.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.71484375,
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
          "id": "3e4d3cf3a429d9bba903e9521e682147f95d6bb8",
          "message": "Bump `slab` to `0.4.11` (#1568)\n\nBumping `slab` to latest version.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-08-12T13:58:44Z",
          "tree_id": "414df62b6ca77389f85509f034810b684dba1172",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e4d3cf3a429d9bba903e9521e682147f95d6bb8"
        },
        "date": 1755015163848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2875.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8335.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8251.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8248.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1071.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 378.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 215.51953125,
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
          "id": "302224192b1c97ed68f3f0721f63c3b0753d7f13",
          "message": "Add option to get flamegraph (#1570)\n\nAdds possibility to get flamegraphs for a Mountpoint benchmark run,\nusing `cargo flamegraph`.\n\nNo breaking changes, only adds functionality.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:28:30Z",
          "tree_id": "ae229acd069eba9ca7790b9ee9aa821e3c557123",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/302224192b1c97ed68f3f0721f63c3b0753d7f13"
        },
        "date": 1755103494640,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2883.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4541.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8422.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8184.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8254.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2084.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.5234375,
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
          "id": "9297fa45fc0d0509e509f84cd1766cb3664887c4",
          "message": "Small fix for stdev of singleton list (#1572)\n\nFixes a small bug where the autogrouping script to analyse benchmark\nruns in cmd may fail if a group only has 1 benchmark run, as\n´statistics.stdev´ fails when the list has less than 2 entries. In these\ncases, we will now return `N/A` as stddev.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:55:36Z",
          "tree_id": "1d7e73fb174489e9abcc9d87916d196b6f2cd1ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9297fa45fc0d0509e509f84cd1766cb3664887c4"
        },
        "date": 1755105067429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2828.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4604.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8269.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8286.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8184.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2083.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2093.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 347.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 217.77734375,
            "unit": "MiB"
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
          "id": "f88972304d227b03273118ccad077bd8abf97eec",
          "message": "Update readdir and readdirplus metrics to use histogram instead of counter (#1254)\n\nUpdate readdir and readdirplus APIs' `fuse.readdir[plus].entries` metric\nto use histogram instead of counter, as it would make more sense to\nrecord statistics on how many entries were returned in a readdir[plus]\nrequest when there was more than one in a given interval, than recording\nthe total readdir[plus] entries per interval.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1236.\n\n### Does this change impact existing behavior?\n\nYes, the `fuse.readdir[plus].entries` metric type has been changed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it is only updating a metric. Since metric names and availability\nare considered unstable, this does not need a changelog entry or version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>",
          "timestamp": "2025-08-14T15:59:37Z",
          "tree_id": "da313bd426f5f02de72ad31d2c2d43cdcc9a6d9f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f88972304d227b03273118ccad077bd8abf97eec"
        },
        "date": 1755195132426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2885.34765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4529.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8132.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8227.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8215.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2099.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.30859375,
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
          "id": "7e865bdd4f52f730e7b7419dfe15561b556d10e4",
          "message": "Enable resource monitoring for all benchmark types (#1573)\n\nAdds the possibility to run resource monitoring for all benchmark types.\nThis is achieved by introducing a `Command` abstraction that is returned\nby the benchmark. Then when the command has just started executing we\nstart the monitoring with it, unless we already have a PID to monitor\n(used for FIO). (Thanks, Q )\n\nAdditionally changes the way we run most cargo commands by seperating\nthe phase where replacing `cargo run` by instead doing `cargo build` and\ngetting the executable path -- otherwise the compilation was part of the\nflamegraph.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-14T16:11:51Z",
          "tree_id": "528d0ef32e9b4084d1def0e4a051f89e3ab8a25a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e865bdd4f52f730e7b7419dfe15561b556d10e4"
        },
        "date": 1755196005862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2862.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8306.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8251.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8246.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2087.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 299.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 232.05078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64593798+15skumar@users.noreply.github.com",
            "name": "15skumar",
            "username": "15skumar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "06121bbc9d960ce75260f28a7ab5fa64bc725f69",
          "message": "Add CLI option for publishing OTEL metrics to an endpoint  (#1552)\n\nThis PR adds a CLI argument which enables users to run Mountpoint with\nthe functionality of publishing metrics to a specified endpoint.\n\nNo impact on existing behavior. This CLI option is under a compile time\nflag.\n\nAdded functionality:\nRun Mountpoint with --otlp-endpoint http://localhost:4318 flag to enable\npublishing metrics to port 4318 (otlp port)\nOptionally you can also specify the exporting interval with the\n--otlp-export-interval flag.\n\nTo verify the implementation I ran a docker container running the\nOpenTelemetry Collector at the default port, and ran Mountpoint with the\nnew flag with endpoint specified.\nI verified that the Mountpoint metrics were visible in the collector\nlogs. Here is a screenshot of an example Mountpoint metric collected at\nthe endpoint:\n\n<img width=\"416\" height=\"217\" alt=\"Screenshot 2025-07-31 at 17 39 57\"\nsrc=\"https://github.com/user-attachments/assets/565f6ae9-84dc-49e4-a80a-6383ede913f4\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-15T09:14:53Z",
          "tree_id": "534372177b6110805993a9241a8823bbf4d5c650",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06121bbc9d960ce75260f28a7ab5fa64bc725f69"
        },
        "date": 1755257351078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2847.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8209.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8138.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8086.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2087.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.41796875,
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
          "distinct": true,
          "id": "4afe550f7fb6337483c8c121954c6b0453a6e0e0",
          "message": "Make benchmark log output colored. (#1577)\n\nThis makes benchmark output easier to read. Using the hydra-colorlog\npackage, which internally uses colorlog and configured Hydra log\nformatters appropriately.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-08-15T10:47:15Z",
          "tree_id": "be1924e68aa71ba52fc65d19126a7d03de8e74d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4afe550f7fb6337483c8c121954c6b0453a6e0e0"
        },
        "date": 1755262731766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2863.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8403.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8259.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2091.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.53515625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}