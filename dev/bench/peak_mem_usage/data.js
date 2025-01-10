window.BENCHMARK_DATA = {
  "lastUpdate": 1736510211375,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733405422952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14615.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20744.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38072.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 101.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27985.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32904.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11491.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 247.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10712.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13069.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 875.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.01953125,
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
        "date": 1733439808604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15417.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21982.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35426.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33303.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38527.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11195.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11248.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12327.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 781.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.03515625,
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
        "date": 1733489805580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11880.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23048.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37720.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36612.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35934.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9138.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11546.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11038.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 924.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 612.828125,
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
        "date": 1733511710696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15607.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24083.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36964.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34049.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33836.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10939.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13212.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11829.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 845.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.7734375,
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
        "date": 1733834426123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12079.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18471.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31199.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29140.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31551.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10401.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9502.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11342.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 927.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.8828125,
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
        "date": 1733849452622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12323.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23026.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34601.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36265.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37430.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11502.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11792.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11530.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 893.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.7734375,
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
        "date": 1733858395671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14678.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21785.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35920.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 375.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34786.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32846.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12528.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10976.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12343.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 792.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 552.51953125,
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
        "date": 1733858709012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14776.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23809.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34320.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37146.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39751.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 410.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11664.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13819.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11379.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 900.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 534.5078125,
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
        "date": 1733919180234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13987.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20371.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32234.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33367.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32766.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8733.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9820.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11497.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 793.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.8671875,
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
        "date": 1734452529924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14254.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22650.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39226.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 106.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30297.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33442.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7341.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13087.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10482.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 743.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.87109375,
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
        "date": 1734452593876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15207.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21060.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36294.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33461.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32745.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8098.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10478.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11865.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 697.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 532.3671875,
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
        "date": 1734462728589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14171.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24103.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34791.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32016.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37063.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8971.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10353.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11799.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 692.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.26171875,
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
        "date": 1734523323837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11766.23828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21611.125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37330.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32919.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33559.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8567.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7598.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11022.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 915.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 499.2734375,
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
        "date": 1734721897044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14229.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20038.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30193.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31645.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36514.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10161.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11795.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11803.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 818.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 530.12109375,
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
        "date": 1735928977173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14170.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24266.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38500.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 102.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35080.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35847.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10275.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13352.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13815.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 718.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.6328125,
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
        "date": 1736256445759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13787.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23158.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35471.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32642.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34697.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10942.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 270.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10849.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13095.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 779.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 547.37890625,
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
        "date": 1736258391877,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14011.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26182.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38208.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37942.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34726.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14653.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10910.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11692.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 848.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 529.265625,
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
        "date": 1736272652797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14970.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25124.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37399.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35617.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36597.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9817.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12435.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11625.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 761.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 518.76171875,
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
        "date": 1736444413054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16101.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23445.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35060.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 375.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35716.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34328.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12697.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12711.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13501.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.7890625,
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
        "date": 1736510211334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16203.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24041.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38065.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36614.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31792.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10635.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13434.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12716.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 861.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 513.80078125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}