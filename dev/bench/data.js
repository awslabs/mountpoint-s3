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
          "id": "024a7f4a11057dfbad6c106c2115999f8dc972dd",
          "message": "Fix version number tests (#690)\n\nUse a regex recommended by semver.org to verify the cli version output. The change allows tests to pass even on dirty Git repos, where version includes the \"-dirty\" indicator introduced in #678).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-05T02:32:02Z",
          "tree_id": "54b389c691bcebb5b3f738c8c6ea1d5c6b1e7911",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/024a7f4a11057dfbad6c106c2115999f8dc972dd"
        },
        "date": 1704434453770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.49267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.92861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4728.2248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1263.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.74013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.97080078125,
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
          "distinct": false,
          "id": "6e7252dd2e54932e277e5b5ee7000f9bc816a682",
          "message": "Replace callback in FS read with simple Result instead (#691)\n\n* Remove fs::read callback to return simple Result instead\n\nWe're making this change primarily due to the risk of a race condition introduced.\nBefore this change, we reply directly to the FUSE driver before exiting the fs module code.\nThe risk here is that we've already replied to the driver before we drop things like the file handle guard.\nAlbeit small, this is a race condition and we intend to remove it to avoid any risk from it.\n\nThis race condition is suspected to be the root cause for this issue\nwhere FUSE release fails unable to unwrap the file handle reference: https://github.com/awslabs/mountpoint-s3/issues/670\n\nThis race condition risk could have a large impact since the file handle holds a reference to prefetched data.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove ReadReplier trait\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-06T05:51:35Z",
          "tree_id": "37b07489030dd6dd437d9afd5cbf04796fd755d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e7252dd2e54932e277e5b5ee7000f9bc816a682"
        },
        "date": 1704532807566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.86474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.88193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.06875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4709.88642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.80068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1443.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1289.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1399.715625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.98896484375,
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
          "id": "261257bee200616028d52f676859d84e64e79851",
          "message": "Update CRT submodules to latest releases (#692)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-08T12:13:40Z",
          "tree_id": "d290294d80c4d64112c9710739173df6205625bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/261257bee200616028d52f676859d84e64e79851"
        },
        "date": 1704728858198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.88369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.51201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.93251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.06953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.10908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.82900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.9712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4615.51298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.2728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.9642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1238.1326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.38623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.20654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1684.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.13779296875,
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
          "id": "b9ca6b3d502ecd13690e46726139b206f19876b9",
          "message": "Add information about `--log-metrics` flag to logging documentation (#695)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-09T16:09:16Z",
          "tree_id": "dd5ab8859ad97114c6cf9fc6271918e03f798282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b9ca6b3d502ecd13690e46726139b206f19876b9"
        },
        "date": 1704829132911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.5533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.128125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.61259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4741.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.87001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.338671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1365.6349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.38564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1303.07919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.00068359375,
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
          "id": "7dcaee0966ca20c91d86b0d8b1388bcc72a24c38",
          "message": "Release v1.3.2 (#697)\n\n* Release v1.3.2\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Remove line\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-11T14:42:57Z",
          "tree_id": "ef9f49ffae0ade6b9907e2d9ecf319cef22dc5c9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dcaee0966ca20c91d86b0d8b1388bcc72a24c38"
        },
        "date": 1704995403948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.19716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.24423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.50595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.4146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.25595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4711.77314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 91.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.87490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.98095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.01240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1440.70634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.19404296875,
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
          "id": "93394c8f666453cf04e6824b5a81d1f0d80a1010",
          "message": "Set CI parameters for sse-kms tests (#698)\n\n* Set CI parameters for sse-kms tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-12T19:50:48Z",
          "tree_id": "3b01bef31d62b3da3bc425dd9744fbd5ae5d2371",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93394c8f666453cf04e6824b5a81d1f0d80a1010"
        },
        "date": 1705101763000,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.784375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.13603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.96767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.64755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4828.39765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.871875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.7,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1508.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.26025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1396.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.05712890625,
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
          "id": "0030b0a527638a76b29fe387cfa6ae22b0ad1c92",
          "message": "Allow file overwrites (#487)\n\n* Allow file overwrites\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't start upload on flush\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-16T14:55:52Z",
          "tree_id": "0865cc916897ae4f9942feefa9a3fc25034a6821",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0030b0a527638a76b29fe387cfa6ae22b0ad1c92"
        },
        "date": 1705430023487,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.7583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.27666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.875390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.73681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.62197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.921484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4703.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 206.717578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.597265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.5125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1406.8892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.6685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1523.24287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1079.730078125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jchorl@users.noreply.github.com",
            "name": "Josh Chorlton",
            "username": "jchorl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "804b8d0cda2a817cd883f0cb5f73dfc49a84b66c",
          "message": "update network performance autotune values (#702)\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>",
          "timestamp": "2024-01-17T15:18:40Z",
          "tree_id": "eb067b4ad5ff41c941729f74530bbb1f9b0a2693",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/804b8d0cda2a817cd883f0cb5f73dfc49a84b66c"
        },
        "date": 1705517292351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.10390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.09140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.95146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.90595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4660.7142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1386.776953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.50380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1258.321875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.93720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1415.93134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.5921875,
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
          "distinct": false,
          "id": "924b86c33ec80ea3fc63ec60bd0f20a38a598e1e",
          "message": "Improve error logs for unsupported operations: File Overwrite, Random Write, Directory Shadowing, Unlink (without mount option) (#699)\n\n* Improved error logs for unsupported operations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved Invalid Inode Status error message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reformatted the entry if match\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Combined the match for next and last entry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed extra line from warn message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-17T17:13:39Z",
          "tree_id": "bf86c2cbdcc53932b54134e16b045fe6542e0425",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/924b86c33ec80ea3fc63ec60bd0f20a38a598e1e"
        },
        "date": 1705524162566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.62021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.549609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4743.86484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1505.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1226.46640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1413.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.97275390625,
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
          "id": "7ecbfa82eab871f75d8646a9b53fea574fa818ef",
          "message": "Unmount at end of fork tests (#705)\n\n* Unmount at end of fork tests\n\n`Command::spawn` returns a `Child`, but dropping a `Child` doesn't\nshut down the process, so we leak all these mounts every time the fork\ntests run. That's annoying when you run them a lot, so this change adds\nunmount calls to all the tests that should succeed.\n\nI also took this chance to clean up the test code a little by factoring\nout the \"wait in a loop\" logic.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update h2 dependency for https://rustsec.org/advisories/RUSTSEC-2024-0003\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix non-Express tests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-18T11:04:23Z",
          "tree_id": "60399de66d27661224c6316741e69d0e866fb7a0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7ecbfa82eab871f75d8646a9b53fea574fa818ef"
        },
        "date": 1705588699816,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.16953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.90380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4774.8220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.2466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 97.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 54.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1336.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.96083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1397.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.21064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1545.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1048.2615234375,
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
          "distinct": false,
          "id": "06aca78b7fc094ec5b58757c2c7d0b7e608550a9",
          "message": "Release new crate versions (#700)\n\n* Release new crate versions\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update release dates for Jan 18th\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies, bump minor version on CRT anyway\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies (again)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-18T14:20:03Z",
          "tree_id": "cf6603f206cdf1fcdffcb190e7d22869c378c406",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06aca78b7fc094ec5b58757c2c7d0b7e608550a9"
        },
        "date": 1705600495859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.7111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.175390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.35517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.254296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.8830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4604.791796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.81240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.783984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1319.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1306.3892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.53564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1093.105078125,
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
          "id": "f5de97e534a7f798a0cf6c347b66c4d85e20d535",
          "message": "Bump version of shlex (#709)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T10:56:53Z",
          "tree_id": "80f6f626b899f0fe2781d990b8d64a654c9828fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5de97e534a7f798a0cf6c347b66c4d85e20d535"
        },
        "date": 1705933871950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.12822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.13193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.831640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.6798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.22216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4773.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.22177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 97.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1395.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1284.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1379.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1085.83017578125,
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
          "id": "ae0f475fce0d62e52632a69c2ad83046dd0e24f8",
          "message": "Support configuring SSE-KMS in S3CrtClient (#693)\n\n* Support configuring SSE-KMS (#534)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix some of the CI jobs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Don't do headers check when request failed, fix test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Hide sse settings behind a feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for error cases\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make the headers check to panic on failure\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Do not run sse tests for express buckets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move out cli changes to a separate PR\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add extraction methods to ServerSideEncryption enum, fix documentation and formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make check_response_headers to check specifically for SSE settings\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Decompose SSE settings provided for S3PutObjectRequest\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove SSE enum, replace test for check_headers with a unit test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers call\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T16:47:37Z",
          "tree_id": "f115424f29f97d63c252bf82e54579125fdc214b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae0f475fce0d62e52632a69c2ad83046dd0e24f8"
        },
        "date": 1705954690938,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.31962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.46875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4727.0982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.55478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1337.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.76220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1609.55341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1028.34072265625,
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
          "id": "c7c64d62b7f00b5a2ece847c65a70b4890788e9f",
          "message": "Bump CRT dependencies (#713)\n\nThis picks up two bug fixes:\n1. In aws-c-auth to fix FULL_URI container credentials that don't have a\n   path component: https://github.com/awslabs/aws-c-auth/pull/225\n2. In aws-c-s3 to fix thread pinning on NUMA hosts with cgroup\n   restrictions applied: https://github.com/awslabs/aws-c-s3/pull/403\n\nSince there's no breaking changes and only a patch version bump, we\ndon't need to do a release of `mountpoint-s3-client`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-25T09:58:49Z",
          "tree_id": "b19492edf2c56b5b8eb350d71419e1f77106d53e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7c64d62b7f00b5a2ece847c65a70b4890788e9f"
        },
        "date": 1706189649012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.5896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.84697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.08505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4753.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.0958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1362.64296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.1822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1619.81181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.47451171875,
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
          "id": "85c98faafb443911444658d0d88e3db0640e22f2",
          "message": "Fix decrement of file handle gauge for RW handles that file on existing files (#716)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-25T20:17:31Z",
          "tree_id": "dc1e57b5925061eacd622f1e2c4de911cf9a820c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85c98faafb443911444658d0d88e3db0640e22f2"
        },
        "date": 1706226437211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.36923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.2095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.04169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.61396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4694.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.84453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1418.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.393359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1274.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1402.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1042.7640625,
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
          "id": "25aff50f7cae9995f713b655fc4ac6070f81a26d",
          "message": "Fix a race condition on create and forget operations (#711)\n\n* Fix a race condition on create and forget operations\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't panic when cannot remove inode from superblock\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T13:50:42Z",
          "tree_id": "a247585261c3babe8f0347b07f69a1527bf7133b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/25aff50f7cae9995f713b655fc4ac6070f81a26d"
        },
        "date": 1706289966328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.043359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.1111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.88896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4654.1142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.0201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1374.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1349.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.03935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1687.24736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.6466796875,
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
          "id": "e52d68ede985ecdb31f68e8db2beef29b528c8b1",
          "message": "Release v1.4.0 (#720)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T14:45:15Z",
          "tree_id": "d6f3b9957ad512f0a000281dd2e81484202f96cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52d68ede985ecdb31f68e8db2beef29b528c8b1"
        },
        "date": 1706293291837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.569140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.6248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.66259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.50126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.914453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.09423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.6822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1392.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1327.79609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.68125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1654.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1064.98740234375,
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
          "id": "92aec0a0132aaf8d20093943cb40269bb57ffb2f",
          "message": "Reduce error noise in logging for lookup and throughput configuration (#718)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-31T14:26:06Z",
          "tree_id": "9bc33a9a28479cd7d8967c8f0b0df2ebe0e05e16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/92aec0a0132aaf8d20093943cb40269bb57ffb2f"
        },
        "date": 1706724193644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.11376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.28623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.73193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.04892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.55693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4601.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1187.99169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.66630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1247.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.039453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.04248046875,
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
          "id": "36e8b6481bb0f7aeb4498792fbb88a55e953752f",
          "message": "Adjust auth tests to fix S3 Express test failures (#726)\n\n* Adjust auth tests to fix S3 Express test failures\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Loop on unmount to give async requests time to finish\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T11:17:33Z",
          "tree_id": "cb197c3d8c2e71bfc59f01f0f0d785f1bb09599b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36e8b6481bb0f7aeb4498792fbb88a55e953752f"
        },
        "date": 1706885527660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.182421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.44482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.91455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.85537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4624.5203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.90947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1277.12587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.88447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.96708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1100.99599609375,
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
          "id": "203b36c98064c165f8bd21b0088a4cbee919beca",
          "message": "Add troubleshooting page for unsupported operations in Mountpoint (#703)\n\n* Added a troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the format of troubleshooting page from table to paragraphs, added its link to bug-report template\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed formatting of yml file\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting and made recommended changes introubleshooting document\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the version that this doc is true to and also added unreleased improved section\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Modified the error message so that it is more readable for user in trouble shooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the link to troubleshooting page in bug report page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected sentence syntax\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* added the troubleshooting page link at top of bug template and other minor formatting changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* made the recommended nit changes about language and also theme of the troubleshooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Add both overwrite errors depending on version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Minor documentation wording changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move bug report form heading to 'label' rather than markdown heading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad copy/paste in writing to an existing file\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-02T15:24:39Z",
          "tree_id": "d0071e5375ed0d7088538e98882638b9b7d72719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/203b36c98064c165f8bd21b0088a4cbee919beca"
        },
        "date": 1706900217895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.338671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.38251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.91962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.38056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4668.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.1423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.53720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.89150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1232.92978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1722.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1010.6158203125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1706900218357,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}