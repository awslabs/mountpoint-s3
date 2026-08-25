window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
        "date": 1782773000236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4997.4080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4519.212109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.974316406249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.21455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.14443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.30146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.50458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.53359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.05048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6134.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4752.301953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1889.46650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.11240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1410.98134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.735546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1461.58251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.74287109375,
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
        "date": 1783351704979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4574.80546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3867.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5120.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.379296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.20595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.9349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.49140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.70595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.45625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.12587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5580.0072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.53232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4498.19765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.36845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1547.92783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.11865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1264.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.39345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.00068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1453.36767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.4943359375,
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
        "date": 1783368705671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5028.219531250001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3932.86181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 4778.42197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.36181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.21640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.596875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.88330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.10625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.70625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.04677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.9841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3325.3736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 188.39091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 3490.79541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 198.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1217.44375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.407421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1287.43486328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1158.20380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1827.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.9107421875,
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
        "date": 1783447827828,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4919.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3549.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 4232.64189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.06796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.280078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.45986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3797.74697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 181.6509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 3493.28955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 188.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1088.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 49.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1228.55908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 930.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 47.92705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1901.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1107.81181640625,
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
        "date": 1784020903686,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5055.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4498.605175781249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5753.96220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.81962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.719921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.2869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.84013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.52763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.1173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5888.7162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4945.85029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 218.2751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1680.3513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.91337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1451.1576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1254.64580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.56953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1445.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.70400390625,
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
        "date": 1784034844050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5035.140820312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4225.70400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5106.12724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.5232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.5279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.624609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.60888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.34248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.51484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5231.06240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 194.3216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4614.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 211.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1695.1796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1267.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.74951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1874.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1040.47861328125,
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
        "date": 1784056628003,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4692.71123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4180.855078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5201.71416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.989453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.86875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.08193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.26708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.30244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5170.8693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 193.00732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4487.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 209.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1296.0296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 49.53798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1250.10107421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1108.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1638.12412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.52001953125,
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
        "date": 1784058541921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4984.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4417.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5794.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.47890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.68271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.04541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.5951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5726.883984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4656.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 219.86728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1294.22685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1164.09736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1107.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.80498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1593.7021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1113.041015625,
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
        "date": 1784219243588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5024.2873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4551.04375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5528.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.83154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6162.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.0572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5019.56728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.78017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1814.962109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.0505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1187.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1734.0685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1077.2947265625,
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
        "date": 1784294467582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5151.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4567.59521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5755.58154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.43203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.04619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.99248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.14482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.325,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5815.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5153.71015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.80986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1640.34482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.734765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1651.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.01962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1465.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.9908203125,
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
        "date": 1784569774899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4965.5642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4610.31748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5920.46025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.834375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.94384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.07763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.7603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.78486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.32705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6067.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5231.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.5591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1745.3572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.32470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1422.84970703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1214.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.79658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1731.8171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.266015625,
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
        "date": 1784576195575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4572.8875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5873.874121093751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.226171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.54404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.30234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.60390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.20966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6149.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4828.0640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1928.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.61796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1609.83994140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1186.62314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 45.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1838.01767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.08349609375,
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
        "date": 1784582741500,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5048.59296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4530.76181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5823.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.51455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.52587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.48076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.4478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.13974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6264.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4999.229296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 226.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1834.76064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.1919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1523.96162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1391.51259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.90693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1516.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.33349609375,
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
        "date": 1784625967277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5095.25693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4391.59169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5797.31474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.621875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.15634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.115625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.825,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.706640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6232.39853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.31064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5098.66806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.46298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1653.892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.76298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.79326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.68681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1937.953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.47822265625,
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
        "date": 1785339876287,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5006.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4490.57978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5737.773828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.29248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.584765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.011328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.3421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.11259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6297.690625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5019.69365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1939.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1412.075390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1155.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2006.575390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1028.81259765625,
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
        "date": 1785609182333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5111.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4563.53525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5702.83115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.91337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.571484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.801171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.34873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.78359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.91474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6256.371484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.35693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5227.86611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.67177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.51533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1615.99150390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.23701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1472.58388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.00068359375,
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
        "date": 1785844307062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5022.841015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4532.84189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5864.9451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.94501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6289.75849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.304296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5060.4,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1599.35947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.9361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1394.59892578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1326.78154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1726.229296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.46455078125,
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
        "date": 1786373473245,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5031.1294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4489.10048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5808.1642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.67705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.97138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.40615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.21904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6189.09521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5173.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2059.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.34228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.07412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1388.04462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.9556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1507.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1071.83095703125,
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
        "date": 1786466854349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4971.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4533.03466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5788.131542968749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.171484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.764453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.740625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.058984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.26025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.105078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6363.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5095.88603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.73779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1907.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1482.13173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.1779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1879.28974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 850.266796875,
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
        "date": 1786641511958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4905.48203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4407.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5721.5291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.96220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.3259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.34892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.98232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6223.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4903.97177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.77080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1926.41533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.09130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1714.783984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1433.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1941.0724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1117.47919921875,
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
        "date": 1787179482195,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4999.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4526.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5807.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.10703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.84052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.16875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.04833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6233.13212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5117.08125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.543359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2006.00263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1429.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.16552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1698.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1115.1328125,
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
        "date": 1787228868313,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4942.92197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4461.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.005957031251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.40166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.5857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6345.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5175.6857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.57392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1566.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.81806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1508.279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.4001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1584.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.895703125,
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
        "date": 1787250269817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4763.391406250001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4241.78916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5552.1451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.94228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.76923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.57802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.84091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.19521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.06357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5834.50771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.671484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4983.542578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.39130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1389.56142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1328.198828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 52.12841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1395.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1129.85654296875,
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
        "date": 1787272716203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4867.11953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4249.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5654.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.48056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.36171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.198046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6157.43544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.69833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5086.1375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1811.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.9646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1424.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1304.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1985.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.401171875,
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
        "date": 1787409364037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4878.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4366.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5676.45927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.59091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6067.25078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5089.3783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1772.37119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1552.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1253.9712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1654.7875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.64033203125,
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
        "date": 1787569651373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4867.35419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4335.4654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5759.95654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.9748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.81337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.64677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.749609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6111.54990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.90478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5065.93271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.15234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1764.709765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.730859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1483.0109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1272.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.09921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1428.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.0490234375,
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
        "date": 1787589931732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4737.8892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4267.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5686.678515625001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.55927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.24375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.59453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.276953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.27080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6021.7412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.75615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5125.9826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1655.1517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.8455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1585.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 923.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.1107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1597.43642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1019.346875,
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
        "date": 1787593334019,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4829.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4335.55380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5680.48125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.3083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.1263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.80693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.00654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6015.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.00615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5097.99111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.45107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1453.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.1958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.08974609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1245.73525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.24150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1397.296484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.021875,
            "unit": "MiB/s"
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
          "id": "cd04b1195dec5e12d1d706ed050f965dce7b3d30",
          "message": "Bump taiki-e/install-action from 2.82.8 to 2.86.2 (#1944)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.82.8 to 2.86.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.86.2</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.6.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.2.</p>\n</li>\n</ul>\n<h2>2.86.1</h2>\n<ul>\n<li>Fix an issue where <code>oxfmt</code> was　accidentally installed as\n<code>oxfmt-{target}{exe}</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1969\">#1969</a>)</li>\n</ul>\n<h2>2.86.0</h2>\n<ul>\n<li>Support <code>oxfmt</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1967\">#1967</a>,\nthanks <a\nhref=\"https://github.com/rami3l\"><code>@​rami3l</code></a>)</li>\n</ul>\n<h2>2.85.14</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.4.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.74.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.4.0.</p>\n</li>\n<li>\n<p>Update <code>mdbook-mermaid@latest</code> to 0.17.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-xwin@latest</code> to 0.23.1.</p>\n</li>\n</ul>\n<h2>2.85.13</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.3.3.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.5.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 1.113.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.4.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.0.</p>\n</li>\n</ul>\n<h2>2.85.12</h2>\n<ul>\n<li>\n<p>Update <code>zola@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.256.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.2.10.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.0.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.4.13.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.4.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b6b84cf49ebfe0176417bdce007c624f0db37f20\"><code>b6b84cf</code></a>\nRelease 2.86.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/822eb9a731103a6afbfa603ab7ff02185a124607\"><code>822eb9a</code></a>\nUpdate <code>uv@latest</code> to 0.12.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5c017c5438cad8fb6e9855caae3622dd889862ee\"><code>5c017c5</code></a>\nUpdate prek manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f3371b0ada03f6dd26a8a4d2572a504f06b34f82\"><code>f3371b0</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/be4eb9e9090a465654bd22c6ce1fbbbc51fc9bba\"><code>be4eb9e</code></a>\nUpdate <code>mise@latest</code> to 2026.8.6</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/235fcbc6389f3fe88ef2441ea5c2b2789683ab85\"><code>235fcbc</code></a>\nUpdate <code>cargo-tarpaulin@latest</code> to 0.37.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1d8477e1cae9b584346998400732cf21d82c0a66\"><code>1d8477e</code></a>\nUpdate cargo-llvm-cov manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/288e746965032cfcc232e09af2daf5f23c14d780\"><code>288e746</code></a>\nRelease 2.86.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6012fb0aebafca00cab83d4d647a7d93eae73c49\"><code>6012fb0</code></a>\nFix oxfmt installation</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b27e114ddbae5cc01df19a22cf70a124d5177567\"><code>b27e114</code></a>\nRelease 2.86.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.82.8...v2.86.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.82.8&new-version=2.86.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:23:46Z",
          "tree_id": "7471365736d5159a22067190645ba595d87ff102",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cd04b1195dec5e12d1d706ed050f965dce7b3d30"
        },
        "date": 1787670711406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4866.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4282.97578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5498.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.63994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.82158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.02880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.27001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.32578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5886.675390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.670703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4967.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.26767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.65283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1599.37294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.8509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1399.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.226171875,
            "unit": "MiB/s"
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
          "id": "fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.1 to 6.2.3 (#1925)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.1 to 6.2.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.3</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2>v6.2.2</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.2...v6.1.3\">6.1.3</a>\n(2026-05-28)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>fix: allow kubelet token symlink in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1805\">#1805</a></li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.1...v6.1.2\">6.1.2</a>\n(2026-05-26)</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e6de054238d6b7531b4efff3b6587d9aade6a06c\"><code>e6de054</code></a>\nchore(main): release 6.2.3 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1878\">#1878</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/ab3b2ba025afb33b6856abfc1626992c70909302\"><code>ab3b2ba</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\"><code>fa8d6a5</code></a>\nfix: PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/42e118a65655a9bcd2929e1ab7c4588fdd3255d3\"><code>42e118a</code></a>\nchore(deps-dev): bump markdownlint-cli from 0.49.0 to 0.49.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1896\">#1896</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d86ddfcecc93d50cd1d1ca675d859403357c3d89\"><code>d86ddfc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/874aaac21e617e1544df3c6a9f043c9bc96adf70\"><code>874aaac</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1086.0 to\n3.1091.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1892\">#1892</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d4341b65accaa2ddbb952380d8ef12f95043d338\"><code>d4341b6</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fe51823c9714409fc32ade60b0bb4e79890beff1\"><code>fe51823</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1894\">#1894</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a8be382115e1ad5c77c560af842deddb56cd375c\"><code>a8be382</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1893\">#1893</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e000376c2c1f88ccef5f22a6bda02c24932d8ea5\"><code>e000376</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/254c19bd240aabef8777f48595e9d2d7b972184b...e6de054238d6b7531b4efff3b6587d9aade6a06c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:34:19Z",
          "tree_id": "df8438cb52defad4e663612968622b4741bf6349",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3"
        },
        "date": 1787673175618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4831.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4278.2349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5658.13818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.118359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5937.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.68525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4925.3599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1631.74111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1358.57578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1250.78896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1432.39775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.73388671875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1787673180990,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}