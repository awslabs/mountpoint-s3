window.BENCHMARK_DATA = {
  "lastUpdate": 1782320573651,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "e7eaeb6717b9ca938c8d8fa14006bcd32c765da6",
          "message": "Update changelogs for v1.22.2 release (#1794)\n\nUpdate changelogs for v1.22.2 release.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-03-20T15:11:04Z",
          "tree_id": "d3517aaf8f5617f8a9ace3424b0acd952f5962f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7eaeb6717b9ca938c8d8fa14006bcd32c765da6"
        },
        "date": 1774027735949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2865.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4582.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8291.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 396.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 224.57421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d81b6a748372c4e9e4164dfbf80bf02168c257",
          "message": "Update usages of GPG public keys with new rotated key (#1795)\n\nWe have a new GPG public key because the old one will expire soon. In\nthis PR we:\n- Update the usages of the public keys in the documentation with the new\none.\n- Simplify the `docker/Dockerfile` by installing `mount-s3` from AL2023\npackage repository\n\nTesting:\n```\n$ docker build -t mountpoint-s3 docker/\n[+] Building 16.9s (7/7) FINISHED                                                                                                                                                                                                                                              docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                     0.0s\n => => transferring dockerfile: 334B                                                                                                                                                                                                                                                     0.0s\n => [internal] load metadata for public.ecr.aws/amazonlinux/amazonlinux:2023                                                                                                                                                                                                             1.2s\n => [internal] load .dockerignore                                                                                                                                                                                                                                                        0.0s\n => => transferring context: 2B                                                                                                                                                                                                                                                          0.0s\n => CACHED [1/3] FROM public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                0.0s\n => => resolve public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                       0.0s\n => [2/3] RUN dnf upgrade -y &&     dnf install -y mount-s3 &&     dnf clean all                                                                                                                                                                                                        14.9s\n => [3/3] RUN echo \"user_allow_other\" >> /etc/fuse.conf                                                                                                                                                                                                                                  0.6s\n => exporting to image                                                                                                                                                                                                                                                                   0.1s \n => => exporting layers                                                                                                                                                                                                                                                                  0.1s \n => => writing image sha256:3ba80d05a326e4049cfeefb1d09697d977eaebfdcfcce565308e5de293a5f143                                                                                                                                                                                             0.0s \n => => naming to docker.io/library/mountpoint-s3                                                                                                                                                                                                                                         0.0s \n\n$ docker run --rm mountpoint-s3 --version\nmount-s3 1.22.0+1.amzn2023\n```\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nYes (in the release commit) and no.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-20T16:22:45Z",
          "tree_id": "aa7c2c082e5e2d9d5d865e1e51099f70768a366b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55d81b6a748372c4e9e4164dfbf80bf02168c257"
        },
        "date": 1774032092000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2851.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8240.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8002.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 271.04296875,
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
          "id": "813d41a1826d02288912ff7f72f118bedc2dcc64",
          "message": "Update Cargo dependencies (#1797)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-23T11:14:08Z",
          "tree_id": "eeeaf89f1bdf841214f4b0bb48bb4d216727f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813d41a1826d02288912ff7f72f118bedc2dcc64"
        },
        "date": 1774272712376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2890.43359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8137.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8037.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.32421875,
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
          "id": "6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2",
          "message": "Add dev-container environment variable propagation allowlist (#1792)\n\nTo debug an issue, I wanted to use a different logging level in tests.\nThis change adds an allowlist of environment variables to automatically\npass into the dev-container.\n\n### Does this change impact existing behavior?\n\nNo, dev-container change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-23T16:06:04Z",
          "tree_id": "d4a007c7e3899b2a7805e2c8c3578748da154b2e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2"
        },
        "date": 1774290483389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2852.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8393.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8147.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.04296875,
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
          "id": "fd1c93202af0b75eaff505ffeeb08cc283048b4f",
          "message": "Add client error for S3 Express session creation failure (#1793)\n\nThis change introduces a proper S3 client error for when the CRT fails\nto create an S3 Express session, such as when having no authorization to\ndo so.\n\nInstead of a CRT error code, the customer will now see a clear message\n\"Failed to create S3 Express session, see CRT debug logs\".\n\nThis change also updates many tests that were previously testing S3\ngeneral purpose buckets to correctly test S3 Express / directory\nbuckets.\n\n### Does this change impact existing behavior?\n\nYes, it improves S3 Express session creation failure error messages. It\nincludes a call to action to direct the customer to check CRT debug logs\nto help them resolve the issue.\n\nIn the client, it introduces a new error variant.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nGiven the new error variant, the S3 client is a unstable minor version\nbump. (Effectively major.)\n\nFor all other crates and MP itself, a patch version bump has been\napplied, alongside changelog entries. The change is fairly minimal.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T11:22:07Z",
          "tree_id": "88c5ee68d8cdf7f802dbdc0228a84d9dc0e624af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd1c93202af0b75eaff505ffeeb08cc283048b4f"
        },
        "date": 1774618768457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2907.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8241.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8066.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8192.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3984375,
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
          "id": "57cd918400cb3448f523c801fe11dc9675c93fdb",
          "message": "Update Mountpoint crates to track dependencies between each other via workspace manifest, update dependencies (#1799)\n\nThis is a simple change to where the dependencies between Mountpoint\ncrates resides. Instead of this being scattered and duplicated across\nthe crate manifests, each manifest instead declares a dependency where\nthe specifics of the dependency are defined on the workspace. In the\nworkspace, we define the version, path, and features.\n\nThe motivation is to reduce the burden when making changes to the\nversion numbers of our crates.\n\nThis change also updates some dependencies via `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just Cargo manifest updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T13:03:13Z",
          "tree_id": "931b3c3fd031de31ad6a6c791c9d4699872a0870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57cd918400cb3448f523c801fe11dc9675c93fdb"
        },
        "date": 1774624782673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2913.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8295.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 56.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8148.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8253.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 426.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.59375,
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
          "id": "90bc1bfe91575198b5e3b413bb6b89b5dca2af6c",
          "message": "Remove last usages of forbidden CI bucket (#1802)\n\nThis change removes the last of the 'forbidden bucket' test\ndependencies. The tests were previously dependent on a bucket with a\npolicy banning almost all S3 operations. Instead, we now use session\npolicies to restrict access on a per-test basis.\n\n### Does this change impact existing behavior?\n\nTest change only. Removes the need to supply a forbidden bucket for\ntests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-04-08T13:57:32Z",
          "tree_id": "a3b2608bb8cf0baac3ae6f159a3c5c361c66eb79",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bc1bfe91575198b5e3b413bb6b89b5dca2af6c"
        },
        "date": 1775664978218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2908.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4633.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8202.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8199.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 416.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.54296875,
            "unit": "MiB"
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
          "distinct": false,
          "id": "3a5e2d4981df3e21765c730618fa1eafa09dd14e",
          "message": "Bump rand from 0.10.0 to 0.10.1 (#1805)\n\nBumps [rand](https://github.com/rust-random/rand) from 0.10.0 to 0.10.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-random/rand/blob/master/CHANGELOG.md\">rand's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.10.1] — 2026-02-11</h2>\n<p>This release includes a fix for a soundness bug; see <a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>.</p>\n<h3>Changes</h3>\n<ul>\n<li>Document panic behavior of <code>make_rng</code> and add\n<code>#[track_caller]</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li>Deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1761\">rust-random/rand#1761</a>\n<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1763\">rust-random/rand#1763</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/27ff4cb7ced3122a1f677fc248c1a07e59ddc8cd\"><code>27ff4cb</code></a>\nPrepare v0.10.1: deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/98d06386dc4e1d1c89a91f4e483d571921c29ecf\"><code>98d0638</code></a>\nmake_rng: document panic and add #[track_caller] (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/54e5eaaa7ac11af3aa60b5ccc486182189e6f9ef\"><code>54e5eaa</code></a>\nFix doc error (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1758\">#1758</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/1ce4c080186730595a8d464591d17aac22a42252\"><code>1ce4c08</code></a>\nBump itoa from 1.0.17 to 1.0.18 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1756\">#1756</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/ccb734b9c22891a19f11be125c2f09a43809b08e\"><code>ccb734b</code></a>\ndocs: fix typo in doc comment (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1754\">#1754</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/357eb7de9c9c80184449e8b515c821e48cf4df74\"><code>357eb7d</code></a>\nBump libc from 0.2.182 to 0.2.183 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1753\">#1753</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/5e77fe5d61b886988cae67b6d8fb09e405845c63\"><code>5e77fe5</code></a>\nFix trait references in documentation (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1752\">#1752</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/da891850ab2b38f4322ec140ae29d305dfb162c3\"><code>da89185</code></a>\nBump the all-deps group with 3 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1751\">#1751</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/50516ff45c3675d9c2d247e70bc8db691ed8366d\"><code>50516ff</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1749\">#1749</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/fd71de97fdc7050b9a2d8384f5f8afce7d991ca3\"><code>fd71de9</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1747\">#1747</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-random/rand/compare/0.10.0...0.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rand&package-manager=cargo&previous-version=0.10.0&new-version=0.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-14T15:45:15Z",
          "tree_id": "2ce5a955925bab2ea8a698d714fa151014d315b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a5e2d4981df3e21765c730618fa1eafa09dd14e"
        },
        "date": 1776190982269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2877.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8186.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8239,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.03515625,
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
          "id": "4625a683175a83619d8e9967f85e025ded4711bc",
          "message": "Update Cargo dependencies (#1811)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased `mount-s3` patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-17T23:17:48Z",
          "tree_id": "dac787a5797eac8f4a50e7da0cd2db79a1e0f501",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4625a683175a83619d8e9967f85e025ded4711bc"
        },
        "date": 1776476333920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2884.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4553.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8265.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 44.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8219.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.5625,
            "unit": "MiB"
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
          "id": "49dd2df24d8c6adacd34e30df5b63026750578be",
          "message": "Bump pygments from 2.19.2 to 2.20.0 in /benchmark (#1803)\n\nBumps [pygments](https://github.com/pygments/pygments) from 2.19.2 to\n2.20.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/releases\">pygments's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.20.0</h2>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/blob/master/CHANGES\">pygments's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Version 2.20.0</h2>\n<p>(released March 29th, 2026)</p>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/708197d82827ba2d5ca78bcbb653c7102ce86dcd\"><code>708197d</code></a>\nFix underline length.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d4538ae8621d766ecc91ff59caf76ab75983abc\"><code>1d4538a</code></a>\nPrepare 2.20 release.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/2ceaee4e634eebae2d10a47fd05406871f6bac8f\"><code>2ceaee4</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/e3a3c54b58c7f80bc4db887e471d4f91c77844ed\"><code>e3a3c54</code></a>\nFix Haskell lexer: handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/d7c3453e342dac319f58e4091f4ef183cc49d802\"><code>d7c3453</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3071\">#3071</a>\nfrom pygments/harden-html-formatter</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/0f97e7c37d44abfa4ddfddf44a3290fdad586034\"><code>0f97e7c</code></a>\nHarden the HTML formatter against CSS.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/9f981b2ba42b88ca5bdcebf12cd01efd7cd80aec\"><code>9f981b2</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d889151024e9a53f3702a60558b29b070306e9e\"><code>1d88915</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/c3d93adb9827fc054c3c12b47bde31c781a36a93\"><code>c3d93ad</code></a>\nFix ASN.1 lexer: recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/4f06bcf8a5ba3f2b5bda24a26ccf041a1a65d91e\"><code>4f06bcf</code></a>\nfix bad behaving backtracking regex in CommonLispLexer</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pygments/pygments/compare/2.19.2...2.20.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pygments&package-manager=uv&previous-version=2.19.2&new-version=2.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-17T23:18:51Z",
          "tree_id": "fd96b6795171141aa6958932ddb0d93050463a22",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49dd2df24d8c6adacd34e30df5b63026750578be"
        },
        "date": 1776477503472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2873.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8425.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8246.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8250.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.796875,
            "unit": "MiB"
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
          "id": "b05b605e488ec6b65330d2ffc4c1d652c6790e8c",
          "message": "Bump pytest from 8.4.1 to 9.0.3 in /benchmark (#1807)\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 8.4.1 to\n9.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pytest-dev/pytest/releases\">pytest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>9.0.3</h2>\n<h1>pytest 9.0.3 (2026-04-07)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12444\">#12444</a>:\nFixed <code>pytest.approx</code> which now correctly takes into account\n<code>~collections.abc.Mapping</code> keys order to compare them.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13634\">#13634</a>:\nBlocking a <code>conftest.py</code> file using the <code>-p no:</code>\noption is now explicitly disallowed.</p>\n<p>Previously this resulted in an internal assertion failure during\nplugin loading.</p>\n<p>Pytest now raises a clear <code>UsageError</code> explaining that\nconftest files are not plugins and cannot be disabled via\n<code>-p</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13734\">#13734</a>:\nFixed crash when a test raises an exceptiongroup with\n<code>__tracebackhide__ = True</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14195\">#14195</a>:\nFixed an issue where non-string messages passed to <!-- raw HTML omitted\n-->unittest.TestCase.subTest()<!-- raw HTML omitted --> were not\nprinted.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>:\nFixed use of insecure temporary directory (CVE-2025-71176).</p>\n</li>\n</ul>\n<h2>Improved documentation</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13388\">#13388</a>:\nClarified documentation for <code>-p</code> vs\n<code>PYTEST_PLUGINS</code> plugin loading and fixed an incorrect\n<code>-p</code> example.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13731\">#13731</a>:\nClarified that capture fixtures (e.g. <code>capsys</code> and\n<code>capfd</code>) take precedence over the <code>-s</code> /\n<code>--capture=no</code> command-line options in <code>Accessing\ncaptured output from a test function\n&lt;accessing-captured-output&gt;</code>.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14088\">#14088</a>:\nClarified that the default <code>pytest_collection</code> hook sets\n<code>session.items</code> before it calls\n<code>pytest_collection_finish</code>, not after.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14255\">#14255</a>:\nTOML integer log levels must be quoted: Updating reference\ndocumentation.</li>\n</ul>\n<h2>Contributor-facing changes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12689\">#12689</a>:\nThe test reports are now published to Codecov from GitHub Actions.\nThe test statistics is visible <a\nhref=\"https://app.codecov.io/gh/pytest-dev/pytest/tests\">on the web\ninterface</a>.</p>\n<p>-- by <code>aleguy02</code></p>\n</li>\n</ul>\n<h2>9.0.2</h2>\n<h1>pytest 9.0.2 (2025-12-06)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13896\">#13896</a>:\nThe terminal progress feature added in pytest 9.0.0 has been disabled by\ndefault, except on Windows, due to compatibility issues with some\nterminal emulators.</p>\n<p>You may enable it again by passing <code>-p terminalprogress</code>.\nWe may enable it by default again once compatibility improves in the\nfuture.</p>\n<p>Additionally, when the environment variable <code>TERM</code> is\n<code>dumb</code>, the escape codes are no longer emitted, even if the\nplugin is enabled.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13904\">#13904</a>:\nFixed the TOML type of the <code>tmp_path_retention_count</code>\nsettings in the API reference from number to string.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13946\">#13946</a>:\nThe private <code>config.inicfg</code> attribute was changed in a\nbreaking manner in pytest 9.0.0.\nDue to its usage in the ecosystem, it is now restored to working order\nusing a compatibility shim.\nIt will be deprecated in pytest 9.1 and removed in pytest 10.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/a7d58d7a21b78581e636bbbdea13c66ad1657c1e\"><code>a7d58d7</code></a>\nPrepare release version 9.0.3</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/089d98199c253d8f89a040243bc4f2aa6cd5ab22\"><code>089d981</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14366\">#14366</a>\nfrom bluetech/revert-14193-backport</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/8127eaf4ab7f6b2fdd0dc1b38343ec97aeef05ac\"><code>8127eaf</code></a>\nRevert &quot;Fix: assertrepr_compare respects dict insertion order (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14050\">#14050</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14193\">#14193</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/99a7e6029e7a6e8d53e5df114b1346e035370241\"><code>99a7e60</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14363\">#14363</a>\nfrom pytest-dev/patchback/backports/9.0.x/95d8423bd...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/ddee02a578da30dd43aedc39c1c1f1aaadfcee95\"><code>ddee02a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>\nfrom bluetech/cve-2025-71176-simple</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/74eac6916fee34726cb194f16c516e96fbd29619\"><code>74eac69</code></a>\ndoc: Update training info (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14298\">#14298</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14301\">#14301</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/f92dee777cfdb77d1c43633d02766ddf1f07c869\"><code>f92dee7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14267\">#14267</a>\nfrom pytest-dev/patchback/backports/9.0.x/d6fa26c62...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/7ee58acc8777c31ac6cf388d01addf5a414a7439\"><code>7ee58ac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12378\">#12378</a>\nfrom Pierre-Sassoulas/fix-implicit-str-concat-and-d...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/37da870d37e3a2f5177cae075c7b9ae279432bf8\"><code>37da870</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14259\">#14259</a>\nfrom mitre88/patch-4 (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14268\">#14268</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/c34bfa3b7acb65b594707c714f1d8461b0304eed\"><code>c34bfa3</code></a>\nAdd explanation for string context diffs (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14257\">#14257</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14266\">#14266</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pytest-dev/pytest/compare/8.4.1...9.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pytest&package-manager=uv&previous-version=8.4.1&new-version=9.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-18T07:23:24Z",
          "tree_id": "2f703944b7dff2ba473abc4efca2e58cec6155f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b05b605e488ec6b65330d2ffc4c1d652c6790e8c"
        },
        "date": 1776505239507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2876.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4542.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8332.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7946.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8162.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.85546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59cfc3c750549a97d4badf853170cae9b15a4d09",
          "message": "Propagate file handle ID through the prefetcher as a HandleId type (#1809)\n\nWe need to attribute CRT meta-request buffer allocations back to the\nfile handle that originated them. This is a prerequisite for per-handle\nmemory accounting in the `MemoryLimiter`.\n\nThis PR threads the FUSE file handle ID (`fh`) from the point where a\nfile is opened (`FileHandleState::new`) all the way down to\n`GetObjectParams`, where it is available in scope when the CRT\nmeta-request is created. The changes are purely additive data threading\n— no existing logic is altered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is an internal refactor with no user-visible behavior change\nand no public API impact.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-04-21T13:19:02Z",
          "tree_id": "e28bb22929a99eedebef02b67b2c74728aca85ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59cfc3c750549a97d4badf853170cae9b15a4d09"
        },
        "date": 1776785789561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8174.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8053.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.0625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "572e73b6691d01966f3f10bf1d10b5d649346278",
          "message": "Bump rustls-webpki from 0.103.12 to 0.103.13 (RUSTSEC-2026-0104) (#1814)\n\nBumps rustls-webpki to 0.103.13 to fix a security vulnerability\n(RUSTSEC-2026-0104).\nCargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T12:51:43Z",
          "tree_id": "8f708e74f21aee814535717b6c96bbbdf84117ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/572e73b6691d01966f3f10bf1d10b5d649346278"
        },
        "date": 1776871478971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2881.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8351.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8172.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 332.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.046875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "912f18414eb1947362edef64501dfbc21fb92c82",
          "message": "Thread request ID from meta-request options into CRT buffer pool reservations (#1812)\n\nWe need to be able to identify which meta-request a buffer allocation\nbelongs to at the CRT pool layer.\n\nThis PR adds an optional `custom_id` to `MetaRequestOptionsInner` and\nexposes it through `MetaRequest`, which is now passed directly to\n`MemoryPool::get_buffer` / `get_buffer_async`. The identifier can be set\nvia `GetObjectParams::custom_id` and `PutObjectParams::custom_id` in the\nclient crate.\n\n\n### Does this change impact existing behavior?\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nThe `MemoryPool` trait signature changed, but the trait is marked\nexperimental. No user-visible behavior change otherwise.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T14:53:34Z",
          "tree_id": "3bb89fe1d597eb5d271dad40ddae5b16b16ad701",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/912f18414eb1947362edef64501dfbc21fb92c82"
        },
        "date": 1776878158576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2913.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8267.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8135.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8112.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.8984375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e31ed5bca353e0b3c912c58769b040e117970dc",
          "message": "Pass HandleId as custom_id in S3 request params (#1815)\n\nConnects the file handle ID to S3 request params, completing the link\nbetween PR #1809 (HandleId through prefetcher) and PR #1812 (custom_id\nthrough CRT buffer pool).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-23T15:11:04Z",
          "tree_id": "10430fff1d46b8832452ee6de66be30c0717b765",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e31ed5bca353e0b3c912c58769b040e117970dc"
        },
        "date": 1776965319790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2872.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8184.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.80859375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72e3a504cfb783ca2d76844461fa1c879238ee67",
          "message": "bench: Add memory-limited FIO benchmarks with breach detection (#1808)\n\n## Summary\n\nExtend the existing FIO throughput benchmarks CI so that each supported\nworkload also runs with Mountpoint built using `--features mem_limiter`\nand mounted with `--max-memory-target=512` (MiB - fixed). Under this\nextra pressure, Mountpoint must stay within the configured budget; the\nnew jobs surface per-test peak memory usage in a GitHub Actions step\nsummary table so regressions/improvements in the memory limiter are easy\nto spot.\n\nNon-latency only. Same FIO job definitions are used for both the regular\nand memory-limited variants.\n\n- The existing `bench` (S3 Standard), `cache-bench`, and S3 Express\n`bench` jobs are extended with a `strategy.matrix` that fans each one\nout to two variants:\n  - `default` — unchanged behaviour.\n- `mem-limited` — builds with `--features mem_limiter`, runs with\n`S3_MAX_MEMORY_TARGET_MIB=512`, and emits an extra GitHub Actions\nsummary table.\n\nThe matrix also drives per-variant job name suffixes, gh-pages chart\nsub-paths, and S3 results sub-prefixes, so the two variants don't\ncollide.\n- New `.github/actions/scripts/render-mem-summary.sh` that renders a\nMarkdown table to `$GITHUB_STEP_SUMMARY` with per-test peak RSS, the\nlimit, a breach flag, and peak reserved memory per area/kind. Gated on\n`matrix.variant == 'mem-limited'`.\n- Shared benchmark scripts (`fs_bench.sh`, `fs_cache_bench.sh`) are now\nparameterised via the `S3_MAX_MEMORY_TARGET_MIB` env variable. When set,\nthey:\n  - Build with `--features mem_limiter`.\n  - Mount with `--max-memory-target=<N>`.\n- Ask `mount-s3-log-analyzer` for an additional JSON file via\n`--mem-limit-mib=<N> --extra-metrics-out=<PATH>`.\n\n  When unset, behaviour is unchanged.\n- `mount-s3-log-analyzer` gains two optional flags, `--mem-limit-mib`\nand `--extra-metrics-out`, wired together with `clap`'s `requires` so\neither both are set or neither. When both are set, the analyzer also\nparses Mountpoint metric log lines for:\n  - `mem.bytes_reserved[area=prefetch]`\n  - `mem.bytes_reserved[area=upload]`\n  - `pool.reserved_bytes[kind=get_object]`\n  - `pool.reserved_bytes[kind=put_object]`\n\nand writes JSON with the test name, peak RSS in MiB, memory limit in\nMiB, a `breached = peak_rss_mib\n\n## Example GitHub Actions summary\n\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/24720419069\n\n```\n| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) |\n|---|---|---|---|---|---|---|---|\n| mix_1r4w | 1562.546875 | 512 | ❌ BREACHED | 32 | N/A | 32 | 1376 |\n| rand_read_4t_direct | 22.0625 | 512 | ✅ OK | 68.5 | N/A | 64 | N/A |\n```\n\nNotes:\n- Breach is **non-fatal**: the ❌ is informational; the CI job does not\nfail on a breach.\n- A metric is rendered as `N/A` only when Mountpoint never emitted it in\nthe logs (e.g. `pool.reserved_bytes[kind=get_object]` in a write-only\nworkload). If the metric was emitted with value 0, the column shows\n`0.0`.\n- The `_extra_metrics.json` file is consumed **only** by the memory\nsummary step. It is not fed into the gh-pages benchmark charts.\n\n## Where results are stored\n\nMemory-limited results are stored under distinct `mem_limited` sub-paths\nso they don't collide with the existing charts:\n\n| Workload | Throughput chart path | Peak-memory chart path |\n\n|---------------------------------|-----------------------------------------------|-------------------------------------------------------------|\n| S3 Standard throughput | `dev/bench/mem_limited` |\n`dev/bench/mem_limited/peak_mem_usage` |\n| S3 Standard cache | `dev/cache_bench/mem_limited` |\n`dev/cache_bench/mem_limited/peak_mem_usage` |\n| S3 Express One Zone throughput | `dev/s3-express/bench/mem_limited` |\n`dev/s3-express/bench/mem_limited/peak_mem_usage` |\n\n## Why a separate `_extra_metrics.json`?\n\nThe existing `<test>_peak_mem.json` follows the `{name, value, unit}`\nschema required by `benchmark-action/github-action-benchmark` and feeds\nthe gh-pages charts. Adding more fields there would pollute the charts\nfor non-memory-limited runs. Keeping the file separate lets each\nconsumer (benchmark-action vs. GH Actions summary) receive only what it\nneeds.\n\n### Does this change impact existing behavior?\n\nNo - adding new benchmarks only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:24:02Z",
          "tree_id": "ecd9198213eb3e1fb01aa871847b055e26b111b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/72e3a504cfb783ca2d76844461fa1c879238ee67"
        },
        "date": 1777048872195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2879.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4558.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8313.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8169.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8206.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.54296875,
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
          "id": "f5a6d919db133203e9914477222fed168959c581",
          "message": "Update CRT submodules to latest releases (#1819)\n\nUpdate the CRT submodules to the latest releases.\n\n  Updated libraries:\n  \n  - aws-c-auth: v0.10.0 -> v0.10.1\n  - aws-c-http: v0.10.11 -> v0.10.14\n  - aws-c-io: v0.26.1 -> v0.26.3\n  - aws-c-s3: v0.11.5 -> v0.12.3\n  - aws-lc: v1.69.0 -> v1.72.0 \n  - s2n-tls: v1.7.0 -> v1.7.2\n\nFull CRT changelog:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5aefd277..fc4b8765:\n  > fix byo crypto (#290)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 0d8e1a93..da535b1b:\n  > Add default cancel error code (#555)\n  > Unified write data API (#552)\n  > Support on_h2_remote_end_stream (#554)\n  > introduce max concurrent streams for stream manager (#553)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io bfb0819d..1ec8081f:\n  > Add default non-pq policy (#796)\n  > Only invoke shutdown callbacks if the setup was successful (#794)\n  > Fix compilation warnings (#795)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 e9d1bde1..a31a6578:\n  > Fix recognition of user provided unknown checksums (#624)\n  > Better checksumming support (#623)\n  > fix the try-trim logic (#621)\n  > Optimize the sizes of buffers requested from mem pool (#563)\n  > Auto - Update S3 Ruleset & Partition (#613)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 37d86461..d50ded59:\n  > Prepare v1.72.0 (#3162)\n  > Make some more half-empty EVP_PKEY states impossible (#3056)\n  > Update target.h to support Loongarch64 ABI1.0 architecture (#3093)\n  > Shard valgrind CI job to avoid GitHub Actions timeout (#3158)\n  > Check RSA-PSS digest algorithms for X509 (#3138)\n  > Lower default SSL peek test rounds and remove CI workarounds (#3155)\n  > Add missing error return for short metadata keys (#3151)\n  > Change ML-KEM PKCS#8 encoding from expanded to seed form (#3149)\n  > Bound ReadConsoleW by stack buffer size (#3154)\n  > Add OPENSSL_INIT_ATFORK compatibility stub (#3134)\n  > Small fixes for RSA_METHOD and EVP_PKEY_derive_set_peer (#3130)\n  > Fix Clang 19 C++ headers and LLVM tool version mismatches on AL2023 (#3157)\n  > Fix Clang 19 C++ header detection on AL2023 aarch64 (#3152)\n  > Fix Clang 19 GCC runtime detection on AL2023 aarch64 (#3150)\n  > Increase SSL test runner idle timeout for FreeBSD CI (#3144)\n  > Harden OCSP response printing and fix integer overflow in `x509v3_bytes_to_hex` (#3127)\n  > Update PyOpenSSL patch w/ PR #2897 (#3145)\n  > Fix CMake install dir defaults on macOS/Windows when CMAKE_INSTALL_LIBDIR is specified (#3069)\n  > Upgrade CI sanitizer jobs from Clang 15 to Clang 19 (#3148)\n  > Upgrade custom libc++ to LLVM 19 and add sanitizer support to `build_and_test.sh` (#3131)\n  > Rename __AWS_LC_ENSURE to AWS_LC_ENSURE to avoid reserved identifier (#3137)\n  > Add openssl version -a and -p flag support (#3092)\n  > Add NULL pointer validation to ML-KEM EVP encapsulate/decapsulate (#3132)\n  > Add -msg and -servername support to openssl s_client (#3098)\n  > Consistently set outlen to zero for all error paths (#3104)\n  > Fix bind9 integration test for upstream build system changes (#3126)\n  > Hardening fixes for ML-DSA digest mode, XTS key comparison, and urandom fd (#3129)\n  > Fix Windows ARM64 FIPS build; add Clang support for Windows FIPS (#3013)\n  > Fix PostgreSQL integration SSL test failures for upstream error string changes (#3125)\n  > Exclude OCSPIntegrationTest from normal CI test runs (#3128)\n  > openssl-tool CLI: CA cleanup (#3120)\n  > `WIN32_rename`: fix errno mapping and increase retry budget for transient failures (#3124)\n  > Fix entropy source selection for Apple cross-compilation targets (#3113)\n  > Zeroize sensitive stack buffers in DRBG, X25519, Ed25519, ECDSA, ECDH… (#3121)\n  > fipsmodule/ml-kem: Import mlkem-native v1.1.0 (#3090)\n  > Remove redundant definitions (#3118)\n  > Fix intermittent `WIN32_rename` failures in `openssl ca` CLI tool due to transient file locks (#3100)\n  > Add Optimized and HOL Light verified AVX2 Keccak x4 (#3020)\n  > Add SSL_use_cert_and_key for per-connection cert/key setting (#3114)\n  > Reject point at infinity in EC_KEY_set_public_key (#3101)\n  > Fix CRL distribution point scope check logic in crl_crldp_check (#3105)\n  > Fix CN fallback handling in name constraints checking (#3107)\n  > BoringSSL: Const-correct the kPrintMethods table and Update citations from RFC 3447 to RFC 8017 (#3026)\n  > Prepare v1.71.0 (#3102)\n  > Use explicit check for X509 path length (#3080)\n  > Fix issues in `pass_util.cc` password handling (#3032)\n  > Correct types finished-based APIs for TLS 1.3 (#3087)\n  > Correct purpose setting for OCSP_request_verify (#3089)\n  > Clean up on X509_STORE_CTX_add_custom_crit_oid error paths (#3088)\n  > Fix stale `key_method` pointer after private key switch in `CERT` (#3085)\n  > Fall back to EVP_{marshal,parse} in {i2d,d2i}_{Public,Private}Key (#2897)\n  > Fix race condition in  `new_certs_dir` output path (#3095)\n  > Abort on `RAND_bytes` failure (#3078)\n  > Reject IPv6 literal URIs in name constraint checking (#3045)\n  > More NULL checks in bio_ssl.cc (#3076)\n  > Clean up sensitive stack buffers and minor fixes in PKCS#8 (#3067)\n  > Add bounds checks for `size_t` to `int` truncation in `RSA_METHOD` calls (#3084)\n  > Distribution Packaging Improvements (#3042)\n  > Fix modulewrapper memory leak (#3094)\n  > Harden HMAC error paths: fix resource leaks, state bugs, and missing cleansing (#3081)\n  > Relicense OpenSSL Sources to Apache-2.0, Cleanup Sources and LICENSE file Details (#3091)\n  > Allow zero-length PEM passwords in callback paths (#3073)\n  > Fixes for `PKCS12_set_mac` (#3079)\n  > Prepare v1.70.0 (#3086)\n  > Fix NetBSD AArch64 CPU feature detection on big.LITTLE systems (#3082)\n  > Clean up CLI code (#2927)\n  > Various Small Additions to ACVP Tool (#3024)\n  > Add ACVP Support for KTS-IFC (#3009)\n  > Add ACVP Support for KAS-ECC (#3010)\n  > Fix uninitialized EVP_MD_CTX and harden bn_dup_into (#3033)\n  > Improve type safety and bounds checking in EVP cipher ctrl handlers (#3034)\n  > Add a test that arbitrary curves can be wrapped in EVP_PKEY (#3055)\n  > XOF fixes (#3064)\n  > TLS Transfer Serialization Findings (#3071)\n  > Remove dead declarations in public headers (#3053)\n  > Fix sizeof-on-pointer bugs in FIPS assertion failure messages (#3074)\n  > Bump github.com/cloudflare/circl from 1.6.2 to 1.6.3 in /util/vecgen (#3046)\n  > Zeroize intermediate values for ed25519 (#3075)\n  > Use proper function type for different callback types (#3066)\n  > IWYU: guard stdint.h in fips_shared_support.c (#3027)\n  > Fix CMake 4.0 CI jobs (#3068)\n  > Fix PKCS8_encrypt crash when pass is NULL with negative pass_len_in (#3052)\n  > Add INT_MAX bounds check before EVP_CipherUpdate in PKCS8/PKCS12 encryption (#3043)\n  > Cleanup EVP_DH asn1 parsing (#3047)\n  > Fix PKCS12_verify_mac OOB read with invalid password_len (#3051)\n  > Fix PKCS8_decrypt to handle all negative pass_len values (#3039)\n  > Latent memory leaks in KEM_KEY setter functions (#3041)\n  > Fix gRPC integration (#3070)\n  > Add NULL checks for MakeUnique in SSL cipher list inheritance (#3065)\n  > Cache peer CA names on client side after handshake (#2994)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls f5e5e830..a71ea1f9:\n  > fix(ci): update MSRV for extended crates from 1.72 to 1.77 (#5810)\n  > ci: upgrade nix awslc version (#5805)\n  > fix: reject certs with literal-IP CN and no SAN  (#5804)\n  > docs: clean up DRBG references across docs, APIs, and templates (#5789)\n  > chore: remove codeowners (#5797)\n  > fix: Gates rolling hash of all supported hash algorithms to TLS1.2 (#5803)\n  > ci: fix install_awslc_fips script (#5790)\n  > feat(build): Add option to enforce correct libcrypto feature probing (#5579)\n  > fix(aws-lc): Update test for https://github.com/aws/aws-lc/pull/3101 (#5788)\n  > ci: add 'style' to PR title check (#5792)\n  > feat: add strict and interop CNSA 2.0 policies (#5760)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 2 updates (#5787)\n  > docs: clarify integrity protection requirements for connection serialization (#5782)\n  > refactor(rand): deprecate internal DRBG implementation (#5775)\n  > build(deps): bump jidicula/clang-format-action from 4.16.0 to 4.17.0 in /.github/workflows in the all-gha-updates group (#\n5784)\n  > feat(s2n-metric-subscriber): add supported parameters (#5768)\n  > fix(bindings): replace bare as usize casts in Tokio I/O callbacks (#5780)\n  > docs: add comments about sslv3 weaknesses (#5777)\n  > fix: add required metadata for subscriber (#5776)\n  > chore: delete unused s2n_stuffer_alloc_ro functions (#5757)\n  > chore: fix crate name (#5769)\n  > fix: make get_alert idempotent (#5767)\n  > fix: update memory snapshots (#5771)\n  > chore(s2n-tls): v0.3.35 release (#5765)\n  > revert: \"fix: rust alert getter should not modify\" (#5766)\n  > Merge commit from fork\n  > build(deps): bump actions/upload-artifact from 6 to 7 in /.github/workflows in the all-gha-updates group (#5764)\n  > fix: Use logical OR instead of bitwise OR (#5763)\n  > Necessary changes were made in the s2n module to support AIX OS. (#5724)\n  > fix: rust alert getter should not modify (#5756)\n  > docs: Add security reporting policy (#5734)\n  > feat: add clearer errors for hostname, security policy failures (#5761)\n  > refactor: Use strong libcrypto randomness instead of custom random (#5726)\n  > test(integration): add coverage of error types for cert related failures (#5755)\n  > build(deps): update strum requirement from 0.27 to 0.28 in /bindings/rust/standard (#5759)\n  > build(deps): bump baptiste0928/cargo-install from 3.3.2 to 3.4.0 in /.github/workflows in the all-gha-updates group (#5758\n)\n  > refactor(integration): utilities module with cert materials (#5753)\n  > fix(quic support): Wipe buffers after reading post-handshake message (#5750)\n  > ci: trigger PR title check upon edit (#5749)\n  > ci: revert clang-format workflow (#5751)\n  > chore: Delete all code that references Kyber (#5705)\n  > fix(bindings): use max_align_t for allocator alignment (#5745)\n  > fix: Add additional verification checks to ECDSA curves (#5736)\n  > build(deps): bump actions/checkout from 4 to 6 in /.github/workflows in the all-gha-updates group (#5746)\n  > chore: unpin rust integration dependencies (#5748)\n  > fix: add bound check for Yc_length against server DH params (#5737)\n  > fix(bindings): tie ClientHello lifetime to Fingerprint (#5747)\n  > ci: fix conventional commit check (#5744)\n  > chore: unpin rtshark version (#5743)\n  > ci: fix fuzz failure artifact upload (#5742)\n  > feat(metrics): add EMF emitter (#5730)\n  > ci: Add CI guardrail for BoringSSL fork (#5715)\n  > chore: fix sidetrail timings (#5729)\n  > fix(benches): reduce flakiness in s2n-tls-bench daily job (#5728)\n  > ci: temporary replace clang-format-action (#5735)\n  > Add X25519MLKEM768 benchmarks (#5616)\n  > nix: Use rustup toolchain over nix packages rustc in devshell (#5712)\n  > build(deps): bump aws-actions/configure-aws-credentials from 5.1.1 to 6.0.0 in /.github/workflows in the all-gha-updates g\nroup (#5722)\n  > fix: correct calculation of extensions bitfield size (#5719)\n  > feat(bindings): add support for metric aggregation (#5709)\n  > ci: fix typo in readme (#5718)\n  > build(deps): update crabgrind requirement from 0.1 to 0.2 in /tests/regression in the all-cargo-updates group across 1 dir\nectory (#5716)\n  > feat(bindings): expose signature scheme API (#5708)\n  > fix: restrict mldsa signatures based on certificate (#5713)\n```\n\n\nConfirmed the crate size is under the 10MiB limit (8.2MiB compressed)\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T10:31:41Z",
          "tree_id": "b9f89087e1f5de3f537e13f4657da06a242e1c70",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5a6d919db133203e9914477222fed168959c581"
        },
        "date": 1777380538288,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2872.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8271.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 27.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 63.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 57.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 67.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 24.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8168.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8166.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2114.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 331.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.30859375,
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
          "id": "4a63263681e5003f9774c7a6643329b241cd57ed",
          "message": "Upgrade cargo dependencies (#1818)\n\nUpgrade cargo dependencies. Notes: \n- in order to handle a minor breaking change in the `md5` crate, we now\nalso import the `hex` crate (when building `mountpoint-s3-client` with\nthe `mock` feature).\n- upgrading to the latest `shuttle` version (`0.9.1`) led to a segfault\nin shuttle tests. Reverted while we investigate further.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated version numbers and changelogs to reflected existing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-28T11:59:35Z",
          "tree_id": "878549dc0915f9ba16cce3674d5b4744d213b9a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a63263681e5003f9774c7a6643329b241cd57ed"
        },
        "date": 1777385997182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3223.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4555.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8341.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 28.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 59.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 23.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8088.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 396.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.12109375,
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
          "id": "1141b9514fdd1bc85fc25683d2b386a5c185f913",
          "message": "Update changelogs to prepare v1.22.3 release (#1821)\n\nUpdates the changelogs prior to  release of MP v1.22.3\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, the change itself is changelog updates\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T15:42:11Z",
          "tree_id": "3fa119ebaef7e2cbcea2e40adff1f71e0ca9f2e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1141b9514fdd1bc85fc25683d2b386a5c185f913"
        },
        "date": 1777399188779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2868.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4545.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8321.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 27.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 70.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 23.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 40.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8168.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8215.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 305.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.47265625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0de1563d1a9d383a0f7b7c8bfb595ee19109a589",
          "message": "fix: Use cgroup-aware memory detection in mem limiter (#1806)\n\n**What changed and why?** \n\nReplace direct `sysinfo::System::total_memory()` call with a new\n`effective_total_memory()` helper that respects `cgroup` memory limits.\nThis fixes incorrect memory limit detection when running inside\ncontainers with memory constraints.\n\nChanges:\n- Add `effective_total_memory()` to `mem_limiter` that checks\n`sysinfo`'s `cgroup_limits()` before falling back to total physical\nmemory\n- Library automatically handles cgroup v1 vs v2, path resolution, no\nlimit, Linux vs non-Linux, and other edge cases:\nhttps://github.com/GuillaumeGomez/sysinfo/blob/main/src/unix/linux/cgroup.rs\n- Update `cli.rs` and `benchmark` examples to use the new helper\n- Add CI job to run cgroup memory detection test in a memory-limited\ncontainer\n\n### Does this change impact existing behavior?\n\nNo - it prevents potential OOM in containers with memory constraints.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDone.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-30T16:27:04Z",
          "tree_id": "ce92a20e2db111b1eeb3ed3c3e763ff953907be7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0de1563d1a9d383a0f7b7c8bfb595ee19109a589"
        },
        "date": 1777574666593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2922.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8302.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 37.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7998.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8161.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 45.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2091.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 414.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 267.765625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zxilly@outlook.com",
            "name": "Zxilly",
            "username": "Zxilly"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a",
          "message": "Implement content type detection for uploaded objects (#1790)\n\nFixes #632\n\nAdd `--infer-content-type` flag to automatically set Content-Type on\nuploaded objects.\n\nWhen enabled, Mountpoint infers the Content-Type from the uploaded\nobject's file extension.\n\n### Does this change impact existing behavior?\n\nNo breaking change, new behavior will only act if `--infer-content-type`\nwas set.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Zxilly <zxilly@outlook.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-05-01T09:16:16Z",
          "tree_id": "65ea1b3e7458bf0974c23d48d46cfb1280d1bb6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a"
        },
        "date": 1777635226661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2916.75,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4561.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8334.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 58.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8162.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8223.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 416.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 270.75,
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
          "id": "5374a7383d73d41724be545665e393c8c6b81f8c",
          "message": "Upgrade to Rust 1.95 (#1823)\n\nUpgrade Rust toolchain to 1.95 and address new clippy issues in tests\nand mock client.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-01T09:30:25Z",
          "tree_id": "279e1f361fe96d2acd26550318f537d6802677ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5374a7383d73d41724be545665e393c8c6b81f8c"
        },
        "date": 1777636317733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2916.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4632.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8275.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 58.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 58.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8273.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8242.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2095.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 327.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 270,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dfad6f5052933c16114365d8adbfdd49e88ebf0",
          "message": "bench: Add incremental-upload throughput benchmark to S3 Express CI (#1813)\n\n## Summary\n\nExtend the existing S3 Express throughput benchmark CI with two new\n`--incremental-upload` variants, folded into the existing `bench` matrix\nintroduced by #1808 rather than as a separate job:\n\n- `incremental-upload` — default memory budget.\n- `incremental-upload-mem-limited` — `--features mem_limiter` +\n`--max-memory-target=512`.\n\nBoth new variants only run the `write` and `mix` fio categories (read is\nskipped since incremental upload is an upload-path feature).\n\nThis PR also isolates `S3_BUCKET_TEST_PREFIX` per matrix leg on the\nthroughput `bench` jobs (S3 Standard and S3 Express). The single\nworkflow-level prefix previously caused all matrix legs to race for the\nsame fio scratch keys in the benchmark bucket. This was latent (silent\noverlapping MPUs) for non-incremental legs but fatal for incremental\nupload: the append pipeline conditions each `PutObject` on the object's\ncurrent ETag, and a sibling leg's `unlink=1` between iterations aborts\nthe upload with `NoSuchKey`.\n\ngh-pages paths follow the `data_path_suffix` convention from #1808:\n\n| Variant | Throughput chart path |\n|---|---|\n| Incremental Upload | `dev/s3-express/bench/incremental_upload` |\n| Incremental Upload, Memory-Limited |\n`dev/s3-express/bench/incremental_upload/mem_limited` |\n\n### Does this change impact existing behavior?\n\nNo - only benchmark prefix changes generating/using new objects.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo — CI-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-01T13:20:46Z",
          "tree_id": "de8315ee6937f02426ad4964b0dd3f5ac60320b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dfad6f5052933c16114365d8adbfdd49e88ebf0"
        },
        "date": 1777649920926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2845.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4606.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8108.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8219.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8156.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.5,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "586bc9bccb197f59cd516534aa6b0785bff68691",
          "message": "Add stress tests (#1820)\n\n### Summary\n\n- Adds a stress test harness under\n`mountpoint-s3-fs/tests/stress_tests/` with four scenarios\n(`sustained_reads`, `sustained_writes`, `mixed_rw`, `idle_and_churn`)\nthat drive real S3 traffic under the 512 MiB memory limit to shake out\ndeadlocks, per-worker stalls, tail-latency regressions, and memory\nissues.\n- Asserts at teardown: reservation gauges return to zero, per-op p100\nlatency within a configurable ceiling (20sec default), and per-worker\nwatchdog against stalls.\n- Adds a feature flag `stress_tests`, an aggregated metrics recorder in\n`tests/common/test_recorder.rs` and GitHub workflows when a PR is\nlabelled `stress` (similar to benchmarks/performance workflows).\n- Runs on the same hosts as benchmarks\n- Example stress test run and CI logs from my fork:\nhttps://github.com/yerzhan7/mountpoint-s3/actions/runs/25390606910\n- For now set it to run for 15min in CI\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-06T09:05:46Z",
          "tree_id": "4f527d703690bb26732efe4f3278949f0625480d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/586bc9bccb197f59cd516534aa6b0785bff68691"
        },
        "date": 1778066693213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2876.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8342.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8182.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8173.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2099.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.75,
            "unit": "MiB"
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
          "id": "1ffbafad9cfbb01715e549665ea74009f896e5c3",
          "message": "Bump slackapi/slack-github-action from 3.0.1 to 3.0.3 (#1824)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 3.0.1 to 3.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>Slack GitHub Action v3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/blob/main/CHANGELOG.md\">slackapi/slack-github-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/45a88b9581bfab2566dc881e2cd66d334e621e2c\"><code>45a88b9</code></a>\nchore: release</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1c0bcf08feaa559a9bcfcc249184e13b136ffa55\"><code>1c0bcf0</code></a>\nchore: release (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/606\">#606</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/66834e4b0cad4cbf09ca680587ad8af71d615d4b\"><code>66834e4</code></a>\nfeat: add instrumentation to address error rates (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/600\">#600</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0fe0f902b9f8da107ca0e1314a388c0f57e20d48\"><code>0fe0f90</code></a>\nbuild(deps): bump <code>@​actions/github</code> from 9.0.0 to 9.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/605\">#605</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5e70597945c255539c5218d4178ed3c7d8188be\"><code>c5e7059</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.15.0 to 7.15.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/604\">#604</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0325526875571a27abcfd2b302453a90871abbff\"><code>0325526</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 2.4.10 to 2.4.13\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/601\">#601</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/900cd3e6fa9d6eacd8a5512ecff230d08e65aec7\"><code>900cd3e</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.12.0 to 24.12.2\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/603\">#603</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/53fdcffeb6e4d34cbdf3276f7beadb0ecc7c9fcd\"><code>53fdcff</code></a>\nbuild(deps): bump <code>@​actions/core</code> from 3.0.0 to 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/602\">#602</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/26856cc7fb2c1c2951483645f5fdc3643dbe96eb\"><code>26856cc</code></a>\nbuild(deps): bump slackapi/slack-github-action from 3.0.1 to 3.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/596\">#596</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/feba1e29702383a5a3cd5136af0559ba10859b04\"><code>feba1e2</code></a>\nci: skip publish step if no release is needed (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/599\">#599</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.1...v3.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=3.0.1&new-version=3.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-06T14:58:44Z",
          "tree_id": "8619b9eaaf71a7012b9095f2120b105979f5d7ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ffbafad9cfbb01715e549665ea74009f896e5c3"
        },
        "date": 1778087934805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2873.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8464.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8190.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8201.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 19.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 447.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 249,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "daa8f977c3c98cebf13d41e121746f93479c963f",
          "message": "Add requester process' PID to file system logs (#1718)\n\nAdd requester's PID to Filesystem logs.\nIt also adds an entry point \"New request\" log to all the (supported)\nfilesystem methods as a proxy for tracking incoming requests at FUSER.\n\nThis makes it easier to trace requests dispatched to Mountpoint,\nespecially during workflows using multiple customer processes to make\nrequests concurrently for the same inode(s).\n\nAdditionally, the commit adds/re-orders some other fields in the logs\n(for a few FS methods) to reattain a consistent order of logging request\nparameters.\n\nSample log:\n```\n2025-12-04T14:56:23.330127Z DEBUG ThreadId(11) lookup{req=3 ino=1 name=\"._.\" pid=1860}:head_object{id=3 bucket=\"multinictesting-iad-benchmarksetupbucket07d0221d-jc1kskgzz2gx\" key=\"._.\"}: mountpoint_s3_client::s3_crt_client::head_object: new request\n```\n\nThe commit also does some minor refactoring to name unused method\nparameters more consistent and adhering to Rust guidelines.\n\n### Does this change impact existing behavior?\nNo, only (warn-level and higher) logging change.\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo, and no.\nLogging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-05-07T13:16:23Z",
          "tree_id": "934fa2f4633d1902716efc40ff987db628102113",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/daa8f977c3c98cebf13d41e121746f93479c963f"
        },
        "date": 1778168088009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2853.53125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4610.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8294.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8183.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8268.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 299.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.75390625,
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
          "id": "202d6d6b12cf9d803d93473423909948cd206858",
          "message": "Fix skip ranges in metrics tests (#1828)\n\nThe script testing metrics emissions tries to exercise a mix of\nsequential and \"random\" reads to then verify the expected metrics are\nrecorded. This change simplifies the skip pattern used to drive the\nreads and avoids moving past the size of the test file.\n\nUnrelated minor change: add a random pattern to the temporary folders in\nline with similar scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-13T09:09:34Z",
          "tree_id": "7fc0312432154b49ec27cef34d82433bca472ed5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/202d6d6b12cf9d803d93473423909948cd206858"
        },
        "date": 1778671692743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2904.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4571.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8334.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 57.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 36.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8175.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8120.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2097.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2099.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.50390625,
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
          "id": "a87aabd48c517e1fb19c955d48f82c5aa3dc66dd",
          "message": "Rework IAM documentation for directory buckets (#1455)\n\nReworks the section on IAM permissions to be more clearly split between\ngeneral purpose buckets and directory buckets.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-13T09:55:39Z",
          "tree_id": "24496115ba9faf4e672d543874516e9656056ab8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a87aabd48c517e1fb19c955d48f82c5aa3dc66dd"
        },
        "date": 1778674541351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2891.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4571.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8175.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 59.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 54.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 66.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8167.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8175.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.75390625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiron1@gmail.com",
            "name": "kiron1",
            "username": "kiron1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c6a7779eec77dcab7493ffda7292433577524ed",
          "message": "mountpoint-s3-fs: allow mounting on top of autofs (#1762)\n\nAllow mounting on a directory if it is already a mountpoint as long as\nit is of type `autofs`.\nThe fs_type autofs is used by autofs (and therefor SystemD automount\nunits) to enable the automatic mount functionallity.\n\n### Does this change impact existing behavior?\n\nOnly slightly, it enables now to use mount-s3 in combination with auto\nmount.\n\nuser @StarlightSyndrome mentions this problem already in #44, but no\nsolution was provided so far.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nShould be added: mount-s3 can now be used with autofs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Kiron <kiron1@gmail.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nCo-authored-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-06-02T16:53:34Z",
          "tree_id": "17510215aa930a3e166ce1180aefca7f65636758",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c6a7779eec77dcab7493ffda7292433577524ed"
        },
        "date": 1780427592457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2858.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4549.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8313.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 65.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8211.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8169.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 395.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.25390625,
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
          "id": "597ff65c29c5aea35deaacf79ac00b0f77f8e42e",
          "message": "Update CRT submodules to latest releases (excl. aws-lc) (#1842)\n\nUpdate the CRT submodules to the latest releases:\n\n* aws-c-auth v0.10.3\n* aws-c-cal v0.9.14\n* aws-c-common v0.14.0\n* aws-c-compression v0.3.2\n* aws-c-http v0.11.0\n* aws-c-io v0.27.2\n* aws-c-s3 v0.12.6\n* aws-c-sdkutils v0.2.5\n* aws-checksums v0.2.10\n* s2n-tls v1.7.4\n\n**Notes**: \n- aws-lc to be updated separately.\n- crypto libraries are now included on macOS, since s2n is required when\nbuilding aws-c-http/io.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth fc4b87655..4cb7127fc:\n  > Fix error handling for profile provider (#295)\n  > builder -> v0.9.92 and clang-latest (#293)\n  > fix: Remove strict requirement for ECS SessionToken (#292)\n  > imds: fix NULL check (#289)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 1cb941215..9edd8eac2:\n  > Add sanity checking on der empty bit string decoding (#248)\n  > builder -> v0.9.92 and clang-latest (#247)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 95515a8b1..48dd6cdff:\n  > base64 decode fix (#1248)\n  > Cbor decoder resource limits (#1247)\n  > Add helpers to unescape xml strings (#1244)\n  > Couple helpers to read little endian ints from cursor (#1243)\n  > builder -> v0.9.92 (#1242)\n  > Helper to split string on multiple chars (#1241)\n  > Helper to parse negative ints from string (#1240)\n  > Fix tests on big-endian (#1218)\n  > Read signed 32 bit integer (#1239)\n  > ring buffer: avoid NULL dereference (#1238)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http da535b1bf..8aefd899f:\n  > Fix rounding error in hpack resizing (#559)\n  > [fix] h2 double complete (#558)\n  > builder -> v0.9.92 and clang-latest (#557)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1ec8081f2..9156a8f79:\n  > Option to disable revocation check (#806)\n  > Minor regex fix (#802)\n  > Support s2n-tls on macOS (#799)\n  > builder -> v0.9.92 and clang-latest (#800)\n  > Interleave threads in serialized scheduling test (#797)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 a31a65784..e8bf59aaa:\n  > CopyObject limitations (#641)\n  > fix copy object mpu (#643)\n  > Support s2n-tls on macOS (#640)\n  > Add gpu instance platform info (#637)\n  > fix unknown checksum handling (#633)\n  > Expose max_parts_pending_read as an env variable (#629)\n  > Switch to generic xml unescaping logic (#631)\n  > Auto - Update S3 Ruleset & Partition (#632)\n  > builder -> v0.9.92 and clang-latest (#628)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils f678bda9e..c70418c17:\n  > Align profile name parsing with SDKs (#65)\n  > BDD loader optimizations (#61)\n  > Ingest BDD endpoints (#60)\n  > change stale issue and discussion handling to run once a week (#57)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#55)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls a71ea1f97..eaf2c08a7:\n  > refactor: make MetricLabel more generic (#5912)\n  > refactor(metrics snapshot test): use per-unit measurements (#5910)\n  > test(metrics): add EMF snapshot test (#5909)\n  > fix: enable s2n-tls feature probes on Windows (#5907)\n  > feat(event): add security policy label to handshake event (#5893)\n  > feat(metrics-schema): Seperate out schema serialization from s2n-tls-metrics-subscriber (#5877)\n  > build(deps): update s2n-codec requirement from 0.80 to 0.81 in /bindings/rust/standard (#5900)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 3 updates (#5902)\n  > build(deps): update tabled requirement from 0.20.0 to 0.21.0 in /bindings/rust/standard (#5901)\n  > chore: add new team member (#5899)\n  > ci: set up Windows MSYS2 Github Actions (#5898)\n  > refactor: gate socket support for Linux only (#5895)\n  > feat: add unstable API to allow IP addresses in CN for hostname validation (#5897)\n  > build(deps): bump aws-actions/configure-aws-credentials from 6.1.1 to 6.1.3 in /.github/workflows in the all-gha-updates group across 1 directory (#5894)\n  > feat: add PQ-compatible variants of security policies (#5887)\n  > fix: pad DH shared secret to constant length (#5778)\n  > chore: release metrics subscriber v0.0.3 (#5896)\n  > feat(metrics-subscriber): add operation field to Attribution (#5892)\n  > refactor(metrics-subscriber): cache parsed ClientHello lists (#5884)\n  > feat(serialize): add SSLv3 and TLS 1.0 CBC implicit IV preservation (#5873)\n  > fix: validate pointer parameters in public API functions (#5889)\n  > feat(metrics-subscriber): pluggable synthetic-traffic detector (#5885)\n  > refactor: replace MIN/MAX with S2N_MIN/S2N_MAX to remove <sys/param.h> dependency (#5879)\n  > refactor: gate KTLS module out of Windows build (#5886)\n  > test(metrics-subscriber): add memory profile test (#5883)\n  > refactor: disable MLock on Windows (#5881)\n  > refactor: add iovec definition for Windows (#5880)\n  > chore: bindings release 0.3.37 (#5882)\n  > build(deps): update s2n-codec requirement from 0.79 to 0.80 in /bindings/rust/standard (#5874)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5878)\n  > feat(metrics-subscriber): Public access to types for deserialization (#5875)\n  > fix(config): Re-complete domain cert map after failed add (#5846)\n  > build(deps): update s2n-codec requirement from 0.78 to 0.79 in /bindings/rust/standard (#5872)\n  > fix: relax cert key preferences requirement (#5860)\n  > refactor(metrics-subscriber): serialize FrozenCounter as a list (#5870)\n  > chore: update fxhash dependency (#5869)\n  > test: document io behaviors (#5864)\n  > refactor(metrics-subscriber): key handshake counters by IANA id (#5858)\n  > ci: update to CBMC 6.9.0 (#5867)\n  > refactor: reset d2i pointer before private key type-hint fallback (#5844)\n  > ci: fix OpenSSL 1.0.2u download in Rust bindings CI (#5868)\n  > test: add integration tests for serialization (#5861)\n  > chore: bump MSRV (#5862)\n  > test: Cert retrieval behavior in Rust bindings (#5857)\n  > docs: clarify OCSP_basic_verify() behavior on delegated responder certs (#5859)\n  > feat: add pure mlkem1024 to CRT PQ policies (#5830)\n  > feat(metrics-subscriber): extract cert parameters from der (#5838)\n  > fix: make get_handshake_type_name procotol aware (#5843)\n  > fix: enable FIPS mode with validated 3+ providers and OpenSSL 3.5+ (#5840)\n  > ci: accept 400 from ebay.com in https_client network test (#5853)\n  > fix: cleanup kem public key in failure case (#5841)\n  > build(deps): update s2n-codec requirement from 0.77 to 0.78 in /bindings/rust/standard (#5839)\n  > ci: fix failed renegotiation tests in the Rust bindings (#5837)\n  > fix: typos in s2n-tls codebase (#5835)\n  > style(bindings): standardize doc links to monospaced format (#5791)\n  > ci: disable go when build awslc (#5833)\n  > chore: release metrics subscriber v0.0.2 (#5828)\n  > refactor(metrics-subscriber): simplify per-resource export flow (#5786)\n  > fix: unchecked NULL return from X509_EXTENSION_get_data (#5825)\n  > revert: \"fix: pin aws crt cpp to resolve general batch failures\" (#5827)\n  > feat(metrics): add compatibility metrics (#5823)\n  > build(deps): bump cross-platform-actions/action from 0.32.0 to 1.0.0 in /.github/workflows in the all-gha-updates group (#5824)\n  > fix: enforce DH public key range (#5818)\n  > fix: pin aws crt cpp to resolve general batch failures (#5822)\n  > build(deps): bump aws-actions/configure-aws-credentials from 6.0.0 to 6.1.0 in /.github/workflows in the all-gha-updates group (#5820)\n  > fix: use uint32_t for partial_client_hello_size to prevent truncation (#5808)\n  > fix: validate ML-DSA key type (#5772)\n  > fix: add NULL check for X509_STORE_new() in s2n_x509_trust_store_add_pem (#5817)\n  > fix: zero the blob in s2n_free_without_wipe before invoking callback (#5811)\n  > fix: add non-negative length check in s2n_utf8_string_from_extension_data (#5816)\n  > chore: bindings release 0.3.36 (#5814)\n  > fix: explicit size checks in s2n_connection_set_session (#5812)\n  > chore: use s2n_add_overflow for arithmetics in s2n_server_key_exchange.c (#5809)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-06-24T14:42:26Z",
          "tree_id": "3362f13a72f72e0578e329876ae956a683410fbb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/597ff65c29c5aea35deaacf79ac00b0f77f8e42e"
        },
        "date": 1782320573582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8316.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8077.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2097.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.75390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}