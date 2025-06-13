window.BENCHMARK_DATA = {
  "lastUpdate": 1749831852320,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747240707927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16656.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27184.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43002.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33879.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40892.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13961.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13997.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11445.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.78515625,
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
          "id": "09a22a9c025816872a6c6607166ed8ef0f80d3d6",
          "message": "Remove unused read timeout from prefetcher configuration (#1421)\n\nPrefetcher read timeouts were removed in commit 0ca2c771. The motivation\nthere was that timeouts were added due to deadlock issues early in\ndevelopment of Mountpoint, and that they had since been eliminated.\nThere is an open next step to introduce timeouts at a FUSE operation\nlevel which has not yet been completed (see\nhttps://github.com/awslabs/mountpoint-s3/issues/124).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes internal config struct only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-15T09:26:02Z",
          "tree_id": "c016737272a4116b9a05d18a765e2482c621cc16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a22a9c025816872a6c6607166ed8ef0f80d3d6"
        },
        "date": 1747309101479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15732.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23977.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38503.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39109.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38299.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14042.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13176.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9031.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.27734375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be792de9ef2e76f6993bc6126db679bb2cb34fc0",
          "message": "Adding fstab tag to user agent headers (#1420)\n\n### What changed and why?\n\n- This PR adds a new mp-fstab tag to the user agent header when\nMountpoint is launched via an fstab entry.\n- Introduces an is_fstab field to CliArgs, which is set to true when\nparsing arguments from fstab.\n- This allows downstream consumers (like the product team) to detect and\nanalyze fstab-based usage of Mountpoint for Amazon S3, supporting\nproduct analytics and future UX improvements.\n\nExample Request Header\n<img width=\"719\" alt=\"image\"\nsrc=\"https://github.com/user-attachments/assets/10561b96-b893-496f-bab4-3f00ae568e68\"\n/>\n\n\n### Does this change impact existing behavior?\n\n- No breaking changes.\n- The only impact is the addition of the mp-fstab tag in the user agent\nheader for fstab-based mounts.\n- All other mounting methods and user agent construction remain\nunchanged.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-15T10:16:23Z",
          "tree_id": "615c10da9bea9d73cb8eaecd4d1cfecc767eab31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be792de9ef2e76f6993bc6126db679bb2cb34fc0"
        },
        "date": 1747312227859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14679.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26984.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39493.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 215.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 333.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36311.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39666.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11894.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10715.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10373.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.63671875,
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
          "id": "676157b668a0b76b3387acb3f67d3bce58d2774e",
          "message": "Add errno check to FS mock S3 tests (#1424)\n\nSimple update to the test to check error number. We check this in other\nparts of the code, but this provides integration testing using the mock\nS3 HTTP server tests.\n\nProvides some basic coverage related to #1422.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-16T11:57:29Z",
          "tree_id": "e4a9ba6ba6b16ff193851b4ddef74cc132179ef3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/676157b668a0b76b3387acb3f67d3bce58d2774e"
        },
        "date": 1747404761176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16185.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27142.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41309.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 388.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35993.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35216.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13545.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14264.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13336.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.6171875,
            "unit": "MiB"
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
          "id": "172b4a14f53004bec00bca69110a88a895348b22",
          "message": "Propagate S3 response with `PrefetchReadError` (#1411)\n\nFor logging purposes we want S3 response (http_code, error_code,\nerror_message) to be retrievable via `fs::Error` when errors occur\nduring `S3FuseFilesystem::read` operation.\n\nTo achieve that we preserve this information during `PrefetchReadError\n-> fs::Error` conversion in `PrefetchReadError::get_request_failed`\nmethod. We also adjust `mountpoint-s3-client` to parse and store S3\nresponse with the following errors:\n\n1. GetObjectError::NoSuchBucket\n1. GetObjectError::NoSuchKey\n1. GetObjectError::PreconditionFailed\n1. S3RequestError::Forbidden\n1. S3RequestError::ResponseError\n1. S3RequestError::Throttled\n1. S3RequestError::IncorrectRegion\n1. Other `S3RequestError` variants occur before the response arrives and\nthus don't provide metadata\n\n### Does this change impact existing behavior?\n\nIn logs, read errors do not contain redundant token:\n> ..read failed with errno 5: get request failed: ~get object request\nfailed:~ Client error: ..\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAn entry for the `mountpoint-s3-client` changelog and a minor version\nbump (`0.14.1` -> `0.15.0`) to account for changes to error enum\nvariants?\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-19T13:02:01Z",
          "tree_id": "bf7371a714593d161ada9ab239fc11073ae65ba1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/172b4a14f53004bec00bca69110a88a895348b22"
        },
        "date": 1747667754659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16505.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28899.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39222.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 150.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36488.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37431.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13611.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14140.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11207.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.390625,
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
          "id": "5d806d69faf2af77c2484122b5343cc435151047",
          "message": "Add cache block serialization benchmark (#1426)\n\nIntroduce a criterion benchmark to measure the performance of reading a\nsingle cache block. In order to establish a performance baseline, we\nalso include a separate benchmark for reading a file the size of a\nblock.\n\nUpdates `criterion` to `v0.6.0`.\n\nThe benchmark can be run with this command:\n\n```\ncargo bench --bench cache_serialization\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-20T10:03:34Z",
          "tree_id": "4b156d9809f55665e3087cbfc2165601dc21b561",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d806d69faf2af77c2484122b5343cc435151047"
        },
        "date": 1747743474492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14968.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29961.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39237.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 388.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37914.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37476.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14202.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12783.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11390.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 366.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.41015625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54a1cb7760e5372f48a87a1d1d69ab37e4433678",
          "message": "Fstab cliargs roundtrip tests (#1414)\n\n### Fstab cliargs roundtrip tests\n\n\n\nThis PR adds a property-based test that ensures roundtrip conversion\nbetween CliArgs and FsTabCliArgs behaves as expected. Specifically, we:\n\nImplemented a custom FstabCompatibleCliArgs strategy for generating\nvalid CliArgs inputs.\n\nSerialise these into fstab-style CLI arguments.\n\nParse them back into CliArgs through the FsTabCliArgs path.\n\nAssert equality with the original input.\n\nThis responds to a prior review comment requesting a test for round-trip\nparsing of CLI arguments.\n\n\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact runtime behavior. It only adds\nnon-breaking test code under #[cfg(test)].\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo changelog entry is required. This is an internal test-only\nenhancement and does not affect functionality or the public interface.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-20T14:20:06Z",
          "tree_id": "7b580da15d6a2e1010a97294d88d6126c47d0ee9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a1cb7760e5372f48a87a1d1d69ab37e4433678"
        },
        "date": 1747758914601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16051.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29043.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40850.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 201.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37502.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36359.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12615.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13066.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11890.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.52734375,
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
          "distinct": true,
          "id": "46f6db41bd261670267fdf6f33a03d9e1ec67d38",
          "message": "Add fstab to GitHub CI (#1419)\n\nAdd integration tests to Github CI\n\nTests passed here:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15135395318/job/42545885483\n\n\n### Does this change impact existing behavior?\n- fstab now forces runs in the background instead of the foreground\n- When ran through fstab, Mountpoint now ignores the `nodev` and\n`nosuid` options, as we default to these capabilities.\n\nNo breaking changes, as fstab is not released.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-20T15:31:26Z",
          "tree_id": "dbe80da7b387e058d50cfdb5620f4d9096b4c015",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46f6db41bd261670267fdf6f33a03d9e1ec67d38"
        },
        "date": 1747763216109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15644.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24312.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 46936.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 47259.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42223.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11867.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13255.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11402.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.23828125,
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
          "id": "8dde952a1813af5a3f2b6412eb3c545205950e8a",
          "message": "Improve safety checks when reading disk cache blocks (#1427)\n\nWhen reading data from the disk cache, we were not checking the declared\nlength of strings (such as the S3 key or ETag) and data, potentially\nleading to allocations for the wrong size in case of corruption of the\ncache block. While the corrupted block would still be detected later by\nthe integrity check and never returned to the user, the read could still\ncause memory overflow in the worst case.\n\nThis change reworks the deserialization of a cache block from disk and\nensures that the length of strings is always within a fixed limit\n(`10000`, using `bincode` configuration) and the data size is checked\nagainst the cache block size (1 MiB).\n\nIn addition, we updated the `bincode` crate to the latest version\n(`2.0.1`).\n\n### Does this change impact existing behavior?\n\nThe change affect the on disk cache format, but it does not result in\nany behavior change for the user.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in the `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-21T14:08:01Z",
          "tree_id": "740da280e29d52dce38b57e11d9fedb998ce7d6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8dde952a1813af5a3f2b6412eb3c545205950e8a"
        },
        "date": 1747844621279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17329.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25400.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39209.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 150.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41257.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39368.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13927.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11690.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10666.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.4140625,
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
          "distinct": true,
          "id": "f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5",
          "message": "Add \"nofail\" to list of ignored arguments in fstab (#1429)\n\nAdded \"nofail\" to the list of ignored arguments with fstab. Whilst\n`systemd` removed `nofail` when launching Mountpoint, `mount` did not,\nwhich meant `mount -a` could fail when systemd launched Mountpoint fine.\n\n### Does this change impact existing behavior?\n\nYes, Mountpoint no longer crashes if given `nofail` with fstab\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-21T16:09:48Z",
          "tree_id": "5d6a698e7fe81c4d495c45964192fba4cce9a2c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5"
        },
        "date": 1747851808790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14579.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24360.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40029.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 410.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35014.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38992.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13370.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11528.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10619.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.57421875,
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
          "id": "4e9fe1d0b9e51f66475620ce990860416739d237",
          "message": "Revert \"Update CRT submodules to latest releases (#1430)\" (#1435)\n\nThis reverts #1430 (commit ee6d44ac1096251bd7d18601587f6bc3da3392a4).\n\nAfter merging the latest change to the CRT we have seen benchmark runs\nfailing (e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15206336823/job/42770250949).\nWe are reverting the change while we further investigate the issue.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nReverts the previous changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T14:43:38Z",
          "tree_id": "148ee1304bd81ee40b0109c6a9704f7670bdabf9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e9fe1d0b9e51f66475620ce990860416739d237"
        },
        "date": 1748019444991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17329.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25865.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39196.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34702.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35510.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13047.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11439.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9911.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.62109375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7",
          "message": "Prepare crate changelog before releasing up to fs-crate (#1437)\n\nAdjusts the Changelogs for the `mountpoint-s3-fs` crate and it's\ndependencies.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-27T15:09:05Z",
          "tree_id": "e278b19ec0ac48c790b41fc78eaceffeb8135caa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7"
        },
        "date": 1748366541841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14118.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29928.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40852.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 249.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43116.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37930.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12545.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13034.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14659.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.77734375,
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
          "distinct": true,
          "id": "0344b0b3c4ab0ee04467486bc036cfeebead6d59",
          "message": "Add support for passing S3 URIs as part of the bucket name field (#1434)\n\nAllows invoking Mountpoint with an S3 URI in the 'bucket name' parameter\n\n\n- When using an S3 URI, a prefix can also be supplied. When it is, the\n`--prefix` option cannot be given.\n- Allows using an S3 URI with the `--cache-xz` parameter, but without a\nprefix.\n- Documentation entry for the feature was introduced\n\n### Does this change impact existing behavior?\n\nYes, the 'bucket name' and 'cache-xz' parameters now can take S3 URIs.\nThere are no breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry was made. Needs minor version bump.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T09:32:42Z",
          "tree_id": "0648435f0fd96f4763d631777ba173a0dac7af2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0344b0b3c4ab0ee04467486bc036cfeebead6d59"
        },
        "date": 1748605615691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17342.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28576.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43506.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41737.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40710.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14151.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14904.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12086.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.7890625,
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
          "distinct": true,
          "id": "d71b040b53261f0e133b1937adf436bdc2fd489d",
          "message": "Remove fstab feature flag (#1446)\n\nRemoves fstab feature flag\n\n### Does this change impact existing behavior?\n\nYes, enables fstab feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - changelog is included in this PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/1441\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T10:31:47Z",
          "tree_id": "878963d0abc5939147ee13d791f649d8ffd09354",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71b040b53261f0e133b1937adf436bdc2fd489d"
        },
        "date": 1748609089031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15972.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28135.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38116.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 45325.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38784.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14402.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10902.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13220.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.27734375,
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
          "distinct": true,
          "id": "8c4ce5abafd546bff3f01a0159ae9561a364abaa",
          "message": "Package fstab file (#1442)\n\nDraft PR because I want to remove the fstab feature outside this PR\n\nAdds `mount.mount-s3` symlink to our rpm and deb installers. This file\nis placed in `/usr/sbin` in the host when installed.\n\n### Does this change impact existing behavior?\n\nYes, a new `mount.mount-s3` file is added during installation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:05:35Z",
          "tree_id": "4ef3452cd65154566194a327cc71965dfea73b0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c4ce5abafd546bff3f01a0159ae9561a364abaa"
        },
        "date": 1748611088214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15615.79296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23097.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37299.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31547.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37163.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13658.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13548.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12544.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.28515625,
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
          "distinct": true,
          "id": "fa7b9d711a69128826a7ff026fc5fdf4c4e51e61",
          "message": "Remove fstab feature flag (#1447)\n\nRemoves fstab file from cargo.toml - previous commit removed from CI as\nwell as code usages. This is just cleaning up.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:23:44Z",
          "tree_id": "f41202e3376f4adaa6bd338639929816b164aab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa7b9d711a69128826a7ff026fc5fdf4c4e51e61"
        },
        "date": 1748612208585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16884.33203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26102.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38553.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 147.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40465.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33563.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13713.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13954.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9555.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 355.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.26953125,
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
          "distinct": true,
          "id": "5f962cbdf5c3a5beafb61cebb7549b84db1a1acd",
          "message": "Add documentation for fstab feature (#1441)\n\nAdds documentation for new fstab feature\n\n### Does this change impact existing behavior?\n\nNo\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:53:57Z",
          "tree_id": "72bc0427a52496d37124452a1b6bd474a52d2619",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5f962cbdf5c3a5beafb61cebb7549b84db1a1acd"
        },
        "date": 1748614026662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16718.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27130.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 47389.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36206.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40141.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12067.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14010.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13385.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.27734375,
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
          "distinct": true,
          "id": "da20daa33c97be569113890736ac62049840b8ff",
          "message": "Release v1.18.0 (#1448)\n\nPrepare for v1.18.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T12:14:04Z",
          "tree_id": "e779a1e594bfbd997857e9daa9b2a42ae0351cf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/da20daa33c97be569113890736ac62049840b8ff"
        },
        "date": 1748615231060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14442.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28466.53125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38239.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39916.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40921.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11174.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12100.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13017.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.69921875,
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
          "distinct": true,
          "id": "ca60ca2153664d92d6817a7de07f5bbac4522fbf",
          "message": "Fix changelog for v1.18.0 (#1449)\n\nFixes changelog for v1.18.0 release\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChanged\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T13:33:24Z",
          "tree_id": "8f1d5153ae3d609f1acd010ba43ca2d93e8d69f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca60ca2153664d92d6817a7de07f5bbac4522fbf"
        },
        "date": 1748619946805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16521.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28392.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37444.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38385.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36728.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13101.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13552.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12885.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.66015625,
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
          "id": "2eb41bc55469b66a05881f85ec214b0049268f26",
          "message": "Update prefetcher wait_for_read_window_increment to drain queue (#1425)\n\nWhen reviewing the prefetcher logic, the\n`wait_for_read_window_increment` method call in the S3 part stream was\nidentified as a potential issue. The logic currently pulls only one\nincrement from the queue of read window increments when large amounts of\ndata are being fetched. Today, this is likely not to cause an issue as\nthe read increments are much larger than the size of the parts emitted\nby `part_stream`. However, it would cause issues if there were changes\nhere in future that resulted in increments smaller than those parts.\n\nThis change updates the method to drain all available increments and\nreturn the new value to the caller. This ensures that the backpressure\nmechanism doesn't wait for each part before processing only one window\nincrement event. A new test is added to verify this behavior is\nguaranteed.\n\n### Does this change impact existing behavior?\n\nThere should be no impact, other than fixing logic that currently is\nunlikely to introduce performance changes outside of very large parts\nsizes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there is no known customer impact of the current issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-30T14:47:46Z",
          "tree_id": "ad81345f3d3e005a5b68c3418e9c55fda5b41aaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2eb41bc55469b66a05881f85ec214b0049268f26"
        },
        "date": 1748624478974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14015.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28233.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38369.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38062.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38935.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13138.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10234.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13636.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2d1e773481408c95e9e36dd7588b0c53f7cbbc6",
          "message": "Fstab tests: Ignore empty directory (#1443)\n\nCurrently, our fstab tests can fail if run in an environment where the\noutput dir does not exist.\nThis PR changes the `rm -r` call to a `rm -rf` to ignore cases where the\ndirectory is empty.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-30T14:50:18Z",
          "tree_id": "178e0afe47f45a9481ecd6e6de7e1ddb96bf2084",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b2d1e773481408c95e9e36dd7588b0c53f7cbbc6"
        },
        "date": 1748624495400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16122.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24231.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35193.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 385.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37995.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41527.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14139.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14715.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12936.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.97265625,
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
          "distinct": true,
          "id": "3fef44e2590d952b828e099803b5334ec909f53b",
          "message": "Fix example for using fstab in user data (#1450)\n\nThe previous example for using fstab with user data failed to install\nMountpoint occasionally on AL2023 hosts, and appears to be impacted by\nthis bug: https://github.com/amazonlinux/amazon-linux-2023/issues/397 &\nhttps://repost.aws/questions/QU_tj7NQl6ReKoG53zzEqYOw/amazon-linux-2023-issue-with-installing-packages-with-cloud-init.\n\nUpdating the example user data script to retry installing Mountpoint if\nit fails.\n\nI tested this by creating 6 AL2023 instances and saw they all started up\nand had Mountpoint available after swapping out the s3 bucket in the\nexample with my s3 bucket\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T15:21:56Z",
          "tree_id": "cea02b98052d7556b88a0cb52122e804903e6234",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fef44e2590d952b828e099803b5334ec909f53b"
        },
        "date": 1748626380126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16745.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27408.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39358.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39871.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35724.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12650.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13777.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12235.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.0234375,
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
          "distinct": true,
          "id": "26c8bba25fbd7d09531930f524d5067c530a6564",
          "message": "Update fstab documentation with more examples (#1451)\n\nUpdate fstab documentation with more examples.\nInclude a failed mount example.\n\nRendered docs:\nhttps://github.com/muddyfish/mountpoint-s3/blob/fstab-docs-pr-feedback/doc/CONFIGURATION.md#automatically-mounting-an-s3-bucket-at-boot\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-06-02T12:04:13Z",
          "tree_id": "d637dcea9e15b7e291315d55dfa7847d79a86a90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26c8bba25fbd7d09531930f524d5067c530a6564"
        },
        "date": 1748873900475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13307.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24085.7265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 47282.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 223.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37840.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40339.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11416.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10231.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11914.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.63671875,
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
          "id": "64e0e557926e3b1c66b41e796548b02a1272aaa4",
          "message": "Update prefetch and backpressure documentation, minor code changes for clarity (#1440)\n\nThis change should not change any functionality, and only modifies\ndocument comments or rewrites code for clarity and to demonstrate\nassumptions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo behavior changes expected, no need for any changelog or version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-03T12:58:08Z",
          "tree_id": "895253695282953abe8d2c0ba7fab44f083d0f58",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/64e0e557926e3b1c66b41e796548b02a1272aaa4"
        },
        "date": 1748963519681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15842.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26549.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43646.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39587.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40957.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12422.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11993.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10103.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 264.609375,
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
          "distinct": true,
          "id": "8f7b373b6f73abd04931936911dccf057ef0cbad",
          "message": "Write documentation on Mountpoint with S3 on Outposts (#1452)\n\nAdds some documentation on Mountpoint's support for S3 on Outposts.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - this was already supported but we were missing docs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-06-05T12:30:55Z",
          "tree_id": "b0d254fcdbb572c628e137be11d565366548a528",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f7b373b6f73abd04931936911dccf057ef0cbad"
        },
        "date": 1749134728128,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17269.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27025.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40685.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34633.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37371.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12715.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12416.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13272.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.78515625,
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
          "id": "f138efcaa33169b005cdbf5a0d11c10d89db292e",
          "message": "Update CRT submodules to latest releases (#1458)\n\n> [!NOTE]\n> This PR reapplies the changes in #1430, previously reverted in #1435,\nwith the addition of a fix to a race condition in `aws-c-s3`\n(awslabs/aws-c-s3#521).\n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > [FIX] heap use after free on aws_ecc_key_pair_new_from_asn1 (#219)\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Fix race condition between mem acquire and cancel (#521)\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-09T15:51:08Z",
          "tree_id": "f8167c75f033d0313ca68894468b3ce99bc9e499",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f138efcaa33169b005cdbf5a0d11c10d89db292e"
        },
        "date": 1749492381425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15271.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26780.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40529.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 189.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 329.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 236.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36663.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37208.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14789.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12063.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12793.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.75390625,
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
          "id": "50440db4921d6292b5a6babff392bf2f7baa437e",
          "message": "Minor refactor to prefetch_benchmark (#1461)\n\nIntroducing some minor refactoring to `prefetch_benchmark` before adding\nsome more significant changes (- adding caching support). This change\nalso introduces `anyhow::Result` to properly format errors when running\nthe benchmark, including sharing additional context and error sources.\n\n### Does this change impact existing behavior?\n\nThis is mainly a refactor. It does change error handling - errors are\nnow properly returned and formatted using `anyhow`, rather than via\npanics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, refactor only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-10T10:25:47Z",
          "tree_id": "4c8e9f85782f640861508aaeab17c8c401a6251d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50440db4921d6292b5a6babff392bf2f7baa437e"
        },
        "date": 1749559001638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14265.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25442.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38307.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 299.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 240.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33142.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40103.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12344.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13546.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13447.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3515625,
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
          "id": "cf3e15173e76989131c1500a6242502976731ab0",
          "message": "Ensure cache blocks are written atomically (#1433)\n\nAddress an issue with cache block reads failing while a concurrent write\nis in progress, observed for example in #1389 (see log entries in\n[comment](https://github.com/awslabs/mountpoint-s3/issues/1389#issuecomment-2861696762)).\nThis change modifies `put_block` to write to a temporary file first and\nthen rename to the expected cache block file name.\n\nIn addition, this PR also addresses concurrency issues in tracking block\nusage data for eviction: updates to `UsageInfo` were not previously\nsynchronized correctly with the operations on disk and we could end up\nrecording a new block write when in fact the block had been concurrently\ndeleted. Now we lock `UsageInfo` while performing file system\noperations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-10T16:50:31Z",
          "tree_id": "0eb796cd79dd17d25281031da52eeaa762005605",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf3e15173e76989131c1500a6242502976731ab0"
        },
        "date": 1749582527926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11740.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28806.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40701.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 304.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 325.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 235.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38750.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42377.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13380.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12876.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12538.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 422.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.52734375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f12f84d0a360e1449fc7048ac0103999170ea6b3",
          "message": "Update dependencies (#1465)\n\nUpdate the dependencies \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-12T14:48:28Z",
          "tree_id": "d378729160ff3118006093c9ea7a8383fefe3229",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f12f84d0a360e1449fc7048ac0103999170ea6b3"
        },
        "date": 1749747762938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13817.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25558.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42530.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 307.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 239.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35090.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39296.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13608.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13691.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10571.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.1015625,
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
          "id": "d283f714c0c6cdca2f70afba717175435a8c10d5",
          "message": "Add mock-mount-s3 to benchmark/ scripts (#1332)\n\nThis change allows us to run our benchmark scripts in `benchmark/` using\nthe `mock-mount-s3` binary, which presents a Mountpoint file system\nbacked by an in-memory mock S3 client.\n\nThis change itself incorporates quite a few changes (which may have been\nbetter suited as separate commits). There are some changes to\naccommodate configuration of part sizes in `mock-mount-s3`, removal of\nthroughput limits (which is useful for benchmarking!), and finally\nadding the configuration options to the benchmarking scripts.\n\nThis change does include some hardcoded objects being added to\n`mock-mount-s3` which can accomodate the benchmarking scripts. This\nmeans that if the object keys change, the files will be created by FIO\nand \"uploaded\" / populated in memory, which probably isn't what you\nwant.\n\n### Does this change impact existing behavior?\n\nNo, there are no changes to main Mountpoint code.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes new or existing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-13T14:10:55Z",
          "tree_id": "e4caa406c27a437b4225fe435b67027445ad6110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d283f714c0c6cdca2f70afba717175435a8c10d5"
        },
        "date": 1749831852270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14222.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25222.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43540.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 303.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 160.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 316.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40061.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40361.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11603.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10599.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11254.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.890625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}