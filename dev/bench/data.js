window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdfee3da27beb1c289243865cedf3cfe796a90c4",
          "message": "Bump aws-sigv4 from 0.54.1 to 0.54.2 (#223)\n\nBumps [aws-sigv4](https://github.com/awslabs/smithy-rs) from 0.54.1 to 0.54.2.\r\n- [Release notes](https://github.com/awslabs/smithy-rs/releases)\r\n- [Changelog](https://github.com/awslabs/smithy-rs/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/awslabs/smithy-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-sigv4\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-26T16:50:13Z",
          "tree_id": "b36fc04be3c55e4f5a31ca5fe33a8debcef91fce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdfee3da27beb1c289243865cedf3cfe796a90c4"
        },
        "date": 1682529098874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 882.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6358.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2236.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.88671875,
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
          "id": "330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd",
          "message": "Implement mkdir (#202)\n\n* Implement mkdir to create local directories\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Acquire locks from top to bottom in finish_writing\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use mount time for local directory stat\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add section for `mkdir` to SEMANTICS.md\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Improve comments and add check for cycles\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-26T20:07:30-05:00",
          "tree_id": "0763785cf0f51ede4b096dbc9c2c8b2a867407ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd"
        },
        "date": 1682558886178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1047.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6529.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.0615234375,
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
          "id": "748e70878149412e29ad1f7b711f928750f8371b",
          "message": "Update CRT submodules and document the process (#224)\n\nAddress issue #219.\r\n\r\nUpdate CRT submodules to the latest tagged releases:\r\n\r\n* aws-c-auth v0.6.26\r\n* aws-c-cal v0.5.26\r\n* aws-c-common v0.8.17\r\n* aws-c-compression v0.2.16\r\n* aws-c-http v0.7.7\r\n* aws-c-io v0.13.21\r\n* aws-c-s3 v0.2.8\r\n* aws-c-sdkutils v0.1.9\r\n* aws-checksums v0.1.14\r\n* aws-lc v1.9.0\r\n* s2n-tls v1.3.42\r\n\r\nAlso add short document to describe the process.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-28T08:36:10Z",
          "tree_id": "be032113da4336de31b64378e620d235b0075724",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/748e70878149412e29ad1f7b711f928750f8371b"
        },
        "date": 1682672228082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 803.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6392.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 174.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2177.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.0732421875,
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
          "id": "0329646254f252c2b1da508a214df3e249c2908f",
          "message": "Add range argument to client download example (#227)\n\nThis was helpful for debugging #218 and #226.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-28T12:45:35-05:00",
          "tree_id": "1c6a61f6710d44fb629b432813ea8da47445530b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0329646254f252c2b1da508a214df3e249c2908f"
        },
        "date": 1682705168193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 993.5,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6293.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2194.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.8427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.931640625,
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
          "id": "977473426b192a21890da1777f11be6e0732c036",
          "message": "Bump aws-c-s3 to v0.2.9 (#228)\n\nThis picks up the fix for #218.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-02T10:46:44-05:00",
          "tree_id": "cfaa7073603a25d40cb5010675f1dcf3d8c42bb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/977473426b192a21890da1777f11be6e0732c036"
        },
        "date": 1683043586558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 607.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6289.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.15625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1973.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.29296875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215",
          "message": "Fuse Test Etag prefetcher (#225)\n\nAdded fuse test to check prefetching behaviour with Etag\r\n\r\nSigned-off-by:sauraank <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-02T13:02:55-05:00",
          "tree_id": "d981dd917e91ec27c4d02dd7fdc85bfb96bbbb6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215"
        },
        "date": 1683051862631,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 828.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5992.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1884.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.056640625,
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
          "id": "beabd7fca0371c7e90bbb0e9936a3d179a9436ec",
          "message": "Add get_object test with 1 byte range (#231)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-03T18:56:09-05:00",
          "tree_id": "6106c887258d4998468bbce15df9871f3d56367f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/beabd7fca0371c7e90bbb0e9936a3d179a9436ec"
        },
        "date": 1683159423587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.9755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 650.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6395.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2142.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.162109375,
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
          "id": "ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a",
          "message": "Handle channel closure in PartQueue (#233)\n\nImprove PartQueue to report an error (rather than blocking indeterminately) when trying to read beyond the body returned by the GetObject request. \r\n\r\nThe previous behavior, compounded with a bug in the CRT (now fixed: #228) where GetObject unexpectedly returned an empty body, manifested in #218.\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-04T11:32:30-05:00",
          "tree_id": "18a24cc9c265b9c53ba0224109dedace8ca38a15",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a"
        },
        "date": 1683219249412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1069.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6253.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2375.794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.294921875,
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
          "id": "1130719c55c6c8a60e3268034e7d849f30c22fba",
          "message": "Basic property-based tests for writes (#229)\n\n* Basic property-based tests for writes\r\n\r\nThis is the first step in property-based testing for the write path.\r\nRight now, it tests scenarios where the entire write sequence happens at\r\nonce: mknod, open, write once, release. It generates a vector of such\r\noperations, with random paths and random file contents/sizes. After each\r\noperations, the test checks that the file system has the expected\r\ncontents.\r\n\r\nI'm stopping this PR here because it's enough to get the testing off the\r\nground, but doesn't yet cover a lot of the interesting cases we'd like to\r\ncheck. The focus here is getting the infrastructure in place to start\r\nadding more complex operations to the `Op` structure in future PRs.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't do manual path manipulation + other PR comments\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Fix root directory\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-04T11:36:39-05:00",
          "tree_id": "c53517eb84199e10c63c4fcc8223c4ebd614379e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1130719c55c6c8a60e3268034e7d849f30c22fba"
        },
        "date": 1683219382310,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1159.6572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6633.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2032.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.2158203125,
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
          "id": "e6b072f4bb948b58974d5d773aa5292c5f3b2546",
          "message": "Extract `fn read_dir_to_entry_names` for FUSE tests (#237)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-05T13:06:19+01:00",
          "tree_id": "88c8def3077e7228aeb52a00133993a399bbb57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6b072f4bb948b58974d5d773aa5292c5f3b2546"
        },
        "date": 1683289681183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1082.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6383.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 158.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.93359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2185.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.8740234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiri@jpospisil.com",
            "name": "Jiri Pospisil",
            "username": "jiripospisil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81152c243fac653bcbf36a091e4411288c83ab7e",
          "message": "Add info about the unofficial AUR package to README (#239)\n\nSigned-off-by: Jiri Pospisil <jiri@jpospisil.com>",
          "timestamp": "2023-05-09T23:59:42Z",
          "tree_id": "2e9facd2fc6588d8edf934374e0ef392dbe2d639",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81152c243fac653bcbf36a091e4411288c83ab7e"
        },
        "date": 1683678023080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 995.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6098.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1872.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.23828125,
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
          "id": "e592d72d4df3687cb06af60256313b83fffc0501",
          "message": "Implement CRT bindings for CRC checksum functions (#240)\n\n* Implement CRT bindings for CRC checksum functions\r\n\r\nAdd rust interfaces for CRC32 and CRC32C functions. We will be using\r\nthese functions to do data integrity check in the future.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Fix clippy errors and some small changes\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-09T22:53:41-05:00",
          "tree_id": "fd87989d0ec14a5c279049a4ca8876e160520454",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e592d72d4df3687cb06af60256313b83fffc0501"
        },
        "date": 1683692060772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 978.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5889.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.6611328125,
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
          "id": "467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe",
          "message": "Use GitHub repository variables in the CI (#244)\n\nInstead of hard coding test variables like test bucket name or test\r\nbucket prefix in the CI, we will be using GitHub repository variables.\r\n\r\nThis allows us to change the values later without having to create a new\r\npull request, and also allows contributors to easily config these variables\r\nin their own forks.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-12T13:37:36+01:00",
          "tree_id": "9e6da8862917f8b1d0362fc2c4ba6ba364662eda",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe"
        },
        "date": 1683897640912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6813.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1958.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 29.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.267578125,
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
          "id": "4d493bdff9d2dd36b5ec081a792b152d8f5f037d",
          "message": "Fix shadowing semantics doc and add tests (#242)\n\nThe doc was backwards from what we actually do and what we intended.\r\nDirectories will shadow files of the same name, in the interest of\r\nmaking as many objects visible as possible.\r\n\r\nI also added a new integration test that just quotes the documentation\r\nand implements it directly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T14:58:32Z",
          "tree_id": "16aa74efde04f4b3265cc9a06e90ab2426138159",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4d493bdff9d2dd36b5ec081a792b152d8f5f037d"
        },
        "date": 1683910740482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.65625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.53125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6883.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 167.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2174.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 29.2255859375,
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
          "id": "4e045b417643aa82c91020d32ed6e0e65bb6205f",
          "message": "Refactor ReaddirHandle to lazily create inodes  (#238)\n\n* Move ReaddirHandle into its own file\r\n\r\n`inode.rs` is getting too long to be readable.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Refactor `ReaddirHandle` to lazily create inodes\r\n\r\nThe motivation here is that `readdir` calls from FUSE generally only\r\nretrieve a small number of entries, but ListObjectsV2 calls to S3\r\nretrieve many entries. In the current code, we instantiate inodes for\r\nthose entries as soon as the ListObjectsV2 call completes, but because\r\nof the small batch size of `readdir`, most of these inodes will not be\r\nreturned to FUSE until some time later. Because the TTL of an inode's\r\nattributes is chosen at inode creation time, it will have expired by\r\nthis point, and so the kernel will immediately re-`lookup` these entries\r\nwhen they're returned to `readdir`. That makes `readdir` do O(n)\r\n`lookup` calls back to S3, defeating the purpose of ListObjectsV2.\r\n\r\nTo solve this problem, this change refactors the `ReaddirHandle`\r\nimplementation to defer creating inodes until an entry is actually\r\nreturned to `readdir`. The big idea is that we now just create a new\r\n[ReaddirEntry] struct for each entry returned by ListObjectsV2, and all\r\nthe `readdir` logic works in terms of those things rather than directly\r\non inodes. The conversion from [ReaddirEntry] to an actual inode then\r\nhappens right before returning the entry to `readdir`.\r\n\r\nI took this opportunity to refactor this code (hopefully for the\r\nbetter!) since this change was adding yet another layer of complexity\r\ninto the logic for iterating directory entries. I also tried to capture\r\nmy understanding of this code in a new module comment. There is still a\r\nbug here around page sizes (#190) that I think this comment and refactor\r\nwill make it easier to fix, but let's do that separately to avoid making\r\nthis change bigger.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T12:27:36-05:00",
          "tree_id": "fcfc80546752ff1c34a9e9d8b57e514c5daa3101",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e045b417643aa82c91020d32ed6e0e65bb6205f"
        },
        "date": 1683913710348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6893.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 168.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1815.6357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.486328125,
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
          "id": "b153d819612fca772f06dd1be27e587554f28705",
          "message": "Implement releasedir and clean up directory handles (#241)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-15T11:00:13-05:00",
          "tree_id": "2b0bc0dd4b3dc578448d72ade105d6c7fe036e3e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b153d819612fca772f06dd1be27e587554f28705"
        },
        "date": 1684167695009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 26.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 925.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6453.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 151.109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2079.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.99609375,
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
          "id": "48b51326d6ce4ba3d825a4428492917dc8bf5321",
          "message": "Add benchmarks for CRT checksum bindings (#246)\n\nJust a few simple benchmarks to make sure our bindings aren't\r\naffecting performance. This should also make it easy to play\r\nwith performance on Graviton.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-15T18:55:27+01:00",
          "tree_id": "b0f2f0be30f14134b1b34cbc8c28d4d43bd698f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48b51326d6ce4ba3d825a4428492917dc8bf5321"
        },
        "date": 1684174624620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 28.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1013.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6604.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2313.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.806640625,
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
          "id": "95d0147308f6d5942e19840fe6d99e94777f18d3",
          "message": "Fix default config for logging (#245)\n\nWe'd like to capture info-level logs by default -- they report useful\r\ninformation including metrics and failed requests. I was also wrong\r\nabout the \"brutal hack\" for providing a default value for RUST_LOG --\r\n`EnvFilter::new` has always existed to parse a string, so let's use that\r\ninstead.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-16T10:04:20-05:00",
          "tree_id": "275f67a0130017a82d6ed72a8e5283f8db88db8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/95d0147308f6d5942e19840fe6d99e94777f18d3"
        },
        "date": 1684250850939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 3.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 961.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6994.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 152.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2077.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.1123046875,
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
          "id": "d96822beb25b631c2f266905fb7a6e196d8b85a7",
          "message": "Use more specific labels for self-hosted runners (#248)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-16T16:54:25+01:00",
          "tree_id": "592f736597371b34663ff2e2d460d03fa5cacdf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d96822beb25b631c2f266905fb7a6e196d8b85a7"
        },
        "date": 1684277973392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1279.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6765.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2167.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.5048828125,
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
          "id": "0094cd4788f9c37ebef7090be436c40fcee3793d",
          "message": "Add incremental writes to reftests (#249)\n\n* Add incremental writes to reftests\r\n\r\nIn #229 we added initial support for writes to the reference model\r\ntests. So far, those tests have only covered writing to a file as a\r\nsingle atomic operation (create, open, write, close), but we'd also\r\nlike to test interleavings of those individual operations, so that we\r\ncan see, for example, multiple writers try to touch the same file.\r\n\r\nThis change adds the create/open/write/close steps as separate\r\noperations that the reftest can choose to perform in any order. We\r\nretain the original atomic operation, but it's now just a \"shortcut\"\r\nthat does all four steps together.\r\n\r\nThe important thing we do here is introduce a couple of \"index\" types\r\nthat `proptest` can generate. These indexes allow the generated test to\r\nrefer to inflight writes, existing directories, etc all without actually\r\nneeding to understand paths. The indexes are strongly typed even though\r\nthey're just wrappers around `usize` so that we don't mix them up.\r\n\r\nThis change is hopefully also a template for how to add additional\r\noperations in the future: we need to add new variants to `Op`, implement\r\na `perform_` method for them, and think about how to track any inflight\r\nstate so that future operations can refer to it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Address PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-17T15:42:09-05:00",
          "tree_id": "8d38621d953018b7d29bd6243bc2c0b0d1a3efe5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0094cd4788f9c37ebef7090be436c40fcee3793d"
        },
        "date": 1684357460808,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6599.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2197.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.986328125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1684357461305,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}