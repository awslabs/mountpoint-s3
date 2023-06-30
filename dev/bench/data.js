window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "b6f6cf615dda527577760414025744ba8e7c91ee",
          "message": "Release new crate versions (#302)\n\nThe main goal here is to get #298 out the door, but it's a good point to\r\nget the last month of updates out too.\r\n\r\nThe async streaming work changed the `put_object` interface, so this\r\nrelease is a breaking change for `mountpoint-s3-client`.\r\n\r\nWe also missed writing a changelog for v0.2.2 of `mountpoint-s3-client`,\r\nso I'm writing it here.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-20T10:14:34-05:00",
          "tree_id": "ad9f47089f9c80e6961844ceb801b5bd18392fa9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6f6cf615dda527577760414025744ba8e7c91ee"
        },
        "date": 1687275329495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 15.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6187.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1926.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.5166015625,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687344908531,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 949.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6454.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 266.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2409.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.990234375,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687555594927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.6875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6590.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 13.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1881.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 29.3095703125,
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
          "id": "4a3187b9fce63aac19e10ee59096533902da1991",
          "message": "Fix dependency installation in GitHub workflows (#314)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-24T00:03:30-05:00",
          "tree_id": "0e144bbacb4a2ad79a0b9b6da33ce207c865b0e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a3187b9fce63aac19e10ee59096533902da1991"
        },
        "date": 1687584247484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1123.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6377.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 261.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2022.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.3818359375,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687782971689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 900.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6286.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.90625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2075.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.65234375,
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
          "id": "cc93e4283b2212472bc4e4b9abc09cf72d7eaab3",
          "message": "reftests: always materialize reference model from bucket contents (#311)\n\n* reftests: always materialize reference model from bucket contents\r\n\r\nToday, the reference model for the reftests is just a tree structure.\r\nWhen we make changes to the expected state of the file system, we update\r\nthis tree structure in place.\r\n\r\nThis needs to change to prepare us to extend the reftests with mutations\r\nto the *bucket*, not just the file system (i.e., concurrent mutations).\r\nWhen one of these mutations happens, we need to be able to compute what\r\nwe expect the state of the file system to be after the change. For\r\nexample, if my bucket contains keys `a` and `a/b`, and then I delete\r\n`a/b` from the bucket, what's the expected state of the file system? The\r\ncurrent implementation asks us to compute this state by making in-place\r\nmodifications to the file system tree, which is error prone -- we'd\r\nessentially be re-implementing the same inode management logic we use in\r\nthe actual file system.\r\n\r\nTo avoid this complexity, this change instead \"materializes\" the file\r\nsystem structure from the bucket structure at every step of the reftest.\r\nThe reference model is now just an S3 bucket plus lists of local files\r\nand directories. In the example above, we can simulate deleting an\r\nobject by just removing it from both the mock bucket (the one Mountpoint\r\nis accessing through the mock client) and the reference bucket (the one\r\nintroduced in this change). Then, when we rematerialize the reference\r\nfile system, we'll have the new directory structure, without having to\r\nmanually compute the changes to make to that tree.\r\n\r\nThis is nice because it means the only \"trusted\" code in the reference\r\nmodel is `build_reference`, which specifies how to convert *any* bucket\r\ninto a filesystem. One potential downside is that rematerializing the\r\nfilesystem after every operation might be expensive, but in my testing\r\nthe overhead hasn't seemed problematic.\r\n\r\nThis commit is not expected to change any semantics of the reftests, and\r\ndoesn't add any new operations. Those will come later, building on this\r\nrefactoring.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-26T17:34:09-05:00",
          "tree_id": "93b196d7084527ecb66ed8eca061cd941dd6c439",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc93e4283b2212472bc4e4b9abc09cf72d7eaab3"
        },
        "date": 1687820097834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1321.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6424.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2032.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.802734375,
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
          "id": "d3792ec2f3d27780316cd83a28d6ae96996c1616",
          "message": "Update PR template to prompt thinking around breaking changes (#318)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-28T11:53:48+01:00",
          "tree_id": "06dfa946d6f03076cd55c45c9ee2116b4211e12e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3792ec2f3d27780316cd83a28d6ae96996c1616"
        },
        "date": 1687950868361,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 875.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6230.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1635.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.5048828125,
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
          "id": "68884556c4b07f5253cf1498601efb50639699d9",
          "message": "Add `mkdir` and `rmdir` to reftests (#316)\n\n* Add `mkdir` and `rmdir` to reftests\r\n\r\nNothing too surprising here -- we test that we can create directories as\r\nlong as a conflicting name doesn't already exist, and then we can remove\r\ndirectories if and only if they're local and empty.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Speed up `compare_file` in reftests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-28T16:39:44-05:00",
          "tree_id": "8da7a2021cf17188cba1199f55008f60ede8cdf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68884556c4b07f5253cf1498601efb50639699d9"
        },
        "date": 1687989642970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1308.59765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.42578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6332.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2048.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.48828125,
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
          "id": "26e61f95d535b7db61b57537ffbc858a514d5de6",
          "message": "Update cargo dependencies (#323)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T15:03:10+01:00",
          "tree_id": "ac99601d46a4ee0c8bf394cb6bf2a583a9c2a76d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26e61f95d535b7db61b57537ffbc858a514d5de6"
        },
        "date": 1688048634236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.39453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1242.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6135.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2232.1083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.658203125,
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
          "id": "005b590b8cbac1681924d179dbe94d54b688f5cd",
          "message": "Checkout PR branch when running ASAN workflow (#324)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T14:42:35Z",
          "tree_id": "8035ce8ca411cc7f63cb2ee9df551f5dbdf4d6eb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/005b590b8cbac1681924d179dbe94d54b688f5cd"
        },
        "date": 1688051053908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6285.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1962.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.5078125,
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
          "id": "5c1c831822e608a9a7c118c5ee51e072149e41c5",
          "message": "Enable trailing checksums on PUT (#320)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T09:58:42-05:00",
          "tree_id": "680f13b07ac51675f54fa6c1a5c2b63e778c1257",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5c1c831822e608a9a7c118c5ee51e072149e41c5"
        },
        "date": 1688051963852,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1025.1982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6295.255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2035.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.4619140625,
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
          "id": "62ac31da3bccbbc2ac73022626dcb38ea750bbbc",
          "message": "Restrict log files access by default (#321)\n\nMountpoint log directories and files are currently created with operating\r\nsystem default permissions, which allows other users in the system to read\r\nlog files. In this commit, we set the log directories and files to 750\r\nand 640 respectively to limit access to the logs.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:12:05-05:00",
          "tree_id": "972cf426682c402e1a9ec52f1638d5c2b1318e7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/62ac31da3bccbbc2ac73022626dcb38ea750bbbc"
        },
        "date": 1688052770210,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1276.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6321.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2007.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.1123046875,
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
          "id": "c89f05d1f6478696f113930cc3013daa970992de",
          "message": "Implement fsync and handle write errors (#313)\n\nImplement `fsync` to allow users to complete a put request and receive confirmation that it succeeded or failed. If a file handle is released without a call to `fsync`, `release` will still complete the upload as before. \r\n\r\nWrap the `UploadRequest` in the file handle in a new `UploadState` enum, in order to detect:\r\n* on `release`, whether the request had been already completed by an `fsync` call,\r\n* `write` is invoked after an `fsync`,\r\n* `write` (or `fsync`) is invoked after a previous call failed.\r\n\r\nAlso adds support for put failures to FailureClient.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T10:11:28-05:00",
          "tree_id": "497e1a9c8fa5edd1482b94b652c92d4652207fac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c89f05d1f6478696f113930cc3013daa970992de"
        },
        "date": 1688052792611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 1.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6630.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1888.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0166015625,
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
          "id": "971b7575668dc658ce55e6731ebe8eef47b215a6",
          "message": "Optimize part size for checksummed read (#315)\n\n* Optimize part size for checksummed read\r\n\r\nThe prefetcher stores data received from each input stream as a part in\r\nthe part queue structure. Usually, the part size is pretty big (8 MB or\r\nmore) and the checksum validation always has to be done against an entire\r\npart even if we only read a small portion of that part.\r\n\r\nThis makes checksummed read much slower than non-checksummed read. We could\r\nmake it more efficient by making the part smaller or ideally align the part\r\nsize to the read size so that we don't have to compute the checksum on\r\nunnecessary bytes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:31:11-05:00",
          "tree_id": "2396fc27e4e988000e28b565d6f2db663bd46a62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/971b7575668dc658ce55e6731ebe8eef47b215a6"
        },
        "date": 1688053936974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 852.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5200.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1897.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 18.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.5107421875,
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
          "id": "df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb",
          "message": "Avoid a copy when optimizing part size for checksums (#328)\n\nThe `chunks` iterator returns slices, so creating the `Bytes` for each\r\nchunk needs to do a copy. We can instead just do the `Bytes` conversion\r\nupfront from the `Box<[u8]>`, and then do O(1) splits of that `Bytes`\r\nobject for each chunk.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:15:04+01:00",
          "tree_id": "2cb7678c80405139d5e942e9f255c4b209a7d767",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb"
        },
        "date": 1688117752867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6269.140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.25,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1993.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.6328125,
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
          "id": "5946bb83b5baab5c75ca0f487aea9b1b2edd1184",
          "message": "Configure Dependabot to update Cargo and GitHub Action dependencies (#331)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T15:38:05+01:00",
          "tree_id": "550a4df365c6fd93bbc5697b0b1a587551a5ad30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5946bb83b5baab5c75ca0f487aea9b1b2edd1184"
        },
        "date": 1688137125293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.65625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1065.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6680.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1986.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.12109375,
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
          "id": "f90adbe516c0da7119c61c9facddad4c16ffd2b2",
          "message": "Readme shuffling and updates (#330)\n\n* Readme shuffling and updates\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Missing space\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T09:58:52-05:00",
          "tree_id": "e62f893e600f47da4b4de89efddb4913cecd852c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f90adbe516c0da7119c61c9facddad4c16ffd2b2"
        },
        "date": 1688138382113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6246.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1707.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.5302734375,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "38263d7856835b4a29798fee79245c49bc844a85",
          "message": "Bump aws-actions/configure-aws-credentials from 1 to 2 (#335)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 1 to 2.\r\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\r\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v1...v2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-actions/configure-aws-credentials\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T15:07:57Z",
          "tree_id": "05c1c09cf91288b890c0fc37fd35f22d4376a7a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38263d7856835b4a29798fee79245c49bc844a85"
        },
        "date": 1688138959951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6697.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2399.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.9619140625,
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
          "id": "e1eed3830f1a4b7a254396db35419fbd72ef379b",
          "message": "Enforce maximum upload size (#329)\n\n* Expose part size from ObjectClient\r\n\r\nSome users of the client need to know what part size it's using\r\ninternally. Rather than plumbing that around everywhere, and deferring\r\nto CRT defaults if unspecified, let's just make it explicit everywhere.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Allow FUSE tests to set a part size\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce maximum upload size\r\n\r\nUploads can fail if they require more than 10,000 parts. Right now we\r\nonly find out about that failure asynchronously when the CRT actually\r\nconstructs the 10,0001th part. This is bad because unlike other upload\r\nerrors, this one is a deterministic failure that we should be able to\r\nreport up front.\r\n\r\nOne trick here is that the kernel appears to retry failed writes from\r\npage cache when returning EFBIG, so we need to remember the reason the\r\nwrite failed.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce part size bounds\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:09:42-05:00",
          "tree_id": "a130fc75afd1352b9c7db5c9a492b38c39fc1f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1eed3830f1a4b7a254396db35419fbd72ef379b"
        },
        "date": 1688139039069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1333.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6630.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2409.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.671875,
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
          "id": "e7bad12eca37ee46f91e9ecccfd1cd2657815f4e",
          "message": "Turn write support on (#327)\n\n* Turn write support on\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Enable delete feature in workflows\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Only run unlink tests under delete feature\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T16:15:47+01:00",
          "tree_id": "12376fb46b7bf8d60ee2a5ff3982ea62ee26d80d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7bad12eca37ee46f91e9ecccfd1cd2657815f4e"
        },
        "date": 1688139374060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.09375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 18.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6661.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2357.8125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.6689453125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1688139374543,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}