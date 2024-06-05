window.BENCHMARK_DATA = {
  "lastUpdate": 1717584081682,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
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
          "id": "e32f89013ad0e8b5a6ad5c0bb2295a977d1ed808",
          "message": "Allow --metadata-ttl without --cache and set default with --cache to 60s (#855)\n\n* Allow --metadata-ttl without --cache and set default with --cache to 60s\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Show 0 TTL warning in background mode\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update docs and changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Colorize warning with owo_colors\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Break items in the changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-01T16:01:38Z",
          "tree_id": "a299824b9ac8213d6ce31e1a9ea5cea9fb76646e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e32f89013ad0e8b5a6ad5c0bb2295a977d1ed808"
        },
        "date": 1714586661687,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.69833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2054.45537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1546.108203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 319.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 393.9796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 255.51220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.726953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3795.95771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3855.55693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 644.9755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1321.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1341.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1165.23916015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1151.678125,
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
          "id": "9d22f1f77f232baba714e5775bdef171d77e71d9",
          "message": "Resolve clippy errors introduced in Rust 1.78.0 (#865)\n\nAddress 2 issues:\n\n* Assigning clones (https://rust-lang.github.io/rust-clippy/master/index.html#/assigning_clones)\n  Use `clone_into()` instead of assigning the result of `ToOwned::to_owned()` or `Clone::clone()`.\n\n* Remove the unused `mountpoint-s3-client::util::PtrExt`\n  Redundant. Similar functionality now in `mountpoint-s3-crt::CrtError`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-03T17:13:42Z",
          "tree_id": "3d891a15e62bd1fe4a4287c3b98a84029dfdb632",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d22f1f77f232baba714e5775bdef171d77e71d9"
        },
        "date": 1714763910836,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.34150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2034.77158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.21025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.396875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 479.729296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 230.38876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4037.48486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3979.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 639.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1363.8501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1150.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1480.41611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1281.99345703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 990.94912109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paulo.miguel.almeida.rodenas@gmail.com",
            "name": "Paulo Miguel Almeida",
            "username": "PauloMigAlmeida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b44369dcf17b2c4e1e2db8d71e3a00eeddbaf960",
          "message": "reutilise reference across validate_mountpoint function (#868)\n\npath.as_ref() was being called multiple times unnecessarely\n\nSigned-off-by: Paulo Miguel Almeida <paulo.miguel.almeida.rodenas@gmail.com>",
          "timestamp": "2024-05-06T05:50:19Z",
          "tree_id": "9b84ac53dc325a0d58ae6affb463c8a29eb1272b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b44369dcf17b2c4e1e2db8d71e3a00eeddbaf960"
        },
        "date": 1714981917257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1229.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2005.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.862109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1563.2234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 549.7369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.1408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3946.83603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4211.71328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 622.40244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1258.4361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1292.61142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1058.4076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1194.026171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1319.89814453125,
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
          "id": "a2d0af6da2f613fe7e8d1e67472cb5a620e28f12",
          "message": "Update cargo dependencies (#873)\n\nRun `cargo update` and explicitly set required features for the `nix` crate.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-09T22:09:31Z",
          "tree_id": "3bcfecd973d79784f8aabe313bf3d1d623919fee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a2d0af6da2f613fe7e8d1e67472cb5a620e28f12"
        },
        "date": 1715299752739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1229.49873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2041.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.93271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1580.29267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 308.26337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.94599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.1490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 322.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3824.87177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4174.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 629.50625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1303.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1295.7455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 783.61162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1156.40771484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1174.874609375,
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
          "id": "bd9b1af33128f235b26bbeaee5c586d22de748e2",
          "message": "Update CRT submodules to latest releases (#875)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Exclude more unused files to keep crate size under limit\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-10T13:12:50Z",
          "tree_id": "eb8e685e5382c173e773e27da777a20befe81398",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9b1af33128f235b26bbeaee5c586d22de748e2"
        },
        "date": 1715354219782,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1212.1875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.2111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1571.1001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 304.73974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 469.0279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.77099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.2390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3730.60205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4009.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 601.59287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1279.58671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1243.140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1455.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.74814453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1142.12578125,
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
          "id": "50720ab30b852929d2ab73810ac7806623d9c21c",
          "message": "Update CRT submodules to latest releases (#877)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-13T16:58:41Z",
          "tree_id": "afde2e462a548e5e0cc2996bcc54290f3473cc05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50720ab30b852929d2ab73810ac7806623d9c21c"
        },
        "date": 1715626781328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1213.579296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.425390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1583.05673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.78896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 231.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.01826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3797.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4021.94462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 606.36181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1259.89931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1387.78310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1229.81357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1264.70654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1083.70751953125,
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
          "id": "2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f",
          "message": "Adopt polling API for uploading data in PutObject requests (#874)\n\n* Adopt polling API for uploading data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Detect incomplete writes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update `MetaRequestWrite` rustdocs\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix `total_bytes` calculation and expand comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unnecessary lifetime constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-14T19:14:34Z",
          "tree_id": "f56e2ae926b8ba9cd63ab39f3dda84b4371589ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f"
        },
        "date": 1715721269903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1214.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2083.3908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.21904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.7009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 317.67939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 580.92353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.155859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3869.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4069.78544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 643.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1394.8001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1495.7404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1481.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1097.85869140625,
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
          "id": "8c3e18e80a2fa1ee53eaf5cb5c286d003609683c",
          "message": "Use separate bench buckets in the ci (#881)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-20T10:14:21Z",
          "tree_id": "bc4d8c12201d3e9d7637b4499e67cf559cbb98e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c3e18e80a2fa1ee53eaf5cb5c286d003609683c"
        },
        "date": 1716207180477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1238.9498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2101.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.16640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1610.208203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.7966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.584765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 222.4546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3630.9748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4215.566015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 626.188671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1406.64521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1347.79541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1372.0380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1193.54375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1085.185546875,
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
          "id": "e6a01e14c44d9cf35298124a704ecb332282fab3",
          "message": "Use separate IAM role for the bench CI (#883)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-22T09:42:37Z",
          "tree_id": "c0dc51f41b7a96da923f8cbafc2153dce45f0858",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a01e14c44d9cf35298124a704ecb332282fab3"
        },
        "date": 1716378187677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1179.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2077.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 762.47451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1616.99453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.30849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 506.7484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.57724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.35126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3773.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4262.64150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 593.1091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1460.84375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1351.3869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.5646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1193.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1072.31123046875,
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
          "id": "54a8e74c44d686cf90c317002ce1445e404d4d4c",
          "message": "Improve cancellation test for PutObject write (#884)\n\n* Improve cancellation test for PutObject write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Add TODO\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-22T14:23:47Z",
          "tree_id": "bcf94d568f57ac8c70a006fb673df076c8b72a96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a8e74c44d686cf90c317002ce1445e404d4d4c"
        },
        "date": 1716395255379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1219.85693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2072.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 763.30556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1590.4326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.24619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 545.7013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 233.3908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 299.4751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3849.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3867.859765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 605.63388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1324.59365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1269.73544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1244.18818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1186.4,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1049.31533203125,
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
          "id": "fc60045f3358110a93b2b04e3852710b3f50020a",
          "message": "Revert s2n-tls submodule to v1.4.9 (#887)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-23T11:01:35Z",
          "tree_id": "ec57d7893129d834fa2038443052981554f517aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc60045f3358110a93b2b04e3852710b3f50020a"
        },
        "date": 1716469465543,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1203.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2056.84521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.0810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1576.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.19609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 467.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3804.23515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4363.63740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 605.83125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1411.17646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1306.18017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 820.77548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1123.375390625,
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
          "id": "d750b2aa9f1304502cedc852fc8b54e6af802db3",
          "message": "Small refactors of inode code (#888)\n\n* Remove process ID from Inode\n\nThe entire check happens in S3Filesystem anyway, so there's no need for\nthe actual Inode to be aware of the PID.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Normalize WriteHandle/ReadHandle in inode.rs\n\nThere's no reason for start_writing to exist since it's always called\nimmediately on the result of write. Once that change is made, it looks\nhelpful to have a symmetric ReadHandle for the lifecycle of reads, even\nthough it doesn't do much today.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Move more stuff off the Inode\n\n`inc_file_size` belongs on the write handle itself (you have to be\nwriting to increment the file size), and some other stuff here doesn't\nneed to be public.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-05-28T13:39:59Z",
          "tree_id": "72ad23a694c6477d8c1ae4e9e80d034ba8e8cdb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d750b2aa9f1304502cedc852fc8b54e6af802db3"
        },
        "date": 1716911056974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1207.87236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2050.1521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1586.71259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 334.91416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 413.00419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.05361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 358.8728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3881.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4075.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 666.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1343.43466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1271.43466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1113.89697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1148.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1130.059765625,
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
          "id": "cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759",
          "message": "Add hourly integration test run (#892)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-05-29T10:24:49Z",
          "tree_id": "df019ca2b8bae2920b00a08ec2e04e6f7bfd9cb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759"
        },
        "date": 1716985699096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1214.8244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2079.0857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.4171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1606.6197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 343.79970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 450.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 252.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.73271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3727.0578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4202.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 680.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1282.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1217.3357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1556.50263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1154.34931640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1237.27626953125,
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717084961813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1224.22099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.87626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.81689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1571.38759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 308.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 608.179296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 234.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.98212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3990.36435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3941.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 576.22197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1425.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 998.22451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1155.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1161.598828125,
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
          "id": "4525331e9bc4896ca983bcd1cd7bb01e1dbe8640",
          "message": "Save associated binary for core dump (#896)\n\n* Save associated binary for core dump\n\nTo be able to analyze the core dump we also need\nthe binary it was generated from. This adds a new\nscript for uploading the binary associated with the\ncore dump when tests are failing in the CI.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update core dump pattern\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-31T14:41:07Z",
          "tree_id": "3a6f3e6505b3c597bb40d98fdfe7953a5c51c906",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4525331e9bc4896ca983bcd1cd7bb01e1dbe8640"
        },
        "date": 1717173931026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1224.89248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2021.91201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 771.55888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1540.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.68466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.6990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.19833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.44892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3700.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4205.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 658.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1316.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1306.41669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 801.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1003.28935546875,
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
          "id": "4ad9b8a15cd3eac48fb52e49c61936cdf577e32f",
          "message": "Add workflow_dispatch trigger for integration tests (#898)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-03T11:04:46Z",
          "tree_id": "e4c99cc9825a03601f04c2178bcf02f6a79ced14",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ad9b8a15cd3eac48fb52e49c61936cdf577e32f"
        },
        "date": 1717419983196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1229.9201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2044.90302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 778.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1576.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.06494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 258.97734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.38935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3641.1568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4385.1083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 612.661328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1299.84130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1233.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1427.38876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1183.01669921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1287.7974609375,
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
          "id": "9bdb2376011d621901c3b7e3f21e1bf93e254267",
          "message": "Improve coredump script for the tests workflow (#899)\n\n* List core dump records when tests are failing\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Improve the coredump script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-03T15:50:15+01:00",
          "tree_id": "2387b067dc34dee944ceef6dcb8aad68b82c3ae0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9bdb2376011d621901c3b7e3f21e1bf93e254267"
        },
        "date": 1717432779035,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1185.73173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2095.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 763.89326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1568.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 318.76796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.81572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.40625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3875.36416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4015.77568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 569.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1308.23740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1235.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1048.23203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1190.3671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 880.81337890625,
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
          "id": "07dcd74236ce196bf9d8082469371196615a0a72",
          "message": "Add troubleshooting entry on slow metadata operations (#897)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-04T13:10:59Z",
          "tree_id": "d9e07d1957d77bcab43eccbffb56999286eda437",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/07dcd74236ce196bf9d8082469371196615a0a72"
        },
        "date": 1717514100654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1206.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2094.1193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 779.56904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.48017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.3,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.02421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.5912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3671.55703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4164.1099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 632.22919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.1119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1447.5767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1306.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1204.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1191.3400390625,
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
          "id": "b0bebe885ce4be9fa17461eda870057b639a7e60",
          "message": "Initialize the CRT eagerly in tests (#900)\n\nWe think the lazy initialization might be the cause of some of our\r\nissues, because it happens on an ephemeral thread. Let's try\r\ninitializing it at load time.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-06-04T16:03:34-05:00",
          "tree_id": "aedd2c8efe8ab87a73675e110b36c3109d79c677",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0bebe885ce4be9fa17461eda870057b639a7e60"
        },
        "date": 1717541610264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1186.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2044.80673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.5251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1587.4900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.97236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.946484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 349.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3762.774609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4342.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 674.1326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1308.1578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1257.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1548.58037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1411.66162109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c",
          "message": "Introduced support for the AWS_ENDPOINT_URL environment variable (#895)\n\n* Adding support for AWS_ENDPOINT_URL.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Update CHANGELOG.md and CONFIGURATION.md\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Using rust_fork to run the tests.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Addressing comments.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Adding changes from Danny.\r\n\r\nhttps://github.com/awslabs/mountpoint-s3/commit/2303bd83d0e90bcd29f707bd939d02db6633cf9b\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-06-05T09:52:55+01:00",
          "tree_id": "ed823e29b354854c3aee278096b512618a05c976",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c"
        },
        "date": 1717584081142,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1215.31826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2057.36357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.756640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1575.18603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.145703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 540.38818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.12998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 308.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3626.30634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3966.68818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 612.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1322.22255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1324.39404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 841.598046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1144.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1065.7623046875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}