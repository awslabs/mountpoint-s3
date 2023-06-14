window.BENCHMARK_DATA = {
  "lastUpdate": 1686760955426,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "81923533e8aa05048a5cab435340b163fa905364",
          "message": "Implement `unlink` operation for remote files (#232)\n\n* Update semantics doc\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Implement unlink\r\n\r\nThis implementation does not attempt to tackle the unbounded growth of the superblock. This should be tackled at a later date.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Incoporate PR feedback\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Move unlink locking to cover whole operation duration\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix grammar in added comment\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Revert \"Move unlink locking to cover whole operation duration\"\r\n\r\nThis reverts commit 52b0bd86c190d67508c639b61df1328eb00d89df.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update unlink to panic if VFS assumptions are broken\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add test for lookup after unlink\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add integration tests for unlink of local writing files\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add TODO for inode lookup/ref counting\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve expect/expect_err messages\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Appease clippy\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix test_lookup_after_unlink for prefixed test case\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-31T09:28:29+01:00",
          "tree_id": "b9ca1fdca9eca875c0ce36963c945b4aeb174298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81923533e8aa05048a5cab435340b163fa905364"
        },
        "date": 1685522343086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.838,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.499136,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.2446411,
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
          "id": "ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d",
          "message": "Add crate version to mountpoint-s3-client user agent (#266)\n\nWe already have this in mountpoint-s3, but for direct users of the\r\nclient crate there's currently no version information. This change just\r\nduplicates our existing mountpoint-s3 logic into the client crate. I\r\nalso removed the \"UNKNOWN\" suffix for builds without git history (i.e.,\r\nevery crates.io build), since it seems spammy -- we can distinguish\r\nthem by the absence of the `-`.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-31T10:23:55+01:00",
          "tree_id": "fbefbfdc18607169a8f7b7ee3e6297784af27241",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d"
        },
        "date": 1685525807201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.998,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.6195459,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.2525136,
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
          "id": "e243ef78523119a6a405ea869e862411b123cfa8",
          "message": "Exclude test files from crt-sys crate (#265)\n\nSignificantly reduce the size of the `mountpoint-s3-crt-sys` crate, in order to stay under the 10MB threshold.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T10:38:28+01:00",
          "tree_id": "57d41f424fca0dbc9bf92cd164cc63b0489cc0a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e243ef78523119a6a405ea869e862411b123cfa8"
        },
        "date": 1685526556358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.094,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.859,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.8573485,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.4152542,
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
          "id": "c10c0702f14096e9965af636f8c3ca3aac779b74",
          "message": "Fix build failure outside of git (#269)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T14:43:02+01:00",
          "tree_id": "f57f49ab53668aa75e2f9d5c8b9c67f3420ed4f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c10c0702f14096e9965af636f8c3ca3aac779b74"
        },
        "date": 1685541506897,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.964,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.9110231,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.439540799999996,
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
          "id": "e52ecb02e1739c94611ec3d4cb64e2f913a97f65",
          "message": "Increment mountpoint-s3-client version number to 0.2.2 (#270)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T13:54:08Z",
          "tree_id": "6d8c4892cdf674c8103d04bc0c3c41b42328872a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52ecb02e1739c94611ec3d4cb64e2f913a97f65"
        },
        "date": 1685542082140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.983,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1538335,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.31075759999999,
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
          "id": "fb31aba32c9c6bff7486f37e7e3415f78542cc50",
          "message": "Update to aws-c-sdkutils v0.1.11 (#271)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T12:00:21+01:00",
          "tree_id": "2048121c8eb19fabf34e9627645ecd9c9588748b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb31aba32c9c6bff7486f37e7e3415f78542cc50"
        },
        "date": 1685704278366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.024,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.4222858,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.379425399999995,
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
          "id": "768cdfafa06e1cd8b05066f46ac1e757d0feeabd",
          "message": "Remove obsolete unset of AWS_PROFILE envvar in AWS profile test (#272)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T13:32:33+01:00",
          "tree_id": "28da93cf2ce0079f34f6bbb9dd82e16a4a846361",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/768cdfafa06e1cd8b05066f46ac1e757d0feeabd"
        },
        "date": 1685709871974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.314,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 102.3805568,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.4217969,
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
          "id": "bd9eb73de8d5f298aaa6b0921b623dadb82b57ec",
          "message": "Correctly handle missing TTFB telemetry (#275)\n\nThe send_end and receive_start times can be missing, which we weren't\r\nhandling.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T09:32:19-05:00",
          "tree_id": "97b863e7f077b28490c1cdc823ceaa3016b03beb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9eb73de8d5f298aaa6b0921b623dadb82b57ec"
        },
        "date": 1685976181423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.371,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.464877,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2070814,
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
          "id": "d3bb128cf18cc866362a105784893e274a525f0b",
          "message": "Update CRT submodules to latest releases (#278)\n\n* Update CRT submodules to latest releases including streaming changes\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up fix: aws_future functions no longer inline\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up aws-checksums segfault fix\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T21:32:59Z",
          "tree_id": "3e1edd0dc3a72232157c54e7c3a12065678d9957",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3bb128cf18cc866362a105784893e274a525f0b"
        },
        "date": 1686001432166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.204,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.6697992,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.2790037,
            "unit": "milliseconds"
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
          "id": "843c9630081e3d8c82c595f31431155763094cd9",
          "message": "Bump xml-rs from 0.8.4 to 0.8.14 (#279)\n\nBumps [xml-rs](https://github.com/kornelski/xml-rs) from 0.8.4 to 0.8.14.\r\n- [Changelog](https://github.com/kornelski/xml-rs/blob/main/Changelog.md)\r\n- [Commits](https://github.com/kornelski/xml-rs/compare/0.8.4...0.8.14)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: xml-rs\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-06T05:32:47Z",
          "tree_id": "8ebb6116e56d3606900ecd10b61e81506277f8e7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/843c9630081e3d8c82c595f31431155763094cd9"
        },
        "date": 1686030252585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.09,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.484,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.3798446,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.9470505,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rostyslav.fridman@gmail.com",
            "name": "Rostyslav",
            "username": "frostyslav"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1194c3f50a6ed4aafccd28847ce09674fdcff6",
          "message": "feat: reduce docker image size (#276)\n\n* feat: reduce docker image size\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n* feat: small dockerfile improvements\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\nCo-authored-by: Rostyslav Fridman <frir@amazon.com>",
          "timestamp": "2023-06-06T10:55:10-05:00",
          "tree_id": "e20bee0af0e6b12f10ee5dada095204d21728057",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf1194c3f50a6ed4aafccd28847ce09674fdcff6"
        },
        "date": 1686067632050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.034,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 104.9851051,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.304334,
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
          "id": "03d71562337e978d618f487e41f1f5c4744fc99e",
          "message": "Add HeadBucket NoSuchBucket error to S3CrtClient (#273)\n\n* Add HeadBucket 404 error to S3CrtClient\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update non-existent bucket to \"nosuch..bucket\"\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-06T16:25:55-05:00",
          "tree_id": "07fa805dd55fa27c42cbf84bd5db14f63d0f53bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/03d71562337e978d618f487e41f1f5c4744fc99e"
        },
        "date": 1686087394890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.105,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.958,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.34290440000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.474124700000004,
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
          "id": "56b59c25518bf2a052fa93b8b24e7747b8bfdd77",
          "message": "Implement checksum validation for the prefetcher (#263)\n\n* Implement checksum validation for the prefetcher\r\n\r\nWe want to ensure data integrity while it is within Mountpoint's custody\r\nbut S3 API doesn't support ranged-get checksum at the moment.\r\n\r\nAs a temporary measure, we will calculate CRC checksum for the data as\r\nsoon as we receive it from S3 and do the validation every time we pass it\r\naround our part queue, and right before returning them to FUSE. To do\r\nthis, we will use ChecksummedBytes from previous change instead of Bytes\r\nin the prefetcher.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update per comments\r\n\r\nSigned-off-by: monthonk <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: monthonk <monthonk@amazon.com>",
          "timestamp": "2023-06-08T12:11:54-05:00",
          "tree_id": "404a77f8b9ab7c00e03e013ab68e6da54fd98166",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56b59c25518bf2a052fa93b8b24e7747b8bfdd77"
        },
        "date": 1686244989905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.999,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.2639994,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.904681,
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
          "id": "c2f5f2aabac129669e6cdcd53cb8b9f6ea78c8fb",
          "message": "Force compiler optimizations for aws-checksums (#284)\n\nThe ARM implementations in aws-checksums are written in C, and so\r\ncompiler optimizations are essential to give them reasonable\r\nperformance. We've recently started validating a lot of checksums in our\r\ntests (#263), and that's made the ARM CI much slower (> an hour). This\r\nshould get that back under control. x86 isn't affected because the\r\naws-checksums implementations are mostly hand-written assembly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-09T09:32:17+01:00",
          "tree_id": "fc379deea98a0f05805634fc152298829f9c9e7c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2f5f2aabac129669e6cdcd53cb8b9f6ea78c8fb"
        },
        "date": 1686300204043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.105,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.55815340000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.050256600000004,
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
          "id": "9c0a462b10cf0267be8bdb01ba9f8307651577f1",
          "message": "Avoid CRT auto-ranged-get for small requests (#285)\n\nThe CRT's auto-ranged-get will always do a HeadObject request when a\r\nrange is specified. For small requests, that's a fairly large latency\r\nhit. Let's avoid using the auto-ranged-get for requests small enough\r\nthat they would be sent as a single part anyway.\r\n\r\nIt would probably be nicer to have a way to turn off this behavior in\r\nthe CRT, but this is a reasonable change for now. We'll have to be\r\ncareful if we ever start relying on any extra behavior of the\r\nauto-ranged-get machinery, like checksum validation, but we're not\r\ncurrently planning anything like that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-09T10:09:47-05:00",
          "tree_id": "2e8c59759af6ca83c7785ff64a02f8133a351e06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9c0a462b10cf0267be8bdb01ba9f8307651577f1"
        },
        "date": 1686324020256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.206,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.692,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.622746,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.777989,
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
          "id": "49752d31bf16860e3f26d3dd128f16a6a92e322a",
          "message": "Add fuser version to mountpoint-s3 dependency (#287)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-12T10:20:38-05:00",
          "tree_id": "79cb168ac157f6d7bb5c528eaa4aab66d72671d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49752d31bf16860e3f26d3dd128f16a6a92e322a"
        },
        "date": 1686583882225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.938,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.2295814,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.564932899999995,
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
          "id": "00379e8209a57dc7e7b02a2dd165b1cbb1fd5285",
          "message": "Adjust prefetcher to spawn requests earlier (#283)\n\nThis change makes three adjustments to our prefetcher:\r\n1. Currently we only try spawning requests once per read, at the start.\r\n   This means we miss the opportunity to spawn requests after the read,\r\n   so if the read caused us to cross the prefetch boundary, we don't\r\n   trigger the request until the next read starts. This gives up a\r\n   little bit of latency. Tweaking this also makes the code a little\r\n   simpler/less branchy.\r\n2. The prefetch threshold is a strict inequality, which is a bad fit for\r\n   our power-of-two-oriented configs -- FUSE will read in 128k pieces,\r\n   so if the data remaining is exactly half the size (which it often\r\n   will be because of powers of two), we again have to wait an extra\r\n   request.\r\n3. Our default prefetcher config is mostly made up, and in benchmarking\r\n   we've seen it's a little too pessimistic about random reads. I picked\r\n   a new, still mostly-made-up first request size that allows us to\r\n   service up to 1MiB reads in one request. I also adjusted it a little\r\n   to account for Linux readahead (see the comment about that).\r\n\r\nAlso one thing I noticed along the way: `max_readhead` can't be set to\r\nzero (fuser returns an error that we're ignoring), so I dropped that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-13T09:46:45+01:00",
          "tree_id": "28e923503c1bef011d22a222d631bcd47b4b7a75",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/00379e8209a57dc7e7b02a2dd165b1cbb1fd5285"
        },
        "date": 1686646640314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.568,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.079774,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.1722664,
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
      }
    ]
  }
}