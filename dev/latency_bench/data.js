window.BENCHMARK_DATA = {
  "lastUpdate": 1736265987368,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Latency Benchmark (S3 Standard)": [
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
        "date": 1733398746290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.058,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.829,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.826,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.9671521,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.7133046,
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
          "id": "3c7fb3fcfe485d397ec6fb65f25596569fc584d8",
          "message": "Simplify get_object by waiting for response headers (#1171)\n\n`S3CrtClient::get_object` was originally implemented so that it would\ncomplete immediately and return a `GetObjectRequest` implementation\n(extending `Stream`) to retrieve body parts. Any error from the S3\nrequest would be returned through the stream.\nWe recently added additional methods (`get_object_metadata` in #1065 and\n`get_object_checksum` in #1123) to the response that rely on the headers\nreturned by the (first) `GetObject` request. The new methods required an\nasync signature and a complicated implementation in order to account for\nfailures and they still do not correctly report accurate error\ninformation in some cases.\nWith this change, we modify `get_object` to await for response headers\nbefore returning either an error or a `GetObjectResponse` (note the name\nchange) implementation. The ergonomics of `get_object` are improved:\n* `await`ing the initial call can already return some errors (e.g.\nbucket/key not found),\n* `get_object_checksum` and `get_object_metadata` are now sync\nfunctions.\n\n### Does this change impact existing behavior?\n\nYes, `get_object` behavior is different, `get_object_checksum` and\n`get_object_metadata` signatures have changed, and `GetObjectRequest`\nwas renamed to `GetObjectResponse`.\n\n### Does this change need a changelog entry?\n\nYes, it requires a breaking change entry for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T20:48:17Z",
          "tree_id": "616cd7bda6e7117129f22aebaa3dc5aace410008",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c7fb3fcfe485d397ec6fb65f25596569fc584d8"
        },
        "date": 1733433097002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.058,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.94,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.07,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 34.979590200000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.1852155,
            "unit": "milliseconds"
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
        "date": 1733483105892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.945,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.088,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.3701489,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.9278811,
            "unit": "milliseconds"
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
        "date": 1733505037268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.904,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.173,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 19.8232157,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.217382899999997,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733827694805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.861,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.662,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.4151294,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.6886273,
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
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733842866705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.821,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.654,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.3173429,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.7064388,
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
          "distinct": false,
          "id": "441a5025600604e8bcf38ef991f200436f5148ff",
          "message": "Allow partial repeat of `readdir` response (#965)\n\n## Description of change\nWhen user application gets interrupted in a `readdir` syscall the\nunderlying chain of `readdir` fuse requests gets reset to an offset\nwhich is considered stale by Mountpoint. In that case Mountpoint still\ncompletes the interrupted `readdir` request, but kernel partially\ndiscards the response. We already cache the last response, so we can use\nit to serve the request which follows the interrupt.\n\nRelevant issues: https://github.com/awslabs/mountpoint-s3/issues/955\n\n## Does this change impact existing behavior?\n\nThis is not a breaking change. Previously an error was returned, now\nit'll be handled properly.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-10T17:03:49Z",
          "tree_id": "6c94fffcbf7a1071bef1b3ce6ba35f0a5bb6a611",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/441a5025600604e8bcf38ef991f200436f5148ff"
        },
        "date": 1733851577780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.053,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.906,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.108,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 17.7246849,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.131191100000002,
            "unit": "milliseconds"
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
        "date": 1733851719748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.883,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.708,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.579397,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.0289958,
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
          "id": "9d1196d169a67001b1a13ddc109eeddb9f5fb11f",
          "message": "Upgrade crates to latest versions (#1196)\n\nUpgrade all dependencies to the latest versions. Fix minor breaking\nchange in the API for `sysinfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T17:13:22Z",
          "tree_id": "f5271c3d8242c08adcc4e19829b8067eed11dc36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d1196d169a67001b1a13ddc109eeddb9f5fb11f"
        },
        "date": 1733852283602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.723,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.5129433,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.1437646,
            "unit": "milliseconds"
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
        "date": 1733912440566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.915,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.268,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.9633006,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.802886899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 19.413302,
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
          "distinct": false,
          "id": "f09ac0c765ebfce6fa71a01caf3e3534f1d71e59",
          "message": "Remove workaround for macOS builds due to pkg-config issues (#1202)\n\nIn November, macOS runners had an issue with the `pkg-config` package\nand we introduced a workaround:\nhttps://github.com/awslabs/mountpoint-s3/pull/1158/\n\nWe see now that the fix has been released and we should no longer need\nthe workaround: https://github.com/actions/runner-images/issues/10984.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T14:01:36Z",
          "tree_id": "6d86e38850362a6cc19e08263594a8736389406b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f09ac0c765ebfce6fa71a01caf3e3534f1d71e59"
        },
        "date": 1734445709982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.058,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.926,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.462,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.4819935,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 20.079004100000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.848054899999998,
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
          "distinct": false,
          "id": "d5b36e8ff116a3f02be6c37c1112f7793b162430",
          "message": "Improve get_object interface for backpressure (#1200)\n\nCurrently, we support flow-control window for GetObject requests by\nallowing applications to call `GetObjectResponse::increment_read_window`\nbut it is tricky to use because we need to hold onto the stream itself\nin order to control the feedback loop while also consuming the data.\n\nThis change introduces a new trait `ClientBackpressureHandle` for\ncontrolling the read window so that the stream and the flow-control\npaths are decoupled.\n\nApplications can now call `GetObjectResponse::take_backpressure_handle`\nto get a backpressure handle from the response and use this handle to\nextend the read window.\n\n### Does this change impact existing behavior?\n\nYes, there is a breaking change for `mountpoint-s3-client`.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-12-17T14:03:09Z",
          "tree_id": "02f6ff16f04c91b79e790bfc1e5a804f3fe763aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d5b36e8ff116a3f02be6c37c1112f7793b162430"
        },
        "date": 1734445807138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.888,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.658,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.6553876,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.0906558,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.697649,
            "unit": "milliseconds"
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
        "date": 1734452172533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.994,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.049,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.3445421,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 17.697916399999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.7122138,
            "unit": "milliseconds"
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
        "date": 1734456037731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.96,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.382,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.221566199999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.926657,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.0707454,
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
          "id": "3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545",
          "message": "Wait for CreateMPU before returning from put_object (#1192)\n\n`S3CrtClient::put_object` was originally implemented so that it would\ncomplete immediately and return a `PutObjectRequest` implementation. Any\nerror from the S3 request would only be returned on calling `write` or\n`complete` on the `PutObjectRequest`. With this change, we modify\n`put_object` to await for the initial `CreateMultipartUpload` request to\ncomplete and only then either return a `PutObjectRequest` or propagate\nthe error from the request. This is analogous to what done for\n`get_object` in #1171 and addresses an issue where errors were not\npropagated correctly (#1007).\n\nAt the file handle level, however, we still want the `open` operation to\ncomplete quickly, without waiting for `CreateMultipartUpload` to\ncomplete. In order to preserve the previous behavior, `upload::atomic`\nwas adapted to spawn a concurrent task in the background when calling\n`put_object`.\n\n### Does this change impact existing behavior?\n\nYes.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`. No user-visible changes in\n`mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-18T09:46:54Z",
          "tree_id": "9de535c6c2542ad4b28ec6a8fbe5a446d1fb38a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545"
        },
        "date": 1734516676563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.935,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.794,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.5640382,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 29.9207409,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.2398012,
            "unit": "milliseconds"
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
        "date": 1734715261232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.953,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.989,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 26.0375357,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.646024699999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 34.2093567,
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
          "distinct": false,
          "id": "4284e644b78d9d35124feb7e3a81adbed1609c91",
          "message": "Store the name of a mounted bucket in block's metadata (#1208)\n\nThe field `x-amz-meta-source-bucket-name` of the cache block was\nintended to store the name of the mounted bucket (source bucket).\nCurrently it stores the name of the cache bucket.\n\n### Does this change impact existing behavior?\n\nYes, we update the version of the block schema. All blocks written with\nprevious versions of Mountpoint won't be accessible (attempts will be\ncache misses).\n\n### Does this change need a changelog entry?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-03T16:12:07Z",
          "tree_id": "fa59588b62b86b10009fa7c474cc3d114651d0b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4284e644b78d9d35124feb7e3a81adbed1609c91"
        },
        "date": 1735922297345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.053,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.931,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.475,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.092451699999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.8653148,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.609175,
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
          "id": "89873a9331a0d568f8a03056cbc466d2e2ae44b3",
          "message": "Add rustdoc tests to CI (#1210)\n\nThere's a few rustdoc tests in the code base however CI did not\npreviously ensure they passed or even compiled. This change fixes broken\ndoctests and adds a new job to run these in CI.\n\nThis will allow us to write new doctests and be sure that they will be\nvalidated by CI. For example, we may wish to write doctests asserting\nsafety justifications.\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry?\n\nNo, this changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:12:33Z",
          "tree_id": "0007ac658a6679f74f3b8c75acabaa8ec2c009b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89873a9331a0d568f8a03056cbc466d2e2ae44b3"
        },
        "date": 1736249769008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.853,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.748,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 22.5825673,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.1343252,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 19.786485199999998,
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
          "id": "91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14",
          "message": "Update CRT `HeadersError` enum to include header name (#1205)\n\nWe recently saw an error in #1199 where \"Header not found\" was emitted,\nbut its really unclear what header was missing.\n\n2024-12-12T18:33:59.379478Z WARN flush{req=1609 ino=2 fh=1 pid=29257\nname=\"testfile_100M.bin\"}: mountpoint_s3::fuse: flush failed: put\nfailed: put request failed: Client error: Internal S3 client error:\nHeader not found\n\nThis change updates the `HeadersError::HeaderNotFound` enum variant to\ncontain a copy of the header name, such that error messages can emit it\nfor debugging purposes.\n\nIt may make more sense to have all the header names we use statically\ndefined somewhere, such that we could include a static reference to the\nheader and avoid allocating for an error message. However, we don't\nexpect there to be any performance regression introduced by this change.\nThis move to static values could be made later.\n\n### Does this change impact existing behavior?\n\nHeader not found and invalid header value errors will now include the\nheader name when printing the error message.\n\nThe enum variants change meaning any code using the enum may be\nimpacted.\n\n### Does this change need a changelog entry?\n\nNot for Mountpoint itself. I have added a change log entry to\n`mountpoint-s3-crt` since it is a breaking API change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:44:46Z",
          "tree_id": "472fef60ac68484102c83b0b18130d6e088c230c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14"
        },
        "date": 1736251734475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.863,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.443,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.0353137,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.8420969,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.5412933,
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
          "id": "866ee1c509ca513f0f41122a5f7153bf223ec259",
          "message": "Improve tracing and assertion messages for reftests (#1211)\n\nThis change adds some additional tracing to reftests and makes some\nadjustments to assertion messages to make it clearer why we assert what\nwe assert and would return a better message when things go wrong.\n\nThere are no significant changes, this is primarily readability and\ndebugging improvements.\n\n### Does this change impact existing behavior?\n\nNo change to behavior of Mountpoint or its libraries.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T15:41:52Z",
          "tree_id": "b2b2f32cf333ef210f081af8c13eb7b7cd121d94",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/866ee1c509ca513f0f41122a5f7153bf223ec259"
        },
        "date": 1736265986532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.953,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.779,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.8861943,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.7940523,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.4883078,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}