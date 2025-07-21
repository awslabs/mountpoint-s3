window.BENCHMARK_DATA = {
  "lastUpdate": 1753108690842,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751036562837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3322.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3199.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3469.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3417.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4953.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3418.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3689.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 475.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 4682.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14791.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 474.14453125,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751044601509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3196.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7745.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3446.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3663.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 461.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3435.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15016.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 469.99609375,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751050985257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3557.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 343.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3596.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3007.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3479.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12340.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3212.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3475.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3331.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4092.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.80859375,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751051067173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3294.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3285.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3455.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3490.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6381.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3154.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3460.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3392.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3281.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.4140625,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751051195137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3149.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3222.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3202.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3301.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13522.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3467.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3548.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3355.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8747.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.7734375,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751288068591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3464.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2943.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3494.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3619.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6022.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3394.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2991.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3466.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3487.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.328125,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751370049623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3082.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3417.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3457.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3261.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4280.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3031.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3188.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3381.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3428.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.82421875,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751384495373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3307.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3381.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3066.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3451.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 228.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13975.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3282.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3036.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3367.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4183.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.13671875,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751395578724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3329.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3211.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3248.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3237.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11448.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3142.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3363.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2941.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3393.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.18359375,
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
          "distinct": false,
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751462559908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3309.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3571.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3301.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3315.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 201.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8615.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2767.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3093.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3350.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 6928.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.890625,
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
          "distinct": false,
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751653858952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3262.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3243.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3259.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3387.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7578.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3002.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3487.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3341.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.37890625,
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751882180522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3501.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3358.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3108.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3449.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18607.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3292.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3342.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3519.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3484.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.4453125,
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751910247118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3240.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3242.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3404.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3415.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13765.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3376.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 5242.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3377.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.484375,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751969193079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3168.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3520.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3344.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3342.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9821.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3181.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3603.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 239.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3120.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3409.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.9296875,
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
          "distinct": false,
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752121233305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3530.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3275.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3232.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3199.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 200.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15545.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3157.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3112.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3513.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3440.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.171875,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752166205552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3057.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3159.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3462.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3593.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19014.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3330.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3645.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3634.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3589.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.27734375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752244900732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3401,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3443.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3606.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3309.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4458.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3132.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3752.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3120.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4556.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.5625,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752493224619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3547.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3121.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3544.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3435.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 199.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7108.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3314.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3523.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10173.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3553.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.26171875,
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
          "id": "c3b70d06ce7edcd06373ab47816bdb91a1eba8b1",
          "message": "Bump slackapi/slack-github-action from 2.1.0 to 2.1.1 (#1514)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.0 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack Send v2.1.1</h2>\n<h2>What's Changed</h2>\n<p>This release fixes an issue where substituted variables might've\nbroken valid JSON or YAML parsings when using the\n<code>payload-file-path</code> input option.</p>\n<h3>🐛 Bug fixes</h3>\n<ul>\n<li>fix: parse provided payloads before replacing templated variables in\n<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/449\">slackapi/slack-github-action#449</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>📚 Documentation</h3>\n<ul>\n<li>docs: fix channel mention formatting in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/447\">slackapi/slack-github-action#447</a>\n- Thanks <a\nhref=\"https://github.com/mwbrooks\"><code>@​mwbrooks</code></a>!</li>\n<li>docs: remove links to pages that are no longer referenced in\nmarkdown in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/459\">slackapi/slack-github-action#459</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>🤖 Dependencies</h3>\n<ul>\n<li>build(deps): bump undici from 5.28.5 to 5.29.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/442\">slackapi/slack-github-action#442</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump codecov/codecov-action from 5.4.2 to 5.4.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/443\">slackapi/slack-github-action#443</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.1.0 to 11.5.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/450\">slackapi/slack-github-action#450</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/451\">slackapi/slack-github-action#451</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.3 to\n22.15.29 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/452\">slackapi/slack-github-action#452</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.1 to 7.9.2\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/453\">slackapi/slack-github-action#453</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.2 to 7.9.3\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/462\">slackapi/slack-github-action#462</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump axios from 1.9.0 to 1.10.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/465\">slackapi/slack-github-action#465</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.29 to\n24.0.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/466\">slackapi/slack-github-action#466</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.5.0 to 11.7.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/468\">slackapi/slack-github-action#468</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/469\">slackapi/slack-github-action#469</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump sinon from 20.0.0 to 21.0.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/471\">slackapi/slack-github-action#471</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 24.0.3 to\n24.0.8 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/472\">slackapi/slack-github-action#472</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to\n2.0.6 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/470\">slackapi/slack-github-action#470</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n</ul>\n<h3>🧰 Maintenance</h3>\n<ul>\n<li>ci: pin action hashes and escape variables with minimum permission\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/441\">slackapi/slack-github-action#441</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: create separate release branches for tagged releases on\npublish in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/457\">slackapi/slack-github-action#457</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: clone repository &quot;docs&quot; and configuration when\nsyncing project docs in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/467\">slackapi/slack-github-action#467</a>\n- Thanks <a\nhref=\"https://github.com/lukegalbraithrussell\"><code>@​lukegalbraithrussell</code></a>!</li>\n<li>chore(release): tag version 2.1.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/474\">slackapi/slack-github-action#474</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/91efab103c0de0a537f72a35f6b8cda0ee76bf0a\"><code>91efab1</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b6f4640825302dc9b85bd5ffbe34dfc7a762e404\"><code>b6f4640</code></a>\nchore(release): tag version 2.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/474\">#474</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d3dc61e5d1355f17c060df3210cda7044341866e\"><code>d3dc61e</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to 2.0.6\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/f647c89261423b9045f1ecc4f887c2e62ff6f33d\"><code>f647c89</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.0.3 to 24.0.8\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/472\">#472</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e6fa63302e670473dcb1695b744c15895d615227\"><code>e6fa633</code></a>\nbuild(deps-dev): bump sinon from 20.0.0 to 21.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/471\">#471</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/75b7822f871b0c9c128cae6c27efc029b1f6c1de\"><code>75b7822</code></a>\nbuild(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d7b6150e2a1b713e9aaf24e1559a11dfdf0f2a2d\"><code>d7b6150</code></a>\nbuild(deps-dev): bump mocha from 11.5.0 to 11.7.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/468\">#468</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/a7f5b68f29d9c4eb439f490ee90bda80a34ed6f5\"><code>a7f5b68</code></a>\nbuild: clone repository &quot;docs&quot; and configuration when syncing\nproject docs (#...</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c69deab25713549329730019e9c20a81d09bb4cd\"><code>c69deab</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 22.15.29 to 24.0.3\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/466\">#466</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1d0943cb8c8bca873d09b7b9638f3a94f89d829a\"><code>1d0943c</code></a>\nbuild(deps): bump axios from 1.9.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/465\">#465</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-14T10:14:09Z",
          "tree_id": "13338d52a1265d5b973af2ad086b1277bcb643fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3b70d06ce7edcd06373ab47816bdb91a1eba8b1"
        },
        "date": 1752495157369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3271.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2875.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3567.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3631.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5370.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 337.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3308.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3474.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3635.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3438.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.4453125,
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
          "id": "500986305934dc89b9457a6dfad2532476332862",
          "message": "Update the aws-c-s3 submodule to the latest release (#1515)\n\nUpdate the `aws-c-s3` submodule to\n[v0.8.4](https://github.com/awslabs/aws-c-s3/releases/tag/v0.8.4),\npicking up in particular: [ Avoid releasing pending mem ticket future\nwhile holding the lock #533\n](https://github.com/awslabs/aws-c-s3/pull/533).\n\n\nChange details:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1762f839..f8ae82e3:\n  > Avoid releasing pending mem ticket future while holding the lock (#533)\n  > More request metrics (#530)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T22:17:50Z",
          "tree_id": "208673de285dd84fdc1214be27868ca27e9310f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/500986305934dc89b9457a6dfad2532476332862"
        },
        "date": 1752538524941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3520.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2909.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3054.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3388.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 199.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11079.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2597.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3335.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3402.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.90234375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a7b5aeadf08ca443fb027362eb9b5051d425bbb",
          "message": "Update MP client benchmarks to benchmark multiple object downloads  (#1512)\n\nThis change adds new parameters to client benchmarks to download\nmultiple objects and to limit the duration of the test.\nThis change also extends bind parameter to take a comma separated list\nof NICs.\n\n### Does this change impact existing behavior?\n\nNo, client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:34:44Z",
          "tree_id": "7fee70a1c31e9e939412aa597706ade1a0d6dba6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a7b5aeadf08ca443fb027362eb9b5051d425bbb"
        },
        "date": 1752665660886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3328.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3405.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3506.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3430.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7181.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 335.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3253.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2751.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3421.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8314.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91",
          "message": "Refactor benchmark.py to extend to prefetcher and other benchmarks (#1507)\n\nThis change extracts fio and mountoint specific code from benchmark.py\nto specific modules to make it cleaner. It also separates the\nconfiguration into sections allowing us to have benchmark specific\nsweeper parameters.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:59:26Z",
          "tree_id": "409aff2851c4ed423fa580e15f7ea647f08445e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91"
        },
        "date": 1752667095737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3521.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2822.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3385.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3278.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 194.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5564.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3090.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3519.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3334.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3616.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.90234375,
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
          "id": "e104c3f563a175652d359c6e260d501f1b598339",
          "message": "Update CRT submodules to the latest releases (#1520)\n\nUpdate the CRT submodules to the latest releases, picking up in\nparticular: [Move fulfilling pending future outside the lock and ignore\nalready completed futures\n(#536)](https://github.com/awslabs/aws-c-s3/pull/536).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common aaa2f11e..2b67a658:\n  > Add API for a more compact (no dashes) UUID-to-str (#1212)\n  > Add a python script to help pick up the latest cjson and libcbor (#1211)\n  > Fix byte helpers for mingw 32 bit (#1210)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#1209)\n  > Fix signature of aws_backtrace_log (#1206)\n  > Remove clang-3 from CI (#1203)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 10961a70..bfa03928:\n  > support no_proxy excatly like CURL (#522)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#521)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io ee7925a3..12cb9f9c:\n  > stop packing future variable to avoid tsan data race warnings (#741)\n  > Support s2n security policy for TLS 1.2 and FIPS (#739)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 f8ae82e3..70aacd2d:\n  > Move fulfilling pending future outside the lock and ignore already completed futures (#536)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T07:58:37Z",
          "tree_id": "1216fd13514fc370ee60ae71b89d89644f20c951",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e104c3f563a175652d359c6e260d501f1b598339"
        },
        "date": 1752746425255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3376.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3403.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3194.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3176.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 201.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11502.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3265.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3241.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3276.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5835.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.3203125,
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
          "id": "1623edb9ffa0e589e777aa69f9fba68396abfef2",
          "message": "Update client changelogs with patch release (#1522)\n\nMerge branch 'release/mountpoint-s3-client-0.17' into `main` to update\nthe CHANGELOGs of the client crates after the patch release.\n\n### Does this change impact existing behavior?\n\nNo, docs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdates the changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T18:32:41Z",
          "tree_id": "7064cda0e2e6fb2cec89f9edebeb8771f88bf8b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1623edb9ffa0e589e777aa69f9fba68396abfef2"
        },
        "date": 1752784389414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3292.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3167.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3360.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3201.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10906.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3291.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3313.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 6693.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3523.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.28125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c15079dd3cc9f81cf73de99b4e821cbd5b989a75",
          "message": "Minor fixes to client and prefetch benchmarks for consistency (#1518)\n\nThis change makes prefetch and client benchmarks consistent simplifying\nthe automation\n\n### Does this change impact existing behavior?\n\nNo, client and prefetch benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client and prefetch benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T06:51:47Z",
          "tree_id": "c7a06070cd9041ef2f5b716308821763d3f27ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c15079dd3cc9f81cf73de99b4e821cbd5b989a75"
        },
        "date": 1752828673741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3218.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 344.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3318.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3102.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3195.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11222.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3320.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2880.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3247.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3474.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.3828125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56e653dc44168ba7be3eb475560b15b09a3a1bb1",
          "message": "Extend benchmark.py to run prefetch, crt and client benchmarks. (#1519)\n\nThis change allows us to run benchmarks at different Mountpoint layers\nwith a common input\n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T07:08:09Z",
          "tree_id": "d804a7b7046acfd2ce33f9542548f7e7080cc7f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56e653dc44168ba7be3eb475560b15b09a3a1bb1"
        },
        "date": 1752829659726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3398.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3345.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2881.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3324.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2950.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3607.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3310.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3604.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.8359375,
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
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752850674409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3341.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3439.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3601.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2919.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 202.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12084.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3077.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3449.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3398.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3448.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.04296875,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752858075425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3468.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3163.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3399.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3475.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13631.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3383.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3503.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3085.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3052.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.32421875,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753104157927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2893.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3506.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3418.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3231.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 14918.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2873.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3665.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 205.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3360.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3277.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.9140625,
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
          "id": "f06dc065a904da06b76a4bc667aa5966ab89e081",
          "message": "Extract meta request type when reserving buffers (#1524)\n\nModify the new `MemoryPool` trait (and the CRT bridge) to propagate the\ntype of the meta request which is reserving the buffer. Requires\nextending bindings to an additional private header from `aws-c-s3` in\norder to access the type of a `aws_s3_meta_request` pointer.\n\n### Does this change impact existing behavior?\n\nNo, the new type information is not used yet.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T12:43:22Z",
          "tree_id": "85098a437513db4098f974f17564649b52e61faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f06dc065a904da06b76a4bc667aa5966ab89e081"
        },
        "date": 1753108690788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3313.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3293.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3436.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3575.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5228.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3050.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3432.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 234.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5625.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.82421875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}