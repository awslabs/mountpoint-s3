window.BENCHMARK_DATA = {
  "lastUpdate": 1717604145636,
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
        "date": 1714580655181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.498,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.801,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.996668300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.4239554,
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
          "id": "9d22f1f77f232baba714e5775bdef171d77e71d9",
          "message": "Resolve clippy errors introduced in Rust 1.78.0 (#865)\n\nAddress 2 issues:\n\n* Assigning clones (https://rust-lang.github.io/rust-clippy/master/index.html#/assigning_clones)\n  Use `clone_into()` instead of assigning the result of `ToOwned::to_owned()` or `Clone::clone()`.\n\n* Remove the unused `mountpoint-s3-client::util::PtrExt`\n  Redundant. Similar functionality now in `mountpoint-s3-crt::CrtError`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-03T17:13:42Z",
          "tree_id": "3d891a15e62bd1fe4a4287c3b98a84029dfdb632",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d22f1f77f232baba714e5775bdef171d77e71d9"
        },
        "date": 1714757957885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.508,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.901,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.307381300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.7999426,
            "unit": "milliseconds"
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
        "date": 1714976000393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.324,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.8889738,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.214806900000001,
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
          "id": "a2d0af6da2f613fe7e8d1e67472cb5a620e28f12",
          "message": "Update cargo dependencies (#873)\n\nRun `cargo update` and explicitly set required features for the `nix` crate.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-09T22:09:31Z",
          "tree_id": "3bcfecd973d79784f8aabe313bf3d1d623919fee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a2d0af6da2f613fe7e8d1e67472cb5a620e28f12"
        },
        "date": 1715293826788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.492,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.766,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.1164486,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.7355558,
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
          "id": "bd9b1af33128f235b26bbeaee5c586d22de748e2",
          "message": "Update CRT submodules to latest releases (#875)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Exclude more unused files to keep crate size under limit\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-10T13:12:50Z",
          "tree_id": "eb8e685e5382c173e773e27da777a20befe81398",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9b1af33128f235b26bbeaee5c586d22de748e2"
        },
        "date": 1715348273353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.501,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.235,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.5519876,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.94681,
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
          "id": "50720ab30b852929d2ab73810ac7806623d9c21c",
          "message": "Update CRT submodules to latest releases (#877)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-13T16:58:41Z",
          "tree_id": "afde2e462a548e5e0cc2996bcc54290f3473cc05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50720ab30b852929d2ab73810ac7806623d9c21c"
        },
        "date": 1715620790867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.105,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.493,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.401,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.9675069,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.6372717,
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
          "id": "2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f",
          "message": "Adopt polling API for uploading data in PutObject requests (#874)\n\n* Adopt polling API for uploading data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Detect incomplete writes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update `MetaRequestWrite` rustdocs\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix `total_bytes` calculation and expand comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unnecessary lifetime constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-14T19:14:34Z",
          "tree_id": "f56e2ae926b8ba9cd63ab39f3dda84b4371589ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f"
        },
        "date": 1715715386998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.475,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.303,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.6022731,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.1574051,
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
          "id": "8c3e18e80a2fa1ee53eaf5cb5c286d003609683c",
          "message": "Use separate bench buckets in the ci (#881)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-20T10:14:21Z",
          "tree_id": "bc4d8c12201d3e9d7637b4499e67cf559cbb98e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c3e18e80a2fa1ee53eaf5cb5c286d003609683c"
        },
        "date": 1716220965698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.492,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.373,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.433148699999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.573515,
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
          "id": "e6a01e14c44d9cf35298124a704ecb332282fab3",
          "message": "Use separate IAM role for the bench CI (#883)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-22T09:42:37Z",
          "tree_id": "c0dc51f41b7a96da923f8cbafc2153dce45f0858",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a01e14c44d9cf35298124a704ecb332282fab3"
        },
        "date": 1716372275150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.471,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.079,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.3541487,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.5878632,
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
          "id": "54a8e74c44d686cf90c317002ce1445e404d4d4c",
          "message": "Improve cancellation test for PutObject write (#884)\n\n* Improve cancellation test for PutObject write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Add TODO\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-22T14:23:47Z",
          "tree_id": "bcf94d568f57ac8c70a006fb673df076c8b72a96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a8e74c44d686cf90c317002ce1445e404d4d4c"
        },
        "date": 1716389317707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.451,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.4,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.9223985,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.575612699999999,
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
          "id": "fc60045f3358110a93b2b04e3852710b3f50020a",
          "message": "Revert s2n-tls submodule to v1.4.9 (#887)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-23T11:01:35Z",
          "tree_id": "ec57d7893129d834fa2038443052981554f517aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc60045f3358110a93b2b04e3852710b3f50020a"
        },
        "date": 1716463551068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.448,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.728,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.7159632,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.6138764,
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
          "id": "d750b2aa9f1304502cedc852fc8b54e6af802db3",
          "message": "Small refactors of inode code (#888)\n\n* Remove process ID from Inode\n\nThe entire check happens in S3Filesystem anyway, so there's no need for\nthe actual Inode to be aware of the PID.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Normalize WriteHandle/ReadHandle in inode.rs\n\nThere's no reason for start_writing to exist since it's always called\nimmediately on the result of write. Once that change is made, it looks\nhelpful to have a symmetric ReadHandle for the lifecycle of reads, even\nthough it doesn't do much today.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Move more stuff off the Inode\n\n`inc_file_size` belongs on the write handle itself (you have to be\nwriting to increment the file size), and some other stuff here doesn't\nneed to be public.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-05-28T13:39:59Z",
          "tree_id": "72ad23a694c6477d8c1ae4e9e80d034ba8e8cdb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d750b2aa9f1304502cedc852fc8b54e6af802db3"
        },
        "date": 1716905131766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.464,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.65,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.384585,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.0266735,
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
          "id": "cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759",
          "message": "Add hourly integration test run (#892)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-05-29T10:24:49Z",
          "tree_id": "df019ca2b8bae2920b00a08ec2e04e6f7bfd9cb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759"
        },
        "date": 1716979814484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.479,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.317,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8569842,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9701417,
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717078962230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.472,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.251,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.6676489,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.552646300000001,
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
          "id": "4525331e9bc4896ca983bcd1cd7bb01e1dbe8640",
          "message": "Save associated binary for core dump (#896)\n\n* Save associated binary for core dump\n\nTo be able to analyze the core dump we also need\nthe binary it was generated from. This adds a new\nscript for uploading the binary associated with the\ncore dump when tests are failing in the CI.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update core dump pattern\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-31T14:41:07Z",
          "tree_id": "3a6f3e6505b3c597bb40d98fdfe7953a5c51c906",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4525331e9bc4896ca983bcd1cd7bb01e1dbe8640"
        },
        "date": 1717168048964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.112,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.461,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.402,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.841204699999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.135459800000001,
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
          "id": "4ad9b8a15cd3eac48fb52e49c61936cdf577e32f",
          "message": "Add workflow_dispatch trigger for integration tests (#898)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-03T11:04:46Z",
          "tree_id": "e4c99cc9825a03601f04c2178bcf02f6a79ced14",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ad9b8a15cd3eac48fb52e49c61936cdf577e32f"
        },
        "date": 1717426733322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.482,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.295,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8589025,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.0931238,
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
          "id": "9bdb2376011d621901c3b7e3f21e1bf93e254267",
          "message": "Improve coredump script for the tests workflow (#899)\n\n* List core dump records when tests are failing\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Improve the coredump script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-03T15:50:15+01:00",
          "tree_id": "2387b067dc34dee944ceef6dcb8aad68b82c3ae0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9bdb2376011d621901c3b7e3f21e1bf93e254267"
        },
        "date": 1717508107125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.466,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.815,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.937023199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.3685796,
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
          "id": "07dcd74236ce196bf9d8082469371196615a0a72",
          "message": "Add troubleshooting entry on slow metadata operations (#897)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-04T13:10:59Z",
          "tree_id": "d9e07d1957d77bcab43eccbffb56999286eda437",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/07dcd74236ce196bf9d8082469371196615a0a72"
        },
        "date": 1717535540429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.492,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.104,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.168,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.173141300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.705205900000001,
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
          "id": "b0bebe885ce4be9fa17461eda870057b639a7e60",
          "message": "Initialize the CRT eagerly in tests (#900)\n\nWe think the lazy initialization might be the cause of some of our\r\nissues, because it happens on an ephemeral thread. Let's try\r\ninitializing it at load time.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-06-04T16:03:34-05:00",
          "tree_id": "aedd2c8efe8ab87a73675e110b36c3109d79c677",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0bebe885ce4be9fa17461eda870057b639a7e60"
        },
        "date": 1717578104181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.437,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.77,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.4622884,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.0707341,
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
          "id": "09546c1116c91838fd799ebac0162059859689b2",
          "message": "Update CRT submodules to latest releases (#901)\n\n* Revert \"Revert s2n-tls submodule to v1.4.9 (#887)\"\r\n\r\nThis reverts commit fc60045f3358110a93b2b04e3852710b3f50020a.\r\n\r\n* Update CRT submodules to latest releases\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-05T17:04:02+01:00",
          "tree_id": "20813c387dc01e95c520b8b67874bcf18d2804ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09546c1116c91838fd799ebac0162059859689b2"
        },
        "date": 1717604145081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.464,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.439,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.2334391,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.193615099999999,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}