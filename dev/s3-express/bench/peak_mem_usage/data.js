window.BENCHMARK_DATA = {
  "lastUpdate": 1748611088266,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746192571022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16334.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26105.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41812.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 411.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41319.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36159.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12559.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15365.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11577.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.02734375,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746210215397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16961.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25593.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40767.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40570.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38226.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10776.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13368.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13640.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.046875,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746246520821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15429.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 31232.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37297.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 387.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35738.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36553.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12625.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15128.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11109.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3359375,
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746546101088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15908.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28217.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40388.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38238.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44675.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13033.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13322.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11944.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.21875,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746551938494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16893.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27112.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43745.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 414.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 217.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39449.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39912.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12844.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12620.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11796.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.5,
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746619638256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15853.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27971.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41496.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 266.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35936.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35815.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12540.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12746.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12634.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.7265625,
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746635098691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14960.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26940.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41767.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39788.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36512.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12192.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10748.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12224.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.953125,
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
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746793129901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17136.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30195.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36689.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40050.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36714.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13632.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14841.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11566.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.6640625,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746803515817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14844.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25767.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41764.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 240.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36100.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41457.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12232.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13268.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12645.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.53125,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746807326763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15510.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26042.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42142.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 166.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37959.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40706.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12173.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13213.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11351.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.02734375,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747052101106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15488.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27541.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41111.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36259.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41983.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13501.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13112.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12484.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.6640625,
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
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747134025437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13407.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25565.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41121.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 336.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35728.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36598.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12136.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12413.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10998.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 366.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.8515625,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747146444136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17425.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27224.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40820.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 214.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37534.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40518.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11625.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11511.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11168.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.53125,
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
          "id": "a1a162a36a9157699656ed97f3b178d345254114",
          "message": "Bump astral-sh/setup-uv from 5 to 6 (#1390)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 5\nto 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0 🌈 activate-environment and working-directory</h2>\n<h2>Changes</h2>\n<p>This version contains some breaking changes which have been gathering\nup for a while. Lets dive into them:</p>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#activate-environment\">Activate\nenvironment</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#working-directory\">Working\nDirectory</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#default-cache-dependency-glob\">Default\n<code>cache-dependency-glob</code></a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#use-default-cache-dir-on-self-hosted-runners\">Use\ndefault cache dir on self hosted runners</a></li>\n</ul>\n<h3>Activate environment</h3>\n<p>In previous versions using the input <code>python-version</code>\nautomatically activated a venv at the repository root.\nThis led to some unwanted side-effects, was sometimes unexpected and not\nflexible enough.</p>\n<p>The venv activation is now explicitly controlled with the new input\n<code>activate-environment</code> (false by default):</p>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv and\nactivate the environment\n  uses: astral-sh/setup-uv@v6\n  with:\n    activate-environment: true\n- run: uv pip install pip\n</code></pre>\n<p>The venv gets created by the <a\nhref=\"https://docs.astral.sh/uv/pip/environments/\"><code>uv\nvenv</code></a> command so the python version is controlled by the\n<code>python-version</code> input or the files\n<code>pyproject.toml</code>, <code>uv.toml</code>,\n<code>.python-version</code> in the <code>working-directory</code>.</p>\n<h3>Working Directory</h3>\n<p>The new input <code>working-directory</code> controls where we look\nfor <code>pyproject.toml</code>, <code>uv.toml</code> and\n<code>.python-version</code> files\nwhich are used to determine the version of uv and python to install.</p>\n<p>It can also be used to control where the venv gets created.</p>\n<pre lang=\"yaml\"><code>- name: Install uv based on the config files in\nthe working-directory\n  uses: astral-sh/setup-uv@v6\n  with:\n    working-directory: my/subproject/dir\n</code></pre>\n<blockquote>\n<p>[!CAUTION]</p>\n<p>The inputs <code>pyproject-file</code> and <code>uv-file</code> have\nbeen removed.</p>\n</blockquote>\n<h3>Default <code>cache-dependency-glob</code></h3>\n<p><a href=\"https://github.com/ssbarnea\"><code>@​ssbarnea</code></a>\nfound out that the default <code>cache-dependency-glob</code> was not\nsuitable for a lot of users.</p>\n<p>The old default</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c7f87aa956e4c323abf06d5dec078e358f6b4d04\"><code>c7f87aa</code></a>\nbump to v6 in README (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/382\">#382</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aadfaf08d64f83cdd98eea14fdab8eb08f73656c\"><code>aadfaf0</code></a>\nChange default cache-dependency-glob (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a0f9da6273a171f2d94cce2036eaf5a07fefa23c\"><code>a0f9da6</code></a>\nNo default UV_CACHE_DIR on selfhosted runners (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ec4c6916287cf1471f9f803d79ef6a0a04520e81\"><code>ec4c691</code></a>\nnew inputs activate-environment and working-directory (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aa1290542ebcd3b6932d825ed2b40807f82b2fdd\"><code>aa12905</code></a>\nchore: update known checksums for 0.6.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/378\">#378</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fcaddda076a8158a712b6d64986baf606c446694\"><code>fcaddda</code></a>\nchore: update known checksums for 0.6.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fb3a0a97fac846cb3395265a3087ab94ad3ca2a0\"><code>fb3a0a9</code></a>\nlog info on venv activation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/375\">#375</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T08:03:22Z",
          "tree_id": "530db272c1f8159fc1ebb78eef733907b3d97719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1a162a36a9157699656ed97f3b178d345254114"
        },
        "date": 1747217733645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15955.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29297.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36125.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 336.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34041.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39432.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14265.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14139.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13260.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 221.90625,
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
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747235191365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14513.97265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29352.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38485.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41313.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40817.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12007.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12438.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10660.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.50390625,
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
      }
    ]
  }
}