window.BENCHMARK_DATA = {
  "lastUpdate": 1689779864072,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
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
          "id": "ed542e726de9232f8cfbdbeeb3a5a37988ada891",
          "message": "Add some tests for UTF-8 filenames (#362)\n\nLinux filesystems allow UTF-8 in filenames, and S3 allows UTF-8 in keys,\r\nso we expect this to work. It does! But it did expose a bug in our mock\r\nclient's ListObjects implementation, which was dealing with bytes\r\ninstead of characters (unlike the real S3).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-09T13:03:55+01:00",
          "tree_id": "63ed2df4c8b2c72b6e48cbe57025f1c0c108aab0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed542e726de9232f8cfbdbeeb3a5a37988ada891"
        },
        "date": 1688904867587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.889,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.5125029,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.783694700000005,
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
          "id": "5feb0e596c471e3bf24f6ee947d8f862d69cf163",
          "message": "Update CRT submodules to latest releases (#365)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-10T14:09:41+01:00",
          "tree_id": "bf30fd59e6a63e498fe1bf113c1790f0ea789d65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5feb0e596c471e3bf24f6ee947d8f862d69cf163"
        },
        "date": 1688995228424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.801,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.4622428,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.5536919,
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
          "id": "b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907",
          "message": "Remove closed issue warnings (#366)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-11T10:29:45+01:00",
          "tree_id": "951937452359dbfa781a00799f97d198a63d5486",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907"
        },
        "date": 1689068414087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.491,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.41202320000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.1768019,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a516cc8ba299becad398c7564755c16c9e8d5ff4",
          "message": "Introduce release workflow. (#356)\n\nWe adopt two Github Action to automate release for Mounpoint-S3\r\n* Github Action ID: [taiki-e/create-gh-release-action](https://github.com/taiki-e/create-gh-release-action) for create Github Release.\r\n    * During the release, operator must have consensus with team on version,\r\n      draft, prefix and title as workflow inputs.\r\n    * This workflow can also take changelog as inputs, we can opt in\r\n      that once we have a change log format ready.\r\n* Github Action ID: [taiki-e/upload-rust-binary-action](https://github.com/taiki-e/upload-rust-binary-action) for uploading Mountpoint-S3 binary and all other artifacts.\r\n    * This workflow uploads compiled binary on target platforms. When we\r\n      do the release, artifacts must includes: bin, LICENSE, archive and\r\n      checksum.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: Yaosheng Zhang <zyaoshen@amazon.com>",
          "timestamp": "2023-07-12T14:41:52-07:00",
          "tree_id": "6c4c4ffe626009d2f9e3692bb8a2cf33c2f6a451",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a516cc8ba299becad398c7564755c16c9e8d5ff4"
        },
        "date": 1689198739126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
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
            "value": 10.881,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.2494675,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.5845077,
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
          "id": "862625f2ef55926f6444948f60c481058cf47a0f",
          "message": "Disable new `items_after_test_module` Clippy lint (#372)\n\nThis is new in 1.71, but seems to get confused by the test_case macro.\r\nIt was supposedly fixed in\r\nhttps://github.com/rust-lang/rust-clippy/pull/10992 but that seems to\r\nnot have entirely worked.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:20:36Z",
          "tree_id": "bdb22a4a2ffc9565d4ec86c32cf8003ae5f49a91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/862625f2ef55926f6444948f60c481058cf47a0f"
        },
        "date": 1689265906241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.992,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.6025681,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.4940176,
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
          "id": "caeff99448ec64b64bf6dfbbd7dbdebea13d847e",
          "message": "Add unlink to reference model tests (#368)\n\nThis is pretty annoying because of some weird edge cases around implicit\r\ndirectories being removed while local children are present. I think in\r\nthe long term we want to fix this, but it's a similar problem to what we\r\nsaw in #359 -- we need `readdir` to clean up removed directories\r\nproperly. So for now, I've changed the reference model to match our\r\ncurrent semantics, which is that if an ancestor of a local\r\nfile/directory is removed, that file/directory will no longer be visible\r\nthrough the filesystem. Of course, once that file/directory becomes\r\nremote it will become visible, and the model still captures that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:52:46Z",
          "tree_id": "fb7e90556bf7d806ff78ac94090986ec32396177",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caeff99448ec64b64bf6dfbbd7dbdebea13d847e"
        },
        "date": 1689267772801,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.022,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.2886128,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.5983596,
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
          "id": "146b9d3d777e41d68a5383a911021feea003c869",
          "message": "Remove checksum feature from the workflow (#379)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:46:49+01:00",
          "tree_id": "37e8bdcb9d89f483203260f792c507f30603d57e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/146b9d3d777e41d68a5383a911021feea003c869"
        },
        "date": 1689343055279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.79,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.4656049,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.0913398,
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
          "id": "d335a48ee2b2d2bb87408b557345af2166e7085d",
          "message": "Remove the temporary checksum feature (#378)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:18:22Z",
          "tree_id": "329e09fadd5876c558ae99a2fd8e3b0bf4325eff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d335a48ee2b2d2bb87408b557345af2166e7085d"
        },
        "date": 1689344937718,
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
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.156,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.132757,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.778100200000004,
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
          "id": "7be6f2f3816591794134e90d3e615e79f66a5668",
          "message": "Compute checksums on write and compare with trailing checksums (#367)\n\n* Revert workaround for empty PutObject requests in #295\r\n\r\nCRT now supports empty PutObject requests with no ContentLength header\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move crc32c-related functions into Crc32c type\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add support for upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Compute checksums on write and review on upload\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksum types to mountpoint-s3-client\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Rename/review UploadReview types\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify handling of upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove ChecksummedSlice\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address PR feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksums back to mountpoint-s3-crt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-14T16:00:10-05:00",
          "tree_id": "f7ca2d33165a79b9dcd24d8667fa436d9ec31bb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7be6f2f3816591794134e90d3e615e79f66a5668"
        },
        "date": 1689369059540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.75,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.0515479,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.254796799999994,
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
          "id": "8d44b12bdd387ee9e7359f754e62d294ad267003",
          "message": "Allow omitting commit hash from version when specified as official release (#376)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:31:27-05:00",
          "tree_id": "372fb86afbbff454325b9cb6fd64d2fded7af972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8d44b12bdd387ee9e7359f754e62d294ad267003"
        },
        "date": 1689370919455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.664,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.0760811,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.1819435,
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
          "id": "6e2551a73643c04983fb6b1eed375d00c3df477b",
          "message": "Disable logging to file by default (#373)\n\n* Disable logging to file by default\r\n\r\nThis is a breaking change.\r\n\r\nLogging to disk is now disabled by default.\r\nLogs will not longer be written to `$HOME/.mountpoint-s3/` and should be configured using `--log-directory <DIRECTORY>`.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Cleanup argument a little\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve clarity of documentation around foreground logging\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update log file name to improve timestamp clarity\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:33:59-05:00",
          "tree_id": "8a2826148e4e0ec24461d0475240f43a47a66cb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e2551a73643c04983fb6b1eed375d00c3df477b"
        },
        "date": 1689371066600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.691,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.5670674,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.5059055,
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
          "id": "3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e",
          "message": "Fix merge conflict (#381)\n\n:(\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-14T22:36:34Z",
          "tree_id": "03de622de34cf468c05e6869ae21681e5e89f51d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e"
        },
        "date": 1689374825290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.539,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.479334,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.0886764,
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
          "id": "1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae",
          "message": "Tweak some of the CLI help text (#382)\n\n- desired throughput -> maximum throughput\r\n- move AWS credentials above mount options\r\n- change placeholder name for mount point to match `mount`'s docs\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:56:46+01:00",
          "tree_id": "16fb32e481d08a6d6e1d1fbb5f653c937b949c61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae"
        },
        "date": 1689613649986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.823,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.2223161,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.6356135,
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
          "id": "0efc380abaad32dc0ab64f33df251d2702edd479",
          "message": "Support open with O_RDWR flag (#370)\n\n* Support open with O_RDWR flag\r\n\r\nCurrently, Mountpoint supports either open with O_WRONLY or O_RDONLY\r\nbecause we don't allow applications to do both read and write at the same\r\ntime. However, it's possible support O_RDWR flag too since we can decide\r\nat open time whether to give a read handle or a write handle back, and\r\nfor any inode it's never possible for both start_reading and start_writing\r\nto work.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update semantics document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update mountpoint-s3/tests/fuse_tests/write_test.rs\r\n\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add logs\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-07-17T13:28:00-05:00",
          "tree_id": "63c799dc2dfae1088371518de063e834f7b5e31a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0efc380abaad32dc0ab64f33df251d2702edd479"
        },
        "date": 1689619113606,
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
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.043,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.3310958,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.6839937,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d03df14abcc5a1bb38c671865faa7cf9e623bf5",
          "message": "Adds region in tests (#375)\n\n* adds region when running fuse tests\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds in secondary region\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* removes extra new lines\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds domain env variable\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* adds fips_tests feature to CI\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* use full domain\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* rustfmt\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T18:55:28Z",
          "tree_id": "1cf94e31943f473dc7d81e8fb0b22079b05e91ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d03df14abcc5a1bb38c671865faa7cf9e623bf5"
        },
        "date": 1689620765631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.775,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.8169815,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.4767916,
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
          "id": "5a3aa4c1ab89b28bcafeb28066475888ed659c47",
          "message": "Fix missing feature in CI (#385)\n\nWe missed this in #375 and it broke mainline.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:00-05:00",
          "tree_id": "c667c5c19ef67e4006b3f81dd2e179f0870de3d8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a3aa4c1ab89b28bcafeb28066475888ed659c47"
        },
        "date": 1689635119284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.788,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.836777,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.1290775,
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
          "id": "839ccfd1ba98ca9613eae8686bb4c369e691fe29",
          "message": "Remove inodes from their parent in `forget` (#380)\n\n* Remove inodes from their parent in `forget`\r\n\r\nThe parent directory still holds onto an `Inode` (an `Arc<InodeInner>`),\r\nso right now our `forget` is leaking the actual inode. We need to remove\r\nit from its parent at `forget` time. Also updated the tests to check\r\nthat the inode is in fact free'd.\r\n\r\nI tested this by listing a directory with 2M objects on an instance with\r\n1GiB of memory, and saw constant memory usage.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't forget the wrong inode\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:27-05:00",
          "tree_id": "43b8c9e97bc4a356b830f058f2c753fa3dc62e5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/839ccfd1ba98ca9613eae8686bb4c369e691fe29"
        },
        "date": 1689635194959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.583,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.6129949,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.294875600000005,
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
          "id": "d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04",
          "message": "Report current file size during writes (#384)\n\n* Report current file size during writes\r\n\r\nMountpoint currently reports file size as 0 until the upload is complete.\r\nIn this commit, we instead report how many bytes have been streamed to S3\r\nas some applications want to know current size of the file during writes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add some tests\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comment\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-18T13:21:12-05:00",
          "tree_id": "7a1093c09b1491d093d3da81c8188987e79f8422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ef0b9dd1ab5e967ca882b1b56564db7dd06c04"
        },
        "date": 1689705110763,
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
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.07,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 107.8219483,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.730252799999995,
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
          "id": "4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53",
          "message": "Reconcile remote and existing inodes at `update` time (#386)\n\n* Reconcile remote and existing inodes at `update` time\r\n\r\nTo date we haven't thought too carefully about what happens if objects\r\nare put/deleted from the S3 bucket while conflicting state is present\r\nlocally. There are a lot of edge cases here -- the Cartesian product of\r\nexisting state (local/remote file/directory) and new remote state\r\n(file/directory), as well as two paths for inodes to be updated (readdir\r\nvs lookup).\r\n\r\nThis change defines a semantics for these permutations. The overall idea\r\nis that (a) remote state shadows local state, and (b) directories shadow\r\nfiles. But those axioms alone aren't enough to break all ties; for\r\nexample, what if the existing state is a local directory but the new\r\nstate is a remote file -- which should win? I chose to break the tie by\r\nsaying that remote directories > any local state > remote files. So, for\r\nexample, if a user creates a local directory, and then a conflicting\r\nobject appears in the remote bucket, the directory will still be\r\nvisible instead of the new file.\r\n\r\nI spent some time trying to patch the existing inode update path to do\r\nwhat I needed but it ended up being easier to just refactor it. I think\r\nwe could still find a better factoring for this path, but it now\r\nexplicitly accounts for all the permutations above and does the right\r\nthing (at least according to our reference model) for them all.\r\nHappily, proptest has done a good job at rooting out the many edge\r\ncases, as you can see by all the new regression tests in this change.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:54:35+01:00",
          "tree_id": "f6cf307ab27e2014dcf378a5e1ca71657aab26ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53"
        },
        "date": 1689761092460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.637,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.3692873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.762178799999994,
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
          "id": "9d09e1e6420fe752d649e93c6ee528a3f9c48e4c",
          "message": "Add detailed CRT metrics and tweak per-request logging (#390)\n\n* Add detailed CRT metrics and tweak per-request logging\r\n\r\nThis change is a few related things to make logging more useful:\r\n- Include verbose CRT request metrics at trace level. We emit what we\r\n  think is the \"interesting\" stuff at higher levels, but for detailed\r\n  investigation we might want to see the raw CRT view.\r\n- Add parameters to request spans. This ensures that we know _which_\r\n  request is going wrong when we see log messages about requests.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Make ThreadId work on macOS\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:06:17-05:00",
          "tree_id": "51fcc97646b0631752b11d87573f4403107f776c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d09e1e6420fe752d649e93c6ee528a3f9c48e4c"
        },
        "date": 1689779863469,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.827,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.6939922,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.6924571,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}