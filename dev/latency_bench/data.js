window.BENCHMARK_DATA = {
  "lastUpdate": 1687950249883,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "a016e53712b3738b9c2fc1dd40b6d69bfd012090",
          "message": "Updating the CRT submodules with the following commits to latest releases- (#288)\n\nc3f95ebf3d6d1608e1656bb08eca05e303cc4fd3\r\n5d912b0dc53d383cdd1dd82df87c60e8ca95a1da\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-14T00:14:40-05:00",
          "tree_id": "b07a846d475fe6b119946a8fcb1b05346a4c3138",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a016e53712b3738b9c2fc1dd40b6d69bfd012090"
        },
        "date": 1686720320442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.978,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.2352877,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.8531578,
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
          "distinct": true,
          "id": "80437aefeac1d0cd93470eb259eb7ab58ca38fad",
          "message": "Run benchmark with auto network throughput (#290)\n\nNow that we have auto network throughput configuration for Mountpoint\r\nwe can use default configuration in the benchmark. It also makes the\r\nbenchmark script more flexible when running on other types of instance.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T11:27:32-05:00",
          "tree_id": "d1ed6d18b19c745c1fd14aaf8dbe06277e82694b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/80437aefeac1d0cd93470eb259eb7ab58ca38fad"
        },
        "date": 1686760688688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.102,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.7925246,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.5810812,
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
          "id": "1a77d917ea2aaa29f21a11782e4b9d6178ea6e1f",
          "message": "Introduce uploader and use async streaming (#282)\n\n* Introduce uploader and use streaming PUT\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add put_object test\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add write_test for streaming PUT\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up Uploader\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up client\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up test clients\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move the async body_input_stream into the http Message\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address feedback, add tests.\r\n\r\nAlso: rename StringExt to ToAwsByteCursor and implement for [u8].\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use PhantomPinned\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address more PR feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add timeout to tests\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use ListMultipartUploads to test aborting a streaming PutObject.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address latest feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove unused InputStream and related methods\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Return AWS_IO_STREAM_READ_FAILED on dropping ReadRequest\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-14T11:31:29-05:00",
          "tree_id": "2fde40698a8a916c4316f4fa7bde3fda50c7a5c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1a77d917ea2aaa29f21a11782e4b9d6178ea6e1f"
        },
        "date": 1686760954940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.769,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 60.5655545,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.0657924,
            "unit": "milliseconds"
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
          "id": "b85e1f6ee0ce64adb453827c3275d2e71cd0769e",
          "message": "Pick up CRT async streaming fixes (#292)\n\nPicks up https://github.com/awslabs/aws-c-s3/pull/313, which fixes\r\nconcurrency in async streaming\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-14T22:51:19+01:00",
          "tree_id": "6a971958c263a8a4edb7ad4f89cb6693beb8db25",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b85e1f6ee0ce64adb453827c3275d2e71cd0769e"
        },
        "date": 1686780121563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.644,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.55872740000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.5240905,
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
          "id": "e37c7a4a99a304c0fec29d0e16ee7abafd4ab518",
          "message": "Update CI file/prefix variables with sensible defaults (#293)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-15T12:29:06-05:00",
          "tree_id": "9a0bdfd734bac13284fbaec6ef7c30242e96e8d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e37c7a4a99a304c0fec29d0e16ee7abafd4ab518"
        },
        "date": 1686850790701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.132,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.8257246,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.212101600000004,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66806474+ericjheinz@users.noreply.github.com",
            "name": "ericjheinz",
            "username": "ericjheinz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e8189f59808b8f35c066c3f2f4b8147a99f78cc",
          "message": "Allow static linking of BYO CRT libs (#298)\n\nTesting:\r\n\r\n```\r\n% export MOUNTPOINT_CRT_INCLUDE_DIR\r\n% export MOUNTPOINT_CRT_LIB_DIR\r\n\r\n% export MOUNTPOINT_CRT_LIB_LINK_STATIC=1\r\n\r\n% cargo build\r\n    ...\r\n    Finished dev [unoptimized + debuginfo] target(s) in 9.22s\r\n\r\n% ldd target/debug/mount-s3\r\n\tlinux-vdso.so.1 (0x00007fff2b73b000)\r\n\tlibfuse.so.2 => /lib64/libfuse.so.2 (0x00007f4f5d91f000)\r\n\tlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f4f5d709000)\r\n\tlibrt.so.1 => /lib64/librt.so.1 (0x00007f4f5d501000)\r\n\tlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007f4f5d2e3000)\r\n\tlibm.so.6 => /lib64/libm.so.6 (0x00007f4f5cfa3000)\r\n\tlibdl.so.2 => /lib64/libdl.so.2 (0x00007f4f5cd9f000)\r\n\tlibc.so.6 => /lib64/libc.so.6 (0x00007f4f5c9f2000)\r\n\t/lib64/ld-linux-x86-64.so.2 (0x00007f4f5f030000)\r\n\r\n% unset MOUNTPOINT_CRT_LIB_LINK_STATIC\r\n\r\n% cargo build\r\n   ...\r\n    Finished dev [unoptimized + debuginfo] target(s) in 8.69s\r\n\r\n% ldd target/debug/mount-s3\r\n\tlinux-vdso.so.1 (0x00007ffd599c8000)\r\n\tlibaws-c-common.so.1 => not found\r\n\tlibaws-c-io.so.1.0.0 => not found\r\n\tlibaws-c-http.so.1.0.0 => not found\r\n\tlibaws-c-auth.so.1.0.0 => not found\r\n\tlibaws-checksums.so.1.0.0 => not found\r\n\tlibaws-c-s3.so.0unstable => not found\r\n\tlibfuse.so.2 => /lib64/libfuse.so.2 (0x00007f2ecc6eb000)\r\n\tlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f2ecc4d5000)\r\n\tlibrt.so.1 => /lib64/librt.so.1 (0x00007f2ecc2cd000)\r\n\tlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007f2ecc0af000)\r\n\tlibm.so.6 => /lib64/libm.so.6 (0x00007f2ecbd6f000)\r\n\tlibdl.so.2 => /lib64/libdl.so.2 (0x00007f2ecbb6b000)\r\n\tlibc.so.6 => /lib64/libc.so.6 (0x00007f2ecb7be000)\r\n\t/lib64/ld-linux-x86-64.so.2 (0x00007f2ecd6a8000)\r\n```\r\n\r\nSigned-off-by: Eric Heinz <eheinz@amazon.com>\r\nCo-authored-by: Eric Heinz <eheinz@amazon.com>",
          "timestamp": "2023-06-17T00:12:12Z",
          "tree_id": "b393e08f4da58fe011e7ba2537bec897399516e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e8189f59808b8f35c066c3f2f4b8147a99f78cc"
        },
        "date": 1686961387701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.009,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.742451,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.922834,
            "unit": "milliseconds"
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
          "id": "f856090c21bc32b87b1467d51415c5e738753314",
          "message": "Remove another profile override (#296)\n\nWe fixed one of these obsolete overrides in #272 but missed this one.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-18T11:50:49+01:00",
          "tree_id": "cd3575a95e713d35fe7343f2b544dfee68e970bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f856090c21bc32b87b1467d51415c5e738753314"
        },
        "date": 1687086113165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.535,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 94.3420875,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.2879805,
            "unit": "milliseconds"
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
          "id": "be8464513568a30409c59cf157a55b8ed8d02257",
          "message": "Fix rmdir & unlink fuse tests by adding wait condition following release operation (#289)\n\n* Added sleep after drop to complete the object upload to remote in rmdir and unlink test\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Added macro for sleep till retry succeed\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* resolved conflicts\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Modified the sleep timing\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Added function instead of macro for retries\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* removed mut where it was not needed\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed unnecessary mut\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-19T12:36:10-05:00",
          "tree_id": "08a47a2cd427674f0defa04ca2cb9764f84ac03f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be8464513568a30409c59cf157a55b8ed8d02257"
        },
        "date": 1687196807468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.935,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6967658,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.663540700000006,
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
          "id": "5d6fa05c7a898b4d9d9b18caf97975c6efd3ecd8",
          "message": "Allow empty PutObject requests (#295)\n\nThe new streaming PUT implementation in #282 broke empty PutObject requests (i.e. with a 0-byte body). This is because the CRT does not currently support 0-byte meta-requests without Content-Length. Here is the returned error:\r\n\r\n```\r\n0 byte meta requests without Content-Length header are currently not supported. Set Content-Length header to 0 to upload empty object \r\n```\r\n\r\nWhile this limitation is likely to be lifted in the CRT in the future, this change addresses it in `mountpoint-s3-client` by delaying the request until the first write is requested or complete is called, so that the Content-Length=0 header can be set in the latter case.\r\n\r\nA minor complication of this change is that `S3PutObjectRequest` now needs to hold on to the client to issue the request at a later time. To allow for it, `S3CrtClient` has been refactored to hold a pointer to a `S3CrtClientInner` which can be passed to the request.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-19T21:00:13+01:00",
          "tree_id": "ff6668483fc5e424e4fc4f2444bb40ab84d7ef47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d6fa05c7a898b4d9d9b18caf97975c6efd3ecd8"
        },
        "date": 1687205446516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.795,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.7481755,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.037556,
            "unit": "milliseconds"
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
          "id": "824fd664f8ac7af7fee20a9072999789a1da9629",
          "message": "Suppress LeakSanitizer in glibc DNS resolver (#301)\n\nThe allocation in `__res_context_send` is owned by glibc, which is\r\nsupposed to clean it up at shutdown, but that seems to break\r\noccasionally. It's outside our control and a bounded allocation (once\r\nper process), so let's just ignore it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-19T23:34:10+01:00",
          "tree_id": "cd432dd3daf1219b37d23e21ac02212e2cb67e00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/824fd664f8ac7af7fee20a9072999789a1da9629"
        },
        "date": 1687214702756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.565,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.6963265,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.940382899999996,
            "unit": "milliseconds"
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
          "id": "b6f6cf615dda527577760414025744ba8e7c91ee",
          "message": "Release new crate versions (#302)\n\nThe main goal here is to get #298 out the door, but it's a good point to\r\nget the last month of updates out too.\r\n\r\nThe async streaming work changed the `put_object` interface, so this\r\nrelease is a breaking change for `mountpoint-s3-client`.\r\n\r\nWe also missed writing a changelog for v0.2.2 of `mountpoint-s3-client`,\r\nso I'm writing it here.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-20T10:14:34-05:00",
          "tree_id": "ad9f47089f9c80e6961844ceb801b5bd18392fa9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6f6cf615dda527577760414025744ba8e7c91ee"
        },
        "date": 1687274723078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.188,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.9625457,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.9312507,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687344295938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.984,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.5528202,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.9390143,
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
          "id": "4b3f2e60f77ab767f9d188b25b2e1fd0d2540754",
          "message": "Move GitHub workflow dependency installation to its own action file (#300)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-22T07:43:13+01:00",
          "tree_id": "2d7b523658edb7fa40b3b6fe45e3554de5388545",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4b3f2e60f77ab767f9d188b25b2e1fd0d2540754"
        },
        "date": 1687416764613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.659,
            "unit": "seconds"
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
          "id": "cb8ec0e0afe48381482d9c438ea0397f141109d1",
          "message": "Remove AL2 + fuse3 pair from test matrix (#306)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-22T10:39:04Z",
          "tree_id": "efcc179009113b1e3b2cd58f32404a0adca232a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb8ec0e0afe48381482d9c438ea0397f141109d1"
        },
        "date": 1687430940380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.961,
            "unit": "seconds"
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
          "id": "7511b2fe5cebfd53135208d929882a6e1a14be23",
          "message": "Fix va_list FFI safety on aarch64 (#312)\n\nWhen building on aarch64 we get a warning about FFI safety for va_list.\r\nIt turns out bindgen can't figure out the definition for va_list on that\r\narchitecture and so just emits a `[u64; 4]`, which has the right size,\r\nbut raw arrays aren't FFI-safe. So instead, let's emit a `struct\r\nva_list` that matches the aarch64 definitition. The actual fields don't\r\nmatter since we never actually try to look inside a `va_list`; we only\r\ncare that the bytes roundtrip correctly back to C.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-22T22:55:24-07:00",
          "tree_id": "c5c9853e013cee112f70ba361e3e8b2a0215e804",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7511b2fe5cebfd53135208d929882a6e1a14be23"
        },
        "date": 1687500305395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.191,
            "unit": "seconds"
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
          "id": "db804032dd5d78222bacb6a674254cfc2eda6bd9",
          "message": "Move some inode-related error logging (#310)\n\nThese failures in `inode.rs` aren't really errors -- in general, if the\r\nuser asked us to do something, it's not an internal error if that's not\r\npossible. These are really \"expected failures\" from Mountpoint's\r\nperspective. So this change shifts the actual `error!` log message into\r\nthe filesystem, and changes the `inode.rs` messages to warnings. This\r\nmakes our CI and test output less spammy, especially the reftests that\r\nexpect to test these cases repeatedly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-23T10:03:31+01:00",
          "tree_id": "1dc6a293ce2564fa26543deb1fe5bc1996d3d9ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db804032dd5d78222bacb6a674254cfc2eda6bd9"
        },
        "date": 1687511580397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.935,
            "unit": "seconds"
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
          "id": "810a320337fa31aaa9571b1ae1b0a6b98f219ca0",
          "message": "Bump aws-c-s3 and aws-c-auth dependencies (#309)\n\nThis picks up https://github.com/awslabs/aws-c-s3/pull/320 to unblock\r\nbinding the endpoint resolver, and\r\nhttps://github.com/awslabs/aws-c-auth/pull/203 to fix a bug in the IMDS\r\nclient.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-23T10:11:30+01:00",
          "tree_id": "303cd37b88d106d95c521881fe6d0939aa1e5dcd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/810a320337fa31aaa9571b1ae1b0a6b98f219ca0"
        },
        "date": 1687512062736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.079,
            "unit": "seconds"
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
        "date": 1687583634612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.861,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.2279362,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.4231781,
            "unit": "milliseconds"
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
        "date": 1687819467800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.947,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.01926809999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.7473968,
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
          "id": "d3792ec2f3d27780316cd83a28d6ae96996c1616",
          "message": "Update PR template to prompt thinking around breaking changes (#318)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-28T11:53:48+01:00",
          "tree_id": "06dfa946d6f03076cd55c45c9ee2116b4211e12e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3792ec2f3d27780316cd83a28d6ae96996c1616"
        },
        "date": 1687950249411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.129,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.5670323,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.4135693,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}