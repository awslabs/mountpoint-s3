window.BENCHMARK_DATA = {
  "lastUpdate": 1706874916607,
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
          "id": "f4b420b2c9476c1d796dd502050c57b98a20fd04",
          "message": "Tidy up ChecksummedBytes public methods (#689)\n\n* Refactor ChecksummedBytes::shrink_to_fit to mutate self\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor ChecksummedBytes initialization methods\n\nMost callers can use `ChecksummedBytes::new(Bytes)` to create new instances, rather than calculating the checksum explicitly.\n\nThis change also tidies up some of the existing `ChecksummedBytes` tests.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-04T08:06:52Z",
          "tree_id": "50b73612c06b59360dfc173ed4182cc20f5d873b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4b420b2c9476c1d796dd502050c57b98a20fd04"
        },
        "date": 1704357517295,
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
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.125,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.53177070000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.03782109999999,
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
          "id": "024a7f4a11057dfbad6c106c2115999f8dc972dd",
          "message": "Fix version number tests (#690)\n\nUse a regex recommended by semver.org to verify the cli version output. The change allows tests to pass even on dirty Git repos, where version includes the \"-dirty\" indicator introduced in #678).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-05T02:32:02Z",
          "tree_id": "54b389c691bcebb5b3f738c8c6ea1d5c6b1e7911",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/024a7f4a11057dfbad6c106c2115999f8dc972dd"
        },
        "date": 1704423812569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.042,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.8827695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.29091190000001,
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
          "distinct": false,
          "id": "6e7252dd2e54932e277e5b5ee7000f9bc816a682",
          "message": "Replace callback in FS read with simple Result instead (#691)\n\n* Remove fs::read callback to return simple Result instead\n\nWe're making this change primarily due to the risk of a race condition introduced.\nBefore this change, we reply directly to the FUSE driver before exiting the fs module code.\nThe risk here is that we've already replied to the driver before we drop things like the file handle guard.\nAlbeit small, this is a race condition and we intend to remove it to avoid any risk from it.\n\nThis race condition is suspected to be the root cause for this issue\nwhere FUSE release fails unable to unwrap the file handle reference: https://github.com/awslabs/mountpoint-s3/issues/670\n\nThis race condition risk could have a large impact since the file handle holds a reference to prefetched data.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove ReadReplier trait\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-06T05:51:35Z",
          "tree_id": "37b07489030dd6dd437d9afd5cbf04796fd755d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e7252dd2e54932e277e5b5ee7000f9bc816a682"
        },
        "date": 1704522208816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.465,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.0885586,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.9179572,
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
          "id": "261257bee200616028d52f676859d84e64e79851",
          "message": "Update CRT submodules to latest releases (#692)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-08T12:13:40Z",
          "tree_id": "d290294d80c4d64112c9710739173df6205625bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/261257bee200616028d52f676859d84e64e79851"
        },
        "date": 1704718237501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.372,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.7594514,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.9923572,
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
          "id": "b9ca6b3d502ecd13690e46726139b206f19876b9",
          "message": "Add information about `--log-metrics` flag to logging documentation (#695)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-09T16:09:16Z",
          "tree_id": "dd5ab8859ad97114c6cf9fc6271918e03f798282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b9ca6b3d502ecd13690e46726139b206f19876b9"
        },
        "date": 1704818533452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.273,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.574,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.7320066,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.6351808,
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
          "id": "7dcaee0966ca20c91d86b0d8b1388bcc72a24c38",
          "message": "Release v1.3.2 (#697)\n\n* Release v1.3.2\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Remove line\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-11T14:42:57Z",
          "tree_id": "ef9f49ffae0ade6b9907e2d9ecf319cef22dc5c9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dcaee0966ca20c91d86b0d8b1388bcc72a24c38"
        },
        "date": 1704984815605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.621,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.9025929,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8053309,
            "unit": "milliseconds"
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
        "date": 1705091162406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.37,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6404995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.9921057,
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
          "id": "0030b0a527638a76b29fe387cfa6ae22b0ad1c92",
          "message": "Allow file overwrites (#487)\n\n* Allow file overwrites\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't start upload on flush\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-16T14:55:52Z",
          "tree_id": "0865cc916897ae4f9942feefa9a3fc25034a6821",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0030b0a527638a76b29fe387cfa6ae22b0ad1c92"
        },
        "date": 1705419379564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.645,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.7557786,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.4005801,
            "unit": "milliseconds"
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
        "date": 1705506699111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.415,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.46105659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.32473859999999,
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
          "distinct": false,
          "id": "924b86c33ec80ea3fc63ec60bd0f20a38a598e1e",
          "message": "Improve error logs for unsupported operations: File Overwrite, Random Write, Directory Shadowing, Unlink (without mount option) (#699)\n\n* Improved error logs for unsupported operations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved Invalid Inode Status error message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reformatted the entry if match\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Combined the match for next and last entry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed extra line from warn message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-17T17:13:39Z",
          "tree_id": "bf86c2cbdcc53932b54134e16b045fe6542e0425",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/924b86c33ec80ea3fc63ec60bd0f20a38a598e1e"
        },
        "date": 1705513533536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.36,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.0368546,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.5170688,
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
          "id": "7ecbfa82eab871f75d8646a9b53fea574fa818ef",
          "message": "Unmount at end of fork tests (#705)\n\n* Unmount at end of fork tests\n\n`Command::spawn` returns a `Child`, but dropping a `Child` doesn't\nshut down the process, so we leak all these mounts every time the fork\ntests run. That's annoying when you run them a lot, so this change adds\nunmount calls to all the tests that should succeed.\n\nI also took this chance to clean up the test code a little by factoring\nout the \"wait in a loop\" logic.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update h2 dependency for https://rustsec.org/advisories/RUSTSEC-2024-0003\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix non-Express tests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-18T11:04:23Z",
          "tree_id": "60399de66d27661224c6316741e69d0e866fb7a0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7ecbfa82eab871f75d8646a9b53fea574fa818ef"
        },
        "date": 1705578103746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.279,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.1363995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.030251899999996,
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
          "distinct": false,
          "id": "06aca78b7fc094ec5b58757c2c7d0b7e608550a9",
          "message": "Release new crate versions (#700)\n\n* Release new crate versions\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update release dates for Jan 18th\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies, bump minor version on CRT anyway\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies (again)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-18T14:20:03Z",
          "tree_id": "cf6603f206cdf1fcdffcb190e7d22869c378c406",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06aca78b7fc094ec5b58757c2c7d0b7e608550a9"
        },
        "date": 1705589888179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.73,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.4465922,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.1745109,
            "unit": "milliseconds"
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
        "date": 1705923226754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.199,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.172,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.0816613,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.56857070000001,
            "unit": "milliseconds"
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
        "date": 1705944086757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
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
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.8775287,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.405139,
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
          "id": "c7c64d62b7f00b5a2ece847c65a70b4890788e9f",
          "message": "Bump CRT dependencies (#713)\n\nThis picks up two bug fixes:\n1. In aws-c-auth to fix FULL_URI container credentials that don't have a\n   path component: https://github.com/awslabs/aws-c-auth/pull/225\n2. In aws-c-s3 to fix thread pinning on NUMA hosts with cgroup\n   restrictions applied: https://github.com/awslabs/aws-c-s3/pull/403\n\nSince there's no breaking changes and only a patch version bump, we\ndon't need to do a release of `mountpoint-s3-client`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-25T09:58:49Z",
          "tree_id": "b19492edf2c56b5b8eb350d71419e1f77106d53e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7c64d62b7f00b5a2ece847c65a70b4890788e9f"
        },
        "date": 1706179058649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.254,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.6816762,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.8081673,
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
          "id": "85c98faafb443911444658d0d88e3db0640e22f2",
          "message": "Fix decrement of file handle gauge for RW handles that file on existing files (#716)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-25T20:17:31Z",
          "tree_id": "dc1e57b5925061eacd622f1e2c4de911cf9a820c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85c98faafb443911444658d0d88e3db0640e22f2"
        },
        "date": 1706215828565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.557,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.840007,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.64379559999999,
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
          "id": "25aff50f7cae9995f713b655fc4ac6070f81a26d",
          "message": "Fix a race condition on create and forget operations (#711)\n\n* Fix a race condition on create and forget operations\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't panic when cannot remove inode from superblock\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T13:50:42Z",
          "tree_id": "a247585261c3babe8f0347b07f69a1527bf7133b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/25aff50f7cae9995f713b655fc4ac6070f81a26d"
        },
        "date": 1706279293634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.483,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.59858290000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.8019193,
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
          "id": "e52d68ede985ecdb31f68e8db2beef29b528c8b1",
          "message": "Release v1.4.0 (#720)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T14:45:15Z",
          "tree_id": "d6f3b9957ad512f0a000281dd2e81484202f96cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52d68ede985ecdb31f68e8db2beef29b528c8b1"
        },
        "date": 1706282689478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.143,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.902982,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.8665123,
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
          "id": "92aec0a0132aaf8d20093943cb40269bb57ffb2f",
          "message": "Reduce error noise in logging for lookup and throughput configuration (#718)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-31T14:26:06Z",
          "tree_id": "9bc33a9a28479cd7d8967c8f0b0df2ebe0e05e16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/92aec0a0132aaf8d20093943cb40269bb57ffb2f"
        },
        "date": 1706713591461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.123,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.2959824,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.8350994,
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
          "id": "36e8b6481bb0f7aeb4498792fbb88a55e953752f",
          "message": "Adjust auth tests to fix S3 Express test failures (#726)\n\n* Adjust auth tests to fix S3 Express test failures\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Loop on unmount to give async requests time to finish\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T11:17:33Z",
          "tree_id": "cb197c3d8c2e71bfc59f01f0f0d785f1bb09599b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36e8b6481bb0f7aeb4498792fbb88a55e953752f"
        },
        "date": 1706874916119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.151,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.57914670000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.1037295,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}