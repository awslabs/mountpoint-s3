window.BENCHMARK_DATA = {
  "lastUpdate": 1784582792841,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard, Memory-Limited)": [
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
        "date": 1777385984188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1671.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 977.59765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 671.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 64.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 405.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 304.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 304.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 732.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 532.8203125,
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
        "date": 1777399364529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1600.40234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 923.22265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 625.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 406.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 306.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 303.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 307.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 840.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 557.71875,
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
        "date": 1777574814586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1692.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 961.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 598.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 401.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 299.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 858.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 558.75,
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
        "date": 1777635331651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1944.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 849.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 550.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 299.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 782.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 429,
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
        "date": 1777636447345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1363.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 808.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 573.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 770.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.5,
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
        "date": 1777650064367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1662,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 1081.33203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 606.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 297.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 303.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 840.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 544.5,
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
        "date": 1778066813117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1495.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 1041.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 576.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 752.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.5,
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
        "date": 1778088018097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1620.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 1016.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 633.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 396.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.25,
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
        "date": 1778168328740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1783.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 974.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 618,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 300.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 920.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 574.68359375,
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
        "date": 1778671727628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1640.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 937.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 612,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 405.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 854.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 497.25,
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
        "date": 1778674669381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1588.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 970.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 651.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 795.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 544.5,
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
        "date": 1780427734637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1554.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 925.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 582,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 401.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 299.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1154.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 495,
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
        "date": 1782320670443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1503.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 876.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 647.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 19.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 58.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 15.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 300.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 698.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.50390625,
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
          "id": "4cc7d319c8915ede3e62651e0a541cf30ed50f34",
          "message": "Bump actions/cache from 5 to 6 (#1854)\n\nBumps [actions/cache](https://github.com/actions/cache) from 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/releases\">actions/cache's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update packages, migrate to ESM by <a\nhref=\"https://github.com/Samirat\"><code>@​Samirat</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1760\">actions/cache#1760</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v6.0.0\">https://github.com/actions/cache/compare/v5...v6.0.0</a></p>\n<h2>v5.1.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump <code>@​actions/cache</code> to v5.1.0 - handle read-only cache\naccess by <a\nhref=\"https://github.com/jasongin\"><code>@​jasongin</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1775\">actions/cache#1775</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.1.0\">https://github.com/actions/cache/compare/v5...v5.1.0</a></p>\n<h2>v5.0.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update ts-http-runtime dependency by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1747\">actions/cache#1747</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.5\">https://github.com/actions/cache/compare/v5...v5.0.5</a></p>\n<h2>v5.0.4</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add release instructions and update maintainer docs by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1696\">actions/cache#1696</a></li>\n<li>Potential fix for code scanning alert no. 52: Workflow does not\ncontain permissions by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1697\">actions/cache#1697</a></li>\n<li>Fix workflow permissions and cleanup workflow names / formatting by\n<a href=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1699\">actions/cache#1699</a></li>\n<li>docs: Update examples to use the latest version by <a\nhref=\"https://github.com/XZTDean\"><code>@​XZTDean</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1690\">actions/cache#1690</a></li>\n<li>Fix proxy integration tests by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1701\">actions/cache#1701</a></li>\n<li>Fix cache key in examples.md for bun.lock by <a\nhref=\"https://github.com/RyPeck\"><code>@​RyPeck</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1722\">actions/cache#1722</a></li>\n<li>Update dependencies &amp; patch security vulnerabilities by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1738\">actions/cache#1738</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/XZTDean\"><code>@​XZTDean</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1690\">actions/cache#1690</a></li>\n<li><a href=\"https://github.com/RyPeck\"><code>@​RyPeck</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1722\">actions/cache#1722</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.4\">https://github.com/actions/cache/compare/v5...v5.0.4</a></p>\n<h2>v5.0.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump <code>@actions/cache</code> to v5.0.5 (Resolves: <a\nhref=\"https://github.com/actions/cache/security/dependabot/33\">https://github.com/actions/cache/security/dependabot/33</a>)</li>\n<li>Bump <code>@actions/core</code> to v2.0.3</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.3\">https://github.com/actions/cache/compare/v5...v5.0.3</a></p>\n<h2>v.5.0.2</h2>\n<h1>v5.0.2</h1>\n<h2>What's Changed</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\">actions/cache's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Releases</h1>\n<h2>How to prepare a release</h2>\n<blockquote>\n<p>[!NOTE]\nRelevant for maintainers with write access only.</p>\n</blockquote>\n<ol>\n<li>Switch to a new branch from <code>main</code>.</li>\n<li>Run <code>npm test</code> to ensure all tests are passing.</li>\n<li>Update the version in <a\nhref=\"https://github.com/actions/cache/blob/main/package.json\"><code>https://github.com/actions/cache/blob/main/package.json</code></a>.</li>\n<li>Run <code>npm run build</code> to update the compiled files.</li>\n<li>Update this <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\"><code>https://github.com/actions/cache/blob/main/RELEASES.md</code></a>\nwith the new version and changes in the <code>## Changelog</code>\nsection.</li>\n<li>Run <code>licensed cache</code> to update the license report.</li>\n<li>Run <code>licensed status</code> and resolve any warnings by\nupdating the <a\nhref=\"https://github.com/actions/cache/blob/main/.licensed.yml\"><code>https://github.com/actions/cache/blob/main/.licensed.yml</code></a>\nfile with the exceptions.</li>\n<li>Commit your changes and push your branch upstream.</li>\n<li>Open a pull request against <code>main</code> and get it reviewed\nand merged.</li>\n<li>Draft a new release <a\nhref=\"https://github.com/actions/cache/releases\">https://github.com/actions/cache/releases</a>\nuse the same version number used in <code>package.json</code>\n<ol>\n<li>Create a new tag with the version number.</li>\n<li>Auto generate release notes and update them to match the changes you\nmade in <code>RELEASES.md</code>.</li>\n<li>Toggle the set as the latest release option.</li>\n<li>Publish the release.</li>\n</ol>\n</li>\n<li>Navigate to <a\nhref=\"https://github.com/actions/cache/actions/workflows/release-new-action-version.yml\">https://github.com/actions/cache/actions/workflows/release-new-action-version.yml</a>\n<ol>\n<li>There should be a workflow run queued with the same version\nnumber.</li>\n<li>Approve the run to publish the new version and update the major tags\nfor this action.</li>\n</ol>\n</li>\n</ol>\n<h2>Changelog</h2>\n<h3>6.1.0</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v6.1.0 to pick up <a\nhref=\"https://redirect.github.com/actions/toolkit/pull/2435\">actions/toolkit#2435\nHandle cache write error due to read-only token</a></li>\n<li>Switch redundant &quot;Cache save failed&quot; warning to debug log\nin save-only</li>\n</ul>\n<h3>6.0.0</h3>\n<ul>\n<li>Updated <code>@actions/cache</code> to ^6.0.1,\n<code>@actions/core</code> to ^3.0.1, <code>@actions/exec</code> to\n^3.0.0, <code>@actions/io</code> to ^3.0.2</li>\n<li>Migrated to ESM module system</li>\n<li>Upgraded Jest to v30 and test infrastructure to be ESM\ncompatible</li>\n</ul>\n<h3>5.0.4</h3>\n<ul>\n<li>Bump <code>minimatch</code> to v3.1.5 (fixes ReDoS via globstar\npatterns)</li>\n<li>Bump <code>undici</code> to v6.24.1 (WebSocket decompression bomb\nprotection, header validation fixes)</li>\n<li>Bump <code>fast-xml-parser</code> to v5.5.6</li>\n</ul>\n<h3>5.0.3</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v5.0.5 (Resolves: <a\nhref=\"https://github.com/actions/cache/security/dependabot/33\">https://github.com/actions/cache/security/dependabot/33</a>)</li>\n<li>Bump <code>@actions/core</code> to v2.0.3</li>\n</ul>\n<h3>5.0.2</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/cache/commit/55cc8345863c7cc4c66a329aec7e433d2d1c52a9\"><code>55cc834</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1768\">#1768</a>\nfrom jasongin/readonly-cache</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/d8cd72f230726cdf4457ebb61ec1b593a8d12337\"><code>d8cd72f</code></a>\nBump <code>@​actions/cache</code> to v6.1.0 - handle cache write error\ndue to RO token</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/2c8a9bd7457de244a408f35966fab2fb45fda9c8\"><code>2c8a9bd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1760\">#1760</a>\nfrom actions/samirat/esm_migration_and_package_update</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e9b91fdc3fea7d79165fceb79042ef45c2d51023\"><code>e9b91fd</code></a>\nPrettier fixes</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e4884b8ff7f92ef6b52c79eda480bbc86e685adb\"><code>e4884b8</code></a>\nRebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/10baf0191a3c426ea0fa4a3253a5c04233b6e18f\"><code>10baf01</code></a>\nFixed licenses</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e39b386c9004d72a15d864ade8c0b3a702d47a37\"><code>e39b386</code></a>\nFix test mock return order</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b6928203372a8571ff984c0c883ef3a1adfb0c06\"><code>b692820</code></a>\nPR feedback</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/60749128a44d25d3c520a489e576380cf00ff3f1\"><code>6074912</code></a>\nRebuild dist bundles as ESM to match type:module</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/5a912e8b4af820fa082a0e75cfd2c782f8fbfe0e\"><code>5a912e8</code></a>\nFix lint and jest issues</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/cache/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/cache&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T10:50:15Z",
          "tree_id": "d36fe048697ec14bc77921e1c0f040501c63e6a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cc7d319c8915ede3e62651e0a541cf30ed50f34"
        },
        "date": 1782738551705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1412.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 799.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 545.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 59.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 304.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 299.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 303.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 691.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.00390625,
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
          "id": "02028e3786abb14f1b3655ef1227179b6eed2ced",
          "message": "Bump anyhow to 1.0.103 for RUSTSEC-2026-0190 (#1857)\n\ncargo-deny flagged `anyhow 1.0.102` as unsound under\n[RUSTSEC-2026-0190](https://rustsec.org/advisories/RUSTSEC-2026-0190):\n`Error::downcast_mut` violates borrow rules after `Error::context`,\ncausing undefined behavior. The fix landed in `anyhow 1.0.103`.\n\nThis bumps the lockfile entry via `cargo update -p anyhow`. No source\nchanges required.\n\nFailing run:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/28378845507/job/84075625921\n\n### Does this change impact existing behavior?\n\nNo. This is a transitive lockfile bump within the `1.x` range.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Lockfile-only update with no user-visible behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-06-29T16:41:11Z",
          "tree_id": "e34dd545a44834c2fca51a558ccded99b9653890",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02028e3786abb14f1b3655ef1227179b6eed2ced"
        },
        "date": 1782759774031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1408.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 844.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 546.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 402.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 298.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 739.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 423.00390625,
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
          "id": "6bd6e927eef039d14b2aa245b498c0a0dfbe094d",
          "message": "Update CRT submodules to latest releases (excl. aws-lc) (#1856)\n\nUpdate the CRT submodules to the latest releases:\n\n* aws-c-common v0.14.1\n* aws-c-s3 v0.12.7\n* aws-c-sdkutils v0.2.6\n* s2n-tls v1.7.5\n\nNotes:\n- aws-lc is intentionally left at v1.72.0 (to be updated separately, as\nin #1842).\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 48dd6cdf..2b4c620f:\n  > aws_cbor_decoder_get_unconsumed_length (#1251)\n  > odirect write support (#1245)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 e8bf59aa..9bcccf21:\n  > o_direct download support (#634)\n  > stop forcing connection to be closed (#646)\n  > Support deferred buffer reservations in async-write path (#645)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils c70418c1..727df06f:\n  > [fix] deepcopy user provided name (#66)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls eaf2c08a..f5f6c6c2:\n  > feat(s2n-tls-tokio): add TlsStream::into_parts and from_parts (#5957)\n  > fix: add extern \"C\" guards to unstable API headers (#5954)\n  > feat: add numbered cnsa2 interop policies (#5905)\n  > build(deps): update s2n-codec requirement from 0.82 to 0.83 in /bindings/rust/standard (#5956)\n  > refactor: additional self talk and memory tests to use in memory io pair (#5944)\n  > ci: enable ASAN for Windows tests (#5952)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5955)\n  > fix(metrics): correct cert attribution (#5951)\n  > build: fix CMake compilation issue on macOS x64 (#5923)\n  > test(metrics): pseudo-stability of event APIs (#5949)\n  > chore: update doxygen (#5945)\n  > feat(metrics): cert usage (#5911)\n  > ci: remove codeql python analysis (#5933)\n  > refactor(metrics-schema): centralize metric name definitions for cross-crate reuse (#5937)\n  > refactor: convert 3 fork self talk tests to in memory io pair tests (#5939)\n  > fix: initialize *blocked on early-return paths (#5931)\n  > feat: s2n_connection_get_mode (#5922)\n  > refactor: avoid IP protocol state (#5935)\n  > fix: null-check cert_and_key fields in load helpers (#5932)\n  > fix: initialize *blocked on early-return paths (#5930)\n  > ci: delegate cache retrieval to nix (#5934)\n  > ci: update expected status codes (#5936)\n  > feat(metrics): alert visibility (#5920)\n  > test: configure non fork tests to run on Windows (#5904)\n  > fix: perform fallable checks before interting into domain name map (#5813)\n  > fix: release EVP_PKEY on cert recv error paths (#5926)\n  > ci: bump MSRV for extended workspace (#5929)\n  > ci(aws-kms-tls-auth): pin time crate version (#5928)\n  > build(deps): update s2n-codec requirement from 0.81 to 0.82 in /bindings/rust/standard (#5924)\n  > ci: cache all dev shells (#5925)\n  > ci: remove redundant download in buildspec (#5921)\n  > feat(metrics): add security policy information (#5908)\n  > chore: bindings release 0.3.38 (#5916)\n  > feat(metrics): add visibility into failures (#5913)\n  > ci: fix OpenBSD CI mirror and bump to 7.9 (#5915)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Already updated in previous PR\nhttps://github.com/awslabs/mountpoint-s3/pull/1842\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-06-29T17:44:48Z",
          "tree_id": "cb25671f80f5b56e34f39073cd54b1cd74b91fbc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6bd6e927eef039d14b2aa245b498c0a0dfbe094d"
        },
        "date": 1782763446800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1443.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 814.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 543.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 397.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 300.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 465.00390625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mvdoster@gmail.com",
            "name": "vladislav doster",
            "username": "vladdoster"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f455c4df12fb70fc16c35cebe6727673bc42841b",
          "message": "fix: correct spelling across markdown and rust files (#1837)\n\nCorrected all typos across project except for `CHANGELOG.md` files. I\nwas reading through the code and I noticed them all over the place.\n\n### Does this change impact existing behavior?\n\nNo. All rust tests pass running them locally.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It is purely spelling fixes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Doster <mvdoster@gmail.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.com>\nCo-authored-by: Renan Magagnin <renanmag@amazon.com>",
          "timestamp": "2026-06-29T20:11:47Z",
          "tree_id": "7d3b2aa9480b36f059d6775562a7234547152c9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f455c4df12fb70fc16c35cebe6727673bc42841b"
        },
        "date": 1782773037504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1396.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 1030.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 534.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 18.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 299.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 299.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 690.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.50390625,
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
          "id": "cb220a1f19e65db1ad711809c6f6c7af0f06c0aa",
          "message": "Upgrade cargo dependencies (#1859)\n\nUpgrade cargo dependencies to the latest releases.\n\nChanges required to adapt to incompatible upgrades (all in test code):\n- switch to the new syntax `#[ctor::ctor(unsafe)]`\n- remove `filetime` dependency in favor of `std`\n- move `regex` usage out of shuttle tests\n- increase stack size in shuttle config for prefetch tests\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-06T12:30:37Z",
          "tree_id": "dd1e69dd4830cef88165263978886ee686b91081",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb220a1f19e65db1ad711809c6f6c7af0f06c0aa"
        },
        "date": 1783351694835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1442.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 825.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 543.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 300.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 574.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 462,
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
          "id": "fc04a2533e8088a48b029903239f09e41e569645",
          "message": "Add 7-day cooldown to GitHub Actions dependency updates (#1863)\n\nAdds a cooldown to Dependabot, so PRs won't be opened until the version\nis at least 7 days old. This provides some mitigation to avoid picking\nup dependencies that may not be suitable due to bug or malicious\nbehavior, as there is time for vetting or bug fixes.\n\nThis still respects Dependabot's cadence - for example, it will run\nweekly still but on that weekly run, the new versions must be at least 7\ndays old to be considered eligible.\n\nNote, security updates do not respect this config and will open a PR as\nsoon as an update is available.\nhttps://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-\n\nZizmor would report no specification of cooldown (albeit as a pedantic\nfinding): https://docs.zizmor.sh/audits/#dependabot-cooldown\n\n### Does this change impact existing behavior?\n\nThis impacts dependencies updates only - dependencies will only be\nprompted to update if they are at least 7 days old.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-07-06T17:51:09Z",
          "tree_id": "b04a35257370b2449e79b275ac270946aa9f3cbc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc04a2533e8088a48b029903239f09e41e569645"
        },
        "date": 1783368702961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1453.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 843.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 574.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 767.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.25,
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
          "id": "39c877986e519a6baf498fff50e36d35b3abfd35",
          "message": "Update cargo dependencies to fix RUSTSEC-2026-0204 (#1870)\n\n`cargo deny` (the Licenses CI job) started [failing on all\nbranches](https://github.com/awslabs/mountpoint-s3/actions/runs/28829504535/job/85580842785?pr=1868)\nafter RUSTSEC-2026-0204 was published against `crossbeam-epoch` 0.9.18\n(an invalid pointer dereference in the `fmt::Pointer` impl for\n`Atomic`/`Shared`), pulled in transitively via `crossbeam-deque`. The\nadvisory database is fetched fresh on every run, so this fails by date\nrather than by commit.\n\nRan `cargo update`, which bumps 18 packages to their latest\nsemver-compatible versions -- including `crossbeam-epoch` 0.9.18 ->\n0.9.20, which clears the advisory. All are patch/minor releases (no\nmajor bumps), and `proc-macro-error2` / `proc-macro-error-attr2` drop\nout as they are no longer depended on.\n\n### Does this change impact existing behavior?\n\nNo -- lockfile-only change, all semver-compatible. `cargo deny check`\npasses all sections (advisories, bans, licenses, sources) and `cargo\nbuild --all-targets` succeeds.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency maintenance.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-07-07T15:39:31Z",
          "tree_id": "02b2fb141cd8401677a6e353b7453a24f11e3733",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c877986e519a6baf498fff50e36d35b3abfd35"
        },
        "date": 1783447661684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1537.15234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 874.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 588.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 19.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 757.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 477.00390625,
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
          "id": "b3832bfd7f7f603fbd10556f89ccb7b6e4e8fc99",
          "message": "Use zero-copy request_body for single PutObject uploads (#1882)\n\nBump aws-c-s3 to v0.12.8, which adds the `request_body` meta request\noption to send a body from caller-owned memory with no extra CRT-side\nallocation or copy. Wire it through `MetaRequestOptions::request_body`\nand use it in `put_object_single` (used by incremental/append uploads)\ninstead of an input-stream body, so the CRT uploads directly from the\npooled buffer.\n\nThis removes an unnecessary buffer copy that increased peak memory usage\nduring incremental (append) uploads.\n\n`InputStream` (`io::stream`) and `Message::set_body_stream` are removed\nas they are superseded by `request_body`, and\n`Message`/`MetaRequestOptions` are no longer generic over a lifetime.\n`put_object_single` now requires `contents: impl AsRef<[u8]> + Send +\n'static` so the body can be held until the meta request is fully torn\ndown.\n\nBased on https://github.com/awslabs/mountpoint-s3/pull/1860\n\n### Does this change impact existing behavior?\n\nNo behavior change. Reduces peak memory usage on the incremental\n(append) upload write paths.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-07-14T07:00:59Z",
          "tree_id": "d9e18168baf4dcea3a3ae4fcedc1d9638d13e770",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b3832bfd7f7f603fbd10556f89ccb7b6e4e8fc99"
        },
        "date": 1784027530307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1264.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 794.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 527.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 396.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 303.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 663.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 839.19921875,
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
          "id": "cb7fbf0771dd86c6f3e2261e2748e0144e5a947a",
          "message": "Upgrade Rust toolchain to 1.96 (#1883)\n\nUpgrade Rust toolchain to 1.96.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-14T10:54:27Z",
          "tree_id": "f368ce99eca5a786bacc0bb0dd9f9aaaf69dd4af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb7fbf0771dd86c6f3e2261e2748e0144e5a947a"
        },
        "date": 1784034807872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1343.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 878.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 591.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 22.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 299.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 561.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 444.6484375,
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
          "id": "a9e71eb8f3e932c708851f97fcf5517804715a02",
          "message": "Improve stability of metrics tests  (#1881)\n\nImprove the stability of the metrics tests by making cleanup in\notel_export.sh more robust. The script now waits for the OTel collector\nto fully exit (time-box for 5s, then SIGKILL) so its port is released\nbefore the next iteration, and then clears the PID so the EXIT trap\ndoesn't re-kill a stale PID. It also logs when cleanup runs after a\nfailure.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-14T16:25:29Z",
          "tree_id": "71d4d09663a2efb229aa6910fee3c9d5c060ff71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a9e71eb8f3e932c708851f97fcf5517804715a02"
        },
        "date": 1784056613809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1437.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 813.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 559.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 299.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 702.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 411.11328125,
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
          "id": "00d3945269a62e36bc9d21dd30ce221b5ac7bb69",
          "message": "Update CRT submodules to latest releases (#1884)\n\nUpdate the CRT submodules to the latest releases:\n\n- aws-c-auth v0.10.4\n- aws-c-common v0.14.2\n- aws-c-io v0.27.3\n- aws-c-sdkutils v0.2.7\n\n**Note**:  aws-lc to be updated separately (#1850).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 4cb7127f..4b5d524b:\n  > profile credentials provider should support sts web identity as well (#298)\n  > Regression Labeler Fix (#297)\n  > Support s2n-tls on macOS (#296)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 2b4c620f..a9d57d2d:\n  > XML Parser Fixes (#1254)\n  > Update deprecated OpenBSD CI job (#1255)\n  > Byte Buf Helper Func Dynamic or Static (#1253)\n  > CI improvements (#1252)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 9156a8f7..8bda5cf0:\n  > Unsetting USE_S2N disables s2n on macOS (#811)\n  > Update deprecated OpenBSD CI job (#812)\n  > Regression Labeler Fix (#810)\n  > badssl.com starts to close sockets now. (#808)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 727df06f..cb14fea3:\n  > BDD engine implementation (#62)\n  > Regression Labeler Fix (#67)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-14T17:29:18Z",
          "tree_id": "e2332a3946a4fad1fc20c4c5d05bf7221c45dc7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/00d3945269a62e36bc9d21dd30ce221b5ac7bb69"
        },
        "date": 1784059159064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1419.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 810,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 529.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 798.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 477,
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
          "id": "56336d142d7181a349cea1487c589a7b43d30e46",
          "message": "Add --ca-bundle and AWS_CA_BUNDLE support (#1834)\n\n### Description\n\nIssue: https://github.com/awslabs/mountpoint-s3/issues/1480\n\nAdd `--ca-bundle` and `AWS_CA_BUNDLE` support (similarly to AWS CLI) as\nper\nhttps://docs.aws.amazon.com/sdkref/latest/guide/feature-gen-config.html\n\n- Allows customers to specify the path to a custom certificate bundle (a\nfile with a .pem extension) to use when establishing SSL/TLS\nconnections.\n- This overrides OS default trust store.\n- Used when constructing S3 Client and Credential Client\n- Same precedence as in AWS CLI (flag > env variable)\n- No support for `ca_bundle` from AWS config file (maybe added later as\nnon-breaking change if there is usecase)\n\n### Does this change impact existing behavior?\n\nNo - new opt-in feature/flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - done.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-07-15T17:11:51Z",
          "tree_id": "0179cbbd323210fe6cc67efa477c1dc5c456b239",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56336d142d7181a349cea1487c589a7b43d30e46"
        },
        "date": 1784148791795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1351.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 780.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 527.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 15.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.046875,
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
          "id": "b743461cd1df847a0dcf7438412aee0ed37133bc",
          "message": "Update aws-lc to 5.1.0 and invoke cleanup on exit (#1850)\n\nUpdate the aws-lc CRT submodule to the latest release: `aws-lc v5.1.0`.\n\nAlso added cleanup for the CRT libraries to `mountpoint-s3-crt` in order\nto address an issue resulting in the address sanitizer test to fail:\n- Register a single atexit handler (once, from every\n`aws_*_library_init`) that runs the full `aws_*_library_clean_up`\nsequence top-down. Each cleanup is self-guarded and idempotent, so it is\nsafe regardless of which libraries were initialized, and joins all\nmanaged threads before aws-lc tears down.\n- The init for CRT libraries were not originally paired with a cleanup.\nHowever, cleanups join the CRT's managed worker threads, and without\nthem a worker thread could still be running a TLS handshake when the\nprocess runs its C runtime destructors, hitting a race condition. With\nthe aws-lc 5.1.0 upgrade, that race hits an abort() call (rand.c:575) in\naws-lc's FIPS RNG teardown, taking down `make test-asan` at exit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc d50ded59..6283365b:\n  > Prepare v5.1.0 release (#3321)\n  > Concurrency is not generally supported for EVP_AEAD_CTX_foo functions (#3318)\n  > Add 'version -fips' to surface FIPS module version in openssl tool (#3315)\n  > Bump AWSLC_FIPS_VERSION to 5 for next FIPS branch (#3316)\n  > ci: opt in to allow-unsafe-pr-checkout for gated pull_request_target jobs (#3313)\n  > ML-DSA: import and enable aarch64 assembly backend from mldsa-native (#3219)\n  > Define OPENSSL_INIT_NO_ATEXIT as a no-op (#3311)\n  > Bump the github-actions group across 1 directory with 4 updates (#3307)\n  > Move TLS 1.3 KDF into the FIPS module and wire up ACVP (#3247)\n  > Add WASIp2 build and test support (#3172)\n  > Make OPENSSL_memcmp constant time (#3183)\n  > Fix SSL_CTX_add_extra_chain_cert slot routing for chains added before the leaf (#3296)\n  > Stabilize libgit2 integration test (#3300)\n  > CI: Switch integration tests to nightly and raise alarm on failures (#3287)\n  > Update MySQL CI integration to mysql-cluster-9.7.1 (#3302)\n  > Support SSL_OP_IGNORE_UNEXPECTED_EOF option (#3294)\n  > Fix PostgreSQL integration: match upstream revoked-cert alert regex (#3299)\n  > ci: fix Windows CI breakage from VS2026 (MSVC 14.51) image bump (#3298)\n  > ML-DSA: import and enable x86_64 assembly backend from mldsa-native (#3195)\n  > Bump aws-cdk-lib from 2.251.0 to 2.255.0 in /tests/ci in the pip-ci group (#3283)\n  > Bump the cargo-ci-lambda group in /tests/ci/lambda with 4 updates (#3284)\n  > Bump cross-platform-actions/action from 0.32.0 to 1.2.0 in the github-actions group (#3285)\n  > ci: move BSD actions to scheduled (#3276)\n  > Add SSL_CTX_set_security_callback and related APIs for OpenSSL compat… (#3275)\n  > Quote LIBCRYPTO_PATH for dynamic load test (#3259)\n  > Make FIPS compiler wrapper unconditional (#3269)\n  > ML-DSA support as a TLS 1.3 signature scheme (#3251)\n  > Add inline documentation for API contracts (#3267)\n  > use /map: linker flag to avoid running a binary to capture the hash (#3133)\n  > Skip MariaDB socket conflict test unable to run as root (#3274)\n  > Make rustfmt optional for Rust bindings generation (#3270)\n  > Fix python 3.13 patch (#3271)\n  > BoringSSL: Harden nc_email name constraint checking (#3266)\n  > Gate Linux specific code to fix compilation on AIX (#3265)\n  > Fix manylinux1 build: O_CLOEXEC fallback in getauxval shim (#3268)\n  > Prefer CRLs with specific IDP match (#3264)\n  > Add `getauxval` availability detection with `/proc/self/auxv` fallback for uclibc targets (#3250)\n  > Enable Windows 7 compat path on MinGW builds (#3239)\n  > Drop obsolete test_pkey_rsa.rb hunk from Ruby 3.4 patch (#3260)\n  > Reject undersized buffer in pkey_dsa_sign (#3112)\n  > tool-openssl/s_client: default SNI to -connect host to match OpenSSL (#3209)\n  > Bump time from 0.3.36 to 0.3.47 in /tests/ci/lambda (#3248)\n  > Bump the github-actions group with 2 updates (#3258)\n  > Decouple the FIPS version number from the AWS-LC version number (#3211)\n  > Document new versioning scheme and bump mainline to v5.0.0 (#3212)\n  > Fix correctness findings from penpal testing (#3235)\n  > Add SHRT_MAX caps to bound iteration and input lengths (#3240)\n  > Tighten OCSP_parse_url URL parsing (#3238)\n  > Log versioning and library names druing cmake build step (#3254)\n  > Add new review workflow (#3230)\n  > ci: declare contents: read on zig compiler workflow (#3249)\n  > Release cipher_data on error path too for EVP_CTRL_INIT and EVP_CTRL_COPY (#3243)\n  > Free existing responderId union arm in OCSP_RESPID setters (#3234)\n  > Check parameters before comparing pqdsa public keys (#3229)\n  > Reject negative pass_len in PEM_ASN1_write_bio (#3228)\n  > Include trailing NUL in BIO_ADDR_rawaddress AF_UNIX length (#3236)\n  > Ensure no trailing data for PKCS8 EVP_parse_private_key (#3242)\n  > Free existing union arm by current type in PKCS7_set_type (#3231)\n  > Reject len < -1 in ASN1_mbstring_ncopy (#3232)\n  > Harden PKCS7 and OCSP error handling (#3237)\n  > Fix wherelen handling in BIO_ADDR_rawmake AF_UNIX path (#3233)\n  > Fix: Apply COHABITANT_HEADERS logic to location of tool binaries (#3116)\n  > Add OPENSSL_cleanse to zero stack secrets before return (#3227)\n  > BoringSSL: Test key import in EVPTest a bit more extensively (#3058)\n  > Prepare 1.73.0 (#3226)\n  > Fix shared library install on Windows: place DLLs in bin directory (#3225)\n  > Fix thread-local DRBG cleanup deadlock at process exit (#3220)\n  > Reject URIs containing '@' in name constraint checking (#3202)\n  > ci: pin zig x86_64-windows job to windows-2022 (#3222)\n  > Support non-empty context strings in ML-DSA EVP sign/verify (#3135)\n  > Bump the pip-ci group across 1 directory with 4 updates (#3216)\n  > Bump the cargo-ci-lambda group across 1 directory with 10 updates (#3217)\n  > Bump the github-actions group with 17 updates (#3218)\n  > Bump golang.org/x/crypto from 0.31.0 to 0.50.0 in the gomod-root group (#3214)\n  > Fixes several issues across X509 and EVP parsing/comparison code (#3213)\n  > ci: add Dependabot configuration (#3191)\n  > ci: harden zig wrappers against libc++ ABI drift and opaque failures (#3190)\n  > Ensure correct bio memory buffer type is assigned (#3204)\n  > Rework order for initialisation of digest object. If memory allocation fails, object is now not in a corrupted state. (#3205)\n  > Implement EVP_PKEY_get_private_seed to return seed representation of private key (#3200)\n  > Align X.509 Limbo local patch with upstream changes (#3206)\n  > Dilently drop handshake fragments at the far edge of the seq window (#3203)\n  > Add `EVP_PKEY_kem_get_type` public accessor for KEM key NID (#3179)\n  > Scope _STL_EXTRA_DISABLED_WARNINGS to C++ to fix Ninja + clang-cl builds (#3199)\n  > Fix FIPS build under MSAN by broadening integrity-test guards (#3167)\n  > tool/s_client: fix -verify depth and missing CA store (#3189)\n  > Handle id-pkix-ocsp-nocheck in OCSP responder verification (#3169)\n  > Add WaitForFileAccessible to fix intermittent Windows test failures (#3178)\n  > Handle allocation failures in add_string's section strdup and stack push (#3187)\n  > Fix grpc CI (#3196)\n  > Silence two stringop-overflow false-positives (#3201)\n  > Prepare v1.72.1 (#3192)\n  > Update NID_rsaesOaep test certificate (#3194)\n  > ci: pin cryptography to source builds in pyopenssl integration (#3193)\n  > Bump MySQL version to 9.7.0 (#3185)\n  > Map rsaesOaep SPKI to RSA in parse_key_type (#3181)\n  > docs: update platform support tables (#3176)\n  > ci: add gh-pages workflow for API documentation (#3177)\n  > BoringSSL: Don't support parameterless DSA keys in SPKIs AND Set an EVP_PKEY's algorithm and data together (#3057)\n  > Mitigate intermittent SSL runner timeouts on FreeBSD CI (#3171)\n  > Fix intermittent `ImplDispatchTest.AEAD_AES_GCM` failure in gcc-4.8 CI (#3170)\n  > Add CI for Zig compiler support (#3142)\n  > Improve test portability for OPENSSL_NO_SOCK, OPENSSL_THREADS, and OPENSSL_NO_TTY (#3146)\n  > Generalize SSL test runner idle-timeout retry to all tests (#3163)\n  > Bump Go version in gcc-4.8 Docker image from 1.18.10 to 1.22.12 (#3168)\n  > ssl: invalidate X509 leaf/chain caches in cert_set_chain_and_key and … (#3117)\n  > Fix intermittent CA test failure on Windows CI when TEMP is unset (#3161)\n  > Bump minimum Go version to 1.20 and update Go dependencies (#3159)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-16T13:58:48Z",
          "tree_id": "f25b78c5177d59cd61f86cefa5ef7f2038b0712a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b743461cd1df847a0dcf7438412aee0ed37133bc"
        },
        "date": 1784218913631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1327.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 793.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 772.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 57.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 401.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 299.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 381.65234375,
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
          "id": "625ef017a48e3f3db01c817b7074d8d5f2fa12b3",
          "message": "Add integration tests for STS web identity credential source (#1889)\n\nAdd new integration tests for STS web identity credential source, both\nconfigured directly and through a source profile. Both tests are gated\nunder a new `web_identity_tests` crate feature.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdding changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-17T11:02:53Z",
          "tree_id": "3057fd70dac0da4e3c143ca021e92f4774b7cdc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625ef017a48e3f3db01c817b7074d8d5f2fa12b3"
        },
        "date": 1784294521328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1287,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 798,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 513,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 402.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 633,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 374.02734375,
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
          "id": "226d1d84c239f14620336dcbc2ce8ff3a543f995",
          "message": "Update changelogs to prepare v1.23.0 release (#1890)\n\nUpdate changelogs for all crates.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T15:26:39Z",
          "tree_id": "2e4c043996dec3b485b8018ce802c68dc021be13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/226d1d84c239f14620336dcbc2ce8ff3a543f995"
        },
        "date": 1784569748671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1339.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 779.25,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 584.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 15.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 397.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 303.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 621.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 378,
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
          "id": "8338038714c728653f464cb94d09793b20ba87a7",
          "message": "Add SHA pins for GitHub Actions dependencies (#1862)\n\nAdd SHA refs for all GitHub Action dependencies, pinning them to that\nspecific commit. This mitigates the risk of the dependency being updated\nwithout us knowing, acting a bit like a lock file. This change\nimplements the best practice for GHA dependencies.\n\nDependabot supports updating SHA pins, and thus will open PRs when\nrequired on the configured cadence.\n\n### Does this change impact existing behavior?\n\nCI only. It does not change version, only pins to the current version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no customer facing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-07-20T17:15:40Z",
          "tree_id": "28e45eb2570f31e169f221d04d0abe0e26132242",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8338038714c728653f464cb94d09793b20ba87a7"
        },
        "date": 1784576213222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1393.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 765.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 528.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 14.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 789.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 460.5,
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
          "id": "268bd54507ff6bc26e22590ac02bcaadf79f8386",
          "message": "Run cargo update (#1891)\n\nUpdate yanked dependency. Fixes:\n\n```\nwarning: package `spin v0.10.0` in Cargo.lock is yanked in registry `crates-io`, consider updating to a version that is not yanked\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T19:00:26Z",
          "tree_id": "431b0c25ea53840dcdb21543c3085abbca11a6ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/268bd54507ff6bc26e22590ac02bcaadf79f8386"
        },
        "date": 1784582792768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1388.25,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 799.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 581.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 58.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 16.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 16.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 19.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 299.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 545.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 383.25,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}