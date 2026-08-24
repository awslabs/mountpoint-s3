window.BENCHMARK_DATA = {
  "lastUpdate": 1787593179786,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Standard, Memory-Limited)": [
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
        "date": 1782763444533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3875.537890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2142.7537109375003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1188.56591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.8953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.7447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.3080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.2484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 638.2595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.64775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 745.2501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.984765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 271.39921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 50.39248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 396.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 337.2240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.8298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1908.2359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1097.27041015625,
            "unit": "MiB/s"
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
        "date": 1782773035411,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3903.99111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2117.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 789.5435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.5125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 740.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.80625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 505.21748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 391.761328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 362.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1893.534765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1111.10556640625,
            "unit": "MiB/s"
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
        "date": 1783351692253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3891.0607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2087.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1169.53017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.44677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.90205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.58583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.47822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 629.487890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.15068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 583.40712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.24169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 386.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 323.36640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 343.75205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.62041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1454.19365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1123.44326171875,
            "unit": "MiB/s"
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
        "date": 1783368700280,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3917.8313476562503,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2062.559765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1140.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.3779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.71806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.0271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 422.49091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 189.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 470.5408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 191.93583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 297.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 48.96787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 339.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 285.17509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1685.59248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.7818359375,
            "unit": "MiB/s"
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
        "date": 1783447659136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3873.26279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2121.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1145.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.499609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.86796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 8.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.118359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 477.530859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 175.58671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 528.25517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 180.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 242.78984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 322.69482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 229.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 46.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1838.86044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1053.14970703125,
            "unit": "MiB/s"
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
        "date": 1784027528331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3959.0220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2139.39736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1209.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.13701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.30576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.08154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.09921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 705.9591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.7458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 693.483984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 220.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 461.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.0123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 445.13515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 429.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.89833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1816.41708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.8431640625,
            "unit": "MiB/s"
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
        "date": 1784034805212,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3905.8513671875003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2112.5089843749997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1169.784765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.37099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.4416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.65107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 599.9783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 197.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 613.12998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.4625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 365.99462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 378.829296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 344.67421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1450.36552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.43681640625,
            "unit": "MiB/s"
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
        "date": 1784056611271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3935.01669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2086.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1157.57763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.50029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.89375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 592.7193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.2087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 579.47431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 209.3654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 316.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 50.11669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 312.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 299.546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1890.30712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.2568359375,
            "unit": "MiB/s"
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
        "date": 1784059156860,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3921.8507812499997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2138.88994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1216.17275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.35703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.63759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.446875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.38818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 8.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.3537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 664.30556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.52119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 654.09716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 195.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 324.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 52.52470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 355.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 311.1875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1831.30185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1087.91572265625,
            "unit": "MiB/s"
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
        "date": 1784148789171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3951.7136718750003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2098.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1219.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.159375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.3470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.68662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.08173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 807.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 772.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 381.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 52.30546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 385.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 347.29755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.43310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1970.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.59501953125,
            "unit": "MiB/s"
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
        "date": 1784218911041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3897.79228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2118.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1217.1837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.875390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.15576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.020703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.74130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 805.7228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.9732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 789.847265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.6666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 521.34482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.25478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 471.3267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 468.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.51025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1719.42509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.7255859375,
            "unit": "MiB/s"
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
        "date": 1784294518657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3960.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2153.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1231.425,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.35859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.79541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.051953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.14560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.10517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.85244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 846.13046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.3982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 820.93955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.74111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 567.6322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 493.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 533.4064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1499.130078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.626171875,
            "unit": "MiB/s"
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
        "date": 1784569746076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3994.8575195312496,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2108.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1244.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.93642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.73076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.805078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.96552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 874.6869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 828.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 464.8990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 476.90986328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 386.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.81064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1511.58212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.43564453125,
            "unit": "MiB/s"
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
        "date": 1784576210755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3929.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2140.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1254.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.36103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.95673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 760.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 743.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 226.09794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 474.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 478.56474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 418.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.6564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1912.3724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1160.845703125,
            "unit": "MiB/s"
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
        "date": 1784582790160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3942.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2113.08388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1221.37001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.28564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 825.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 772.70322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 507.08662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.85400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 454.40810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 455.98515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.37666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.3201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.451171875,
            "unit": "MiB/s"
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
          "id": "4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b",
          "message": "Include aws-ls/generated-src in crt-sys crate (#1892)\n\nFix build issue on macOS when running:\n\n```\ncargo package -p mountpoint-s3-crt-sys  \n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-21T07:06:45Z",
          "tree_id": "c9a67b149210b63f2f89627133fe54271c593b31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b"
        },
        "date": 1784626005470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3897.6334960937497,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2128.85693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1247.69384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.02421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 876.5375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 830.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.2208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 531.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.5388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 477.66552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 499.044140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1661.6009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1051.00234375,
            "unit": "MiB/s"
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
          "id": "a8af889f07c38d387d555a25eb92f0d88048d91d",
          "message": "Remove unmaintained `smallstr` dependency from `mountpoint-s3-crt` (#1906)\n\nRemoves the `smallstr` dependency, which is flagged unmaintained by\n`RUSTSEC-2026-0215` and fails the `cargo deny` Licenses check ([example\nrun](https://github.com/awslabs/mountpoint-s3/actions/runs/30344994989/job/90229022750?pr=1904#step:4:1754)).\nIts only use was building the `awscrt::<subject>` log target string; it\nis replaced with a small internal `LogTarget` that keeps the same\nsmall-string optimization (inline on the stack, spilling to the heap\nonly if the target exceeds 64 bytes).\n\n### Does this change impact existing behavior?\n\nNo. The log target string is identical, only the backing buffer changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-07-29T11:08:49Z",
          "tree_id": "d13e5aba3fcbebacd46de511e906049f675bd878",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a8af889f07c38d387d555a25eb92f0d88048d91d"
        },
        "date": 1785330728671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3919.873828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2096.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1214.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.510546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.95908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 837.0447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.85517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 844.3875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 227.01650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 560.83818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.1091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 537.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 483.5955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1505.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1097.499609375,
            "unit": "MiB/s"
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
          "id": "8936b54f84e58f3038c1b52e0fa32f0a8bedfb69",
          "message": "Fix Python lint errors in benchmark and packaging scripts (#1905)\n\nCI runs uvx ruff check . which picks up the latest ruff version. Ruff\n0.16.0 expanded default rules from 59 to 413, which flagged existing\ncode in `benchmark/ `and `package/`.\n  \nCommit 1: Ran` ruff check --fix `and `ruff format` - these are all\nmechanical, tool-applied changes (import sorting, type annotation\nmodernization, etc.) with no behavioral impact.\n  \nCommit 2: Added `# noqa` suppressions for remaining rules where fixing\nthem would change code behavior, which is not worth the risk for a\nlint-only PR. Also removed an unused import and fixed file permissions.\n  \nTested uvx ruff check locally and passes clean in both directories.\n\n ### Does this change impact existing behavior?\n\nNo - commit 1 is tool-applied safe fixes, commit 2 only adds lint\nsuppressions.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - CI fix only, no user-facing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-08-01T16:12:49Z",
          "tree_id": "4b894ebd602f81fdd688fcb2c9b87688fe5cc9b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8936b54f84e58f3038c1b52e0fa32f0a8bedfb69"
        },
        "date": 1785609193874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3950.54482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2150.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1279.13798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.8634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.9908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.670703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1045.7669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1029.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 664.3849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.46572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 624.5220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 606.41826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1823.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.91982421875,
            "unit": "MiB/s"
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
          "id": "b4be37f9467d7825769d43b9006a9fb02d90d7b0",
          "message": "Rename CI runner label AL2 arm to AL2023 arm (#1910)\n\nThe `AL2 arm` matrix label in `integration.yml` points at a self-hosted\nrunner pool that runs Amazon Linux 2023, not AL2 - CI logs report\n`Amazon Linux release 2023.12` and every installed package carries an\n`.amzn2023` suffix. Renamed the label to `AL2023 arm` so job names match\nthe actual environment.\n\nRun:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/30832697501/job/91750309505\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-08-04T09:30:04Z",
          "tree_id": "4acbdb229335836a4ddbc03135c2f4c6c3c699e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b4be37f9467d7825769d43b9006a9fb02d90d7b0"
        },
        "date": 1785844244419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3971.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2130.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1309.60419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.98583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.95146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.395703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1014.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.034375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 988.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 599.84853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 594.7857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 511.21796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.05302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.1306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1154.79501953125,
            "unit": "MiB/s"
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
          "id": "5006f4e98aab4e5f09f5df030233c5b37cf5f5ed",
          "message": "Upgrade actions/checkout from 6.0.3 to 7.0.1 (#1914)\n\nReplaces #1901: by default, `actions/checkout` v7 disallows checking out\nfork PR code from `pull_request_target` workflows, which is a feature we\nrely on in our integration, bench, and stress workflows. This change\nopts in by setting `allow-unsafe-pr-checkout`, which is safe because\nevery affected job sits behind `needs: approval`, a protected\nenvironment requiring maintainer review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-10T12:30:40Z",
          "tree_id": "65ff9ef0c12afa05763a772569a7877b9562f9ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5006f4e98aab4e5f09f5df030233c5b37cf5f5ed"
        },
        "date": 1786373434611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3912.3213867187496,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2150.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1276.54013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.76513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.51474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1003.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 972.11142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 232.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 555.59482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 589.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 496.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.366015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.6400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.365234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c6bbe8d673e6eb42491cd77aff03741252f3ae12",
          "message": "Bump libgit2-sys to 0.18.7+1.9.6 (#1916)\n\n### Description\n\nRan `cargo update -p libgit2-sys`.\n\nNoted getrandom went from 0.4.3 to 0.3.4 for tempfile dependency whilst\nI ran it, but shouldn't be a problem as getrandom 0.3.4 is used by\nrand_core anyways.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - patch version for affected crates. \n\n\n\n<details>\n<summary>See below for `cargo tree --invert -p libgit2-sys` (click to\nexpand)</summary>\n\n```bash\ncargo tree --invert -p libgit2-sys\n\nlibgit2-sys v0.18.7+1.9.6\n└── git2 v0.21.0\n    └── built v0.8.1\n        [build-dependencies]\n        ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n        └── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client)\n            ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n            └── mountpoint-s3-fs v0.10.1 (/xxx/mountpoint-s3/mountpoint-s3-fs)\n                └── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n                [dev-dependencies]\n                └── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client) (*)\n            [dev-dependencies]\n            ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n            ├── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client) (*)\n            └── mountpoint-s3-fs v0.10.1 (/xxx/mountpoint-s3/mountpoint-s3-fs) (*)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-08-11T14:21:05Z",
          "tree_id": "44b9485e7c3f3f5eef667f7c44807d5e57e90dc3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bbe8d673e6eb42491cd77aff03741252f3ae12"
        },
        "date": 1786467359209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4037.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2120.1451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1254.987109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.14619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.83251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.09150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.140234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.016796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 988.272265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.98935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 987.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 228.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 526.2453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 584.20166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 444.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1539.04931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1121.71875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfa381260e524d8ab5893c74a7d24df80c44f0e1",
          "message": "fix: update instance throughput table (#1895)\n\n### What changed and why?\n\nRe-generates the stale (2025-04-17) EC2 instance throughput table which\nmaps instance types to network throughput, for auto-configuring\nMountpoint target throughput through\n[`autoconfigure::get_maximum_network_throughput`](https://github.com/awslabs/mountpoint-s3/blob/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b/mountpoint-s3-fs/examples/mount_from_config.rs#L220).\n\nChanges:\n- Regenerated the table via `network_performance.sh`\n- For instances no longer offered: removed entries after checking no\nregions offer them, and removed dl1.24xlarge test case\n- Corrected `trn2.48xlarge` override throughput (`32000` → `3200`); also\nupdated test case for it.\n- Fixed multi-NIC overrides silently failing on bash <4.3 (e.g. `4x 100`\n→ `4100`) and added bash version guard.\n- Multi-NIC instances now emit `None` + a warning instead of a wrong\nnumber, if not in THROUGHPUT_OVERRIDE table\n\n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. (Just data refresh and script bug fixes).\n\n### Possible follow-ups\n\n- A GitHub Actions workflow to regenerate this table more often (at\nleast once a year)?\n- Use multiplication instead of override table for multi-NIC entries?\n- Query more regions than the 3 in the script?\n\n---\n\n### Additional Context / Testing\n\n#### Testing\n\nRandomly selected instance types and used aws ec2\ndescribe-isntance-types to check for accuracy, and also used\nhttps://instances.vantage.sh/ to quick check accuracy for a small number\nof instance types.\n\n#### Some instance types are no longer offered\n\n12 instances are not offered anymore - verified gone in all regions (not\njust the 3 we query): `dl1.24xlarge`, `f1.2xlarge`, `f1.4xlarge`,\n`f1.16xlarge`, `i3.metal`, `p3.2xlarge`, `p3.8xlarge`, `p3.16xlarge`,\n`u-9tb1.112xlarge`, `u-12tb1.112xlarge`, `u-18tb1.112xlarge`,\n`u-24tb1.112xlarge`.\n\n<details>\n<summary>Verify all instances gone in all regions (click to\nexpand)</summary>\n\n```bash\nfor r in $(aws ec2 describe-regions --region us-east-1 --query \"Regions[].RegionName\" --output text); do\n  aws ec2 describe-instance-type-offerings --region \"$r\" \\\n    --filters \"Name=instance-type,Values=dl1.24xlarge,f1.2xlarge,f1.4xlarge,f1.16xlarge,i3.metal,p3.2xlarge,p3.8xlarge,p3.16xlarge,u-9tb1.112xlarge,u-12tb1.112xlarge,u-18tb1.112xlarge,u-24tb1.112xlarge\" \\\n    --query \"InstanceTypeOfferings[].[InstanceType]\" --output text | sed \"s/^/$r /\"\ndone\n# No output\n```\n</details>\n\n\n\n#### [RESOLVED] g7.8xlarge / g7.4xlarge network performance number is\nunstable\n\n> RESOLVED - they updated both g7.4xlarge and g7.8xlarge to \"Up to 100\nGigabit\" and \"100 Gigabit\" respectively, so I've updated the table\nagain. They seemed to have changed during my commits / tests.\n\n<details>\n<summary>Check those numbers are unstable (click to expand)</summary>\n\n```bash\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.8xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output: (80 appears more usually)\n1 100 Gigabit\n9 80 Gigabit\n\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.4xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output:\n9 60 Gigabit\n1 Up to 100 Gigabit\n```\n\n</details>\n\nAdditional ref:\n- [`ec2-instance-selector`\ncomparators.go](https://github.com/aws/amazon-ec2-instance-selector/blob/71c31e5a8949f35ea0683ca1c27db9de00ae4fc3/pkg/selector/comparators.go#L302)\nthroughput number parser\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-08-13T14:57:04Z",
          "tree_id": "dbc1c4296f21bc88fe8f6b02b51d117cf723ea90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfa381260e524d8ab5893c74a7d24df80c44f0e1"
        },
        "date": 1786641461635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4020.9324218750003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2109.165625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1298.3981445312502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.92138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 952.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 909.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.510546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 571.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 534.83740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 529.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1653.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.13134765625,
            "unit": "MiB/s"
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
          "id": "e2fd6e1d39ad74e49f0aa6b984d4786bb9560080",
          "message": "Bump h2 to 0.4.16 (#1932)\n\nBump h2 to 0.4.16 from 0.4.15 to address advisory (RUSTSEC-2026-0258)\nfrom cargo deny check.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-18T13:49:10Z",
          "tree_id": "149668986d645dec7ee80e4d8073a4badbae161b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e2fd6e1d39ad74e49f0aa6b984d4786bb9560080"
        },
        "date": 1787093827783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3937.9524414062503,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2118.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1270.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.21513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.6744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.99775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.10810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 962.78837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 960.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.209765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 523.07177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 553.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 482.023046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.9947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1507.07265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1091.93896484375,
            "unit": "MiB/s"
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
          "id": "58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c",
          "message": "Fix cgroup memory limit detection for inherited limits (#1933)\n\nmount-s3 doesn't detect `cgroup` memory limits set on parent slices. A\ncustomer has a 20GB limit on the parent, but mount-s3 doesn't see it, so\nit falls back to using the host's total RAM (200GB). It oversizes\nbuffers which hits the limit and stalls completely. We use\n`System::cgroup_limits()` which only checks `/sys/fs/cgroup` (root). In\ncgroup v2, when a parent has a memory limit, children inherit it but if\nyou only read the child's `memory.max` file, it shows \"max\" (meaning no\nlimit set at this level). The actual limit is on the parent. We need to\nwalk up the tree to find it.\n\n  Switched to `Process::cgroup_limits()`:\n  - Reads `/proc/self/cgroup` to find the process's actual cgroup\n  - Walks up ancestors checking each `memory.max`\n  - Returns the smallest limit found\n\n ### Testing\n\nAdded a CI test that creates a cgroup hierarchy with `memory.max` set on\na parent slice (1 GiB) and verifies the process detects the inherited\nlimit rather than the container's own limit (2 GiB).\nWithout fix (fails):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32240451777/job/96029623759\n\nWith fix (passes):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32267673710/job/96116060108\n  \n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - fixes customer issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-08-20T10:05:57Z",
          "tree_id": "6e9010f1b7b4657d8b609dda086314348cbbfb09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c"
        },
        "date": 1787228858445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3919.4933593749997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2127.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.5923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.14384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.92333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.40908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.031640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1022.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.27080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 982.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 646.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 574.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 583.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1623.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.5427734375,
            "unit": "MiB/s"
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
          "id": "438bb9c0bf3eb4ce844b43807c7fd18140adbc05",
          "message": "Add `--memory-target` to manage memory usage (#1936)\n\nThis change adds `--memory-target <MiB>`, a target for Mountpoint's\ntotal memory\nusage that it manages read and write buffering to stay within. It is a\ntarget, not\na guaranteed limit. The default is 95% of available memory (the cgroup\nlimit where\none applies, otherwise total system memory), with a minimum of 512 MiB.\n- Mountpoint now caps how many files may be open for writing at once,\nsince each\nreserves a part-sized buffer; `open()` returns `ENOMEM` past the cap.\nThe cap and\n    the target are logged at startup.\n- `MemoryLimiter` is folded into `PagedPool`, so prefetch reads, disk\ncache blocks,\nand upload buffers share one budget and one priority-ordered allocation\nqueue.\n- Under memory pressure Mountpoint slows I/O: prefetch windows shrink,\nallocations\nqueue until memory is released, and speculatively prefetched data is\ndiscarded to\n    serve reads applications are waiting on.\n- New metrics for queue depth and wait time, cursor and seek window\nresets, and\nwrite handle rejections, plus panels in the sample CloudWatch dashboard.\n\nBenchmarks:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356468315\nStress tests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356467756\n\n#### Included changes:\n1. [Buffer Pruning: Add Per-Handle Active Read Tracking\n(#1822)](https://github.com/awslabs/mountpoint-s3/pull/1822)\n2. [Reconcile memory limiter reservations with pool allocations\n(#1816)](https://github.com/awslabs/mountpoint-s3/pull/1816)\n3. [Extract Cursor and track active reads per cursor\n(#1825)](https://github.com/awslabs/mountpoint-s3/pull/1825)\n4. [Refactor MemoryLimiter into PagedPool\n(#1826)](https://github.com/awslabs/mountpoint-s3/pull/1826)\n5. [Introduce CursorState to consolidate per-cursor memory tracking\n(#1832)](https://github.com/awslabs/mountpoint-s3/pull/1832)\n6. [Introduce a builder to create PagedPool instances\n(#1833)](https://github.com/awslabs/mountpoint-s3/pull/1833)\n7. [Add concurrent write-handle limit returning ENOMEM on open()\n(#1831)](https://github.com/awslabs/mountpoint-s3/pull/1831)\n8. [Add priority-ordered allocation queue\n(#1836)](https://github.com/awslabs/mountpoint-s3/pull/1836)\n9. [Implement cursor reset mechanism\n(#1841)](https://github.com/awslabs/mountpoint-s3/pull/1841)\n10. [Gate pool allocations through limiter\n(#1840)](https://github.com/awslabs/mountpoint-s3/pull/1840)\n11. [Gate disk cache buffer allocation through the allocation queue\n(#1843)](https://github.com/awslabs/mountpoint-s3/pull/1843)\n12. [Add basic buffer pruner\n(#1829)](https://github.com/awslabs/mountpoint-s3/pull/1829)\n13. [Gate incremental upload buffers through the allocation queue\n(#1839)](https://github.com/awslabs/mountpoint-s3/pull/1839)\n14. [Limit memory allocations instead of buffer acquisitions\n(#1844)](https://github.com/awslabs/mountpoint-s3/pull/1844)\n15. [stress: Add held_writes_vs_reads scenario\n(#1848)](https://github.com/awslabs/mountpoint-s3/pull/1848)\n16. [Gate MPU buffer allocation via get_buffer_async\n(#1846)](https://github.com/awslabs/mountpoint-s3/pull/1846)\n17. [Scale stress HDR bounds per metric unit\n(#1853)](https://github.com/awslabs/mountpoint-s3/pull/1853)\n18. [Add `pool.allocated_bytes` and improve `pool.allocated_pages`\nmetrics (#1852)](https://github.com/awslabs/mountpoint-s3/pull/1852)\n19. [Add single_reader_budget_part and many_readers_budget_part stress\ntests (#1871)](https://github.com/awslabs/mountpoint-s3/pull/1871)\n20. [Fix false-positive stress test memory invariant failures\n(#1868)](https://github.com/awslabs/mountpoint-s3/pull/1868)\n21. [Avoid full sysinfo scan when sizing stress test object budget\n(#1873)](https://github.com/awslabs/mountpoint-s3/pull/1873)\n22. [Clamp read_part_size when exceeds memory budget\n(#1869)](https://github.com/awslabs/mountpoint-s3/pull/1869)\n23. [stress: Add setup phase and held budget scenarios\n(#1874)](https://github.com/awslabs/mountpoint-s3/pull/1874)\n24. [Rename to --memory-target and remove feature gate\n(#1875)](https://github.com/awslabs/mountpoint-s3/pull/1875)\n25. [Fix stress test hanging on cleanup when workers stuck\n(#1879)](https://github.com/awslabs/mountpoint-s3/pull/1879)\n26. [Reserve buffer budget so writers don't starve reads\n(#1880)](https://github.com/awslabs/mountpoint-s3/pull/1880)\n27. [Clear active cursor's backward seek window under memory starvation\n(#1885)](https://github.com/awslabs/mountpoint-s3/pull/1885)\n28. [stress: Add direct_io and misaligned part scenarios\n(#1894)](https://github.com/awslabs/mountpoint-s3/pull/1894)\n29. [fix: Use FUSE abort to prevent stress tests from hanging\nindefinitely\n(#1887)](https://github.com/awslabs/mountpoint-s3/pull/1887)\n30. [Add incremental upload stress test\n(#1908)](https://github.com/awslabs/mountpoint-s3/pull/1908)\n31. [Copy first part to heap in `do_read` to avoid pool deadlock\n(#1904)](https://github.com/awslabs/mountpoint-s3/pull/1904)\n32. [stress: Add cache_hit_vs_miss_held_budget scenario\n(#1907)](https://github.com/awslabs/mountpoint-s3/pull/1907)\n33. [stress: Add cache_miss_held_budget_misaligned_part scenario\n(#1911)](https://github.com/awslabs/mountpoint-s3/pull/1911)\n34. [Add allocation queue depth and wait-time metrics\n(#1912)](https://github.com/awslabs/mountpoint-s3/pull/1912)\n35. [Withhold the prunable reserve from paged allocations\n(#1915)](https://github.com/awslabs/mountpoint-s3/pull/1915)\n36. [Reduce NUM_WORKERS in many_readers_budget_part stress test\n(#1918)](https://github.com/awslabs/mountpoint-s3/pull/1918)\n37. [Avoid pool-buffer aliasing deadlock and stitch multi-part reads in\none buffer (#1913)](https://github.com/awslabs/mountpoint-s3/pull/1913)\n38. [stress: Register cache block pool candidate unconditionally\n(#1920)](https://github.com/awslabs/mountpoint-s3/pull/1920)\n39. [fix(stress): Add tolerance for pool memory metrics transient\novershoot (#1893)](https://github.com/awslabs/mountpoint-s3/pull/1893)\n40. [mem: Snapshot live cursors before iterating in the pruner\n(#1922)](https://github.com/awslabs/mountpoint-s3/pull/1922)\n41. [Add Experimental metrics and rename `seek_window_clears` to\n`seek_window_resets`\n(#1924)](https://github.com/awslabs/mountpoint-s3/pull/1924)\n42. [fix(stress): show metrics and invariants before stall panic\n(#1923)](https://github.com/awslabs/mountpoint-s3/pull/1923)\n43. [Use jemalloc as the global allocator\n(#1917)](https://github.com/awslabs/mountpoint-s3/pull/1917)\n44. [Skip buffer allocation for reservations cancelled while queued\n(#1928)](https://github.com/awslabs/mountpoint-s3/pull/1928)\n45. [Promote a queued buffer request whose read turned active mid-push\n(#1930)](https://github.com/awslabs/mountpoint-s3/pull/1930)\n46. [Add memory limiter metrics to sample CloudWatch dashboard\n(#1934)](https://github.com/awslabs/mountpoint-s3/pull/1934)\n\n### Does this change impact existing behavior?\n\nYes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Kiron <kiron1@gmail.com>\nCo-authored-by: Priyankakarumuru1 <prikaru@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: kiron1 <kiron1@gmail.com>",
          "timestamp": "2026-08-20T16:46:51+01:00",
          "tree_id": "0a1fc26b050c1572a4eec389b2de11ecffce9f47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/438bb9c0bf3eb4ce844b43807c7fd18140adbc05"
        },
        "date": 1787250246555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1392.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1333.67236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1223.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 848.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 862.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 543.312109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 472.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 483.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1258.78125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.458984375,
            "unit": "MiB/s"
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
          "id": "b6aa90abbdad1774829455e16cc718af87d618f4",
          "message": "Drop stale prefetch cursor before creating a new one (#1937)\n\n**Problem:** When a read cannot be served by the current cursor,\n`try_read` created the replacement cursor and awaited its first read\nwhile the stale cursor was still held in `self.cursor`. The stale cursor\nkeeps its inflight GetObject, queued parts, backward seek window, and\npool reservation alive for that whole window, which is incorrect.\n\n**Solution**: Drop stale cursor first before creating new cursor and\nawaiting.\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-20T23:35:57+01:00",
          "tree_id": "da1519f04c90a9f70e94001b490a5b2571f36d48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6aa90abbdad1774829455e16cc718af87d618f4"
        },
        "date": 1787272685064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1373.1026367187499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1343.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1187.992578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1008.49345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 978.5130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 631.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.2943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 563.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 516.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1296.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.0017578125,
            "unit": "MiB/s"
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
          "id": "58817cab2fc3020a422d8aa14049a86b296f4498",
          "message": "Document memory limiter configuration and troubleshooting (#1938)\n\nDocuments the memory limiter shipped in #1936: a new memory usage\nsection in `CONFIGURATION.md`, expanded `--memory-target` help text, two\ntroubleshooting sections, and `CHANGELOG.md` entries.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-08-22T12:14:21Z",
          "tree_id": "5ef2a8456744180117174ce74395fe1f82f66c62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58817cab2fc3020a422d8aa14049a86b296f4498"
        },
        "date": 1787409295088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1561.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1521.8106445312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1331.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.1205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1136.80029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1108.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 672.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 664.33232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 626.62646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.14130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1446.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.36904296875,
            "unit": "MiB/s"
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
          "id": "603f237e14aebc3f207ade422ad7eadaa5724198",
          "message": "Let incremental upload drain its own pipeline before queueing for memory (#1942)\n\n**Problem:** 2GB queue buffer for append starves readers too much as\nappend buffers are high priority in buffer allocation queue.\n\n**Solution:** Let incremental upload drain its own pipeline before\nqueuing for memory (if under memory pressure)\n\n**Verification**: Benchmark results:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32668644417\n\nThroughput Benchmark (S3 Express One Zone, Incremental Upload,\nMemory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `sequential_read,sequential_write_four_threads` | `561.45126953125`\nMiB/s | `451.54580078124997` MiB/s | `0.80` |\n| `sequential_read_two_threads,sequential_write_two_threads` |\n`480.8755859375` MiB/s | `239.08544921875` MiB/s | `0.50` |\n| `sequential_read_four_threads,sequential_write` | `632.134375` MiB/s |\n`148.512890625` MiB/s | `0.23` |\n| `sequential_write_direct_io` | `111.26708984375` MiB/s |\n`111.18154296875` MiB/s | `1.00` |\n| `sequential_write` | `110.83740234375` MiB/s | `110.981640625` MiB/s |\n`1.00` |\n\nThroughput Benchmark - Peak Memory Usage (S3 Express One Zone,\nIncremental Upload, Memory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `mix_1r4w` | `467.71484375` MiB | `452.03515625` MiB | `1.03` |\n| `mix_2r2w` | `446.484375` MiB | `436.89453125` MiB | `1.02` |\n| `mix_4r1w` | `444.09765625` MiB | `452.53125` MiB | `0.98` |\n| `seq_write_direct` | `406.1953125` MiB | `406.0859375` MiB | `1.00` |\n| `seq_write` | `406.1328125` MiB | `405.96484375` MiB | `1.00` |\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T10:04:49+01:00",
          "tree_id": "e61031dfead2c18752f165c65dd278c5e2f99faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/603f237e14aebc3f207ade422ad7eadaa5724198"
        },
        "date": 1787569598772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1513.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1477.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.01357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.37314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.16318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 995.55244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1032.86630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 624.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.26044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 629.961328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 565.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1362.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.3962890625,
            "unit": "MiB/s"
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
          "id": "c247a881d80a01f204a0d85e504a3acfc1d3932c",
          "message": "Enforce `--read-only` in S3Filesystem (#1939)\n\nA read-only mount was enforced entirely by the kernel. That works when\nMountpoint performs the mount syscall, but not for a FUSE file\ndescriptor mount point, where the caller mounts and `--read-only` was\nrejected outright — discarding the only signal that could tell the file\nsystem the mount is read-only, since nothing about an fd exposes the\ncaller's `MS_RDONLY`.\n\nChanges:\n\n- Enforce read-only in the file system: `open` requesting write access,\n`setattr`, `mknod`, `mkdir`, `rmdir`, `unlink` and `rename` now fail\nwith the new `EROFS` instead of relying on the kernel to have refused\nthem. This matches what the kernel does on a read-only mount.\n- Accept `--read-only` with a FUSE file descriptor mount point\n- `MountpointConfig::create_fuse_session` validates that\n`FuseOptions::read_only` and `S3FilesystemConfig::read_only` agree\n- `cli.rs` sets `filesystem_config.read_only` from `--read-only`\n- Unrelated drive-by in a file this touches: Fix `gid` in\n`examples/mount_from_config.rs`\n\n### Does this change impact existing behavior?\n\nYes. `--read-only` with a FUSE file descriptor mount point was\npreviously rejected and now succeeds. Embedders using `MountpointConfig`\nmust set `read_only` on both `FuseOptions` and `S3FilesystemConfig`. No\nexisting mount-s3 invocation changes behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T15:43:08+01:00",
          "tree_id": "3e57e64972874316af1c1c8f7b43b0f51ecf4c6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c247a881d80a01f204a0d85e504a3acfc1d3932c"
        },
        "date": 1787589892757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1400.5255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1382.5899414062499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1257.421484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.146875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 969.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 936.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 582.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.34169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 440.957421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 452.06689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1363.88623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.29951171875,
            "unit": "MiB/s"
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
          "id": "12fec077f06acf931309fdab7e7433d5fd2ae189",
          "message": "Update changelogs to prepare v1.24.0 release (#1946)\n\nUpdate changelogs for all crates to prepare the v1.24.0 release.\n\nCrate versions were already bumped in #1936\n\n### Does this change impact existing behavior?\n\nNo, documentation only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A — this is the changelog update for the release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T16:25:45+01:00",
          "tree_id": "d877c8eb6c7090b5b8a17f7914b913d85874e423",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12fec077f06acf931309fdab7e7433d5fd2ae189"
        },
        "date": 1787593174609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1414.9787109375002,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1373.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1232.2868164062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.11787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 973.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 900.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.40439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 622.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 511.03349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 479.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.29267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.81025390625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}