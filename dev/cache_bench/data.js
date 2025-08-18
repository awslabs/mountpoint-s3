window.BENCHMARK_DATA = {
  "lastUpdate": 1755514097593,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
        "date": 1753355629551,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1289.2857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2039.275,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.42666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 525.1970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3397.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3988.68828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1272.647265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.2708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.53837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 798.6447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1307.604296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.4255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1392.908203125,
            "unit": "MiB/s"
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
        "date": 1753363042691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2038.5681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 830.75771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1469.034375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.5978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3459.9755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4020.6955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.82275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1246.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1391.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1404.65517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1285.00029296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 974.42861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1124.112890625,
            "unit": "MiB/s"
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
        "date": 1753383110637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.38115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2063.05830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.25146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 575.216015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.59189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.1765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3884.8296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4284.16630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1260.9216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1073.93759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1319.52724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1067.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.04404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1163.04501953125,
            "unit": "MiB/s"
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
        "date": 1753452169295,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.30625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2004.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 772.05322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 399.1662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.0001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.67080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3409.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4385.5408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1262.93134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1243.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1254.66181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.56884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1000.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1256.1099609375,
            "unit": "MiB/s"
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
        "date": 1753452492054,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1343.203515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2212.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.440625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1619.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 306.059375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.72509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 174.47158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4007.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4480.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.38408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1379.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1344.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.131640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 916.98291015625,
            "unit": "MiB/s"
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
        "date": 1753452786618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1362.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2314.32158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 857.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1603.128515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 294.951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 641.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.22626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.90859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3982.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4967.28984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1257.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1469.6021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 947.40859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1284.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.03525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1165.52412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1009.4791015625,
            "unit": "MiB/s"
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
        "date": 1753462620648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1429.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2314.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1609.78955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.59169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.432421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4562.245703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4423.688671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1352.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1409.62197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 839.77900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1188.34658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1323.0279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1559.96318359375,
            "unit": "MiB/s"
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
        "date": 1753464755671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1360.05185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2153.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1658.49072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 459.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.6423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4217.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4505.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1434.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.60234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 896.53310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 787.37822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1386.29580078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1154.06953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1524.18955078125,
            "unit": "MiB/s"
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
        "date": 1753467209733,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1409.669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2095.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 866.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1655.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.750390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 845.3197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.45341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 354.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3997.0912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4395.31318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1494.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1377.791796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 880.33349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1265.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1026.61025390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1143.8888671875,
            "unit": "MiB/s"
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
        "date": 1753707723469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.8947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2173.840234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.2736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1623.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 637.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.344921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.87333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4102.271875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4264.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1334.2234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1380.848046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 852.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1626.8162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1026.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1076.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1100.23515625,
            "unit": "MiB/s"
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
        "date": 1753801864569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1380.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2129.05859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1616.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 695.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.1568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 315.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4188.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4358.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1250.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1397.08125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 901.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1261.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1194.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1143.57548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1487.28994140625,
            "unit": "MiB/s"
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
        "date": 1753889571091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1342.3671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2285.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 827.94423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1663.878125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.18291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 708.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4438.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4962.9044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1258.47412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1448.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1607.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 800.97861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.33076171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.1404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1276.440625,
            "unit": "MiB/s"
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
        "date": 1753889808996,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.248828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2317.50634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 897.293359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1634.95029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.83994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 503.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 289.4513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4495.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4145.648828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1428.9294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1428.03642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 947.17802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1232.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1240.858984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1340.865625,
            "unit": "MiB/s"
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
        "date": 1753973404957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.020703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2125.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1651.32314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.86943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 510.77587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.63720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.9126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4645.906640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4838.4689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1412.30244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1372.06826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1658.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1169.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1079.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 980.24970703125,
            "unit": "MiB/s"
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
        "date": 1754313406258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1394.79453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2305.4841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.45205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1705.7998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 304.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 629.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4856.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4525.0111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1693.47568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1356.67548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1472.26533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1357.24267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1120.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1063.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1459.3265625,
            "unit": "MiB/s"
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
        "date": 1754495908137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1330.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2214.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 851.37060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1642.838671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.98017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.15849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4019.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4729.24677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1362.2033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 900.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 799.97451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1010.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 997.8158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.67421875,
            "unit": "MiB/s"
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
        "date": 1754508631383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.1013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2169.63056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 922.8830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1696.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.883984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.519140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4234.47744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4369.9388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1562.42294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1470.9888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1459.60087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 770.95888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1229.54501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1585.31171875,
            "unit": "MiB/s"
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
        "date": 1754581870397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1412.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2365.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 873.9666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1657.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.82392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.918359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.68974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4008.65712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4237.3724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1326.53408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1411.9654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1516.16142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 826.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.4681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.67353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.60625,
            "unit": "MiB/s"
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
        "date": 1754590391923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1385.91162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2431.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1647.76298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.59296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 511.98994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4228.1369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4733.34345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1552.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1394.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1212.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1351.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1042.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.49208984375,
            "unit": "MiB/s"
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
        "date": 1754663287365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1401.45048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2238.63076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 919.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1641.30009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.625390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 730.15361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4255.02685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4721.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1240.64072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1336.93798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1499.13115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.99052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1086.394140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.68037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1272.37783203125,
            "unit": "MiB/s"
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
        "date": 1755014444106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1402.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2315.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.4626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1646.1875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 629.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 300.23876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4535.70986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4892.71630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1379.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1572.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 785.56005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1095.0837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.4884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1168.5078125,
            "unit": "MiB/s"
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
        "date": 1755102815430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2265.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 887.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1744.18837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 308.96845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 468.9904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4322.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4593.6130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1388.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1364.4115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1050.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 748.4220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1385.71240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.3345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1202.4537109375,
            "unit": "MiB/s"
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
        "date": 1755194253805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.70732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2321.6029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1713.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 397.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.1056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4431.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4893.47060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1282.40341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1401.643359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1595.37978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 802.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1150.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1344.7130859375,
            "unit": "MiB/s"
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
        "date": 1755195249275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1416.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2308.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 844.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1665.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 294.08623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 815.3640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.3755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4257.01875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4541.02998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1382.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1434.72998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1388.85732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1391.56484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1237.22490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1199.47109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.462109375,
            "unit": "MiB/s"
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
        "date": 1755256557931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2297.99384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 862.97861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.3451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.86875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4072.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4383.03935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1356.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1425.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 946.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1321.30703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1088.69658203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 958.67919921875,
            "unit": "MiB/s"
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
        "date": 1755261933391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1394.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2325.83369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.9720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1673.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 309.62001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 682.56064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.11640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4500.78271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5070.2171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1451.65224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1480.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.0373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 789.13251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 988.188671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.6544921875,
            "unit": "MiB/s"
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
        "date": 1755269347532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1378.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2149.7669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 877.093359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1673.74658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 312.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 661.346484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.5001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4246.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4873.24365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1218.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1616.27939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1331.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 828.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1132.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1028.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1340.11484375,
            "unit": "MiB/s"
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
          "id": "a21e11eb58696febd23f7285d270abe8e55beddc",
          "message": "Remove left-over parameter (#1578)\n\nRemoves accidentially forgotten parameter, fixing the prefetcher and\nclient benchmarks to be executable again.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T15:05:07Z",
          "tree_id": "2746dba63ded33c1f080cedf5c17dd2622df39db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a21e11eb58696febd23f7285d270abe8e55beddc"
        },
        "date": 1755277604089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.43154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2402.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 905.114453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1758.6431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 692.1115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.40048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4310.41357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4687.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1557.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1335.9927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 949.47783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 805.43525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.2126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.497265625,
            "unit": "MiB/s"
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
          "id": "17e7c3f1b9f04387a8338e92311abfc0b8844090",
          "message": "Remove usage of `capture_output` from crt benchmark (#1582)\n\nRemoves usage of `capture_output` from CRT benchmarks as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-17T07:09:40Z",
          "tree_id": "7bdc95541817689ecf4bd263fbf97f6a69ab06c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17e7c3f1b9f04387a8338e92311abfc0b8844090"
        },
        "date": 1755421708419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1377.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2142.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1629.92099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.78134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 787.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.51240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4442.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4373.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1366.82919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1370.66884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 862.51064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1139.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1399.56787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.7689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 994.66220703125,
            "unit": "MiB/s"
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
          "id": "28760197e4ca8e4bac68e9d751442a16088121b4",
          "message": "Disable flamegraphs by default (#1583)\n\nFlamegraphs were accidentially enabled by default.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-18T08:47:40Z",
          "tree_id": "71b178cc330edfaa6c0417640f47fc59be89a15a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28760197e4ca8e4bac68e9d751442a16088121b4"
        },
        "date": 1755514096590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1432.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2372.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.64375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1645.05087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 315.98017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 776.41767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 290.46083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4142.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4638.4330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.672265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1435.2056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 926.03779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1527.83603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1079.980078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1226.69814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1444.0505859375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}