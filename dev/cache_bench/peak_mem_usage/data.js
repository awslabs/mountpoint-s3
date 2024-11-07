window.BENCHMARK_DATA = {
  "lastUpdate": 1730983593017,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729689670789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3288.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3307.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3339.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 248.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3246.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22877.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3578.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3559.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 205.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10271.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3422.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 205.08984375,
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729764236324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3089.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3126.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3426.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 255.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3298.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31398.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3430.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3580.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3596.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3371.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.2890625,
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
          "id": "e72d7ac4fd9ab3f37b9c30048320032a2a9808a7",
          "message": "Upgrade dependencies (#1081)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-24T16:55:46Z",
          "tree_id": "ccf2e2057d3c2557a6b11f927acdbe08af351456",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e72d7ac4fd9ab3f37b9c30048320032a2a9808a7"
        },
        "date": 1729796127593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3295.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3409.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3414.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3361.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23349.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3565.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12073.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3781.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3411.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.7890625,
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
          "id": "8f2770b32389f415626c249e46282b9995b428e7",
          "message": "Add ability to request checksum in an S3 HeadObject request (#1083)\n\n* Add option to retrieve additional checksums with HeadObject\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry and comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove import condition for s3express_tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-28T13:55:13Z",
          "tree_id": "3e7e43ffee37c0d772a529c2798e112f107cddd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f2770b32389f415626c249e46282b9995b428e7"
        },
        "date": 1730130995768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3334.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3291.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 339.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3352.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3214.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 192.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19968.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3755.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3262.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3510.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3185.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.1953125,
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
          "id": "05a50dade864bb06e767ea4d6e6473ed4c51dc06",
          "message": "Add additional checksum algorithms in mountpoint-s3-crt crate (#1082)\n\n* Add support for SHA1\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove implementation of std::hash::Hasher for checksum types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add benchmark for SHA1 checksum\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix Rustdoc, length checks for c_int\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRC64, SHA256\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry for adding bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add PR links for change log entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove mountpoint-s3-client changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update SHA1 tests to be consistent with SHA256 tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add ByteBuf wrapper for aws_byte_buf\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRT IO lib init call on benchmark lib load\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-28T18:00:34Z",
          "tree_id": "9286818519bfd4e848ad59fea260216ee5f45e9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05a50dade864bb06e767ea4d6e6473ed4c51dc06"
        },
        "date": 1730145793630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3407.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3334.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3328.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3405.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24998.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3640.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3662.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3709.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3320.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.76171875,
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
          "id": "ed999df7c9622236a477294ea50b85adacdc942f",
          "message": "Fix ESTALE after upload (#1085)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-10-29T10:27:15Z",
          "tree_id": "83e427e24588f049e71124fde3ea15c4b801d077",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed999df7c9622236a477294ea50b85adacdc942f"
        },
        "date": 1730204849797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3127.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3327.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3295.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3283.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24425.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3471.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3312.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3711.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3211.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.66796875,
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
          "id": "3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa",
          "message": "Remove unused dependencies (#1087)\n\n* Remove unused dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Restore whitespace in Cargo.toml for mountpoint-s3-* crate dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T10:29:55Z",
          "tree_id": "9cfbfd42a4e4c19113377f1623b014c49767c009",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa"
        },
        "date": 1730204993251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3426,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3295.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3489.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 255.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3409.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17605.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3479.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3701.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3629.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3262.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.55078125,
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
          "id": "726220684057f40c7bf89b6cf78a42cb9a0fdc1d",
          "message": "Address CRT documentation warnings, add deny statements for bare_urls and broken_intra_doc_links (#1091)\n\n## Description of change\n\nSince updating our GitHub Actions configuration, we now have a number of\nwarnings directly surfaced in our PRs.\n\nThis change takes a quick stab at eliminating some low-hanging fruit. It\nalso will now fail the build if these issues are reintroduced when\nmaking changes to the CRT crate.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo behavior changes. Docs and build process only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, no behavior or API changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:07:23Z",
          "tree_id": "29a38b0973516c75be794e6c152bc648a937f1b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726220684057f40c7bf89b6cf78a42cb9a0fdc1d"
        },
        "date": 1730218070830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3090.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3455.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3349.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3424.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23428.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3438.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3630.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3648.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3449.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 201.609375,
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
          "id": "db33036c56cc83435fbe1ff89020d03b9ed41ff9",
          "message": "Update PR template to reflect how PR metadata is used in PR merges (#1090)\n\n## Description of change\n\nWe have updated pull request settings to use the description of the PR\nin the commit message rather than the list of individual commits in the\npull request.\n\nThis change explains the importance of the title and description in how\nthey are used to create the squash commit. We want to encourage PR\nauthors to be aware of this and keep the metadata up-to-date.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, PR template change only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, there are no code changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:23:56Z",
          "tree_id": "2174748aa3a91efab3a856a519c1001c810d3448",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db33036c56cc83435fbe1ff89020d03b9ed41ff9"
        },
        "date": 1730218956373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3239.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3212.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 336.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3541.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3404.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32616.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3633.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3634.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3655.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3121.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.2265625,
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
          "id": "856c31de291e9ed012a36aeca7e689252f216c47",
          "message": "Add checksum algorithm to ListObjectsV2 response (#1086)\n\n## Description of change\n\nFor a consumer of the S3 client, we need to return the checksum\nalgorithm used with objects.\n\nThis change exposes the checksum algorithm that is sometimes returned as\npart of a ListObjectsV2 request. This functionality is not opt-in, and\nwill now simply be exposed to be used by consumers of Mountpoint S3\nclient where supported.\n\nThis change also updates `ChecksumAlgorithm` to have a new `Unknown`\nvariant. This is a common pattern in AWS SDKs. This will allow clients\nto recognize where an unknown algorithm is returned (should the S3\nservice start supporting additional algorithms), and avoid either\nreturning `None` (if optional) or panicking when the error may be\nrecoverable.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, it changes the `ObjectInfo` and `ChecksumAlgorithm` structs.\nSpecifically, they are now marked `non_exhaustive` meaning that new\nfields could be added in the future (as has been done in this PR).\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, relevant change logs for breaking change (`non_exhaustive`) as well\nas new feature (exposing checksum algorithm) have been added to\n`mountpoint-s3-client`'s changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T15:13:32Z",
          "tree_id": "1ec1c5b3f53de9d8622a353a8be26edfef2cf5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/856c31de291e9ed012a36aeca7e689252f216c47"
        },
        "date": 1730222045046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3498.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3548.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3688.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3524.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24457.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3284.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3476.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3709.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3310.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.453125,
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
          "id": "ce5473941f173d0128d2669eb666c356581263f0",
          "message": "Update fuser to v0.15.0 (#1088)\n\n## Description of change\n\nUpdate fuser to the latest release,\n[v0.15.0](https://github.com/cberner/fuser/releases/tag/v0.15.0).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-29T17:03:29Z",
          "tree_id": "6f6e0c2140ce462128091ddb00b332508a6b5197",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ce5473941f173d0128d2669eb666c356581263f0"
        },
        "date": 1730228561187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3474.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3095.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3130.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3338.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23010.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 337.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3569.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3493.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3552.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3290.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.16015625,
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
          "id": "fb3832ba0dc4ea970eac01a4b9d610dd91dea4f2",
          "message": "Update ChecksumAlgorithm field of client's ObjectInfo struct to be Vec over single element (#1093)\n\n## Description of change\n\nOn reviewing the S3 API documentation, the checksum algorithm field is a\nlist of algorithms. Additionally, when reviewing other SDKs such as the\n[Rust SDK, we see that they are presenting this field as\n`Option<Vec<String>>`](https://docs.rs/aws-sdk-s3/latest/aws_sdk_s3/types/struct.Object.html)\nrather than a single optional element. (Note, we do drop the `Option`\nstill.\n\nWe'd prefer to align with the SDK interface. Our tenet here is to ensure\nour S3 client is consistent with the official SDKs where there's no\nsignificant effort required. This is making a breaking change while\nwe're already planning to make a number of breaking changes to the\nclient.\n\nRelevant issues:\n\n- Follow up on #1086, which added checksum algorithms to the list\nobjects response.\n\n## Does this change impact existing behavior?\n\nYes, it changes the S3 client behavior to return a different type. We\nare however merging this before a new crate release, so this will not be\nan additional breaking change.\n\nThere's no behavior change to Mountpoint file system.\n\n## Does this change need a changelog entry in any of the crates?\n\nThere is already an existing entry in `mountpoint-s3-client`'s\nchangelog. This PR has been added to the list of PRs for that entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-01T13:17:48Z",
          "tree_id": "c2b02e3ec1e0d948b16bb7e6239145c4dc3d6d0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3832ba0dc4ea970eac01a4b9d610dd91dea4f2"
        },
        "date": 1730474386069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3158.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3207.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3179.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 248.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3398.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21508.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3644.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3667.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3522.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3223.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.6953125,
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
          "id": "98f75363d4513319f899fe3168df506de70aaccf",
          "message": "Update macOS unit tests to use latest macOS (#1097)\n\n## Description of change\n\nThis change updates the CI to use the latest version of macOS available\non GitHub runners (currently macOS 15), updating from macOS 12.\n\nWe are seeing GitHub CI failing in some cases. We wanted to update\nversion anyway, and I suspect the issues we are seeing is due to the\ndeprecation (maybe).\n\nI update to latest since we don't strictly support macOS, so just\nchecking that unit tests pass on the latest version is enough for us.\n\nRelevant issues:\n- https://github.com/github/roadmap/issues/986\n\n## Does this change impact existing behavior?\n\nCI change only. No behavior change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-04T16:04:41Z",
          "tree_id": "aaf04462f5af46d8d2ae11994a3b85084414e12f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98f75363d4513319f899fe3168df506de70aaccf"
        },
        "date": 1730743678570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3517.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3396.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3371.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3239,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25743.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3723.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3556.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3436.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3582.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.64453125,
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
          "id": "4814f8164404de8f7672a7131fa20711f3c69e78",
          "message": "Encapsulate test resources in `TestSession` struct (#1096)\n\n## Description of change\n\nCurrently we return tuples from session constructor functions. This\nmakes adding new resources to testing session challenging. Wrapping all\ntesting resources in `TestSession` will help us to add new resources\neasily and it will also simply the type signatures of the functions\nusing the test session.\n\n## Does this change impact existing behavior?\n\nNo, just tests.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-04T16:53:33Z",
          "tree_id": "b4f441adb926a652fbcafccbb6c16101b65452d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4814f8164404de8f7672a7131fa20711f3c69e78"
        },
        "date": 1730746573440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3490.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3630.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3359.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3481.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29275.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3693.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3561.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3666.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3330.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.24609375,
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
          "id": "c3277ef4623eca11ab089527df19de1cbbe9a422",
          "message": "Update bucket name examples to use recommended 'amzn-s3-demo-bucket' (#1099)\n\n## Description of change\n\nMountpoint currently uses an outdated example bucket name. AWS\ndocumentation is using the bucket name prefix `amzn-s3-demo-bucket`\nacross all documentation.\n\nWe plan to update for consistency with AWS documentation (such as the\nAmazon S3 User Guide).\n\nWhen reviewing AWS documentation, it is typically\n([1](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html),\n[2](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html))\npresented lowercase but as a code highlight. We also use that same\nformat now in our documentation.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, changes documentation and unit test source code only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-04T21:21:18Z",
          "tree_id": "3853fec91f0ded083a5b6a998f23b2ee34bb697a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3277ef4623eca11ab089527df19de1cbbe9a422"
        },
        "date": 1730762521320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3357.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3140.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3331.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3277.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20568.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3559.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3648.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3363.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3315.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 220.56640625,
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
          "id": "a54596b3f41d82dcda1a03d3b44a97a829b866db",
          "message": "Decouple S3FileSystem and S3FuseFileSystem constructors (#1100)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactor `S3FuseFileSystem::new` to accept an `S3FileSystem` instance\nrather than creating a new one. The change highlights that\n`S3FuseFileSystem` is only a wrapper for `S3FileSystem` and will make it\neasier to modify `S3FileSystem` construction in future changes.\n\n## Does this change impact existing behavior?\n\nNo, it's only a minor internal refactor.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-05T10:08:12Z",
          "tree_id": "4c4896c9523dc06ad586abd5a79616f79a67adba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a54596b3f41d82dcda1a03d3b44a97a829b866db"
        },
        "date": 1730808454167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3305.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3266.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 338.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3280.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3276.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29030.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3698.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3520.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3647.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3424.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.5390625,
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
          "distinct": true,
          "id": "2a95d141ffc094f9a50f0916ecc27b6edaa6b453",
          "message": "Support running integration test against custom endpoints (#1094)\n\n## Description of change\n\nThis allows contributors to run mountpoint integration tests against\ncustom S3 compatible endpoints.\n\n## Does this change impact existing behavior?\n\nNo, test only\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-05T12:24:27Z",
          "tree_id": "18941a74c8441c6693efa8f635df8a16bab8402b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a95d141ffc094f9a50f0916ecc27b6edaa6b453"
        },
        "date": 1730816654562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3307.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 321.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3352.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3297.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3296.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 199.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29050.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3275.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3566.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 198.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3545.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3375.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.08203125,
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
          "id": "db4571fa61b0c346da91a5e9d05435c6a291b220",
          "message": "Implement checksums for MockClient upload path (#1102)\n\n## Description of change\n\nThis change updates the mock client's write path to compute and store\nchecksums, matching behavior approximate to S3. We want this so that we\ncan use the mock client for both uploads and downloads and verify\nchecksum behavior for the client.\n\nThe change stores the checksums as strings, as this is the observed\nbehavior of S3. We can always update if this turns out to be a bad\nassumption.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nThis change updates the `mountpoint-s3-client` mock client to add\nchecksum persistence to the write path. This was previously a gap in the\nmock client.\n\n## Does this change need a changelog entry in any of the crates?\n\nI do not think this needs a changelog entry, as it does not change the\nbehavior of the S3 client itself. Happy to discuss.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-05T13:46:55Z",
          "tree_id": "d378b0251527cbe572573659230fda913fcc3170",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db4571fa61b0c346da91a5e9d05435c6a291b220"
        },
        "date": 1730821591710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3495.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3206.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3250.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3616.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33227.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3706.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3583.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3755.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3328.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.4765625,
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
          "id": "53197c99e464933f7aef9eee18e5a4714c489ed0",
          "message": "Multilevel cache (#1064)\n\n## Description of change\n\nAllow using both caches when `--cache-express <bucket> --cache\n<directory>` options are specified, local cache is queried first.\n\nRelevant issues: No\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, will add in one of the future PRs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-06T17:01:07Z",
          "tree_id": "d3ba1fd9bb48664282835018870e46b3a2d61394",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53197c99e464933f7aef9eee18e5a4714c489ed0"
        },
        "date": 1730919850118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3169.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 321.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3235.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3569.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3366.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20592.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3611.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3243.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3456.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3376.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.94921875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrew.peace@gmail.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50433e6a7b37b692abd5075aff355976f233006b",
          "message": "Don't run benchmarks with debug, plus minor refactoring (#1104)\n\n## Description of change\n\nRemove the `--debug` flag when mounting S3 for the benchmarks.\n\nThis is now available via an S3_DEBUG environment variable which, when\nset, will add `--debug` back again.\n\nAlso, within `fs_bench.sh`, merge the read and write benchmark methods\ninto a single one, which is paramterized, since they were almost\nidentical. This avoids having to make the change described above in two\nplaces and simplifies the code going forwards.\n\n## Does this change impact existing behavior?\n\nThis changes the benchmarks to run without --debug to the mount command,\nwhich creates a discontinuity in benchmark results, and may improve them\n(though there's no actual performance improvement here).\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-06T17:27:39Z",
          "tree_id": "b59d054c2a27fb760c820897a25be27b71464afd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50433e6a7b37b692abd5075aff355976f233006b"
        },
        "date": 1730921254113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          }
        ]
      }
    ],
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "011043e1a336888254df2c5451d644eba4742341",
          "message": "Add descriptive name to benchmarks, enable CI summaries (#1109)\n\n## Description of change\n\nThis change leverages our benchmark action's GitHub Action's job summary\nintegration to display a summary for throughput and latency benchmarks.\nBefore this change, we would need to check the webpage or the JSON\noutput to compare. For pull requests, only the JSON output would be\navailable. This change applies to both commits on `main` as well as pull\nrequests.\n\nThis should also address issues we had in the past where commit comments\ndid not describe which benchmark failed. See implementation:\nhttps://github.com/benchmark-action/github-action-benchmark/blob/6bae118c112083251560ad8b3a1ff2e43aa23351/src/write.ts#L203-L239\n\nMore information on benchmark GH Action's integration:\nhttps://github.com/benchmark-action/github-action-benchmark?tab=readme-ov-file#job-summary\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo impact to Mountpoint file system or client.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:10:32Z",
          "tree_id": "d1aaf31b582c86345aeb8a2e0489f046d98d4ad9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/011043e1a336888254df2c5451d644eba4742341"
        },
        "date": 1730981436772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
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
          "id": "0faeac4f7a4e8c7378ad00ab22f021a347069aa6",
          "message": "Add GitHub runner architecture to CI cache key (#1110)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nThis change adds the architecture of the runner to the cache key. In a\nprevious change where we upgraded macOS runners from macOS 12 to macOS\n15, the architecture changed however the cache was not invalidated.\n\nLikely we should find a way to key the cache on the actual operating\nsystem version used however there doesn't seem to be an obvious way to\ndo that right now. This quick fix should at least protect us from\narchitecture changes (which macOS runners do have, but I understand its\nonly for larger runners at this time).\n\nRelevant issues: #1097\n\n## Does this change impact existing behavior?\n\nNo, only CI change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, only CI change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:33:22Z",
          "tree_id": "ebd89a8ffd256c498bb1a40f7fb715bc7f630360",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0faeac4f7a4e8c7378ad00ab22f021a347069aa6"
        },
        "date": 1730982654544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
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
          "id": "cc3b46b7e44d8566a85b9f78fe8c77dca008ede2",
          "message": "Update PyTorch example with clearer getting started section (#1092)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nI've been using this example for some talks I've been preparing. I'm\nupdating the steps to be clearer on what action needs to be taken by the\nreader (since I kept missing steps when preparing new instances).\n\nIn this change, I also update the mentioned bucket names to follow the\nexample bucket names recommended across AWS documentation.\n\nRelevant issues: N/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:47:30Z",
          "tree_id": "e07d0a3db93f67eaf49c1f9af51c6d07929010fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3b46b7e44d8566a85b9f78fe8c77dca008ede2"
        },
        "date": 1730983592979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}