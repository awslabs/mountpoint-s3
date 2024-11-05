window.BENCHMARK_DATA = {
  "lastUpdate": 1730808261691,
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
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729187111582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 164.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37419.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40584.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12424.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11722.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11835.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 149.93359375,
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
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729607183274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 155.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40058.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11560.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12457.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11796.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 239.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.14453125,
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
          "id": "6d3488b7a5b9802fba3d16949f6471aa29f6996a",
          "message": "Suggest a workaround to random write errors in our troubleshooting guide (#1074)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-23T09:04:13Z",
          "tree_id": "981b50223c175f374d6dfa03af2e9c601b126c59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d3488b7a5b9802fba3d16949f6471aa29f6996a"
        },
        "date": 1729681247768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 146.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38512.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40267.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11875.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11111.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11926.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 188.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 141.375,
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
          "id": "286d348bd80e6d99dbad404e8bf193e765b0617b",
          "message": "Add failure hook for put_object_single (#1077)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-23T09:52:44Z",
          "tree_id": "c1901844e21f0d07aa1054cbf880b77b9a5c85f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/286d348bd80e6d99dbad404e8bf193e765b0617b"
        },
        "date": 1729684142649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 232.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39768.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36650.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11808.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13863.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11876.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 253.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.73046875,
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
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729689464612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 142.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 215.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 440.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37715.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33699.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 509.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13674.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14268.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9958.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 191.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 146.08203125,
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
        "date": 1729763992525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 147.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 442.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38509.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35865.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 506.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13400.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12892.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11236.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 251.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 144.62109375,
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
        "date": 1729795957172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 447.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31925.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36952.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12886.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12796.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9559.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 214.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 151.68359375,
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
        "date": 1730130776029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 151.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39638.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40468.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12837.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11934.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11397.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 232.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.1015625,
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
        "date": 1730145552777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41022.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35379.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 497.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12744.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13627.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15195.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 247.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.82421875,
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
        "date": 1730204631245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 238.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 426.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37444.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35588.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 487.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12504.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14190.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12473.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 218.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.1015625,
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
        "date": 1730204804268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 160.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 446.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37362.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44245.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 511.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13448.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11880.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11578.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 251.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 149.73828125,
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
        "date": 1730217964249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 163.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 434.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40565.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41468.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 492.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12454.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13449.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11891.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 231.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 146.7421875,
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
        "date": 1730218823165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 453.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36292.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13636.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12495.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9637.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 248.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 155.62109375,
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
        "date": 1730221862632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 154.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 162.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37768.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40453.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 512.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13368.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12895.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10168.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 228.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 154.296875,
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
        "date": 1730228352284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 209.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 439.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35801.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32060.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 498.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11159.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14541.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12618.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 232.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 155.5859375,
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
        "date": 1730474153549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 154.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 235.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 434.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 332.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43287.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43805.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 510.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12698.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13548.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8577.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 237.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 148.84765625,
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
        "date": 1730743454014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 258.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39622.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33095.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 507.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11637.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13689.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12711.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 236.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.4921875,
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
        "date": 1730746278439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 154.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 172.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 449.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31204.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38072.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12957.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13257.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 7953.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 237.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 146.6953125,
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
        "date": 1730762290939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 442.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38336.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40020.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12677.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12427.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11384.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 252.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 151.7734375,
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
        "date": 1730808261652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 155.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 453.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40472.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35610.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12102.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12684.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9832.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 241.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.03125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}