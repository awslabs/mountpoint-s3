window.BENCHMARK_DATA = {
  "lastUpdate": 1690496816885,
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
          "id": "8efeaa86a48e5cc1060a4b09b048bfe2affa2736",
          "message": "Remove IMDS call for instance throughput when IMDS is disabled (#394)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-20T19:11:39Z",
          "tree_id": "4471f9e0af433629d399f71ffa01093aa1225ca0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8efeaa86a48e5cc1060a4b09b048bfe2affa2736"
        },
        "date": 1689882367131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.908,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 55.6995083,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.080882200000005,
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
          "id": "7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac",
          "message": "Emit warning-level logs to syslog when log directory is unset (#387)\n\n* Move logging module into its own file\n\nNo code changes, just relocating the module in preparation for the next\ncommit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Emit warning-level logs to syslog when log directory is unset\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Document a little better\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-20T19:11:16Z",
          "tree_id": "56a8333ad423022072998a743a49c99225519511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac"
        },
        "date": 1689882396074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.925,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.1157978,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.7960815,
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
          "id": "183a20c9674a6d3bd29d8b52d675fec06658f3ee",
          "message": "Implement setattr to support changing time attributes (#391)\n\n* Implement setattr to support changing time attributes\n\nSome applications like `touch` requires the file system to support\nchanging file last access and modification times. We don't support this\noperation because the last modification time for objects can't be set\nvia S3 API. However, it's possible to allow this only for the files that\nare being written because at that time it's still a temporary stat in\nMountpoint.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix unit test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-21T09:08:07Z",
          "tree_id": "cf342407259005b6637707b616589c96a495585a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/183a20c9674a6d3bd29d8b52d675fec06658f3ee"
        },
        "date": 1689932778224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.647,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.5839771,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.570943799999995,
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
          "id": "bb0f479c07bc5630115a4e2105b85a5ebcd88fad",
          "message": "Introduce option to allow delete (#398)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T11:07:28Z",
          "tree_id": "0e493c7a85839afb80dc790ec83a81b53a43cd0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb0f479c07bc5630115a4e2105b85a5ebcd88fad"
        },
        "date": 1689939524646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.533,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.1572519,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.526025700000005,
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
          "id": "d3a8d05fb9dc9957fa45acf96d36367984392163",
          "message": "Remove delete feature (#399)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T12:32:28Z",
          "tree_id": "2c00fb0956349d9812db28d2559140fcf7e50e92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a8d05fb9dc9957fa45acf96d36367984392163"
        },
        "date": 1689944714820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.67,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.3610801,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.7623197,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dpresteg@gmail.com",
            "name": "Derek Prestegard",
            "username": "dprestegard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96",
          "message": "Refactor Dockerfile and update README (#402)\n\nSigned-off-by: Derek Prestegard <dpresteg@gmail.com>",
          "timestamp": "2023-07-24T15:15:22Z",
          "tree_id": "53ef58e75f84dce0df03968dfe1f2514f15b0ad7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96"
        },
        "date": 1690213778257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
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
            "value": 10.656,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 122.3062623,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.0053283,
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
          "id": "c90fe480c5562bbbeda7426f3c91c8d59861c8fc",
          "message": "Update inode status on fsync or write failure (#395)\n\n* Update inode status on fsync\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove sleep calls in tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove additional sleep calls\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-24T15:28:44Z",
          "tree_id": "211a1b6ca8bb7d523aaff0925b54db9b6031d910",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c90fe480c5562bbbeda7426f3c91c8d59861c8fc"
        },
        "date": 1690214785586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.888,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.6333704,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.8607041,
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
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690221399407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.4471653,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.7174329,
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
          "distinct": false,
          "id": "147f0b3448be5b0cbeeb081ca3ee940420a81e53",
          "message": "Adds support for storage class in client (#406)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-25T12:51:17Z",
          "tree_id": "d7bf7d38c7ef3913bc3bba6c4fc8322e14ed30c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/147f0b3448be5b0cbeeb081ca3ee940420a81e53"
        },
        "date": 1690291388442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.102,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.716,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.0355165,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.193048299999994,
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
          "id": "c40ff340fcde9c6500d57982578bdcc4384a31f6",
          "message": "Update CRT submodules to latest releases (#407)\n\n* Update CRT\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update UPDATING_CRT.md to show diff for all CRT submodules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-25T12:53:01Z",
          "tree_id": "29af0fbd4d978fe3466394ae1a717140c62f41fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c40ff340fcde9c6500d57982578bdcc4384a31f6"
        },
        "date": 1690291401296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.516,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.0094647,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.9825278,
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
          "id": "173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a",
          "message": "fs: refactor to use a structured error type (#405)\n\nToday the `fs` layer's methods all return `libc::c_int`, which means the\nconversion to errno happens here. This throws away a lot of error\ninformation, and we find ourselves adding ad-hoc calls to `error!` to\nsave context we think is important.\n\nThis change refactors `fs`'s methods to return a new structured `Error`\ntype, which still includes the errno `c_int` but also a message and an\noptional source (an `anyhow::Error`). We could almost use\n`anyhow::Error` directly except that we need the errno conversion and\nwe'd like to attach a little extra context message to the errors. We\nconstruct this wrapper with a new `err!` macro that puts the message and\nsource in the right place.\n\nThis change removes the ad-hoc `error!` logging we were using in a few\nplaces in `fs` previously. I'll follow it up with another change that\nadds a new proc macro to annotate every `fs` function to automatically\nprint its error in failure cases, which will return these log messages\nand also add all the missing ones.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T15:03:35Z",
          "tree_id": "69a1c19d604bc27496bf24071621d04f7eab91d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a"
        },
        "date": 1690299097271,
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
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.849,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.8717515,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.5371491,
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
          "id": "c419a6e86d6c32b5ceaf2c700291072754b4d9fa",
          "message": "Endpoint Resolver for each request (#396)\n\n* Included endpointConfig in S3Client and updated with latest codbase\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added regex for ARN and added region retries for special requests like transfer acceleration MRAP etc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the comment for ARN supporting Regex\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the path prefix of endpoint uri\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added specific regex for ARN matching\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary error cases and added arn bucket name test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Made a few changes according to recommendation\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added tests for ARN, still need to exclude objects from it\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added all the recommendations, some tests left\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added unit tests for endpoint config\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected borrowing\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed arg group of addressing style\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved error message for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes in ChangeLog for mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected gramatical mistake in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Simplified ARN even further\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added failure test for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes recommended and failure test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Remove unnecessary assert_matches dependency\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T19:35:05Z",
          "tree_id": "f3c2c380ea22cc7c936a723b826c0920ba056abd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c419a6e86d6c32b5ceaf2c700291072754b4d9fa"
        },
        "date": 1690315571558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.234,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.97668540000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.5566113,
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
          "id": "47d06c127d482212b89291ffc62a3604169c5db6",
          "message": "Fix region detection with specified region (#409)\n\n* Fix region detection with specified region\n\nWe weren't setting the region in the endpoint config if it was specified\nmanually. This passed our tests because it was defaulting to us-east-1\nand that's where our CI is. Instead, let's start with an obviously wrong\nplaceholder region and fill it in when creating the client.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix warning message\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T10:32:22Z",
          "tree_id": "1f8f7ef8166bb0826a3dfe764d766c116237b52b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47d06c127d482212b89291ffc62a3604169c5db6"
        },
        "date": 1690369868089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.186,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6899559,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.968576799999994,
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
          "id": "7dfc30c1d591b273274ec870af9caf8a34dd3ca0",
          "message": "Adds storage class (#400)\n\n* Adds in support to configure storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* removes default storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds integration tests\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* changes as per review comments\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fix lint error\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds in tests for mock client\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* removes unused imports\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* return storage class in option\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* throw error if obj not found\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2023-07-26T14:22:08Z",
          "tree_id": "5820419ade3f78e5eb2a31b92c87f32bdd726f69",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dfc30c1d591b273274ec870af9caf8a34dd3ca0"
        },
        "date": 1690383311425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.162,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.04148070000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2295033,
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
          "id": "c1720bc41e22cf9c199285151218e0c41dd21200",
          "message": "Add flags for logging configuration (#404)\n\nThis simplifies how we ask customers to configure logging by no longer\nexposing them to RUST_LOG or filtering directives. Instead, we add a\n`--debug` flag to enable verbose logs, and `--debug-crt` to enable\nverbose CRT logs (which are spammier). We also add a `--no-log` flag to\ncompletely turn off logging, and `--log-metrics` to emit the summarized\nperformance metrics.\n\nThis change also fixes a bug in the syslog implementation with events\nthat come via `tracing-log` (the adapter for emitting `tracing` events\nfrom the `log` facade). We use this adapter for adapting CRT logs into\n`tracing`, since `tracing` is very picky about log events having static\nmetadata but CRT logs are necessarily dynamic. The `tracing-log` adapter\nrecords metadata in some custom fields, which we weren't correctly\nhandling, so our log messages had the wrong `target` and a bunch of\nextra fields. This change is annoying to write a test for because `log`\nis global, but I tested it manually.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:23:44Z",
          "tree_id": "c103b9eae65b848eb73ab31a92e460e33a8a970c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c1720bc41e22cf9c199285151218e0c41dd21200"
        },
        "date": 1690387114533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.58790859999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.6444631,
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
          "id": "3832ccadee82326a9adb19e38322bdbe6ff9bec5",
          "message": "fuse: log all operation failures (#408)\n\nI was going to do this in a proc macro but this is way simpler. This\njust follows up on #404 by recording all the errors, using a small macro\nin place of the existing calls to `reply.error(libc::c_int)`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:24:22Z",
          "tree_id": "6b928023b6fda77ffd055facd6f5e634ac98fd16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3832ccadee82326a9adb19e38322bdbe6ff9bec5"
        },
        "date": 1690387151185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.312,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.0277925,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.851445,
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
          "id": "c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a",
          "message": "Add S3_SUBSESSION_IAM_ROLE environment variable (#412)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T17:15:13Z",
          "tree_id": "36fd375f542617b4e3c07587e8aed7c3ed5b3260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a"
        },
        "date": 1690393758572,
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
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.514,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.5009041,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.7914713,
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
          "id": "54851a95c609bcae7226cecb198d0a9fb9b59679",
          "message": "Add new subsession IAM role for auth integration tests (#410)\n\nWe want to be able to write tests with various permutations of IAM\ncredentials and policies (read only, prefix only, etc). Rather than\nmanually building new infrastructure for them, we're creating a single\nnew IAM role that tests can call AssumeRole on, using a session policy\nto scope down the credentials to those they want to test.\n\nI'll be using this in a follow-up commit to switch from HeadBucket to\nListObjects for region detection. I suspect we can also use it to get\nrid of our \"forbidden\" bucket, but don't plan on doing that right now.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T18:10:21Z",
          "tree_id": "ca4cf30996edbb4fad5511fa24b4b1de3b9e2ee2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54851a95c609bcae7226cecb198d0a9fb9b59679"
        },
        "date": 1690396902289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.209,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.419,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1858736,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.0150985,
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
          "id": "df4087bd63de7ff31984d9cc0e4a0db951359c11",
          "message": "Use ListObjectsV2 instead of HeadBucket for region detection  (#413)\n\n* Refactor error handling for S3CrtClient\n\nThere are some generic errors like region redirects and permissions that\nwe'd like to parse in only one place rather than all over the code. This\nchange moves those errors to S3RequestError and rejigs the parsing code\nappropriately.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Use ListObjectsV2 instead of HeadBucket for region detection\n\nHeadBucket requires `s3:ListBucket` permissions for the root of the\nbucket, but some customers scope their users' access down to only a\nprefix of the bucket. This makes it impossible for them to use prefix\nmounts today. Instead, we want to use ListObjects on the prefix as the\nregion detection mechanism.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:19:15Z",
          "tree_id": "233f258f7f59f2628e626917305d3675d057bebe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df4087bd63de7ff31984d9cc0e4a0db951359c11"
        },
        "date": 1690496763154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.377,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2173245,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.210845,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690496816449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.8216756,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.1393615,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}