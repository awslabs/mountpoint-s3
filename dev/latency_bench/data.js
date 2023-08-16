window.BENCHMARK_DATA = {
  "lastUpdate": 1692153383975,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690831813119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.099,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.2829103,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.8638087,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690907321906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.064,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.888456,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.9156641,
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
          "id": "c61d0cbca272f652fd11314a7d1e12453954067c",
          "message": "Prepare release workflow (#424)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-02T10:07:58-05:00",
          "tree_id": "0a7e9aa1670e9a62ddecde703ea8c1d96152ad00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c61d0cbca272f652fd11314a7d1e12453954067c"
        },
        "date": 1690989530793,
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
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 119.6654746,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.591325600000005,
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
          "id": "10110867188a2a53c6dd9c81a63e1b8cad9fdea6",
          "message": "Bump version of mountpoint-s3 to v0.4.0 (#425)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-02T10:13:13-05:00",
          "tree_id": "8bd870fb7566d745b9ac16d87bfd7e0891779362",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10110867188a2a53c6dd9c81a63e1b8cad9fdea6"
        },
        "date": 1690989816408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.458,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.7842377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.1580712,
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
          "id": "ae18473cf5668df8fd6e09b49b7a665464786b8b",
          "message": "Use AWS_REGION and IMDS to determine region (#422)\n\n* Add support for AWS_REGION to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * default region (us-east-1).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add get_identity_document to the IMDS client\n\nExtend the IMDS client to query the identity document of the current EC2 instance. The identity document is returned as a json response, which is parsed (using serde) to extract  the region and the instance type. The new `get_identity_document()` is tested by comparing its result to those obtained via the SDK.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use AWS_REGION and IMDS to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * EC2 instance region (using the IMDS client),\n  * default region (us-east-1).\n\nIn order to avoid querying the IMDS twice, this change also refactors the retrieval of the instance type (used in the calculation of the maximum network throughput). The new type `InstanceInfo` will lazily query the IMDS client for both value if and when required.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move InstanceInfo into a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor all region handling logic into get_region\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unused methods in ImdsCrtClient and ImdsClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-08-03T03:58:05Z",
          "tree_id": "b9587bef66f6f489e6b0a9ee5282036eb2af2c89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae18473cf5668df8fd6e09b49b7a665464786b8b"
        },
        "date": 1691036984075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.979,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.8422021,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.7139604,
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
          "id": "de2e9a2ef49ce50c7680839bd7d12e0d5383a669",
          "message": "Make inode-related errors more user-friendly (#416)\n\nInode numbers aren't very useful for debugging, since you have to go\nreconstruct which object they refer to, which is only possible with\nfairly detailed (trace-level?) logs. Since many of these errors become\ncustomer-facing in logs (e.g. opening an existing file with O_WRONLY),\nwe can make them at least a little more parseable by attaching some info\nto them.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T17:02:53Z",
          "tree_id": "bf815758290172df56ff554c6f7fe8604b6387e9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de2e9a2ef49ce50c7680839bd7d12e0d5383a669"
        },
        "date": 1691084371842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.161,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.7505608,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.877932,
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
          "id": "ab7501a6ef8cd39de8b6cbb8848da9d05e4f310c",
          "message": "Update network throughput (#426)\n\n* Update network throughput\n\nIt's been a while since we ran this, and there are new instance types.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Remove unused line\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T18:02:32Z",
          "tree_id": "120b1e31fa6fb93be0a9ac8201d4313bb99c07db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab7501a6ef8cd39de8b6cbb8848da9d05e4f310c"
        },
        "date": 1691087812748,
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
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.12,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.9859135,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.0674465,
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
          "id": "eae8b4d204ccc1c8607c280b4cba5416fd5c6861",
          "message": "Print a message when mount succeeds (#427)\n\n* Print a message when mount succeeds\n\nIt's not obvious that mounting succeeded in the default background mode\n-- the process just silently exits. Let's make it a bit more obvious\nthat things went well.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Drop args before fork\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Oops\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-03T18:14:05Z",
          "tree_id": "acd92371baaf8bc89c74c066020ce82a7a598f45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eae8b4d204ccc1c8607c280b4cba5416fd5c6861"
        },
        "date": 1691088824671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.646,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.4282829,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.516307600000005,
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
          "id": "014b9c75c6f6df72455bd445dec16b56cbe240aa",
          "message": "Parse endpoint property of Auth Scheme from endpoint resolver (#423)\n\n* AuthScheme parsing from endpoint Resolver.\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Update mountpoint-s3-client/src/endpoint_config.rs\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-08-04T08:18:51Z",
          "tree_id": "673749397ecf2f8422d346f02cacef81406c9ff9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/014b9c75c6f6df72455bd445dec16b56cbe240aa"
        },
        "date": 1691139445283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.717,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.3903695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.8894032,
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
          "id": "28f31ce2766628cd0e871b9c91330086297ea8b2",
          "message": "Change artifact names for aarch64 package (#431)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-04T14:33:07Z",
          "tree_id": "9d74fa514de2f145823e057d798212f0a5ded8e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28f31ce2766628cd0e871b9c91330086297ea8b2"
        },
        "date": 1691161924602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.459,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.1266334,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.6311277,
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
          "id": "00ecc60e7171a0cb9b40c695d96967b3ecbf82b5",
          "message": "Bump version of mountpoint-s3 to v0.4.1 (#432)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-04T16:11:10+01:00",
          "tree_id": "b5b697a1245dc25fcb26f9c79083b28f36646702",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/00ecc60e7171a0cb9b40c695d96967b3ecbf82b5"
        },
        "date": 1691162510378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.984,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6096619,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.3196707,
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
          "id": "59f2ebbc786d98796e387a717e620d59e4853329",
          "message": "Build SigningConfig from AuthScheme for each request (#428)\n\n* Add default signing config for each request\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Build SigningConfig from AuthScheme\n\nUse the AuthScheme obtained from the EndpointResolver to build the SigningConfig\nfor each request. Also extend the initializer for SigningConfig to accept the\nadditional parameters: service name, signing algorithm, and the use_double_uri_encode\nflag.\n\nThe AuthScheme will now validate the `scheme_name` field (i.e. signing algorithm)\non parsing and store it as a `SigningAlgorithm`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Log auth_scheme\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Parse signingRegionSet if signingRegion is not present\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Make SigningConfig not Clone\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix order of error fields\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: Ankit Saurabh <sauraank@amazon.co.uk>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-05T04:03:21Z",
          "tree_id": "6bde27603cba49db94ceee56e8b075d0779d208c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f2ebbc786d98796e387a717e620d59e4853329"
        },
        "date": 1691210267675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.236,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.7927037,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.6573617,
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
          "id": "dd5216582d1ede36a80a9002abf2224031d50685",
          "message": "Remove --fips command-line flag (#437)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-08-07T14:47:43Z",
          "tree_id": "f1bbcfa9df019064eb53f46f1799765465caf316",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd5216582d1ede36a80a9002abf2224031d50685"
        },
        "date": 1691421723901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.44,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 122.27229679999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.408479299999996,
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
          "id": "8728575280a8f07ac4d92a935926928d816ff1fa",
          "message": "Document Mountpoint configuration options and defaults (#436)\n\n* Document Mountpoint configuration options and defaults\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-07T17:00:23Z",
          "tree_id": "b66137541ea1faedc609e9658263e163d9c77ab4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8728575280a8f07ac4d92a935926928d816ff1fa"
        },
        "date": 1691429742962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.342,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.8889219,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.264557100000005,
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
          "id": "e106f62c57d5e6922455006fc172129a6b897534",
          "message": "Bump version of mountpoint-s3 to v1.0.0 (#438)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-08T16:05:08+01:00",
          "tree_id": "fe55d2c2c1f772ff33c5b99c9197bf8358441c8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e106f62c57d5e6922455006fc172129a6b897534"
        },
        "date": 1691507766913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.238,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.284,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.4022152,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.35582959999999,
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
          "id": "16a985700d80044f139a92d97f00a99f072d5c30",
          "message": "Update README and INSTALL documentation for 1.0.0 release (#439)\n\nThis adds new documentation for installing Mountpoint, using a Docker\ncontainer, and revamps the README to match these changes.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-09T14:16:23Z",
          "tree_id": "13a71f77db8c54e0389e70f256f31f5ffe18567c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/16a985700d80044f139a92d97f00a99f072d5c30"
        },
        "date": 1691592923206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.214,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.138,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.4938197,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.8368288,
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
          "distinct": false,
          "id": "243c4df87a5df171ecaaa5fdb33d327d65d0b894",
          "message": "decrease closed-channel log severity (#443)\n\n* decrease closed-channel log severity\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n* switch to trace\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n---------\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>",
          "timestamp": "2023-08-10T16:54:47Z",
          "tree_id": "e780dffdc8e8798b170c705d5ccb547bae937f40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/243c4df87a5df171ecaaa5fdb33d327d65d0b894"
        },
        "date": 1691688971110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.203,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.089,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.8835682,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.95881259999999,
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
          "id": "b65eda8e26da85f90a5696f38715eeb67e64c409",
          "message": "Add an example using Mountpoint with PyTorch (#440)\n\n* Add an example using Mountpoint with PyTorch\n\nI'd like to start collecting a few examples of how to use Mountpoint for\nstuff. This is the first one: using Mountpoint as a PyTorch data loader.\nThe goal is really just to show how to do it, and maybe say a little\nabout how well it works.\n\nFor now, this doesn't run in CI (need a GPU instance), will work on that\nlater.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update README\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-11T17:42:59Z",
          "tree_id": "57baf64ddf15616d1a94bd231b7a35d682c8a50d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b65eda8e26da85f90a5696f38715eeb67e64c409"
        },
        "date": 1691777671241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.238,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.206,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.247,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.6669333,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.4353305,
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
          "id": "3ecc0ae0e21ecd657103c23b4481d615ddb8b013",
          "message": "Update BENCHMARKING.md for GA release (#453)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-14T15:26:23Z",
          "tree_id": "03693dd402b68e6017b76f19adb025b40027eec5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ecc0ae0e21ecd657103c23b4481d615ddb8b013"
        },
        "date": 1692028463789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.846,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.247873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.4809441,
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
          "id": "3380f0cb2177840386487ecc76ddc81aaad9b5f2",
          "message": "Increase credentials duration when assuming role for benchmark ci job (#459)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T02:00:18Z",
          "tree_id": "b2c9a74a6b34a8c148f4175dd6301d298be03e2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3380f0cb2177840386487ecc76ddc81aaad9b5f2"
        },
        "date": 1692153383480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.137,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.85597759999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.222978700000006,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}