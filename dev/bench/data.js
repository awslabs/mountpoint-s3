window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "1ce21dfb55e9832a83f27421d28d63a9795c4693",
          "message": "Implement forget (#359)\n\n* Implement forget\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix comparison\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix fmt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Split readdir and readdirplus in fs\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove TODO\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-07T11:16:28-05:00",
          "tree_id": "988016ea49705858dcbda5e62078f0a75f9e4518",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ce21dfb55e9832a83f27421d28d63a9795c4693"
        },
        "date": 1688747950606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6580.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1913.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.59765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1239.78,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1811.98,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed542e726de9232f8cfbdbeeb3a5a37988ada891",
          "message": "Add some tests for UTF-8 filenames (#362)\n\nLinux filesystems allow UTF-8 in filenames, and S3 allows UTF-8 in keys,\r\nso we expect this to work. It does! But it did expose a bug in our mock\r\nclient's ListObjects implementation, which was dealing with bytes\r\ninstead of characters (unlike the real S3).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-09T13:03:55+01:00",
          "tree_id": "63ed2df4c8b2c72b6e48cbe57025f1c0c108aab0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed542e726de9232f8cfbdbeeb3a5a37988ada891"
        },
        "date": 1688905614328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6649.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 267.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1901.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.6162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "5feb0e596c471e3bf24f6ee947d8f862d69cf163",
          "message": "Update CRT submodules to latest releases (#365)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-10T14:09:41+01:00",
          "tree_id": "bf30fd59e6a63e498fe1bf113c1790f0ea789d65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5feb0e596c471e3bf24f6ee947d8f862d69cf163"
        },
        "date": 1688995939746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6209.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.40625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2078.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1129.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
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
          "id": "b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907",
          "message": "Remove closed issue warnings (#366)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-11T10:29:45+01:00",
          "tree_id": "951937452359dbfa781a00799f97d198a63d5486",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907"
        },
        "date": 1689069142824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6330.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1899.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1274.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a516cc8ba299becad398c7564755c16c9e8d5ff4",
          "message": "Introduce release workflow. (#356)\n\nWe adopt two Github Action to automate release for Mounpoint-S3\r\n* Github Action ID: [taiki-e/create-gh-release-action](https://github.com/taiki-e/create-gh-release-action) for create Github Release.\r\n    * During the release, operator must have consensus with team on version,\r\n      draft, prefix and title as workflow inputs.\r\n    * This workflow can also take changelog as inputs, we can opt in\r\n      that once we have a change log format ready.\r\n* Github Action ID: [taiki-e/upload-rust-binary-action](https://github.com/taiki-e/upload-rust-binary-action) for uploading Mountpoint-S3 binary and all other artifacts.\r\n    * This workflow uploads compiled binary on target platforms. When we\r\n      do the release, artifacts must includes: bin, LICENSE, archive and\r\n      checksum.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: Yaosheng Zhang <zyaoshen@amazon.com>",
          "timestamp": "2023-07-12T14:41:52-07:00",
          "tree_id": "6c4c4ffe626009d2f9e3692bb8a2cf33c2f6a451",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a516cc8ba299becad398c7564755c16c9e8d5ff4"
        },
        "date": 1689199459788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6386.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2125.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1293.306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "862625f2ef55926f6444948f60c481058cf47a0f",
          "message": "Disable new `items_after_test_module` Clippy lint (#372)\n\nThis is new in 1.71, but seems to get confused by the test_case macro.\r\nIt was supposedly fixed in\r\nhttps://github.com/rust-lang/rust-clippy/pull/10992 but that seems to\r\nnot have entirely worked.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:20:36Z",
          "tree_id": "bdb22a4a2ffc9565d4ec86c32cf8003ae5f49a91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/862625f2ef55926f6444948f60c481058cf47a0f"
        },
        "date": 1689266631639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.1796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6084.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2125.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1257.6240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "caeff99448ec64b64bf6dfbbd7dbdebea13d847e",
          "message": "Add unlink to reference model tests (#368)\n\nThis is pretty annoying because of some weird edge cases around implicit\r\ndirectories being removed while local children are present. I think in\r\nthe long term we want to fix this, but it's a similar problem to what we\r\nsaw in #359 -- we need `readdir` to clean up removed directories\r\nproperly. So for now, I've changed the reference model to match our\r\ncurrent semantics, which is that if an ancestor of a local\r\nfile/directory is removed, that file/directory will no longer be visible\r\nthrough the filesystem. Of course, once that file/directory becomes\r\nremote it will become visible, and the model still captures that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:52:46Z",
          "tree_id": "fb7e90556bf7d806ff78ac94090986ec32396177",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caeff99448ec64b64bf6dfbbd7dbdebea13d847e"
        },
        "date": 1689268557710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.28125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6419.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2105.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1115.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2098.08,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "146b9d3d777e41d68a5383a911021feea003c869",
          "message": "Remove checksum feature from the workflow (#379)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:46:49+01:00",
          "tree_id": "37e8bdcb9d89f483203260f792c507f30603d57e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/146b9d3d777e41d68a5383a911021feea003c869"
        },
        "date": 1689343765587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6162.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1859.87109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1293.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "d335a48ee2b2d2bb87408b557345af2166e7085d",
          "message": "Remove the temporary checksum feature (#378)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:18:22Z",
          "tree_id": "329e09fadd5876c558ae99a2fd8e3b0bf4325eff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d335a48ee2b2d2bb87408b557345af2166e7085d"
        },
        "date": 1689345654320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.3408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5643.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.7470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1625.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1122.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
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
          "id": "7be6f2f3816591794134e90d3e615e79f66a5668",
          "message": "Compute checksums on write and compare with trailing checksums (#367)\n\n* Revert workaround for empty PutObject requests in #295\r\n\r\nCRT now supports empty PutObject requests with no ContentLength header\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move crc32c-related functions into Crc32c type\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add support for upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Compute checksums on write and review on upload\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksum types to mountpoint-s3-client\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Rename/review UploadReview types\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify handling of upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove ChecksummedSlice\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address PR feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksums back to mountpoint-s3-crt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-14T16:00:10-05:00",
          "tree_id": "f7ca2d33165a79b9dcd24d8667fa436d9ec31bb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7be6f2f3816591794134e90d3e615e79f66a5668"
        },
        "date": 1689369777751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5806.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 11.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1938.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1045.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
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
          "id": "8d44b12bdd387ee9e7359f754e62d294ad267003",
          "message": "Allow omitting commit hash from version when specified as official release (#376)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:31:27-05:00",
          "tree_id": "372fb86afbbff454325b9cb6fd64d2fded7af972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8d44b12bdd387ee9e7359f754e62d294ad267003"
        },
        "date": 1689371626564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.4599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5641.9033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.65625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1716.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 840.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
            "unit": "MiB/s"
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
          "id": "6e2551a73643c04983fb6b1eed375d00c3df477b",
          "message": "Disable logging to file by default (#373)\n\n* Disable logging to file by default\r\n\r\nThis is a breaking change.\r\n\r\nLogging to disk is now disabled by default.\r\nLogs will not longer be written to `$HOME/.mountpoint-s3/` and should be configured using `--log-directory <DIRECTORY>`.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Cleanup argument a little\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve clarity of documentation around foreground logging\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update log file name to improve timestamp clarity\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:33:59-05:00",
          "tree_id": "8a2826148e4e0ec24461d0475240f43a47a66cb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e2551a73643c04983fb6b1eed375d00c3df477b"
        },
        "date": 1689371779842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5811.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1620.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1331.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e",
          "message": "Fix merge conflict (#381)\n\n:(\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-14T22:36:34Z",
          "tree_id": "03de622de34cf468c05e6869ae21681e5e89f51d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e"
        },
        "date": 1689375529304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5824.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1135.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae",
          "message": "Tweak some of the CLI help text (#382)\n\n- desired throughput -> maximum throughput\r\n- move AWS credentials above mount options\r\n- change placeholder name for mount point to match `mount`'s docs\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:56:46+01:00",
          "tree_id": "16fb32e481d08a6d6e1d1fbb5f653c937b949c61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae"
        },
        "date": 1689614347573,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5643.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1518.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1008.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1811.98,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "0efc380abaad32dc0ab64f33df251d2702edd479",
          "message": "Support open with O_RDWR flag (#370)\n\n* Support open with O_RDWR flag\r\n\r\nCurrently, Mountpoint supports either open with O_WRONLY or O_RDONLY\r\nbecause we don't allow applications to do both read and write at the same\r\ntime. However, it's possible support O_RDWR flag too since we can decide\r\nat open time whether to give a read handle or a write handle back, and\r\nfor any inode it's never possible for both start_reading and start_writing\r\nto work.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update semantics document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update mountpoint-s3/tests/fuse_tests/write_test.rs\r\n\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add logs\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-07-17T13:28:00-05:00",
          "tree_id": "63c799dc2dfae1088371518de063e834f7b5e31a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0efc380abaad32dc0ab64f33df251d2702edd479"
        },
        "date": 1689619808822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5952.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1547.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 858.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d03df14abcc5a1bb38c671865faa7cf9e623bf5",
          "message": "Adds region in tests (#375)\n\n* adds region when running fuse tests\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds in secondary region\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* removes extra new lines\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds domain env variable\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds fips_tests feature to CI\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* use full domain\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* rustfmt\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T18:55:28Z",
          "tree_id": "1cf94e31943f473dc7d81e8fb0b22079b05e91ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d03df14abcc5a1bb38c671865faa7cf9e623bf5"
        },
        "date": 1689621477430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5714.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a3aa4c1ab89b28bcafeb28066475888ed659c47",
          "message": "Fix missing feature in CI (#385)\n\nWe missed this in #375 and it broke mainline.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:00-05:00",
          "tree_id": "c667c5c19ef67e4006b3f81dd2e179f0870de3d8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a3aa4c1ab89b28bcafeb28066475888ed659c47"
        },
        "date": 1689635838007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.3115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5632.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1395.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1073.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "839ccfd1ba98ca9613eae8686bb4c369e691fe29",
          "message": "Remove inodes from their parent in `forget` (#380)\n\n* Remove inodes from their parent in `forget`\r\n\r\nThe parent directory still holds onto an `Inode` (an `Arc<InodeInner>`),\r\nso right now our `forget` is leaking the actual inode. We need to remove\r\nit from its parent at `forget` time. Also updated the tests to check\r\nthat the inode is in fact free'd.\r\n\r\nI tested this by listing a directory with 2M objects on an instance with\r\n1GiB of memory, and saw constant memory usage.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't forget the wrong inode\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:27-05:00",
          "tree_id": "43b8c9e97bc4a356b830f058f2c753fa3dc62e5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/839ccfd1ba98ca9613eae8686bb4c369e691fe29"
        },
        "date": 1689635863865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.0205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5722.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1914.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1558.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04",
          "message": "Report current file size during writes (#384)\n\n* Report current file size during writes\r\n\r\nMountpoint currently reports file size as 0 until the upload is complete.\r\nIn this commit, we instead report how many bytes have been streamed to S3\r\nas some applications want to know current size of the file during writes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add some tests\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comment\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-18T13:21:12-05:00",
          "tree_id": "7a1093c09b1491d093d3da81c8188987e79f8422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04"
        },
        "date": 1689705812363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5763.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1103.6875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53",
          "message": "Reconcile remote and existing inodes at `update` time (#386)\n\n* Reconcile remote and existing inodes at `update` time\r\n\r\nTo date we haven't thought too carefully about what happens if objects\r\nare put/deleted from the S3 bucket while conflicting state is present\r\nlocally. There are a lot of edge cases here -- the Cartesian product of\r\nexisting state (local/remote file/directory) and new remote state\r\n(file/directory), as well as two paths for inodes to be updated (readdir\r\nvs lookup).\r\n\r\nThis change defines a semantics for these permutations. The overall idea\r\nis that (a) remote state shadows local state, and (b) directories shadow\r\nfiles. But those axioms alone aren't enough to break all ties; for\r\nexample, what if the existing state is a local directory but the new\r\nstate is a remote file -- which should win? I chose to break the tie by\r\nsaying that remote directories > any local state > remote files. So, for\r\nexample, if a user creates a local directory, and then a conflicting\r\nobject appears in the remote bucket, the directory will still be\r\nvisible instead of the new file.\r\n\r\nI spent some time trying to patch the existing inode update path to do\r\nwhat I needed but it ended up being easier to just refactor it. I think\r\nwe could still find a better factoring for this path, but it now\r\nexplicitly accounts for all the permutations above and does the right\r\nthing (at least according to our reference model) for them all.\r\nHappily, proptest has done a good job at rooting out the many edge\r\ncases, as you can see by all the new regression tests in this change.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:54:35+01:00",
          "tree_id": "f6cf307ab27e2014dcf378a5e1ca71657aab26ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53"
        },
        "date": 1689761835766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.8017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5748.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1935.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 704.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1689761836245,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}