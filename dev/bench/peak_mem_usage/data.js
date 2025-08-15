window.BENCHMARK_DATA = {
  "lastUpdate": 1755278544803,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753364055207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15066.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19823.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34940.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34267.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34093.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9777.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8515.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10547.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.23828125,
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
        "date": 1753384014026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11300.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21324.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33157.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 262.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 213.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31214.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 366.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32210.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9381.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7820.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12290.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 251.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 791.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.16015625,
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
        "date": 1753453125519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14589.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22282.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33545.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 252.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 266.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29334.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36625.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10520.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11861.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13726.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 721.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 474.2578125,
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
        "date": 1753453379025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3616.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4898.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8426.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8289.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8233.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 678.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 429.8828125,
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
        "date": 1753453729991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3484.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4892.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8435.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8211.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8110.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 782,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 499.23828125,
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
        "date": 1753463583296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3565.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4864.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8419.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8229.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8273.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 578.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.01953125,
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
        "date": 1753465712841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3553.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4879.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8484.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 47.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8218.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8263.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2095.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.01171875,
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
        "date": 1753468095964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3515.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4879.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8448.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8142.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8197.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 683.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.765625,
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
        "date": 1753708682982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3422.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4828.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8423.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8207.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2096.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 642.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 460.7578125,
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
        "date": 1753802732032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3429.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4880.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8375.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8225.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8242.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2115.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 460.76171875,
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
        "date": 1753890564526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3570.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4863.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8417.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8164.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.5390625,
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
        "date": 1753890867807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3535.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4871.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8521.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8211.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8249.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 642.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.03515625,
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
        "date": 1753974344089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3487.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4842.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8481.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8275.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 788.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.77734375,
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
        "date": 1754314384326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3591.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4892.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8466.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8247.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8220.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 751.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.2734375,
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
        "date": 1754496783584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3495.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4839.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8512.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8280.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2114.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 722.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 454.7734375,
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
        "date": 1754509549515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3552.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4880.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8480.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 46.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8255.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 784.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.00390625,
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
        "date": 1754576996455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3583.5625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4871.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8464.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8114.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8153.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 823.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 541.80078125,
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
        "date": 1754582751766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3654.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4952.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8527.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8136.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8203.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 947.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.796875,
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
        "date": 1754591262625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3568.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4889.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8540.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8196.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8149.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 867.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.3125,
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
        "date": 1754664156150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3511.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4886.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8530.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8217.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8232.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 772.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496,
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
        "date": 1754936785569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3532.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.96875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8399.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8139.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 841.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 459.2734375,
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
        "date": 1755015307078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3564.07421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4953.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8525.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8210.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8084.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.8046875,
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
        "date": 1755103600514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3758.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4966.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8530.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8246.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8188.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 941.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.0234375,
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
        "date": 1755105296887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3736.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4928.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8573.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8144.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8110.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 833.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.5234375,
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
        "date": 1755195376122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3552.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4918.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8378.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8247.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8149.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 752.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 458.98828125,
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
        "date": 1755196184512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3604.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4941.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8514.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8099.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8258.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 628.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 493.76953125,
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
        "date": 1755257561852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3539.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4908,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8406.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8134.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2096.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 772.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.03515625,
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
        "date": 1755262871389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3426.2578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8465.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8221.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 607.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.5625,
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
        "date": 1755270297468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3498.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4849.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8503.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8133.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8262.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 820.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.546875,
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
          "id": "a21e11eb58696febd23f7285d270abe8e55beddc",
          "message": "Remove left-over parameter (#1578)\n\nRemoves accidentially forgotten parameter, fixing the prefetcher and\nclient benchmarks to be executable again.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T15:05:07Z",
          "tree_id": "2746dba63ded33c1f080cedf5c17dd2622df39db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a21e11eb58696febd23f7285d270abe8e55beddc"
        },
        "date": 1755278544749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3626.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8542.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8307.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8129.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 800.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.03125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}