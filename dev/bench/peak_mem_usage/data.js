window.BENCHMARK_DATA = {
  "lastUpdate": 1749838388885,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1747309202774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15849.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24176.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35004.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35795.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37779.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9596.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11683.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12728.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.73828125,
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
        "date": 1747312372535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12437.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21482.375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35938.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34886.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39797.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10686.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10889.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11462.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 768.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.33984375,
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
        "date": 1747404770722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13895.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20185.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35346.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 82.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37831.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37255.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11044.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10611.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11009.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 504.53125,
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
        "date": 1747667869580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11835.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20971.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36448.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34517.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35863.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9780.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8659.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12963.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 755.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.46875,
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
        "date": 1747743587140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13660.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22014.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36198.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 368.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36573.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33422.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10670.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8633.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10004.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 401.171875,
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
        "date": 1747759059598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12068.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17815.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32642.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34701.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33325.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9137.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10860.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11693.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.5234375,
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
        "date": 1747763360412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13492.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23837.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39065.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37046.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35359.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9604.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9308.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11680.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 455.26953125,
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
        "date": 1747844633072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11440.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19743.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35313.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 312.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32634.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36987.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 416.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11405.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13246.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11637.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 629.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.10546875,
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
        "date": 1747851981067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12701.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22701.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34549.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36242.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34503.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9053.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10782.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11778.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.8984375,
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
        "date": 1748019600256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13544.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23032.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36066.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32899.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31956.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11904.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11768.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12425.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 434.87109375,
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
        "date": 1748366655701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11968.1640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20753.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32513.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35457.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31970.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 411.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11374.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7738.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13566.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 660.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.02734375,
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
        "date": 1748605698091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15944.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23899.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35456.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34278.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37229.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8364.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10861.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11580.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 715.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 403.50390625,
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
        "date": 1748609250616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14040.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21892.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36435.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34028.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33189.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12507.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12863.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12157.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 419.78515625,
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
        "date": 1748611194425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12163.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22422.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39283.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 98.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33855.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37200.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10087.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11052.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13229.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 668.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 399.75,
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
        "date": 1748612555696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14601.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20452.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30227.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32837.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32365.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12941.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 273.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12266.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10731.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.6484375,
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
        "date": 1748614180122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10741.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21478.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36000.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37929.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36806.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11434.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12485.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13120.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 434.78125,
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
        "date": 1748615331221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12634.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21856.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36372.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32804.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34626.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11654.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13228.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13071.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 253.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 731.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.52734375,
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
        "date": 1748620105850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12906.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22791.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38692.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32084.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38273.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9172.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10208.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11740.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 569.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.61328125,
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
        "date": 1748624589876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13448.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25477.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38400.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31990.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37159.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11085.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12329.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14095.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 650.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.80078125,
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
        "date": 1748624688443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15383.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23207.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37018.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 98.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 68.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37541.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35662.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12405.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12909.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12534.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 565.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.52734375,
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
        "date": 1748626468879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15497.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23302.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35634.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34246.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35511.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 411.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11918.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9691.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13263.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 270.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 696.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.51953125,
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
        "date": 1748873951636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13717.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23371.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35504.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36007.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34428.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11291.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8997.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11675.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 600.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 401.14453125,
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
        "date": 1748963672782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16169.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20680.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35286.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33606.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33488.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11581.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12261.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11310.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 580.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.14453125,
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
        "date": 1749134807277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12810.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21924.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33748.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34006.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36988.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8501.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11011.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11786.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 647.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 436.4453125,
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
        "date": 1749492413290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12999.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19878.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34111.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 275.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 283.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34609.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33726.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10431.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11486.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12653.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 696.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 464.76953125,
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
        "date": 1749559162324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15857.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23428.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36455.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 271.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 263.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34423.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37073.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10264.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10624.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10489.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.07421875,
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
        "date": 1749744602466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15366.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22446.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31988.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 271.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 285.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35571.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32459.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9094.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10977.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12490.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 768.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.63671875,
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
        "date": 1749747849660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11982.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22440.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36594.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 278.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33923.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38128.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8845.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12511.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10029.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 495.58203125,
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
        "date": 1749831953802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13245.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20103.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36906.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 274.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34060.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36678.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11224.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11042.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13194.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.62890625,
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
          "id": "1ee3d8f1f17f4918e16db386d7e993c1c8018200",
          "message": "Revert \"Update CRT submodules to latest releases (#1458)\" (#1466)\n\nThis reverts commit f138efcaa33169b005cdbf5a0d11c10d89db292e.\n\nAs part of the investigation on the benchmark failures in the CI, e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15625094824/job/44017689830,\nwe are reverting to the previous CRT releases.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, reverted.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-13T15:55:45Z",
          "tree_id": "8c67ecf11d7edc82d957c5524f7ea40fc4b1dbb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ee3d8f1f17f4918e16db386d7e993c1c8018200"
        },
        "date": 1749838388833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13819.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22301.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36797.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31931.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32774.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10383.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12579.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12109.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 660.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 560.78515625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}