window.BENCHMARK_DATA = {
  "lastUpdate": 1741713666652,
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
          "distinct": true,
          "id": "8c68c1dea2530871f0e19f3bd75e6046c3790d1c",
          "message": "Update examples/benchmarks to use Clap derive syntax (#1258)\n\nSome of the benchmarks and other examples use the non-derive syntax of\nClap. Meanwhile, the main CLI for Mountpoint uses the derive syntax\nproviding much better ergonomics.\n\nThis change migrates to derive syntax for all benchmarks/examples,\nmaintaining existing behavior and aliasing to match the main CLI for\nconsistency. By using aliasing, we can avoid old command history or any\nscripts failing to run.\n\n### Does this change impact existing behavior?\n\nThis change does not change any behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:19:55Z",
          "tree_id": "8c38034fe2c2ce2cc41bcd0bdae8f5155272a453",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c68c1dea2530871f0e19f3bd75e6046c3790d1c"
        },
        "date": 1739208826385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15627.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25730.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40268.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 221.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38484.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36909.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13980.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12489.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11446.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "smeyer@fastmail.com",
            "name": "Steven Meyer",
            "username": "notoriaga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5e580a8632e30d7616d392fff30eaf215da22cec",
          "message": "Add negative metadata cache ttl (#1246)\n\nAdds a new CLI argument `--negative-cache-ttl` that lets you set the TTL\nfor negative metadata entries separately from `--metadata-ttl`. My use\ncase is a write once read many bucket. Objects do not get deleted from\nthis bucket, and new objects are added every few minutes. I'd like to be\nable to set `--metadata-ttl indefinite` and `--negative-cache-ttl 60` to\neffectively utilize the caching while still being able to pick up new\nobjects. There is an open issue for this here -\nhttps://github.com/awslabs/mountpoint-s3/issues/831\n\n### Does this change impact existing behavior?\n\nNo, if `--negative-cache-ttl` is omitted the existing behavior is\nmaintained (use `--metadata-ttl` or the default file_ttl).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBecause this is a new feature I believe it would require both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: notoriaga <smeyer@fastmail.com>\nSigned-off-by: Steven Meyer <smeyer@fastmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-11T13:59:57Z",
          "tree_id": "5c4086bb2ef39374bdfecb966e1ad1ed340ccfad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e580a8632e30d7616d392fff30eaf215da22cec"
        },
        "date": 1739290647766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16259.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24761.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38257.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 168.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34780.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37699.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11617.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13946.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12328.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.30078125,
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
          "id": "981a3e11b23baa3247c968f6819698dfc5326cd5",
          "message": "Increase version to 1.15 and update CHANGELOG after adding new metadata TTL flag (#1265)\n\nThe change in #1246 requires a minor version increase and a new entry in\nthe changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-11T14:53:46Z",
          "tree_id": "a5999ea7bd7aaec4350279abf77568d7b14dc396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/981a3e11b23baa3247c968f6819698dfc5326cd5"
        },
        "date": 1739293793185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14150.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27113.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40318.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 184.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41589.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39498.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13201.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11263.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10536.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.80078125,
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
          "id": "49c55bb73315bf3b0dca5326d6632cdf6453207e",
          "message": "Update caching documentation (#1267)\n\nUpdated the caching documentation to specify how the metadata cache\ninteracts with the data cache options.\n\nCloses #1263.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-02-14T15:20:08Z",
          "tree_id": "1fcff08e5c24399a87a6d8d7c97c7ac9b5622d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49c55bb73315bf3b0dca5326d6632cdf6453207e"
        },
        "date": 1739554449107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15055.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22362.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39772.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37349.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38473.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 410.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13294.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13691.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9639.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454e1fab291e1d020fe1a1917799f7a7f8d2cac7",
          "message": "chore(clippy): remove exclusions for false positive rules (#1271)\n\n### Overview\nWe removed exclusions for false positive Clippy rules as they were fixed\nand this workaround is no longer needed.\n\n### Does this change impact existing behavior?\nNo, this is a small boilerplate change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nChange log and version changes are not needed.\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:19:10Z",
          "tree_id": "ec72709f8a00be840dacf4c142a5db7ef9c0428e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/454e1fab291e1d020fe1a1917799f7a7f8d2cac7"
        },
        "date": 1739986450585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17077,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30482,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37705.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43433.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41119.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14197.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13951.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10283.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.328125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2a50bbdf765b1a5652e6b9a5e89919feaf212be",
          "message": "Fuser fork submodule (#1269)\n\n### Overview\nTo be prepared for further refactoring we want to ease the supporting\neffort for the FUSER fork we're using.\nAs a first step we want to embed it as a git submodule which will be\nusing the existing `fuser/fork` branch as a remote.\nThis will allow us to keep the current sync flow with the original FUSER\n[repo](https://github.com/cberner/fuser) but skip the manual sync step\nin our `main` branch.\n\nWe will be able to update the fork by running `git submodule update\n--remote mountpoint-s3-fuser` which is more idiomatic. So we still be\nable to test changes locally w/o publishing the fork.\n\n*NB* We will need to commit the changes (dirty indices) after\nsubmodule's update.\n\n### Does this change impact existing behavior?\n\nThis change is completely internal and does not impact customer-facing\nbehavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis change does not require version or changelog changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:34:36Z",
          "tree_id": "56231be5cdb9a08a04d49dbf5c17de883229d997",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2a50bbdf765b1a5652e6b9a5e89919feaf212be"
        },
        "date": 1739987296589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15819.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28963.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39430.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 186.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35592.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36695.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13319.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13641.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12891.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.14453125,
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
          "id": "bacb676bf7303208dc39cf8e91aff56b5ccc89d2",
          "message": "Add initial version of benchmark experiment runner (#1266)\n\nIn order to investigate performance in Mountpoint, we want to be able to\nvary different parameters. In fact, it can be very useful to vary these\nparameters together to see how performance (such as sequential read\nthroughput) changes as we vary two parameters together.\n\nThis change introduces a new benchmark running script which uses the\nPython framework Hydra to enumerate combinations of parameters, and then\nexecute some function with each combination. The script manages the\nlifecycle of the `mount-s3` file system and collecting data into an\noutput folder.\n\nThe change currently does not reuse the FIO definitions used by our\nregression benchmarks. In the mid-term, these should be reconciled.\n\nThis pull request (PR) supersedes a previous PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/986.\n\n### Does this change impact existing behavior?\n\nNo, this adds a new benchmark runner and benchmark definitions. This\ndoes not impact the Mountpoint file system.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint file system or crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-21T07:13:35Z",
          "tree_id": "f41549c9170abd8427c12f5c7a56563584dfa834",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bacb676bf7303208dc39cf8e91aff56b5ccc89d2"
        },
        "date": 1740130034168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16658.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27714.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38578.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37869.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39937.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12938.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12406.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8134.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.03515625,
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
          "id": "ea00e0dfffafa35e6ef2339a299c235fa1356d62",
          "message": "Add ETag to complete upload debug log (#1282)\n\nSmall change to add etag to debug logs when an MPU completes.\n\nWe already have size and object key, so this is the only missing\ninformation.\n\n### Does this change impact existing behavior?\n\nAdds etag to debug logs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T12:03:10Z",
          "tree_id": "bb4aeac896bbb845482469de8e7b1df4846647bb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea00e0dfffafa35e6ef2339a299c235fa1356d62"
        },
        "date": 1740406669649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14779.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25253.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45321.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41645.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36618.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14475.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11676.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11735.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.015625,
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
          "id": "a5147a158407b8ed26a8953eabd218d3d79cfcc1",
          "message": "Add EC2 instance ID to benchmark output metadata (#1281)\n\nWe want to include the instance type in the metadata for a given\nbenchmark run.\n\nThis change adds a check into IMDS to query this data and add the EC2\ninstance type if available.\n\n### Does this change impact existing behavior?\n\nIt adds a new field to the benchmark output metadata file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no change to Mountpoint itself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T13:10:39Z",
          "tree_id": "e59b936e6f9b45b485f1e843ece5451832ba5e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a5147a158407b8ed26a8953eabd218d3d79cfcc1"
        },
        "date": 1740410747876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16382.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24983.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40975.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 169.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40875.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39260.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13941.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14569.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8885.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.16796875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "191584906+sahityadg@users.noreply.github.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe",
          "message": "Add FUSE background and congestion threshold config to benchmark script (#1286)\n\nTo investigate Mountpoint performance, we want to run experiments with\ndifferent FUSE max background and congestion threshold settings.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-02-26T10:38:53Z",
          "tree_id": "5b46086209bed0903ee2eb52308aa3a1ef8c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe"
        },
        "date": 1740574457205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16993.421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25266.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41299.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42306.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42002.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13865.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12014.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12933.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 353.0390625,
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
          "id": "59ccecfd3b7edf540504bb524f1ef7e7afae7ecc",
          "message": "Build and validate SLES package (#1278)\n\nBuild a separate package for SUSE Linux Enterprise Server (SLES), where\n`libfuse.so.2` is delivered by `libfuse2` rpm package (as compared to\n`fuse-libs` for AL2).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMay be? Added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-26T11:23:36Z",
          "tree_id": "427e5dc432f730ffa7fb9590d0d6635dba92c1ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59ccecfd3b7edf540504bb524f1ef7e7afae7ecc"
        },
        "date": 1740577308137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15703.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26994.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38576.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39718.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38623.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12558.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12748.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9334.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.66015625,
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
          "id": "241d1195588ffed40c3fe508eede2befd80ce27f",
          "message": "Remove function pointer comparison in EventLoopGroup initialization (#1287)\n\nTrying to run `clippy` with Rust 1.85 fails with the following error:\n```\nerror: function pointer comparisons do not produce meaningful results since their addresses are not guaranteed to be unique\n  --> mountpoint-s3-crt/src/common/ref_count.rs:30:13\n   |\n30 |     assert!(callback.shutdown_callback_fn == Some(shutdown_callback));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = note: the address of the same function can vary between different codegen units\n   = note: furthermore, different functions could have the same address after being merged together\n   = note: for more information visit <https://doc.rust-lang.org/nightly/core/ptr/fn.fn_addr_eq.html>\n   = note: `-D unpredictable-function-pointer-comparisons` implied by `-D warnings`\n   = help: to override `-D warnings` add `#[allow(unpredictable_function_pointer_comparisons)]`\n```\n\nThis change reworks the affected code by inlining the shutdown callback\nfunctions into `EventLoopGroup::new_default` (the only caller), which\nmakes the assertion redundant.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-26T14:12:12Z",
          "tree_id": "eabe649b5d5eb0ad848fb82651238fdcf5c6b2f8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/241d1195588ffed40c3fe508eede2befd80ce27f"
        },
        "date": 1740587275267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14649.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27001,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39125.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35211.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32904.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13032.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13679.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10109.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.53515625,
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
          "id": "6560d0848a2de4d6a7b2dd132d5f802ac02f1281",
          "message": "Update Rust toolchain to 1.85 (#1288)\n\nUpdate Rust toolchain to 1.85\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-26T14:46:46Z",
          "tree_id": "d2c6e697cb878cd635c9786298a1885308cd0416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6560d0848a2de4d6a7b2dd132d5f802ac02f1281"
        },
        "date": 1740589267852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17056.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25244.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39607.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 246.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32616.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38634.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11782.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12542.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10771.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.4140625,
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
          "id": "9b05724af7d9299e50ed7eb7a35a54f92c960297",
          "message": "Release v1.15.0 (#1291)\n\nUpdate changelog for any missing changes, and prepare for v1.15.0\nrelease.\n\nWhen complete, this release will close:\n- https://github.com/awslabs/mountpoint-s3/issues/1207\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog reviewed and updated, version change already correct.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-27T08:51:28Z",
          "tree_id": "5f698674028444e48d67b012950468047bf7b52e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9b05724af7d9299e50ed7eb7a35a54f92c960297"
        },
        "date": 1740654434575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13936.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24999.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40680.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 237.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37548.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32861.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13286.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13761.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12188.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 425.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d56190ef82ce45002287f0e8f160c84120393ec",
          "message": "Rename Mountpoint's fuser fork (#1295)\n\n### Overview\nWe renamed our fuser fork and reset its version info as we're staring to\npublish it to crates.io.\nIn this PR we\n* revert the submodule approach for consuming the fork's crate\n* move the code from `vendor/fuser` to `mountpoint-s3-fuser` folder\n* consume the renamed and synched FUSER Fork  from `fuser/fork`\n* update dependency\n* change `vendor/fuser` to `mountpoint-s3-fuser` in aux scripts and\ndocumentation\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior it only affects the\nproject's structure.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nIt does not require neither version change not change log entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-04T09:27:06Z",
          "tree_id": "759c407fe58982ea916eb18c2b45410396467382",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d56190ef82ce45002287f0e8f160c84120393ec"
        },
        "date": 1741088429534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16627.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26231.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40697.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35861.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37805.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13928.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11084.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12647.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.76171875,
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
          "id": "d4dc7569154cb2e42b4568f9975339ce9e405936",
          "message": "Remove prefix from inodes (#1303)\n\nWhen Mountpoint is configured with the `--prefix` flag, all S3 requests\ncontain the specified prefix as part of the key. Currently, the prefix\nis duplicated in each `Inode` entry in the `full_key` field. This change\nremove the unnecessary duplication by only storing the partial `key` and\nreconstructing the `full_key` by adding the prefix before performing any\nS3 request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`mountpoint-s3` changelog entry. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-06T14:53:44Z",
          "tree_id": "603a5be7a26d27aed6daaa7b3ffd896a922b70e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4dc7569154cb2e42b4568f9975339ce9e405936"
        },
        "date": 1741280863678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16369.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24464.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43700.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 215.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 423.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33007.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10487.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12118.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11523.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.5546875,
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
          "id": "6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5",
          "message": "Update Cargo dependencies (#1306)\n\nUpdate Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo change in behavior.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-07T12:55:38Z",
          "tree_id": "9b393ea325557646752e984e5ad4e12ac77860fc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5"
        },
        "date": 1741360182339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15711.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25432.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39813.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38152.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34270.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12664.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13512.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14620.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3828125,
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
          "id": "631fe4cd2a2377bbd96f0f018d182ba7c2fb632b",
          "message": "Prevent failures in benchmark actions (#1307)\n\nBenchmarks currently fail when recording a worse than 2x regression.\nHowever, failed runs are not included in the workflow summary or in the\n[performance\ncharts](https://github.com/awslabs/mountpoint-s3/blob/main/doc/BENCHMARKING.md).\nWith this change, a regression will only result in an alert, and not\nlead to an action failure.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-07T14:43:19Z",
          "tree_id": "c755dfa3d813352466348597c2232f761972a463",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631fe4cd2a2377bbd96f0f018d182ba7c2fb632b"
        },
        "date": 1741366551745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16173.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25897.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 46145.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 184.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39167.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40586.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14279.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11520.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11960.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.67578125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e54b477a76b16a730d2a1d6e53c30f883e4daab",
          "message": "Set \"ring\" version to \"0.17.12\" (#1310)\n\nWe set `ring = \"=0.17.12\"` because the latest version ring = \"=0.17.13\"\nhas the [issue](https://github.com/briansmith/ring/issues/2463) with old\nGNU builds.\n\n`ring` is a test dependency of Mountpoint. Update was done previously in\nthis [PR](https://github.com/awslabs/mountpoint-s3/pull/1306/files) to\naddress vulnerability warnings.\nPinned version is also fine from RustSec point of view\n([link](https://rustsec.org/advisories/RUSTSEC-2025-0009.html))\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior \n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-10T10:55:01Z",
          "tree_id": "8d01828a4688e66e478e2e1df4ccf1e1a6f56461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e54b477a76b16a730d2a1d6e53c30f883e4daab"
        },
        "date": 1741612242315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15885.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23203.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36659.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 255.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34714.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35174.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12430.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13340.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10053.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.5546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54",
          "message": "Bump `env_logger` to latest version (#1314)\n\n`humantime`, a dependency of `env_logger`, is unmaintained. Latest\nversion of `env_logger` switches maintained `jiff` crate to provide the\nsame functionality.\n\nSee https://rustsec.org/advisories/RUSTSEC-2025-0014\nSee CI failure\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13785440971/job/38552284966#step:4:359\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T15:05:11Z",
          "tree_id": "c178adc5e809b62b2bf7eb48e40ea83cd5c3c65e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54"
        },
        "date": 1741713666604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16095.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28134.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39556.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 203.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 400.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40696.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41091.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13820.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11330.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10102.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.7890625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}