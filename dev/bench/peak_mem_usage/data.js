window.BENCHMARK_DATA = {
  "lastUpdate": 1740654409402,
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
          "distinct": true,
          "id": "8c68c1dea2530871f0e19f3bd75e6046c3790d1c",
          "message": "Update examples/benchmarks to use Clap derive syntax (#1258)\n\nSome of the benchmarks and other examples use the non-derive syntax of\nClap. Meanwhile, the main CLI for Mountpoint uses the derive syntax\nproviding much better ergonomics.\n\nThis change migrates to derive syntax for all benchmarks/examples,\nmaintaining existing behavior and aliasing to match the main CLI for\nconsistency. By using aliasing, we can avoid old command history or any\nscripts failing to run.\n\n### Does this change impact existing behavior?\n\nThis change does not change any behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:19:55Z",
          "tree_id": "8c38034fe2c2ce2cc41bcd0bdae8f5155272a453",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c68c1dea2530871f0e19f3bd75e6046c3790d1c"
        },
        "date": 1739208900489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13863.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25129.02734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33532.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34059.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34972.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11065.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10574.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13901.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 961.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 601.29296875,
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
          "id": "6410b8c0e138e61969572c09f55f650bd7458943",
          "message": "Add timer metric over endpoint rule engine resolution (#1262)\n\nToday, Mountpoint evaluates the rule engine with every request despite\nalways using the same endpoint in its default configuration.\n\nThis change adds a histogram metric so that we can begin to have\nvisibility on how long this is taking, and how this can be distributed.\n\n### Does this change impact existing behavior?\n\nNo, it adds a new metric for endpoint resolution.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, metrics are not considered a stable feature. This is a new metric\naddition only, no change or removal.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T16:30:47Z",
          "tree_id": "ca11b3c438a206551eeb4385d82d4815f7ee71c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6410b8c0e138e61969572c09f55f650bd7458943"
        },
        "date": 1739213175860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14540.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20581.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35664.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 68.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35067.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36890.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11410.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11185.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10039.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 842.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 532.390625,
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
        "date": 1739290651120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14407.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17514.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35347.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31015.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31186.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9519.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9427.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11693.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 761.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.26953125,
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
          "id": "e56d343ff6d9da3017c0b4888628da8ae6165883",
          "message": "Add metrics for FUSE worker idle and total count (#1264)\n\nBefore this change, there was no visibility into how many FUSE worker\nthreads within Mountpoint had been created nor any indication if they\nare all busy or not.\n\nThis change adds both a count for the number of FUSE worker threads that\nhave been spawned, as well as a count measuring how many are currently\nconsidered idle.\n\nWith the current metric implementation, these are guages and are only\nemitted when the value is updated. They are emitted in the logs as\nfollows:\n\n2025-02-11T13:00:14.647185Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:14.647227Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.total_count: 4\n2025-02-11T13:00:19.659416Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:24.672336Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:29.685867Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 4\n\n### Does this change impact existing behavior?\n\nThis adds a new metric only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new metric only. Metrics aren't advertised as a stable feature.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:49:49Z",
          "tree_id": "4d12876f8614ab18f6c151fa367edefde6eba7c7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e56d343ff6d9da3017c0b4888628da8ae6165883"
        },
        "date": 1739293484485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12102.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21006.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37611.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33076.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35700.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9295.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9780.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8907.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 871.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 565.2890625,
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
          "id": "19b706dfc2b51d031d05602a328d4120ce72115b",
          "message": "Add experimental config to write Mountpoint PID to file (#1261)\n\nWhen investigating performance, we wanted to automate the collection of\nprofiler captures using a tool like `perf`. To do this, we needed the\nprocess ID of Mountpoint. By writing out the PID to a file, scripts\ncould automatically record profiles for the lifetime of Mountpoint by\nproviding its PID to `perf`.\n\nThis change adds the ability to write Mountpoint's PID to a file under\nan experimental/unstable environment variable. Since its unclear if we\nwant to expose this properly such as providing a CLI argument, we are\ntaking the unstable environment variable approach to make clear this\nconfiguration may change or be removed in future.\n\n### Does this change impact existing behavior?\n\nThis change adds a new experimental feature to write Mountpoint's PID to\na file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSince this is adding an experimental feature, no changelog entry is\nrequired. No minor version patch is required, as this is not a stable\nfeature addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:50:57Z",
          "tree_id": "3e105b172d88ae034d0e91a237a2d0c712cfccca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19b706dfc2b51d031d05602a328d4120ce72115b"
        },
        "date": 1739293618803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12480.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26282.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35724.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 103.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32380.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35574.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10647.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11442.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13036.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 824.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 580.40625,
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
        "date": 1739293802149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13165.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20509.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33170.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36826.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34074.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11281.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12577.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13356.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 845.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 566.8828125,
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
          "id": "ed6f34bf117fcb0eab77920ba9f77201b42670b9",
          "message": "Add debug logging to FUSE flush to make upload completion clearer (#1247)\n\nIn some edge cases, Mountpoint will not be able to complete the MPU\nbefore the file is closed. For instance, we will not complete uploads\nwhere no bytes have been written since it can be common for applications\nto fork and result in file descriptor being closed before writing\nbegins.\n\nIf an application relies on close completing before another system\nqueries S3, it could lead to a race condition where the object is not\nyet in S3.\n\nWhile this is an edge case, this change adds debug logging which can\nhelp identify when this behavior occurs.\n\n### Does this change impact existing behavior?\n\nLogging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-13T16:26:23Z",
          "tree_id": "32b3f4d8ea6c36c585de17761e64cc893f7f35e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed6f34bf117fcb0eab77920ba9f77201b42670b9"
        },
        "date": 1739472282339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13127.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19419.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33070.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33446.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31802.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9817.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8757.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9869.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 875.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 617.19921875,
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
        "date": 1739554498181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12328.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17610.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35905.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30438.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32253.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10914.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9458.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11662.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 866.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.1875,
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
          "id": "d70f9195740f616eca0e4a739b83aa34065e3261",
          "message": "Enforce sse on writes to the xz cache (#1257)\n\nWith this PR, flags `--sse` and `--sse-kms-key-id` will also apply to\nobject uploads to the xz cache.\n\n### Does this change impact existing behavior?\n\nYes, bumped the version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-17T22:57:28Z",
          "tree_id": "180c78283657fbca46ba80d09c29b0976dd709a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d70f9195740f616eca0e4a739b83aa34065e3261"
        },
        "date": 1739841127796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13304.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22152.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35591.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 312.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34198.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 372.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37126.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10360.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14192.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12806.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.2890625,
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
        "date": 1739986467501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12397.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16412.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33331.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32554.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35325.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9641.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9027.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13013.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 792.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.03125,
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
        "date": 1739987358188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11481.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22235.80859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28980.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34599.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33987.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8306.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9808.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9161.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.3046875,
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
        "date": 1740130083086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13269.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20154.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32214.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29842.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31449.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8081.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9998.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11244.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 580.171875,
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
        "date": 1740406698812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11369.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22841.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34559.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30362.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34864.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11261.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10335.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12974.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 662.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.4140625,
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
        "date": 1740410727246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13176.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20705.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32884.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36070.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37323.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10716.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12254.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13001.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 731.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 419.08203125,
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
          "id": "0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa",
          "message": "Add ability to specify multiple network interfaces to benchmark script (#1285)\n\nTo investigate multiple network card performance, we want to run\nexperiments with and without multiple network cards. This change adds\nthe ability to run the benchmark experiment runner and specify both\nnetwork interfaces and the maximum network throughput parameter.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, new feature on benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no Mountpoint change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-25T18:02:35Z",
          "tree_id": "557d94cef6ae02f5344dc7298cb3b32037fa250f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa"
        },
        "date": 1740514764543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12607.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17747.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31953.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29758.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31654.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9223.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9814.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8956.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 690.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.85546875,
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
        "date": 1740574511920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11359.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23371.94140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36493.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32820.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35885.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11047.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11500.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11220.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 455.78515625,
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
        "date": 1740577461001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14711.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21457.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38098.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34393.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32753.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 415.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11418.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9596.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11444.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 766.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 528.53515625,
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
        "date": 1740587364308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14809.27734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22199.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32512.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34083.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36339.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8693.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11262.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13354.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 738.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.26171875,
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
        "date": 1740589318307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14444.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24759.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34964.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35333.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35415.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9979.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11328.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9676.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 601.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.53515625,
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
        "date": 1740654409358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13792.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25145.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32164.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31416.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33240.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10034.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10000.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12887.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 465.59765625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}