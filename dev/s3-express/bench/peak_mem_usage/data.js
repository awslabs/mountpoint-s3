window.BENCHMARK_DATA = {
  "lastUpdate": 1736510177980,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733335372632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15357.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26646.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43188.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 158.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 332.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43643.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38807.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 409.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13226.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12103.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9767.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.51171875,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733404074437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15092.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29001.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40579.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 400.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36282.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33499.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13179.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9638.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12150.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.73828125,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733405320133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15683.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23173.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40061.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 383.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 175.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38491.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36427.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13036.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12984.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12614.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.984375,
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
          "id": "522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db",
          "message": "Optimise shared cache for single read use cases (#1163)\n\nUse an optional BytesMut to avoid copying data on the first write. \n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-06T10:43:24Z",
          "tree_id": "5d9ba45ba6cee2c55f8b4dcce95deeb0283cc7bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db"
        },
        "date": 1733489717024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13749.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27254.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37670.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39345.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40757.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12091.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12262.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14890.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.01171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "936f4c31934bd87f7085e9462ad18611dd857aa6",
          "message": "Add errno to fuse_error macro (#1189)\n\nAdded errno to fuse_error macro\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-06T16:46:48Z",
          "tree_id": "f342dd3d76e806d6b44311523d611c02b17736b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936f4c31934bd87f7085e9462ad18611dd857aa6"
        },
        "date": 1733511614811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13886.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26825.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39468.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35061.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36280.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12686.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12414.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10436.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.296875,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733834305965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16168.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26662.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40387.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37336.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39837.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12634.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12885.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11338.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.57421875,
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
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733849418769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13726.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24200.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37746.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 409.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36587.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37296.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11611.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14460.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11688.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3046875,
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
          "id": "441a5025600604e8bcf38ef991f200436f5148ff",
          "message": "Allow partial repeat of `readdir` response (#965)\n\n## Description of change\nWhen user application gets interrupted in a `readdir` syscall the\nunderlying chain of `readdir` fuse requests gets reset to an offset\nwhich is considered stale by Mountpoint. In that case Mountpoint still\ncompletes the interrupted `readdir` request, but kernel partially\ndiscards the response. We already cache the last response, so we can use\nit to serve the request which follows the interrupt.\n\nRelevant issues: https://github.com/awslabs/mountpoint-s3/issues/955\n\n## Does this change impact existing behavior?\n\nThis is not a breaking change. Previously an error was returned, now\nit'll be handled properly.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-10T17:03:49Z",
          "tree_id": "6c94fffcbf7a1071bef1b3ce6ba35f0a5bb6a611",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/441a5025600604e8bcf38ef991f200436f5148ff"
        },
        "date": 1733858135319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15923.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27302.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36754.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 166.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 402.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39293.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40967.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12114.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13991.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11306.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.91015625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "caaa11b6543d5d5a5848834df514354c8fed8cb9",
          "message": "Add label to errno in error message for clarity (#1197)\n\nThis change improves the clarity of [fuse_error with\nerrono](https://github.com/awslabs/mountpoint-s3/pull/1189).\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2024-12-10T17:06:26Z",
          "tree_id": "81f8266c7b36539e9f9f593aaca6417786b4525d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caaa11b6543d5d5a5848834df514354c8fed8cb9"
        },
        "date": 1733858531602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14536.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25155,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34643.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 423.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40955.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36748.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11933.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11965.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10073.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.61328125,
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
          "id": "9d1196d169a67001b1a13ddc109eeddb9f5fb11f",
          "message": "Upgrade crates to latest versions (#1196)\n\nUpgrade all dependencies to the latest versions. Fix minor breaking\nchange in the API for `sysinfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T17:13:22Z",
          "tree_id": "f5271c3d8242c08adcc4e19829b8067eed11dc36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d1196d169a67001b1a13ddc109eeddb9f5fb11f"
        },
        "date": 1733858751455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15491.02734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28281.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42449.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 235.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36889.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40621.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12939.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11614.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8383.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.7578125,
            "unit": "MiB"
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
          "distinct": false,
          "id": "d5b36e8ff116a3f02be6c37c1112f7793b162430",
          "message": "Improve get_object interface for backpressure (#1200)\n\nCurrently, we support flow-control window for GetObject requests by\nallowing applications to call `GetObjectResponse::increment_read_window`\nbut it is tricky to use because we need to hold onto the stream itself\nin order to control the feedback loop while also consuming the data.\n\nThis change introduces a new trait `ClientBackpressureHandle` for\ncontrolling the read window so that the stream and the flow-control\npaths are decoupled.\n\nApplications can now call `GetObjectResponse::take_backpressure_handle`\nto get a backpressure handle from the response and use this handle to\nextend the read window.\n\n### Does this change impact existing behavior?\n\nYes, there is a breaking change for `mountpoint-s3-client`.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-12-17T14:03:09Z",
          "tree_id": "02f6ff16f04c91b79e790bfc1e5a804f3fe763aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d5b36e8ff116a3f02be6c37c1112f7793b162430"
        },
        "date": 1734452398283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15061.08984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28405.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41903.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 92.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40335.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36568.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13010.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13819.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10758.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.38671875,
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
          "id": "631e6e06772ebc111896d29dac751de7ff5e0d1c",
          "message": "Address shadowing divergence in reftest, update semantics doc (#1201)\n\nThis commit addresses a case where MP model and property tests diverge\n(https://github.com/awslabs/mountpoint-s3/pull/1066). The issue was\ncaused by the reference not correctly implementing the shadowing order\ndefined in\n[#4f8cf0b](https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53).\nThis commit fixes the reference model, and clarifies the semantics\narising from concurrent MPUs.\n\nThis is not a breaking change, as it only impacts the reference tests.\n\nThis does not need a Changelog entry, as the change does not impact\nMountpoint's behaviour.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-12-17T15:52:11Z",
          "tree_id": "f2cf3b21c547261f4b81944038c76716c7245d62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631e6e06772ebc111896d29dac751de7ff5e0d1c"
        },
        "date": 1734458746870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16580.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24069.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36280.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40759.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44750.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12380.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8696.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10618.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 417.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.49609375,
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
          "id": "602f371ff81ec89de5e6067fc09b7b7825d783ee",
          "message": "Add support for passing FUSE file descriptors as mount point (#1103)\n\n## Description of change\n\nfuser v0.15.0 added support for creating a `Session` from existing FUSE\nfile descriptor (via `Session::from_fd`). This PR adds this support to\nMountpoint. It allows passing FUSE file descriptor as mount point in the\nform of `/dev/fd/{fd}`.\n\nAn example usage of this feature can be seen with a helper Go script,\n[mounthelper.go](https://github.com/awslabs/mountpoint-s3/blob/86bdefa5147a7edc533a6be5d2724fec74ba91fb/examples/fuse-fd-mount-point/mounthelper.go):\n\n```bash\n$ go build mounthelper.go\n$ sudo /sbin/setcap 'cap_sys_admin=ep' ./mounthelper # `mount` syscall requires `CAP_SYS_ADMIN`, alternatively, `mounthelper` can be run as root\n$ ./mounthelper -mountpoint /tmp/mountpoint -bucket bucketname\nbucket bucketname is mounted at /dev/fd/3\n2024/11/07 17:23:42 Filesystem mounted, waiting for ctrl+c signal to terminate \n\n$ # in a different terminal session\n$ echo \"Hello at `date`\" > /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\nHello at Thu Nov  7 17:32:33 UTC 2024\n$ rm /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\ncat: /tmp/mountpoint/helloworld: No such file or directory\n```\n\nRelevant issues: This PR resurrects a previous PR to add this feature:\nhttps://github.com/awslabs/mountpoint-s3/pull/537\n\n## Does this change impact existing behavior?\n\nShouldn't affect any existing behavior as we had an “is directory?”\ncheck for passed mount points before, and it shouldn't have been\npossible to pass a file descriptor as a mount point prior to this\nchange.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated CHANGELOG for `mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T16:56:59Z",
          "tree_id": "1a210e077e88bc40a945a0b79f33981f0461f3fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/602f371ff81ec89de5e6067fc09b7b7825d783ee"
        },
        "date": 1734462637560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15330.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27097.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40705.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39727.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35388.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12327.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12084.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13720.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.17578125,
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
          "id": "3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545",
          "message": "Wait for CreateMPU before returning from put_object (#1192)\n\n`S3CrtClient::put_object` was originally implemented so that it would\ncomplete immediately and return a `PutObjectRequest` implementation. Any\nerror from the S3 request would only be returned on calling `write` or\n`complete` on the `PutObjectRequest`. With this change, we modify\n`put_object` to await for the initial `CreateMultipartUpload` request to\ncomplete and only then either return a `PutObjectRequest` or propagate\nthe error from the request. This is analogous to what done for\n`get_object` in #1171 and addresses an issue where errors were not\npropagated correctly (#1007).\n\nAt the file handle level, however, we still want the `open` operation to\ncomplete quickly, without waiting for `CreateMultipartUpload` to\ncomplete. In order to preserve the previous behavior, `upload::atomic`\nwas adapted to spawn a concurrent task in the background when calling\n`put_object`.\n\n### Does this change impact existing behavior?\n\nYes.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`. No user-visible changes in\n`mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-18T09:46:54Z",
          "tree_id": "9de535c6c2542ad4b28ec6a8fbe5a446d1fb38a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545"
        },
        "date": 1734523315792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13826.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28886.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39648.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36362.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40163.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12553.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9158.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12282.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.5234375,
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
          "id": "4284e644b78d9d35124feb7e3a81adbed1609c91",
          "message": "Store the name of a mounted bucket in block's metadata (#1208)\n\nThe field `x-amz-meta-source-bucket-name` of the cache block was\nintended to store the name of the mounted bucket (source bucket).\nCurrently it stores the name of the cache bucket.\n\n### Does this change impact existing behavior?\n\nYes, we update the version of the block schema. All blocks written with\nprevious versions of Mountpoint won't be accessible (attempts will be\ncache misses).\n\n### Does this change need a changelog entry?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-03T16:12:07Z",
          "tree_id": "fa59588b62b86b10009fa7c474cc3d114651d0b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4284e644b78d9d35124feb7e3a81adbed1609c91"
        },
        "date": 1735928910946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15165.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25383.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42980.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39809.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39132.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13192.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12724.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14077.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.515625,
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
          "id": "89873a9331a0d568f8a03056cbc466d2e2ae44b3",
          "message": "Add rustdoc tests to CI (#1210)\n\nThere's a few rustdoc tests in the code base however CI did not\npreviously ensure they passed or even compiled. This change fixes broken\ndoctests and adds a new job to run these in CI.\n\nThis will allow us to write new doctests and be sure that they will be\nvalidated by CI. For example, we may wish to write doctests asserting\nsafety justifications.\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry?\n\nNo, this changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:12:33Z",
          "tree_id": "0007ac658a6679f74f3b8c75acabaa8ec2c009b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89873a9331a0d568f8a03056cbc466d2e2ae44b3"
        },
        "date": 1736256350265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14806.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26164.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40259.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36556.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42987.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12394.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13902.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10527.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.40625,
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
          "id": "91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14",
          "message": "Update CRT `HeadersError` enum to include header name (#1205)\n\nWe recently saw an error in #1199 where \"Header not found\" was emitted,\nbut its really unclear what header was missing.\n\n2024-12-12T18:33:59.379478Z WARN flush{req=1609 ino=2 fh=1 pid=29257\nname=\"testfile_100M.bin\"}: mountpoint_s3::fuse: flush failed: put\nfailed: put request failed: Client error: Internal S3 client error:\nHeader not found\n\nThis change updates the `HeadersError::HeaderNotFound` enum variant to\ncontain a copy of the header name, such that error messages can emit it\nfor debugging purposes.\n\nIt may make more sense to have all the header names we use statically\ndefined somewhere, such that we could include a static reference to the\nheader and avoid allocating for an error message. However, we don't\nexpect there to be any performance regression introduced by this change.\nThis move to static values could be made later.\n\n### Does this change impact existing behavior?\n\nHeader not found and invalid header value errors will now include the\nheader name when printing the error message.\n\nThe enum variants change meaning any code using the enum may be\nimpacted.\n\n### Does this change need a changelog entry?\n\nNot for Mountpoint itself. I have added a change log entry to\n`mountpoint-s3-crt` since it is a breaking API change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:44:46Z",
          "tree_id": "472fef60ac68484102c83b0b18130d6e088c230c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14"
        },
        "date": 1736258312231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15740.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29680.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38724.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42900.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32348.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10856.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11672.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11487.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.18359375,
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
          "id": "866ee1c509ca513f0f41122a5f7153bf223ec259",
          "message": "Improve tracing and assertion messages for reftests (#1211)\n\nThis change adds some additional tracing to reftests and makes some\nadjustments to assertion messages to make it clearer why we assert what\nwe assert and would return a better message when things go wrong.\n\nThere are no significant changes, this is primarily readability and\ndebugging improvements.\n\n### Does this change impact existing behavior?\n\nNo change to behavior of Mountpoint or its libraries.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T15:41:52Z",
          "tree_id": "b2b2f32cf333ef210f081af8c13eb7b7cd121d94",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/866ee1c509ca513f0f41122a5f7153bf223ec259"
        },
        "date": 1736272592794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12399.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25590.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39230.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39385.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36292.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14074.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12814.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12216.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.875,
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
          "id": "33c20c8ba9a0dd3a024915583ad3fc7b15e3e524",
          "message": "Release v1.13.1 (#1215)\n\nBump version to 1.13.1.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-09T15:21:58Z",
          "tree_id": "3eae5a2340251e6db87cdba353e9d0b852c31b35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33c20c8ba9a0dd3a024915583ad3fc7b15e3e524"
        },
        "date": 1736444349385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16354.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27619.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42531.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 217.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32668.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36830.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13207.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13026.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11078.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.3984375,
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
          "id": "8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee",
          "message": "Explicitly set rust version to 1.83 for release (#1217)\n\nExplicitly set rust version to 1.83 for release\n\n### Does this change impact existing behavior?\n\nTemporarily forces Rust version to 1.83 for the 1.13.1 release\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-10T09:43:19Z",
          "tree_id": "1d96b3c938bcafaf77f8c2702332b90c30ec643e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee"
        },
        "date": 1736510177939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14607.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22278.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37729.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37689.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37430.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12968.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11579.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13622.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.23046875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}