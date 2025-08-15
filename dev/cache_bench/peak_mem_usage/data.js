window.BENCHMARK_DATA = {
  "lastUpdate": 1755269349676,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "f73f89b29d673a3bc29e58b5c1f5e96e74ba534e",
          "message": "[Experimental] Support mounting multiple buckets with CSV manifest (#1506)\n\nImplement `ManifestMetablock` which uses SQLite db as a source of object\nmetadata. This implementation also allows mounting multiple buckets\nwithin a single filesystem. This change is not intended to be applied to\nthe regular `mount-s3` binary, only to `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, change is enabled in example only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, of the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T12:55:13Z",
          "tree_id": "dbbd80fbf7eb4fcb2fbfe447a6380f387d20c280",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f73f89b29d673a3bc29e58b5c1f5e96e74ba534e"
        },
        "date": 1753282562399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3388.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3406.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3415.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3137.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15238.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3318.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3257.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 5925.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3217.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.25,
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
          "id": "65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2",
          "message": "Release crates, mountpoint-s3-fs 0.6.0 (#1531)\n\nUpdate changelogs in preparation for crates release. Crates to be\nreleased:\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n- mountpoint-s3-fs\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T14:29:58Z",
          "tree_id": "55611484499579305e804b526f592752e9440ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2"
        },
        "date": 1753288066986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3335.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3423.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3409.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3454.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8940.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3581.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10611.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3370.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.58984375,
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753290719243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3144.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3436.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3124.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3163.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7081.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3219.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3128.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3440.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3175.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.82421875,
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
        "date": 1753355631577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3286.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3254.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3363.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3322.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5369.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3025.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3364.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3281.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3250.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.578125,
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
        "date": 1753363044717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3306.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3210.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3308.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3311.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 202.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9963.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3535.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3558.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3127.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3286.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.203125,
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
        "date": 1753383112622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3304.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3274.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3423.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 274.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3320.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11523.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3327.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3539.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3244.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3359.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.51953125,
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
        "date": 1753452170799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2818.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3485.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3476.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3227.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 203.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6997.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3432.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3009.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3290.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3423.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 239.86328125,
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
        "date": 1753452493501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2179.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2264.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2156.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2228.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2273.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2157.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2196.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.375,
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
        "date": 1753452788641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2263.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2172.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2172.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.85546875,
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
        "date": 1753462622914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2593.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2248.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2255.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2246.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2420.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2207.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2275.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.65234375,
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
        "date": 1753464757159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2280.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2247.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2164.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2172.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 50.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2172.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2174.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2304.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2182.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 39.27734375,
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
        "date": 1753467211724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2181.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 37.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2230.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2193.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2215.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.8359375,
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
        "date": 1753707725095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2171.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2181.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2198.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2221.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2192.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.171875,
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
        "date": 1753801866615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2290.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2188.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2186.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2513.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2180,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 32.78125,
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
        "date": 1753889572652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2167.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2193.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2484.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 53.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2201.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2180.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2354.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2160.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.53125,
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
        "date": 1753889810771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2484.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2190.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2179.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2561.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2174.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.94140625,
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
        "date": 1753973407173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2172.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2208.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2450.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2416.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2191.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2187.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.1875,
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
        "date": 1754313407765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2169.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2173.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2189.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2513.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2243.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2182.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2174.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2200.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.3125,
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
          "id": "7f8c622cfb7d861afa36f9f8cb2efa2e266a7050",
          "message": "Fix typo in package/README.md (#1558)\n\nFixes a typo in the packaging readme\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-06T13:56:09Z",
          "tree_id": "f6d080301a061edcc1b18d97904fdde0352e85b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f8c622cfb7d861afa36f9f8cb2efa2e266a7050"
        },
        "date": 1754495910143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2372.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2197.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2251.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2203.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2280.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.3671875,
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
        "date": 1754508632911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2182.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2191.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2365.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2175.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2203.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2174.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.63671875,
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
        "date": 1754581872581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2452.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2394.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2195.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2187.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2193.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2276.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2608.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.68359375,
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
        "date": 1754590393929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2277.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2204.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2188.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2375.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 41.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2386.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2317.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2380.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2185.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8359375,
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
        "date": 1754663289645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2251.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2179.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 43.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2173.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2201.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2171.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2207.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.93359375,
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
        "date": 1755014446274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2382.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2194.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2193.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2232.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 40.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2386.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2578.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2180.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2272.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.0703125,
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
        "date": 1755102817565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2388.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2447.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2472.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2196.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2191.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2200.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2218.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2284.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.56640625,
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
        "date": 1755194255880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2217.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2224.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2194.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2164.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2178.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.92578125,
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
        "date": 1755195250782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2530.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2313.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 63.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2393.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2173.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2478.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.015625,
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
        "date": 1755256559705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2197.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2229.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2181.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2295.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2180.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2258.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2186.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.68359375,
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
        "date": 1755261935646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2184.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2178.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2288.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 55.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2176.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2182.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2177.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2189.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.5546875,
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
          "id": "73c9de1a2ab6e5130aac9cb6d269037601a67023",
          "message": "🧊Change colour palette for icy flamegraphs ❄️ (#1576)\n\nMakes icycle flamegraphs more icy, by changing to blue colour palette\nfrom the currently used red (aka `hot`) one.\n\nNo changelog entry needed, as only affects benchmarking visualisations.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T12:50:00Z",
          "tree_id": "59f7c4dec7bc319939ed86bd5d3f1d5981704902",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73c9de1a2ab6e5130aac9cb6d269037601a67023"
        },
        "date": 1755269349624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2200.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2458.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2481.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2297.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.0859375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}