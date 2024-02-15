window.BENCHMARK_DATA = {
  "lastUpdate": 1708017426431,
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
        "date": 1706889586412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.033,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.903874,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.7274665,
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
          "distinct": false,
          "id": "e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103",
          "message": "Refactor main.rs into a new module generic in its client (#724)\n\n* Move entire main.rs into cli.rs\n\nThis is the smallest change to make things still compile. Refactoring\ncomes in the next commit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Refactor to make `main` generic in the client\n\nThis will let us run the whole mount-s3 binary with different client\nimplementations\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T15:50:56Z",
          "tree_id": "7a5be2816f6eb6d72994843b5fd5ed4d7106e056",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103"
        },
        "date": 1706891046312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.207,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.79563259999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.9689521,
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
          "id": "6dc1351f09f5c54b7d6b588b05a4edf551529431",
          "message": "Add a new mock client that simulates GET throughput (#723)\n\n* Add a new mock client that simulates GET throughput\n\nFor performance testing and microbenchmarking, we'd like to be able to\nseparate the S3 service and the CRT datapath from our own client and\nfile system. This mock client can simulate a target network throughput\nby rate-limiting the `get_object` stream. The goal is to be able to use\nthis client in place of a regular `S3CrtClient` when we want to isolate\nperformance questions.\n\nAlong the way, I realized we're including the mock client in our release\nbuilds, because it's an always-on feature of the client crate. This\nchange therefore also does a little dependency refactoring to remove the\nmock and failure clients from the non-test dependency closure. I checked\nthis works by seeing that the release binary is a few MBs smaller, and\nthat `strings mount-s3 | grep mock` no longer includes the mock client's\nsymbols.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adopt mock client as an option in client benchmark\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Dependency fixes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T16:21:43Z",
          "tree_id": "9038a8e01eacaa9abd826e342738312bb816af74",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dc1351f09f5c54b7d6b588b05a4edf551529431"
        },
        "date": 1706894084103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.519,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.5146786,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.670777799999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "158502535+andrewatamzn@users.noreply.github.com",
            "name": "andrewatamzn",
            "username": "andrewatamzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "778aad3ee2379c270c3ff9979e86415f956cb1c5",
          "message": "Update configuration documentation page (#727)\n\n* Update CONFIGURATION.md\n\nupdate the file modifications and deletions section with the release of overwrites \n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n---------\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-02-02T17:49:34Z",
          "tree_id": "01ede06aa332f257045ceb49aeb8f68952a85416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/778aad3ee2379c270c3ff9979e86415f956cb1c5"
        },
        "date": 1706898141564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.549,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.7995803,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.0287728,
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
          "id": "4eba52d3f0102e997c985ff32e7c8f3238d58fc2",
          "message": "Update and prune some dependencies (#731)\n\n* Update dependencies to remove some duplicate versions\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Sort cargo dependencies (no actual changes)\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Remove fs2 dependency\n\nIt's old and unmaintained, and nix has a statvfs implementation. The only trick\nis that nix makes us do the block-size calculation ourselves, but since we only\ncare about the ratio of free blocks, we actually don't need the block size at all.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Cleanup some default dependency features\n\nA few features we either weren't using at all, or were only using in tests\nand so can remove from the release build.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n---------\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2024-02-05T19:42:05Z",
          "tree_id": "3928861a29bac604618365e66bee358c2fd7daf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4eba52d3f0102e997c985ff32e7c8f3238d58fc2"
        },
        "date": 1707164521824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 121.0062475,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 89.2941498,
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
          "id": "05f6cc31581ae02180701675db8e6eda2326a7f2",
          "message": "Use stable Rust for address sanitizer (#734)\n\n* Use stable Rust for address sanitizer\r\n\r\nNightly is broken today, which blocks our CI. This is the third or\r\nfourth time this has happened to us, so let's switch over to using the\r\nRUSTC_BOOTSTRAP hack to use nightly features on stable Rust. This is\r\nscoped only to the ASan makefile target, so it won't actually allow us\r\nto use nightly features in our code, just when running the sanitizers.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Install stable Rust\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-06T10:36:45-06:00",
          "tree_id": "6c34edea9d35c57e1fbabe7ad55f4539bde0acae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f6cc31581ae02180701675db8e6eda2326a7f2"
        },
        "date": 1707238085293,
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
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.187,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.2082804,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.4997249,
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
          "id": "9bb6ced313e3a4f4cc3f3d31d01796e9ae3f2f9c",
          "message": "Introduce negative_cache feature flag (#733)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-06T18:14:18Z",
          "tree_id": "8d6ac78d68015fa62d2bc2b19ebdbc3d9be41c19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9bb6ced313e3a4f4cc3f3d31d01796e9ae3f2f9c"
        },
        "date": 1707245325651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.191,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.03925559999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.0388365,
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
          "id": "53e22be32f9a3c0b0f7550c4d4a247837a7bccc5",
          "message": "Introduce negative metadata cache entries (#696)\n\n* Extract Expiry type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce negative cache\n\nReduce latency when repeatedly looking up non-existing files or directories (when cache is enabled).\n\nThis change adds negative metadata cache entries: whenever a lookup fails because an object does not exist, we cache a “negative” entry with the same TTL as for successful lookups and use it to reply to subsequent kernel requests for the same name.\n\nThe negative entries are maintained separately from the inode tree using the new `NegativeCache` type, which enforces an upper limit to the number of entries and handles their expiration.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Enforce maximum value for metadata TTL (100 years)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Document negative cache limit\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-07T10:14:02Z",
          "tree_id": "5439d3f4271fb7ea02febddef9f9b63441cced7f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53e22be32f9a3c0b0f7550c4d4a247837a7bccc5"
        },
        "date": 1707302839737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.913,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.3826441,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.2463165,
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
          "id": "911255fa7df0b093eb52c68e68eb8cef15d901a7",
          "message": "Update to GA release of Rust SDK (#732)\n\nThis is mostly pretty straightforward with the exception of handling S3\nExpress One Zone, which isn't yet supported in the Rust SDK, but the SDK\nis now aware of its existence. The new SDK doesn't understand the\n`sigv4-express` auth scheme that Express buckets resolve to, and falls\nback to no auth at all. And we can't skip over the endpoint resolution\nby leaving out the bucket name any more because the SDK now validates\nthat bucket is present.\n\nOur new workaround is to insert an endpoint resolver that just forces\nSigV4. We still get to use the real endpoint resolver to figure out\neverything else, including the endpoint URL (so that variable can be\nremoved). We can remove this hack once the SDK gains Express support.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-07T15:38:48Z",
          "tree_id": "1feaca574a8fb31ac42498f3d1e21231e22710e3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/911255fa7df0b093eb52c68e68eb8cef15d901a7"
        },
        "date": 1707322470824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.546,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.71523429999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.05377440000001,
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
          "id": "14e1496716b3dd02d1033951ba045d8d24df7f5f",
          "message": "Update CRT submodules to latest releases (#737)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T16:12:13Z",
          "tree_id": "d4ec4f76c2799c694da9d1e2f42697cb4d520de6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/14e1496716b3dd02d1033951ba045d8d24df7f5f"
        },
        "date": 1707324635399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.578,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.1393427,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.0180539,
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
          "id": "d959640b34b0607be4ece382482f893a4b851069",
          "message": "run the binary mount-s3 for benchamrks (#739)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T22:27:13Z",
          "tree_id": "a939a0e2631e002dbef8a2abe8c4d39ac9eb4fa7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d959640b34b0607be4ece382482f893a4b851069"
        },
        "date": 1707346363930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.102,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.5050163,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.876934299999995,
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
          "id": "61a0133dfb8ee7e7f1722c6ed89070d9b1141736",
          "message": "Fix the updated clippy error (#742)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-09T15:49:39Z",
          "tree_id": "b091aa65ba5ed58f7ce53df94f8d9852fbe5875a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61a0133dfb8ee7e7f1722c6ed89070d9b1141736"
        },
        "date": 1707495275455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.347,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.067146,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.120595,
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
          "id": "cfc11cd0020cd6118231d08795484197d890f72c",
          "message": "Fix packaging workflow on AL2023 (#741)\n\nIt sets a much higher ulimit for open files, and that seems to interact\nbadly with `yum` on Centos 7. The net result is that our packaging\nworkflow takes hours\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-09T16:07:02Z",
          "tree_id": "86dd6c761c7ce31b7578ebdda9aae965cf9b6fb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfc11cd0020cd6118231d08795484197d890f72c"
        },
        "date": 1707496333669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.69,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.2408309,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 89.9979684,
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
          "id": "0b980a0fc8c50e75b2a3ef45ba56a8766a51528a",
          "message": "Add support for --sse, --sse-kms-key-id flags under a feature flag (#715)\n\n* Add support for --sse, --sse-kms-key-id flags\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor erroneous_write_sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix clippy\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-09T16:32:49Z",
          "tree_id": "f9d3a161ff7c6eadd8529a9c80bdfbb46abd1282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b980a0fc8c50e75b2a3ef45ba56a8766a51528a"
        },
        "date": 1707497887804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.184,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2928392,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.325006,
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
          "id": "0ef41589b9e273fc1ca02e05aa3319c26d29b3ba",
          "message": "Update libgit2-sys 0.16.1 to 0.16.2 (#746)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-12T11:52:22Z",
          "tree_id": "43ea5f45665640e346ef7dd5a2e6138f34709b0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ef41589b9e273fc1ca02e05aa3319c26d29b3ba"
        },
        "date": 1707740286409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.275,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.57773909999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.68498029999999,
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
          "id": "a3e61687ff58fbb9b2b32e81f1e9def07eccc876",
          "message": "Release new mountpoint-s3-client crate version (#747)\n\n* Release new mountpoint-s3 client crate version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the release to v0.7.0\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-12T17:31:34Z",
          "tree_id": "23059aa1f9f81d3d9821e639e646f72540a2dca2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3e61687ff58fbb9b2b32e81f1e9def07eccc876"
        },
        "date": 1707760772887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.431,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.7393823,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.0981847,
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
          "id": "dce1480c723aa6ecfef7e0caca6581c64266c9c7",
          "message": "Raise filter for metrics tracing spans to WARN (#748)\n\nThis change avoids unnecessary invocations of the CRT log handlers,\nwhich are fairly expensive and therefore worth avoiding, but it's a bit\nof a journey to explain why and how.\n\nThe `MetricsTracingSpanLayer` is how we get end-to-end latencies for\nFUSE operations. It tracks the spans created by the `fuse` module and\nemits latency metrics at the end of them. To do this, it filters for\nthose spans, and that filter specifies both a target name and a maximum\nlevel, which is currently DEBUG. This tracing layer gets added to the\nregistry we construct in `init_tracing_subscriber` at mount time.\n\nBecause this filter asks for DEBUG-level spans, the overall tracing\nsubscriber sets its maximum level to DEBUG, even though (in our default\nconfiguration) we only emit logs at WARN and below. This maximum level\nis how `tracing` and `log` can cheaply check whether to skip\nconstructing a log event -- they check if the log event's level is\nhigher than the maximum level. So setting the maximum level to DEBUG\nmakes this cheap filtering less effective, and some log messages will be\nconstructed but not emitted (because they'll fail the actual, more\nexpensive check) as a result.\n\nOne place that uses this cheap filtering is our CRT log adapter. The CRT\nlogging macros call `get_log_level` to find out what the maximum log\nlevel currently being emitted is, and skip calling the actual log method\nif they're trying to emit a log message at a higher level than that. Our\nimplementation of `get_log_level` checks the maximum level set by the\ntracing subscriber (via `log::max_level()`, which is set by\n`tracing-log`).\n\nThe net result is that the CRT logging macros end up calling their\nactual log methods more often than they need to, because even though we\nset CRT logging to off by default, the `log::max_level()` is set to\nDEBUG because of the logic above. And because of some Rust/C FFI\nweirdness, these methods are somewhat expensive: they need to construct\nthe entire log message before they can filter to decide if the message\nshould actually be emitted (this is what the the\n`aws_crt_s3_rs_logging_shim_log_fn_trampoline` method does). In\nbenchmarks, this log construction can show up in profiles as up to 5% of\nour CPU cycles even though none of these log messages will actually be\nemitted.\n\nTo fix this, we can change the maximum level of the\n`MetricsTracingSpanLayer`'s filter to WARN. The spans it's interested in\nhave been at warning severity for quite a while, so this doesn't change\nanything about our actual logging. But it does mean that the tracing\nsubscriber can now set its maximum level to WARN instead of DEBUG, which\nmakes the cheap filtering effective for the CRT log handlers, avoiding\nconstructing every DEBUG-or-below log message only to throw it away.\n\nAs a simple test, we can use perf to count how often the CRT log handler\nis invoked:\n\n    $ sudo perf probe -x target/release/mount-s3 -a aws_crt_s3_rs_logging_shim_log_fn\n\nBefore this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:05:56.471429Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=33.846617ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                592      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\nAfter this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:01:17.588700Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=41.092086ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                    8      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\n        0.071456784 seconds time elapsed\n\n        0.019072000 seconds user\n        0.012727000 seconds sys\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-13T14:04:05Z",
          "tree_id": "567dd0565fdd8f5903e618e6acd24741334987e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dce1480c723aa6ecfef7e0caca6581c64266c9c7"
        },
        "date": 1707834602262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.192,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.0265695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.45742059999999,
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
          "id": "18f774ef6162f8c8bca3bc6a5603ada8224d3045",
          "message": "Set default binary in mountpoint-s3 crate manifest (#753)\n\n* Set default run binary in mountpoint-s3 manifest\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert \"run the binary mount-s3 for benchamrks (#739)\"\n\nThis reverts commit d959640b34b0607be4ece382482f893a4b851069.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-15T16:47:33Z",
          "tree_id": "2075c9ab82c2ab82b1afb563f4fb5ed87d2aff72",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f774ef6162f8c8bca3bc6a5603ada8224d3045"
        },
        "date": 1708017425973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.246,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.1905733,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.81547909999999,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}