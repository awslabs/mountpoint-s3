window.BENCHMARK_DATA = {
  "lastUpdate": 1735928000810,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733332891512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3374.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3305.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3127.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3380.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32602.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3233.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3263.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3170.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 18719.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.27734375,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733334455093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3365.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3091.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3414.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3438.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23337.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 358.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3278.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 16668.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.66796875,
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
        "date": 1733403272709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3472.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3267.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3256.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3251.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15338.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3080.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3217.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3353.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11766.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.2265625,
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
        "date": 1733404515035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3152.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3350.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3473.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27958.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3305.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3294.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2906.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3260.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.39453125,
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
          "id": "3c7fb3fcfe485d397ec6fb65f25596569fc584d8",
          "message": "Simplify get_object by waiting for response headers (#1171)\n\n`S3CrtClient::get_object` was originally implemented so that it would\ncomplete immediately and return a `GetObjectRequest` implementation\n(extending `Stream`) to retrieve body parts. Any error from the S3\nrequest would be returned through the stream.\nWe recently added additional methods (`get_object_metadata` in #1065 and\n`get_object_checksum` in #1123) to the response that rely on the headers\nreturned by the (first) `GetObject` request. The new methods required an\nasync signature and a complicated implementation in order to account for\nfailures and they still do not correctly report accurate error\ninformation in some cases.\nWith this change, we modify `get_object` to await for response headers\nbefore returning either an error or a `GetObjectResponse` (note the name\nchange) implementation. The ergonomics of `get_object` are improved:\n* `await`ing the initial call can already return some errors (e.g.\nbucket/key not found),\n* `get_object_checksum` and `get_object_metadata` are now sync\nfunctions.\n\n### Does this change impact existing behavior?\n\nYes, `get_object` behavior is different, `get_object_checksum` and\n`get_object_metadata` signatures have changed, and `GetObjectRequest`\nwas renamed to `GetObjectResponse`.\n\n### Does this change need a changelog entry?\n\nYes, it requires a breaking change entry for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T20:48:17Z",
          "tree_id": "616cd7bda6e7117129f22aebaa3dc5aace410008",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c7fb3fcfe485d397ec6fb65f25596569fc584d8"
        },
        "date": 1733439019295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3437.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3344.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3269.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3277.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27192.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3144.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3478.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3205.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3364.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.52734375,
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
        "date": 1733488986378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3117.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3336.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3235.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3311.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19975.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3193.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3182.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3387.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15265.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.41015625,
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
        "date": 1733510794404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3151.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3221.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3260.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3304.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32368.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3423.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3374.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3396.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3384.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.98828125,
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
        "date": 1733833603447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3289.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3306.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3116.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21534.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3287.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3352.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3403.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3489.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.625,
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
        "date": 1733848656468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3272.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3430.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3247.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3256.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27808.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3257.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3579.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3218.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3115.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.265625,
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
        "date": 1733857314196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3295.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3251.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3306.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33868.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3605.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3353.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3299.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3332.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.0078125,
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
        "date": 1733857462532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3490.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3331.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3135.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3315.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23354.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3392.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3318.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3267.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3498.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.79296875,
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
        "date": 1733857916070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3519.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3085.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3326.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3566.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30375.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3077.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3345.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3499.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3201.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.4609375,
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
          "id": "eecf301ec9fe538fcffde4459563124161669568",
          "message": "Create new latency benchmark for writing of one-byte files (#1190)\n\nCreates a new latency benchmark for writing of one-byte files. Also\ncreates a folder for writing latency benchmarks and extends the\n`fs_latency_bench.sh` script to handle multiple folders.\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-11T09:56:25Z",
          "tree_id": "347ab79ed636947f9dda697ea1efc77e5fb4ef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eecf301ec9fe538fcffde4459563124161669568"
        },
        "date": 1733918326815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3153.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3359.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3315.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3331.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19099.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3498.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 364.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3376.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3320.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3251.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.33984375,
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
          "id": "f09ac0c765ebfce6fa71a01caf3e3534f1d71e59",
          "message": "Remove workaround for macOS builds due to pkg-config issues (#1202)\n\nIn November, macOS runners had an issue with the `pkg-config` package\nand we introduced a workaround:\nhttps://github.com/awslabs/mountpoint-s3/pull/1158/\n\nWe see now that the fix has been released and we should no longer need\nthe workaround: https://github.com/actions/runner-images/issues/10984.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T14:01:36Z",
          "tree_id": "6d86e38850362a6cc19e08263594a8736389406b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f09ac0c765ebfce6fa71a01caf3e3534f1d71e59"
        },
        "date": 1734451548398,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3320.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3310.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3390.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3306.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21484.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3264.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3248.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3429,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3429.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.84375,
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
        "date": 1734452034976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3196.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3483.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3312.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3136.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20179.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3326.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3351.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3479.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10978.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.1796875,
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
        "date": 1734457930030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3296.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3327.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3275.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3192.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33655.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3334.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3516.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3482.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3706.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.78515625,
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
        "date": 1734462062043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3416.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3193.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3539.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33972.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3427.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3236.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3412.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3905.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
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
          "id": "3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545",
          "message": "Wait for CreateMPU before returning from put_object (#1192)\n\n`S3CrtClient::put_object` was originally implemented so that it would\ncomplete immediately and return a `PutObjectRequest` implementation. Any\nerror from the S3 request would only be returned on calling `write` or\n`complete` on the `PutObjectRequest`. With this change, we modify\n`put_object` to await for the initial `CreateMultipartUpload` request to\ncomplete and only then either return a `PutObjectRequest` or propagate\nthe error from the request. This is analogous to what done for\n`get_object` in #1171 and addresses an issue where errors were not\npropagated correctly (#1007).\n\nAt the file handle level, however, we still want the `open` operation to\ncomplete quickly, without waiting for `CreateMultipartUpload` to\ncomplete. In order to preserve the previous behavior, `upload::atomic`\nwas adapted to spawn a concurrent task in the background when calling\n`put_object`.\n\n### Does this change impact existing behavior?\n\nYes.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`. No user-visible changes in\n`mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-18T09:46:54Z",
          "tree_id": "9de535c6c2542ad4b28ec6a8fbe5a446d1fb38a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545"
        },
        "date": 1734522523076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3316.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3205.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3200.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3058.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28098.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3175.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3179.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3393.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10225.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 240.2109375,
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
          "distinct": false,
          "id": "641f613c0339c1ba6bc9c53a55d37dc358f73b55",
          "message": "Emit shared cache durations in cache hit, miss and error conditions (#1162)\n\nAdds additional duration metrics to the shared cache for cache hits,\nmisses, and errors.\n\nExample metrics:\n```\n2024-12-06T14:11:43.012775Z  INFO mountpoint_s3::metrics: express_data_cache.block_err[reason=invalid_block_offset,type=read]: 189 (n=189)\n2024-12-06T14:11:43.012802Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 0 (n=189)\n2024-12-06T14:11:43.012817Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=error]: n=189: min=3 p10=3 p50=4 avg=3.87 p90=5 p99=5 p99.9=6 max=6\n2024-12-06T14:11:43.012831Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 380 (n=190)\n2024-12-06T14:11:43.012844Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=190: min=8256 p10=8511 p50=8895 avg=8882.19 p90=9343 p99=9535 p99.9=9663 max=9663\n```\n\nAnd\n```\n2024-12-06T16:06:14.462602Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 98 (n=100)\n2024-12-06T16:06:14.462628Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=miss]: n=2: min=21120 p10=21247 p50=21247 avg=21824.00 p90=22527 p99=22527 p99.9=22527 max=22527\n2024-12-06T16:06:14.462641Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=ok]: n=98: min=5888 p10=6015 p50=6271 avg=6378.94 p90=6559 p99=14079 p99.9=14079 max=14079\n2024-12-06T16:06:14.462652Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=read]: 196 (n=98)\n2024-12-06T16:06:14.462663Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 4 (n=2)\n2024-12-06T16:06:14.462673Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=2: min=9408 p10=9471 p50=9471 avg=19280.00 p90=29183 p99=29183 p99.9=29183 max=29183\n\n```\n\nAdditionally refactors the cache in response to comments in\nhttps://github.com/awslabs/mountpoint-s3/pull/1146\n\n### Does this change impact existing behavior?\n\nYes, the `express_data_cache.read_duration_us` metric now has a type\nassociated with if it was a cache hit or not.\n\n### Does this change need a changelog entry?\n\nNo, changes to metrics don't need changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-20T16:56:57Z",
          "tree_id": "8b2b056f261209a201e29e4b9582662287eb74de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/641f613c0339c1ba6bc9c53a55d37dc358f73b55"
        },
        "date": 1734721034260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3266.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3147.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3307.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3191.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28113.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3233.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3352.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3165.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10901.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.8828125,
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
        "date": 1735928000770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3514.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3447.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3232.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3249.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33627.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3340.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3287.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3379.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3306.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.51171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}