window.BENCHMARK_DATA = {
  "lastUpdate": 1749581662181,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747234383555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3396.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 343.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3070.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3328.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3266.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16282.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3184.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3433.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3184.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3151.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 207.8984375,
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
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747239856907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3267.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3385.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3327.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3269.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34156.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3374.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3255.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3292.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3294.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.71875,
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
        "date": 1747308316373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3321.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3338.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32942.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3081.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3494.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3594.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3388.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.0390625,
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
        "date": 1747311381131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3580.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3667.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3305.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21371.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3578.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3504.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10058.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.44140625,
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
        "date": 1747403854726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3395.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3539.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3372.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3410.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16348.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3364.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3290.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3291.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3152.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.9921875,
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
        "date": 1747666990232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3337.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3400.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2965.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3295.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20430.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3097.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3350.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3330.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3185.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.0390625,
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
        "date": 1747742617747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3492.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3239.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3204.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3221.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 203.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17581.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3546.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3445.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3267.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 207.7265625,
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
        "date": 1747758044428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3409.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3083.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3189.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3428.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15107.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3589.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3331.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3484.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.734375,
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
        "date": 1747762449999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3202.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3340.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3057.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3481.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27016.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3079.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3340.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3102.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.375,
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
        "date": 1747843733615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3245.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3234.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3226.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2918.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17707.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3403.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3421.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3358.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.86328125,
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
        "date": 1747850961249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3183.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3241.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3445.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 285.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3235.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12542.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3228.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3250.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3354.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3441.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 239.28515625,
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
          "id": "ee6d44ac1096251bd7d18601587f6bc3da3392a4",
          "message": "Update CRT submodules to latest releases (#1430)\n\nUpdate the CRT libraries to the latest releases. \n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T08:36:19Z",
          "tree_id": "7c9069bfb532b9dd1630e0e8fa60f3c9fc716208",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ee6d44ac1096251bd7d18601587f6bc3da3392a4"
        },
        "date": 1747996630625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3231.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3453.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3403.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3399.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10653.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3310.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3311.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3393.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3559.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.203125,
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
          "id": "a861849f21edf0d9c072da8965ea3dc6f37e04e0",
          "message": "Logging errors in a structured format (#1416)\n\nImplement an `FileErrorLogger` and use it to write errors occurring\nduring supported fuse calls in `S3FuseFilesystem`. This logging is not\nenabled in the main executable, only in the `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, only used in the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in the example.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-05-23T09:58:44Z",
          "tree_id": "2b544694b6a1d3c00e5e4410eb80b0df49961517",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a861849f21edf0d9c072da8965ea3dc6f37e04e0"
        },
        "date": 1748001441557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3365.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3509.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3641.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 281.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3459.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17109.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3412.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3347.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3488.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3430.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.05859375,
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
        "date": 1748018669961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3323.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3279.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3035.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6690.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3214.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3415.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3309.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.6484375,
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
        "date": 1748365771593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3294.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3378.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3223.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 285.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3299.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 3267.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3338.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3309.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3743.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.9921875,
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
        "date": 1748604792088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3660.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3480.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3452.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3066.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10105.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3053.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3339.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3276.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3871.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.56640625,
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
        "date": 1748608164466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3450.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3119.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3308.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3247.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15868.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2957.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3525.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3500.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 7778.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.796875,
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
        "date": 1748610289970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2875.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3329.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3439.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3538.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9551.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3293.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3065.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3132.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3180.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.796875,
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
        "date": 1748611437580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3287.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3271.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3454.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3470.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 252.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8995.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3515.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8783.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3275.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3180.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.3359375,
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
        "date": 1748613229243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3007.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3399.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3398.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3363.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5154.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3435.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3279.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3499.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3495.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.2265625,
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
        "date": 1748614385015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3455.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3356.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3606.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3334.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7386.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2956.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3407.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3457.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.0859375,
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
        "date": 1748623671243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3285.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3427.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3465.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3286.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4591.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3416.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3140.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3509.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3445.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.71484375,
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
        "date": 1748873083388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3288.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3300.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3150.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 281.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3569.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13404.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3524.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3436.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3402.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3464.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.26953125,
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
        "date": 1748962654927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3464.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3441.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3131.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3543.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4073.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3294.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3548.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3321.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3330.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.91015625,
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
        "date": 1749049762436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3219.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3440.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3380.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3280.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8878.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3302.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3217.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3225.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4236.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.58984375,
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
        "date": 1749133849137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3382.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3526.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3321.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4833.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3361.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3243.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9670.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2774.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.25,
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
        "date": 1749491488853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3195.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2962.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3345.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3210.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 243.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5630.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3236.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3277.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3315.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3230.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.85546875,
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
          "id": "5a6c5524ac5526cecd21bda0ea4109557f356924",
          "message": "Move ctrl-c handler out of FuseSession (#1459)\n\nMinor change to decouple `FuseSession` from the ctrl-c signal handler.\n`FuseSession` will now expose a function to signal shutdown, which can\nbe used by the caller when installing the signal handler.\n\nPrerequisite to start using `FuseSession` in tests, where we do not want\nto install multiple signal handlers when testing multiple instances of\n`FuseSession`.\n\n### Does this change impact existing behavior?\n\nNo, it's only an internal refactor.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`fs` crate only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-09T19:00:33Z",
          "tree_id": "72c1412da4931af491d9cde6b872095f5c887f51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a6c5524ac5526cecd21bda0ea4109557f356924"
        },
        "date": 1749502797461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3311.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3107.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3381.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3171.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6369.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3240.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3599.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3397.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8656.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.90234375,
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
        "date": 1749558193858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3278.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3047.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3513.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3340.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12552.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3395.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3284.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3067.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3701.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.546875,
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
        "date": 1749581662129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3356.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3307,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3401.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3303.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10142.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3280.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3315.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3351.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3361.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.98046875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}