window.BENCHMARK_DATA = {
  "lastUpdate": 1792419927418,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Standard, Memory-Limited)": [
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
          "id": "d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101",
          "message": "Fix warnings setting in setup-rust-toolchain (#1962)\n\nHandling of warnings has changes in setup-rust-toolchain v2.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-16T13:29:44Z",
          "tree_id": "3b34f79e4c3e587633efa21bd6401e17bf8f40c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101"
        },
        "date": 1789574109844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1628.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1558.2247070312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1318.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.176953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.7443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.43583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.76669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 941.89521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.1869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 935.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 230.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 521.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 524.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 472.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1109.42041015625,
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
          "id": "f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e",
          "message": "Upgrade Rust toolchain to 1.98 (#1961)\n\nUpgrade Rust toolchain to 1.98 and address new clippy warnings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-17T06:39:30Z",
          "tree_id": "9c7da4c527a9329c16add4edbe8cfe9a6345b39d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e"
        },
        "date": 1789635620547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1620.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1577.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1334.9447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.403515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.32783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 969.17734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.32060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1003.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 220.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 504.478125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 562.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 505.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.96787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1461.0240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.55263671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cayoub@openai.com",
            "name": "Chris Ayoub",
            "username": "cayoub-oai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd69056aed9dd6ae004e3adb98adf4ba60f5c682",
          "message": "Fix directory lookup after empty S3 list pages (#1954)\n\nS3 can return empty `ListObjectsV2` pages with a continuation token.\nDirectory lookup currently treats these as evidence that the directory\nis missing, causing false `ENOENT` errors or exposing a file that should\nbe shadowed by a directory.\n\nContinue listing while both objects and common prefixes are empty and a\ncontinuation token is present. Stop once the directory is found or the\nlisting is exhausted.\n\nAs part of testing, reproduced the failure with unpatched Mountpoint\nagainst real S3 and verified that the patched binary resolves the\ndirectory and reads a nested file matching its direct S3 download.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Fixes incorrect lookup results after empty,\ntruncated pages. Lookups may take longer because they now follow\npagination instead of returning an incorrect result early.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Chris Ayoub <cayoub@openai.com>",
          "timestamp": "2026-09-18T12:29:56Z",
          "tree_id": "71a1e7be1fe3c4e7b472594a0a948d8b4a889a06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd69056aed9dd6ae004e3adb98adf4ba60f5c682"
        },
        "date": 1789743185034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1581.22216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1534.7847656249999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1305.230859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.42958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.41943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 965.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.066015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 981.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 221.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 482.365625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 559.8205078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 466.69248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.2359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1512.73466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.78388671875,
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
          "id": "5fb7671de0ea86b0fdd4ed7343cbd4094589138c",
          "message": "Bump taiki-e/install-action from 2.87.8 to 2.87.12 (#1965)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.8 to 2.87.12.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.12</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 48.0.2.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.259.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.13.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.165.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.144.</p>\n</li>\n</ul>\n<h2>2.87.11</h2>\n<ul>\n<li>\n<p>Update <code>biome@latest</code> to 2.5.13.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.12.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.4.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.19.0.</p>\n</li>\n</ul>\n<h2>2.87.10</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.30.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.11.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.164.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.3.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.2.0.</p>\n</li>\n</ul>\n<h2>2.87.9</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.82.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.2.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.18.0.</p>\n</li>\n<li>\n<p>Update <code>d2@latest</code> to 0.9.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.1.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3f74d7c16a4242f1c95561e98edc25d36adb4375\"><code>3f74d7c</code></a>\nRelease 2.87.12</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e7f36aa5946476a40e5a2af1a5153c247e70d548\"><code>e7f36aa</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b208ecf6341e27a32fd9a0f8e1821a008552f41c\"><code>b208ecf</code></a>\nUpdate zola manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/497268209395d5883d6a88462e1c9c6bf3fbbeff\"><code>4972682</code></a>\nUpdate <code>wasmtime@latest</code> to 48.0.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9f978f55d62c453c7eb420ab8cc3f13ba748aa42\"><code>9f978f5</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.259.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/01d96944a7a5eab62bfb45b5ba70d36285f8534c\"><code>01d9694</code></a>\nUpdate <code>uv@latest</code> to 0.12.13</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7af43af4f6fc1df7d126ab45be6a2e8770112f87\"><code>7af43af</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.165</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5ebe8aae964ff306a8f78d0e61277195869cc640\"><code>5ebe8aa</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/c054431878700879a4853ce12d3c492be3580620\"><code>c054431</code></a>\nUpdate <code>mise@latest</code> to 2026.9.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/2ad5cec3cabb51430ef1c2ac40ba63f32add42a9\"><code>2ad5cec</code></a>\nUpdate <code>cargo-nextest@latest</code> to 0.9.144</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.8...v2.87.12\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.8&new-version=2.87.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T09:26:50Z",
          "tree_id": "119a1d5a6b3382c6f7e2f3f0da544f224fc341fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fb7671de0ea86b0fdd4ed7343cbd4094589138c"
        },
        "date": 1789991240548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1499.5052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1482.42900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.4916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.053125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.73125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.10263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 926.49169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.8080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 875.35498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.37998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 486.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.94462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 482.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 456.13359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.42001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1078.78662109375,
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
          "distinct": true,
          "id": "c39da96972976ab28c9bd4eb3ae6e670ee4e6394",
          "message": "Bump astral-sh/setup-uv from 10.0.1 to 10.1.0 (#1966)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.0.1 to 10.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.1.0 🌈 New output <code>python-runtime-id</code>and respect\nNO_PROXY</h2>\n<h2>Changes</h2>\n<p>This release adds more bheind the scene security improvements and\nalso 2 small improvements.</p>\n<h3>NO_PROXY</h3>\n<p>This action now respects <code>no_proxy/NO_PROXY</code> environment\nvariables which were previously ignored.</p>\n<h3>New output <code>python-runtime-id</code></h3>\n<p>The new output <code>python-runtime-id</code> can be used to know\nwhich python version exactly was installed if you use\n<code>activate-environment</code>. See <a\nhref=\"https://redirect.github.com/pyca/cryptography/pull/15572#discussion_r3913508686\">pyca/cryptography#15572</a>\nfor details on why this can be useful.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>fix: respect no proxy directive <a\nhref=\"https://github.com/mj0nez\"><code>@​mj0nez</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li>Use JSON + a typed wrapper instead of TS codegen <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1025\">#1025</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Expose a Python &quot;identity&quot; output <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li>Verify downloads with astral-sh/versions checksums <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.12 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li>chore: update known checksums for 0.12.10/0.12.11 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li>chore: update known checksums for 0.12.9 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li>chore: update known checksums for 0.12.7/0.12.8 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li>chore: update known checksums for 0.12.6 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li>chore: update known checksums for 0.12.5 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1020\">#1020</a>)</li>\n<li>Use self-repo syntax for all in-repo actions/reusable workflows <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1024\">#1024</a>)</li>\n<li>Pin one-shot tools <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1022\">#1022</a>)</li>\n<li>ci: remove obsolete direct push attempts <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1019\">#1019</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1018\">#1018</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps-dev): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li>Harden npm install defaults <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Add dependency cooldowns <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1021\">#1021</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bec219d24cd3e171d82865faccec33120bb574f4\"><code>bec219d</code></a>\nchore(deps-dev): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b90ec40d15bfa44c33c6700196eb6efcdddb4373\"><code>b90ec40</code></a>\nfix: respect no proxy directive (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/421feb646df5262e7dd93bc54161edfa30372417\"><code>421feb6</code></a>\nchore: update known checksums for 0.12.12 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f634bf473ad85bf3e23a613f52c5fa9f363874fc\"><code>f634bf4</code></a>\nExpose a Python &quot;identity&quot; output (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a6772c8f0a09dc9e3582c70a994b0c55af921803\"><code>a6772c8</code></a>\nchore: update known checksums for 0.12.10/0.12.11 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e105c8fb1d7b13074b851babdaef4185243c6a07\"><code>e105c8f</code></a>\nchore: update known checksums for 0.12.9 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/cd13f9217092d43a771cf9ba7b09bdd3da8d7c4d\"><code>cd13f92</code></a>\nVerify downloads with astral-sh/versions checksums (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3aef7b92c52cec135792ea1e95f4c77683d39e61\"><code>3aef7b9</code></a>\nchore: update known checksums for 0.12.7/0.12.8 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d08d816a1ea176d61a318eff45abd3dffef415b1\"><code>d08d816</code></a>\nchore: update known checksums for 0.12.6 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/19b4d1e990bec64818914c40230bde93a0de300b\"><code>19b4d1e</code></a>\nHarden npm install defaults (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/20cfd1bf945f4377ade1205e4dbc17946fc9a30d...bec219d24cd3e171d82865faccec33120bb574f4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.0.1&new-version=10.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T10:00:24Z",
          "tree_id": "6efa144aad3422cb2afdcc12d26eec9b038cf599",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c39da96972976ab28c9bd4eb3ae6e670ee4e6394"
        },
        "date": 1789994114659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1446.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1428.4640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1195.87119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.0130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.06572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.18203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.82216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 892.38701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.37744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 872.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.54228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 568.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.49697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 471.58564453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 478.5416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1410.034765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 931.30673828125,
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
          "id": "ffa5658c676e4c646d06a2b013ead6b27160f2e2",
          "message": "Update CRT submodules to latest releases (#1967)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v0.10.4` -> `v1.0.0`\n* `aws-c-cal` `v0.9.14` -> `v1.0.0`\n* `aws-c-common` `v0.14.2` -> `v1.0.1`\n* `aws-c-compression` `v0.3.2` -> `v1.0.0`\n* `aws-c-http` `v0.11.0` -> `v1.0.0`\n* `aws-c-io` `v0.27.3` -> `v1.0.0`\n* `aws-c-s3` `v0.12.8` -> `v1.1.3`\n* `aws-c-sdkutils` `v0.2.7` -> `v1.0.0`\n* `aws-checksums` `v0.2.10` -> `v1.0.0`\n* `aws-lc` `v5.1.0` -> `v5.9.0`\n* `s2n-tls` `v1.7.5` -> `v1.7.10`\n\nAlso exclude aws-lc's new Keccak test vectors from the published\nmountpoint-s3-crt-sys archive, as they are not required to build the\nCRT. The compressed crate is 9.2MiB, within the 10MiB crates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 4b5d524bf..055e822f0:\n  > chore(release): add governance files (#303)\n  > Clean up docs (#301)\n  > chore(release): patch-update to VERSION - 0.10.5\n  > CI/CD improvements (#302)\n  > Use latest as aws-crt-builder version (#300)\n  > Add thread sanitizer CI job (#299)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 9edd8eac2..2441187f3:\n  > chore(release): add governance files (#257)\n  > Clean up docs (#255)\n  > CI/CD improvements (#256)\n  > Expand ecc validation test (#254)\n  > ECC Validation Test (#253)\n  > Use latest as aws-crt-builder version (#252)\n  > Swap fatal for soft error (#251)\n  > Update deprecated OpenBSD CI job (#250)\n  > Regression Labeler Fix (#249)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common a9d57d2d3..69cd45209:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Helpers for file descriptor opertaions.  (#1272)\n  > Debug API to override default thread options (#1273)\n  > Bullseye -> Bookworm (#1276)\n  > Fix wrong libdir on some platforms (#1271)\n  > Add some error code utility functions (#1270)\n  > External shutdown error (#1269)\n  > chore(release): add governance files (#1267)\n  > Suppress MSAN false positive (#1264)\n  > Clean up docs (#1263)\n  > Release 0.14.5 (patch)\n  > CI/CD improvements (#1250)\n  > Use latest as aws-crt-builder version (#1261)\n  > aws_file_get_last_modified_epoch (#1258)\n  > Fix windows nonascii env (#1260)\n  > Add HWASan suppression support (#1256)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression d8264e64f..891312c05:\n  > chore(release): add governance files (#81)\n  > Clean up docs (#79)\n  > chore(release): patch-update to VERSION - 0.3.3\n  > CI/CD improvements (#80)\n  > Use latest as aws-crt-builder version (#78)\n  > Regression Labeler Fix (#77)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 8aefd899f..2b563f8a7:\n  > chore(release): add governance files (#575)\n  > Clean up docs (#573)\n  > chore(release): patch-update to VERSION - 0.11.1\n  > CI/CD improvements (#574)\n  > HPACK String Length Validation (#572)\n  > Enforce MAX_HEADER_LIST_SIZE (#568)\n  > Fix use-after-free in stats gathering during connection shutdown(#570)\n  > Use latest as aws-crt-builder version (#569)\n  > Regression Labeler Fix (#564)\n  > Support s2n-tls on macOS (#560)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8bda5cf0f..1685abcd3:\n  > chore(release): add governance files (#828)\n  > Clean up docs (#821)\n  > chore(release): patch-update to VERSION - 0.27.7\n  > CI/CD improvements (#824)\n  > Fix read-window stall by gating window updates on the scarcest slot (#818)\n  > Automate test cert renewal (#820)\n  > Use latest as aws-crt-builder version (#817)\n  > Expose option to set TCP_NODELAY on sockets (#816)\n  > log the negotiated TLS version (#815)\n  > Handle optional s2n-tls in the install CMake config (#814)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 448ec5e49..805ca0f4c:\n  > chore(release): patch-update to VERSION - 1.1.3\n  > feat: add more metrics to S3 metrics object (#673)\n  > Checksum validation handling cleanup (#678)\n  > API to Get Default S3 Memory Limits (#681)\n  > chore(release): patch-update to VERSION - 1.1.2\n  > move the check and relax it for the file streaming case (#680)\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add S3 Metrics (#674)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Add retry_config to aws_s3_client_config (#672)\n  > Retry on 502 504 errors (#671)\n  > Sub 10Gbps S3 Throughput Handling (#670)\n  > chore(release): add governance files (#668)\n  > chore(release): patch-update to VERSION - 0.13.7\n  > update doc on endpoint resolver update script (#667)\n  > fix(copy-object): forward request-payer to the source-size HEAD (#654)\n  > Clean up docs (#665)\n  > chore(release): patch-update to VERSION - 0.13.6\n  > CI/CD improvements (#666)\n  > Combine per-part CRCs for whole-object download checksum validation (#663)\n  > support opaque etags (#664)\n  > fix resume token build (#661)\n  > Use latest as aws-crt-builder version (#660)\n  > [feat.] async pause and on_error_resume_token (#649)\n  > Turn nagle off (#659)\n  > Restore enums values that were deleted on accident. (#658)\n  > fix ordering of read from stream (#655)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils cb14fea36..de0fbe807:\n  > chore(release): add governance files (#74)\n  > Clean up docs (#72)\n  > chore(release): patch-update to VERSION - 0.2.10\n  > CI/CD improvements (#73)\n  > Relax handling of unmodeled context params in bdd (#71)\n  > Use latest as aws-crt-builder version (#70)\n  > fix bdd header encoding (#69)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 1d5f2f1f3..ee7c435de:\n  > chore(release): add governance files (#119)\n  > Clean up docs (#116)\n  > chore(release): patch-update to VERSION - 0.2.11\n  > CI/CD improvements (#117)\n  > Use latest as aws-crt-builder version (#115)\n  > Update deprecated OpenBSD CI job (#114)\n  > Regression Labeler Fix (#113)\n  > Fix clang-cl compilation (#112)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 6283365b1..39b142ec3:\n  > Prepare v5.9.0 (#3523)\n  > Report unexpected EOF as `SSL_ERROR_SSL` for OpenSSL 3.x parity (#3484)\n  > Parallelise the serial Windows builds in Windows Alternative Compilers (#3516)\n  > Avoid duplicate formal-verification runs on PR branches (#3526)\n  > Fail the ABI check when abidiff cannot run (#3511)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3399)\n  > Replace the error-queue trim helpers with a suppression scope (#3529)\n  > Run the macOS jobs on a single OS version (#3513)\n  > Stop building the test suite in the ABI diff image (#3512)\n  > Thin the compiler-tests config axis (#3515)\n  > Remove duplicate Python CRT integration work (#3525)\n  > ci: enable shared libraries for clang-tidy provider build (#3520)\n  > ci: fix OpenSSH integration (#3519)\n  > ci: fix librelp integration test (#3517)\n  > ci: fix mariadb integration (#3518)\n  > Add ERR_num_errors and ERR_pop_to_count (#3501)\n  > Cache the CMake-from-source image layers in CMake compatibility CI (#3510)\n  > Add OpenSSL-compatible EVP_CTRL_CCM_* aliases (#3490)\n  > Fix EVP signing-context control collision (#3458)\n  > Fix BN_CTX leak on allocation failure in `EC_GROUP_new_curve_GFp` (#3506)\n  > ci: handle expired Bullseye repository in legacy GCC jobs (#3508)\n  > Export OpenSSL-compatible ECPKParameters buffer APIs (#3493)\n  > Fix tpm2-tss integration build without SM4 (#3507)\n  > Add legacy SSL function codes for OpenSSL compatibility (#3491)\n  > Register -tls1_2 and -tls1_3 flags in bssl client (#3492)\n  > Gate ruby master rubygems ML-DSA tests on key loading, not generation (#3479)\n  > Use OpenSSL-compatible long names for ML-DSA OIDs (#3481)\n  > Document the AWS-LC provider (#3434)\n  > Implement SHA-256 through the AWS-LC provider (#3433)\n  > ci: record integration failure metadata (#3482)\n  > ci: fix failing librelp integration (#3480)\n  > Add ML-KEM support to HPKE (draft-ietf-hpke-pq-05) (#3277)\n  > Limit push-triggered CI to main and fips-* branches (#3478)\n  > Prepare 5.8.0 (#3476)\n  > Implement the AWS-LC provider interface (#3432)\n  > Route req -extensions to the certificate and add -reqexts for the CSR (#3469)\n  > Add FIPS_module_name to report the cryptographic module name (#3473)\n  > Print FIPS module name in cli tooling (#3471)\n  > Prepare 5.7.0 (#3465)\n  > Fix EVP_DecryptUpdate output handling (#3460)\n  > Define AT_HWCAP* when <sys/auxv.h> hides them (#3429)\n  > Add SECURITY.md with AWS-LC threat model (#3421)\n  > Prepare 5.6.0 (#3448)\n  > Re-import mlkem-native and mldsa-native; drop custom meta headers (#3367)\n  > Define BN_FLG_CONSTTIME as zero for source compatibility (#3446)\n  > ci: consolidate android-omnibus deployments on external PRs (#3447)\n  > ci: stop deployment noise for maintainers (#3445)\n  > Install OpenSSL-compat libcrypto.pc and libssl.pc with the shim (#3370)\n  > Pin librelp to a release, wrap `SSL_get_shutdown` for failing integration test (#3431)\n  > Fix ML-DSA externalMu JSON tags (#3439)\n  > Upgrade JDK to JDK21 for ACCP tests (#3440)\n  > Decouple symbol versioning from distribution packaging mode (#3426)\n  > Bump the cargo-ci-lambda group in /tests/ci/lambda with 4 updates (#3390)\n  > Add latest compiler coverage to CI (#3406)\n  > Move network-dependent s_client tests into integration_test (#3407)\n  > Update pull request template (#3436)\n  > Add AWS-LC provider build and CI infrastructure (#3419)\n  > Add backport apply command (#3414)\n  > ci: re-enable gcc-14 + FIPS build in gcc-14-hardened job (#3428)\n  > ci: use preinstalled Rust in pyopenssl integration (#3430)\n  > Fix Windows OPENSSL_SMALL Debug builds with NASM 2.16.01 (#3420)\n  > ci: install Rust in the Linux docker images (#3393)\n  > Enable mtr retries in MariaDB CI integration (#3427)\n  > Add Backport Tool Analysis (#3389)\n  > Reject GCM IV lengths below 8 in EVP_CTRL_GCM_IV_GEN (#3424)\n  > ci: pin security review to the PR head commit (#3425)\n  > Add Keccak-256 (Ethereum-style, original 0x01 padding) (#3245)\n  > Add memcached integration test (#3410)\n  > Add CPython 3.15 integration test (#3422)\n  > Add brainpool EC_group symbols; make public API symbol registration self-service (#3423)\n  > Harden CLI input validation and file output (#3347)\n  > Document how to build applications against AWS-LC (#3386)\n  > Add brainpoolP224r1, brainpoolP256r1, brainpoolP320r1, brainpoolP384r1, brainpoolP512r1 EC group support (#3286)\n  > Avoid /usr/bin/env dependency in FIPS compiler wrapper (#3411)\n  > BoringSSL: Fix beeu_mod_inverse_vartime on aarch64 (#3381)\n  > Update MySQL CI integration to mysql-cluster-9.7.2 (#3409)\n  > Fix `grpc-master-x86_64` integration test  (#3346)\n  > ci: remove Graviton5 c9g fleet and job (#3400)\n  > Share Bedrock model settings between autofix and util/backport (#3395)\n  > Fix thread-local destructors with MSYS2 clang64 (#3405)\n  > Prepare 5.5.0 (#3401)\n  > Enable linker garbage collection for non-FIPS static builds (#3397)\n  > Update concurrency in `security-review` (#3403)\n  > Add MinGW shared-library Windows CI coverage (#3398)\n  > Bump urllib3 from 2.6.3 to 2.7.0 in /tests/ci (#3372)\n  > Update FIPS.md (#3382)\n  > Fix docker image dependencies and update octocrab initialization (#3388)\n  > Bump ring from 0.17.8 to 0.17.14 in /tests/ci/lambda (#3375)\n  > Add Neoverse-V3 (Graviton5) detection and dispatch (#3374)\n  > delocate: Drop redundant `-dI` flag (#3384)\n  > ci: pin openssh required job (#3387)\n  > Rename autofix reasoning role to AwsLcGitHubActionsBedrockRole (#3376)\n  > Link header documentation from README (#3378)\n  > Add tests for RSASSA-PSS with SHA-3 digest and MGF1 (#3377)\n  > chore: simplify the api docs workflow (#3186)\n  > Fix flaky s_client cipher tests by using better ciphers (#3373)\n  > ci: harden security-review.yml against script injection (#3365)\n  > Include <openssl/cipher.h> from <openssl/hmac.h> for OpenSSL compat (#3371)\n  > Restore ADX/AVX2 code paths under OPENSSL_SMALL via new MY_ASSEMBLER_IS_TOO_OLD_FOR_ADX_AVX2 flag (#3368)\n  > Bump to v5.4.0, add AES-KWP wrap/unwrap CASTs (#3366)\n  > Use built-in Camellia in krb5 integration patch; fix CTS doc label (#3349)\n  > Remove dead P-256 nistz asm under OPENSSL_SMALL and extend the size-check harness (#3350)\n  > ci:ctest timing summary for MacOS (#3288)\n  > Support for `EVP_AEAD_CTX_copy` (#3332)\n  > Add AArch64 NEON runtime fallback for ML-KEM and ML-DSA (#3353)\n  > Prepare 5.3.0 (#3354)\n  > Add ACVP support for multi-expansion HKDF (#3352)\n  > Bump golang.org/x/crypto from 0.47.0 to 0.52.0 in /util/vecgen (#3339)\n  > Auto-fix integration patches and upload to S3 (#3324)\n  > Bump log from 0.4.30 to 0.4.33 in /tests/ci/lambda in the cargo-ci-lambda group (#3329)\n  > Prepare v5.2.0 (#3348)\n  > Fix `SSL_OP_IGNORE_UNEXPECTED_EOF` being ignored over sockets (#3341)\n  > Gate s2n-bignum _alt variants under OPENSSL_SMALL (#3320)\n  > Add CTS mode, krb5 integration test (#3308)\n  > Bump github.com/google/go-cmp from 0.6.0 to 0.7.0 in /tests/ci/x509/limbo-report in the gomod-limbo-report group (#3328)\n  > Bump github.com/cloudflare/circl from 1.6.3 to 1.6.4 in /util/vecgen in the gomod-vecgen group (#3327)\n  > openssl/target.h: Allow building for the e2k architecture (#3314)\n  > ci: harden GitHub Actions workflows against script injection (#3323)\n  > Pin required libssh2 integration to a release; track main separately (#3343)\n  > Add ML-KEM decapsulate CASTs to break-kat tooling (#3342)\n  > Update security review workflow (#3333)\n  > Symbol versioning follow-ups: register peer cert APIs, fix dist_pkg_tests matrix (#3338)\n  > Add Symbol Versioning Support (#3096)\n  > Null-guard EVP_AEAD_CTX_cleanup for fork+shm safety (#3336)\n  > Fix libgit2, xtrabackup, grpc tests and add OSSL3 peer cert APIs (#3331)\n  > Documented and added feature stability tests for EVP_AEAD implementations that support concurrency through EVP_AEAD_CTX_seal/gather functions (#3325)\n  > OPENSSL_SMALL: imply MY_ASSEMBLER_IS_TOO_OLD_FOR_512AVX on x86_64 (#3319)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls f5f6c6c2c..bce022f41:\n  > feat(metrics-subscriber): expose compatibility profile allow-lists (#6086)\n  > fix: free client pub_key on all error paths in server shared secret (#6063)\n  > fix: free encoded point on write failure in s2n_ecc_evp_write_params_point (#5964)\n  > fix: zero-initialize s2n_tls13_keys in PSK binder functions (#6048)\n  > fix: enforce JA4 list limit when building fingerprint (#6047)\n  > fix: always free async offload op during connection teardown (#6080)\n  > feat(s2n-tls-metrics): Add hello_retry_request_count (#6078)\n  > fix(integration): replace BoringSSL fork git dependency with btls crate (#6067)\n  > fix: bounds-check cert pkey type before array indexing (#6054)\n  > feat(bindings): add signature_public_key_type to Connection (#6076)\n  > fix(metrics): normalize s2n signature (#6077)\n  > fix: restrict cert signature preferences in custom CNSA2 interop policies (#6073)\n  > feat: skip blinding delay on missing required client cert (#6072)\n  > feat(metrics): add negotiated metrics for compatibility (#6068)\n  > feat: add `s2n_conn_get_signature_public_key_type` API (#5963)\n  > chore(bindings): release bump v0.3.43 (#6070)\n  > perf(sidetrail): Avoid digest zeroing in proof (#6056)\n  > chore: upgrade CBMC to 6.11.0 (#6061)\n  > fix: set actual_protocol_version_established on deserialized connections (#6049)\n  > fix(bindings): avoid mutable aliasing in shared Config callbacks (#6053)\n  > docs: io callback examples (#6036)\n  > feat: add backwards compatible hybrid PQ policies (#6044)\n  > chore: bump metrics subscriber for release (#6050)\n  > fix(metrics): jitter export timing (#6046)\n  > fix(cbc): Disable padding after key init and check decrypt len (#6042)\n  > test: print assertion backtraces in FAIL_MSG_PRINT (#5785)\n  > build(deps): bump cross-platform-actions/action from 1.3.0 to 1.4.0 in /.github/workflows in the all-gha-updates group (#6035)\n  > fix(connection): Make set_config validator replacement transactional (#5847)\n  > feat: add s2n_connection_handshake_complete() public API (#5906)\n  > fix: Add fail-closed default cases to all switch statements (#6006)\n  > fix: Zero-initialize all local variable declarations (#6007)\n  > feat(metrics): flush on drop (#6032)\n  > fix: fail explicitly when server selects unavailable KEM group in key share recv (#6026)\n  > ci: Use GitHub mirror for musl and upgrade octokit action to Node 24 (#6031)\n  > chore: update http test with new status code (#6034)\n  > fix(bindings): default to efficient record size (#6020)\n  > test: add behavior tests for Connection::wipe (#6029)\n  > fix: handshake integrity over content types (#6017)\n  > fix: zero-init hash state and guard async offload wipe against in-flight ops (#6028)\n  > chore(bindings): release bump (#6027)\n  > chore: remove inline policy builder code (#6025)\n  > fix: prevent use-after-free in `Connection::set_config` when C setter rejects replacement (#6023)\n  > fix(psk): return usage error for uninitialized offered PSK (#6009)\n  > test: peer_cert_chain behavior with elided CA (#5914)\n  > fix(docs): Hide unstable-renegotiate poll_send cfg in rustdoc (#6022)\n  > fix: null `evp_cipher_ctx` after free in `s2n_session_key_alloc()` error path (#6024)\n  > fix(ci): update msrv check to use Cargo.toml (#6021)\n  > feat: add custom CNSA2 interop policies (#6011)\n  > docs(build): clarify OpenSSL FIPS support and shared responsibility (#5856)\n  > docs: document threading contract on s2n_async_pkey_op_apply and reje… (#5845)\n  > fix: emit trailing colons for IPv6 addresses ending in a zero run (#5842)\n  > fix: ensure record integrity over header version (#6014)\n  > build(deps): bump actions/stale from 10 to 11 in /.github/workflows in the all-gha-updates group (#6016)\n  > refactor: use header struct for decryption (#6004)\n  > docs: add resources about Coordinated Vulnerability Disclosure to SECURITY.md (#5927)\n  > build(deps): update crabgrind requirement from 0.2 to 0.3 in /tests/regression in the all-cargo-updates group across 1 directory (#5972)\n  > style(integv2): run latest ruff format & check (#6005)\n  > ci: update stale patch files for clang-format (#6000)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5994)\n  > fix: use leaf public key NID for ML-DSA signature scheme matching (#5997)\n  > feat: Include the error code in s2n_error Display impl (#5988)\n  > fix: prefer clang for libs2n LTO to work under rust-lld (#5996)\n  > chore: s2n-tls rust bindings v0.3.41 release (#5998)\n  > fix(duvet): Correct CCS quote attribution to RFC 8446 section 5 (#5999)\n  > Merge commit from fork\n  > Merge commit from fork\n  > fix: guard against underflow in record wipe length (#5973)\n  > feat(docs): Render Cargo feature-gated code in docs (#5967)\n  > ci: upgrade cppcheck from 2.3 to 2.13 via apt (#5943)\n  > ci: add MSRV consumer check (#5986)\n  > feat: add per-message handshake timing instrumentation (#5903)\n  > chore: version bump (#5984)\n  > feat: add client issue metrics (#5979)\n  > refactor: export trait owns MetricRecord (#5981)\n  > docs: Windows MinGW support is available (#5970)\n  > chore: delete unused functions (#5978)\n  > test: enable rust bindings tests on Windows (#5969)\n  > ci: bump MSRV for extended workspace from 1.89 to 1.91 (#5980)\n  > refactor(metrics): make record update infallible (#5976)\n  > test: client_hello retrieval with HRR (#5975)\n  > feat(bindings): add init feature flag (#5831)\n  > build(deps): update openssl-src requirement from 300.5 to 400.0 in /bindings/rust/standard (#5971)\n  > feat: enable rust bindings build and tests on Windows (#5958)\n  > chore: metrics-subscriber release v0.0.4 (#5965)\n  > refactor: two more self talk tests to use in-memory io pair (#5950)\n  > refactor: fork based handshake tests to use in memory io pair (#5940)\n  > chore: bindings release 0.3.39 (#5962)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking changes. There are a few behaviour changes inherited from\nthe CRT worth calling out:\n- `aws-c-s3` now retries `502 Bad Gateway` and `504 Gateway Timeout`\nresponses\n([aws-c-s3#671](https://github.com/awslabs/aws-c-s3/pull/671)).\n- `aws-c-s3` now disables Nagle's algorithm on S3 connections\n([aws-c-s3#659](https://github.com/awslabs/aws-c-s3/pull/659)).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-09-22T11:45:26Z",
          "tree_id": "3a665dae4d7743bffc23d3b2d0ab6d792515d2cf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffa5658c676e4c646d06a2b013ead6b27160f2e2"
        },
        "date": 1790085882514,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1588.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1513.176171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1263.79091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.9869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.3626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.65908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.60908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.73818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 615.282421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 767.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 160.59814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 348.2640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.96552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 438.9615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 344.08369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1466.7140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.5416015625,
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
          "id": "6d397663f84aaa2e0757fc3b73a6cccb97322866",
          "message": "Update changelogs in preparation of `mountpoint-s3-client` release (#1968)\n\nUpdate the CHANGELOGs in order to release the client crates:\n\n* `mountpoint-s3-crt-sys` - `v0.17.1`\n* `mountpoint-s3-crt` - `v0.16.1`\n* `mountpoint-s3-client` - `v0.22.1`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-09-24T11:40:43Z",
          "tree_id": "64d57fb42fb572817831eef7a2f970fb5e7c184f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d397663f84aaa2e0757fc3b73a6cccb97322866"
        },
        "date": 1790258450840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1447.95205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1411.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1225.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.69951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.52216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.87802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.72998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.28408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.63681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.768359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 840.77109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 886.6427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.93720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 445.0556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.20390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 483.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 432.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1364.56591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.781640625,
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
          "distinct": true,
          "id": "b039b0f03708bf8cae23b02e353f3ecb9db9d823",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.4 to 6.3.0 (#1975)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.4 to 6.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e1253824e5c10ff9df46874f81ed3ec929e19cfd\"><code>e125382</code></a>\nchore(main): release 6.3.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1963\">#1963</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/438100a0eb37d9180319c727b1e108d9a112a27a\"><code>438100a</code></a>\nchore: add link to GH security docs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1962\">#1962</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e92ebccf3986be80a7535da17f1ed57aec450139\"><code>e92ebcc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\"><code>57b8365</code></a>\nfeat: add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cc49fa741eb53f7c83be6fce8f9b4df000cd3af7\"><code>cc49fa7</code></a>\nchore(docs): README main branch guidance (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1960\">#1960</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/866cb167f1d1a75ae9c75cdb39377cfd9c0f794e\"><code>866cb16</code></a>\nchore(deps-dev): bump smol-toml from 1.7.0 to 1.7.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1958\">#1958</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6782cb1b6df5d32e9354c1e6d6da4f956c0d61c4\"><code>6782cb1</code></a>\nchore(deps-dev): bump generate-license-file from 4.2.4 to 4.2.5 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1951\">#1951</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c20509ac5cba30e782e34cf33a0067e67c746cf0\"><code>c20509a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7a41fc6cd2b4970e71974e29fb3f0979f4eb20cb\"><code>7a41fc6</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1121.0 to\n3.1127.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1954\">#1954</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/726b71346f7761addb59879a6c73e0c64ec8f959\"><code>726b713</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.11 to 2.5.12\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1957\">#1957</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/cbe3b392738ccf3f987d68400dafcf4b0624a56c...e1253824e5c10ff9df46874f81ed3ec929e19cfd\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=6.2.4&new-version=6.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T08:58:34Z",
          "tree_id": "97f6ec44300836f8f24f63c08709d2f7e0dff899",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b039b0f03708bf8cae23b02e353f3ecb9db9d823"
        },
        "date": 1790595685660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1583.9393554687501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1517.6638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1290.66953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.415625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.6048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.78271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 892.2921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.72421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 874.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 553.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 480.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 401.2361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1140.146875,
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
          "id": "aaf1d7fff474735e8b078ce47060b9793810e57c",
          "message": "Bump benchmark-action/github-action-benchmark from 1.22.1 to 1.22.2 (#1972)\n\nBumps\n[benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)\nfrom 1.22.1 to 1.22.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases\">benchmark-action/github-action-benchmark's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.22.2</h2>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/pull/364\">benchmark-action/github-action-benchmark#364</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md\">benchmark-action/github-action-benchmark's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Unreleased</h2>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.2\">v1.22.2</a>\n- 15 Sep 2026</h1>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/364\">#364</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.1\">v1.22.1</a>\n- 6 May 2026</h1>\n<ul>\n<li><strong>fix</strong> scope tsconfig.build.json to src/ for\nreproducibility (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/352\">#352</a>)</li>\n<li><strong>chore</strong> bump minimatch from 3.1.2 to 3.1.5 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/347\">#347</a>)</li>\n<li><strong>chore</strong> bump uuid and <code>@​actions/core</code> (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/350\">#350</a>)</li>\n<li><strong>chore</strong> bump flatted from 3.2.4 to 3.4.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/346\">#346</a>)</li>\n<li><strong>chore</strong> bump js-yaml (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/344\">#344</a>)</li>\n<li><strong>chore</strong> bump picomatch from 2.3.0 to 2.3.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/342\">#342</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.0\">v1.22.0</a>\n- 31 Mar 2026</h1>\n<ul>\n<li><strong>chore</strong> bump node to 24 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/339\">#339</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.21.0\">v1.21.0</a>\n- 02 Mar 2026</h1>\n<ul>\n<li><strong>fix</strong> include package name for duplicate bench names\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/330\">#330</a>)</li>\n<li><strong>fix</strong> avoid duplicate package suffix in Go benchmarks\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/337\">#337</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.7\">v1.20.7</a>\n- 06 Sep 2025</h1>\n<ul>\n<li><strong>fix</strong> improve parsing for custom benchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/323\">#323</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.5\">v1.20.5</a>\n- 02 Sep 2025</h1>\n<ul>\n<li><strong>feat</strong> allow to parse generic cargo bench/criterion\nunits (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/280\">#280</a>)</li>\n<li><strong>fix</strong> add summary even when failure threshold is\nsurpassed (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/285\">#285</a>)</li>\n<li><strong>fix</strong> time units are not normalized (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/318\">#318</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.4\">v1.20.4</a>\n- 23 Oct 2024</h1>\n<ul>\n<li><strong>feat</strong> add typings and validation workflow (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/257\">#257</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.3\">v1.20.3</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Catch2 v.3.5.0 changed output format (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/247\">#247</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.2\">v1.20.2</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Support sub-nanosecond precision on Cargo\nbenchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/246\">#246</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.1\">v1.20.1</a>\n- 02 Apr 2024</h1>\n<ul>\n<li><strong>fix</strong> release script</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/4322e5726e6334590d251fc4f92bec0efafc45dc\"><code>4322e57</code></a>\nrelease v1.22.2</li>\n<li>See full diff in <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=benchmark-action/github-action-benchmark&package-manager=github_actions&previous-version=1.22.1&new-version=1.22.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:11:01Z",
          "tree_id": "b72889a243cfe253fc90d19b480220b7ac5d2ec7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aaf1d7fff474735e8b078ce47060b9793810e57c"
        },
        "date": 1790606829222,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1549.95498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1483.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1277.54208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.88701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.53212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.65361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.85166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 802.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 818.1279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 226.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 399.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 426.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 370.680078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.11943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.25263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1149.1318359375,
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
          "id": "338d7062a33a9a9529ebf11f5602214519e028d5",
          "message": "Bump docker/build-push-action from 7.3.0 to 7.4.0 (#1973)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 7.3.0 to 7.4.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.4.0</h2>\n<ul>\n<li>Use the shared error helper for Buildx commands by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1620\">docker/build-push-action#1620</a></li>\n<li>Prevent workflow command injection in metadata logs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1617\">docker/build-push-action#1617</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.92.0 to 0.100.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1614\">docker/build-push-action#1614</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1618\">docker/build-push-action#1618</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1621\">docker/build-push-action#1621</a></li>\n<li>Bump <code>@​humanfs/node</code> from 0.16.7 to 0.16.8 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1609\">docker/build-push-action#1609</a></li>\n<li>Bump brace-expansion from 1.1.13 to 1.1.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1592\">docker/build-push-action#1592</a></li>\n<li>Bump csv-parse from 7.0.0 to 7.0.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1613\">docker/build-push-action#1613</a></li>\n<li>Bump js-yaml from 4.3.0 to 4.3.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1605\">docker/build-push-action#1605</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1615\">docker/build-push-action#1615</a></li>\n<li>Bump nanoid from 3.3.16 to 3.3.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1611\">docker/build-push-action#1611</a></li>\n<li>Bump postcss from 8.5.10 to 8.5.25 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1590\">docker/build-push-action#1590</a></li>\n<li>Bump postcss-selector-parser from 7.1.1 to 7.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1606\">docker/build-push-action#1606</a></li>\n<li>Bump sigstore from 4.1.0 to 4.1.1 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1577\">docker/build-push-action#1577</a></li>\n<li>Bump undici from 6.27.0 to 6.28.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1594\">docker/build-push-action#1594</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0\">https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/c3c9e263c25d99ce0380d002d59b67737d91b0dc\"><code>c3c9e26</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1621\">#1621</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/459b6741834dcd35f946352017e7675bd2089d42\"><code>459b674</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/4dedcb23c91d79c1629bf53ec2c3bcfffef5b34e\"><code>4dedcb2</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.99.0 to\n0.100.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/379bf63a979bd70751945601fa04c50674509952\"><code>379bf63</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1620\">#1620</a>\nfrom crazy-max/buildx-error-message</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/9877975c9e0b0b661592ff61049069507f9bc2f6\"><code>9877975</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7ed0556ffafb8eb312463411ef0a84a1dfe24d94\"><code>7ed0556</code></a>\nuse the shared Buildx error summary helper</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/91670ba5a4df99a24efff8637a78c83fd1b0f6b1\"><code>91670ba</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1618\">#1618</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/80dbc8614a5c0ce4356740f69179cf829ecdc79a\"><code>80dbc86</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/50cac3a3b6f55e6015d6483d1dd72a3ecb90d20d\"><code>50cac3a</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.98.0 to\n0.99.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03b4d6cac0163b44733e1fa60adfd6da560ee4d1\"><code>03b4d6c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1617\">#1617</a>\nfrom crazy-max/fix-metadata-workflow-commands</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/53b7df96c91f9c12dcc8a07bcb9ccacbed38856a...c3c9e263c25d99ce0380d002d59b67737d91b0dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=7.3.0&new-version=7.4.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:15:06Z",
          "tree_id": "967d871b1a4c1b8c1306accf4aca5328075a3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338d7062a33a9a9529ebf11f5602214519e028d5"
        },
        "date": 1790607809879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1582.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1554.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1293.933203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.77998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.235546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.56748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 727.22197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 835.59306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 199.22490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 416.67294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 446.92685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 398.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1457.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.31025390625,
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
          "distinct": true,
          "id": "e144a7bb84948045f0d7cde77060afaa7ed91b53",
          "message": "Bump astral-sh/setup-uv from 10.1.0 to 10.2.0 (#1971)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.1.0 to 10.2.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.2.0 🌈 Disable automatic cache saves for merge queues</h2>\n<h2>Changes</h2>\n<p>This release contains the known-checksum of the most recent uv\nreleases and also disabled the uploading(saving) of the cache when in a\nmerge queue since theses caches would almost never be used.</p>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Disable automatic cache saves for merge queues <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.17 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li>chore: update known checksums for 0.12.16 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li>chore: update known checksums for 0.12.15 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li>chore: update known checksums for 0.12.14 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li>chore: update known checksums for 0.12.13 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.1.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c18668ad3cf93ea998bef934396af7bb5c839dc7\"><code>c18668a</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ffe14763056ca34ecd158146a9fc7e144c8a2753\"><code>ffe1476</code></a>\nchore: update known checksums for 0.12.17 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f5548c55522a1db0af3c84f2af3d058bc9bc2de2\"><code>f5548c5</code></a>\nchore: update known checksums for 0.12.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a761a4e9afd7b2f353ae020bd6d3a3af34c6c4d5\"><code>a761a4e</code></a>\nDisable automatic cache saves for merge queues (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3377a30666f438759955882b3eba6a92b2b29b12\"><code>3377a30</code></a>\nchore: update known checksums for 0.12.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/dfb5f386776afcea37f271f3b656318d9949b9f1\"><code>dfb5f38</code></a>\nchore: update known checksums for 0.12.14 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/45c121f982720f3bdf236c2ac06f126ca211949c\"><code>45c121f</code></a>\nchore: update known checksums for 0.12.13 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8073452fd4b566e886f04f731bcdbd8332b0b779\"><code>8073452</code></a>\ndocs: update version references to v10.1.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/bec219d24cd3e171d82865faccec33120bb574f4...c18668ad3cf93ea998bef934396af7bb5c839dc7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.1.0&new-version=10.2.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:25:19Z",
          "tree_id": "c3a5d4c44681f09ea4a336c511a81ba86f7f5f60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e144a7bb84948045f0d7cde77060afaa7ed91b53"
        },
        "date": 1790617121432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1540.1849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1473.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1244.78388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.06337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.28525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.70810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.67431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.87021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 736.36767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.5138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 709.29443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 188.39921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 454.1671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 362.66494140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 361.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1482.5162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1055.299609375,
            "unit": "MiB/s"
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
          "id": "b5019468624d590bf589cb39dfddf0ec1507f45d",
          "message": "Don't mount /mnt on GH actions (#1976)\n\nPrevious workaround for fstab integration tests was failing due to\nGithub changing the name of the device mounted to `/mnt`. Fix the tests\nby ensuring nothing is mounted at `/mnt`\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-02T16:35:09Z",
          "tree_id": "d07f7ee8eb25b5e0ec32c1bac17ae8aecb79144e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b5019468624d590bf589cb39dfddf0ec1507f45d"
        },
        "date": 1790967470090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1542.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1484.46708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1248.86630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.06025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.5337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.09736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.47685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.359765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.72861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.84814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 922.59462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.58994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 900.7966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 442.19345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.28046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 514.2447265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 426.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1450.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.3462890625,
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
          "distinct": false,
          "id": "b851f704b3a0685b7180e7f064711f565ffb32e0",
          "message": "Fail benchmarks when a memory limit is breached (#1940)\n\nMemory-limited benchmark jobs already report peak RSS breaches in a\nsummary table but still pass. This makes a breach fail the job, after\nthe results have been saved and published.\n\nTesting:\n- `render-mem-summary.sh` over 5 input shapes locally (no results, all\nwithin limit, partial breach, full breach) - correct output and exit\ncode in each.\n- Gate wiring on a real Actions run, 4 cases: a breach fails the job;\n`false` and a skipped render step both pass; a breach still fails when\nan earlier step had already failed.\n- Not covered: a real breaching benchmark run, as `--memory-target` has\na 512 MiB floor.\n\nSupersedes #1935, which was auto-closed when its base branch was\ndeleted. Same change, rebased onto `main`.\n\n### Does this change impact existing behavior?\n\nYes, intentionally: memory-limited benchmark jobs now fail on a breach.\nResults are still saved and published first, and other variants are\nunaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this only changes CI benchmark workflows.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-10-05T13:34:17Z",
          "tree_id": "45533325b67a4c4eda1eda8d5eeacedd1bd3eb9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b851f704b3a0685b7180e7f064711f565ffb32e0"
        },
        "date": 1791217158896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1549.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1476.86826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1225.6255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.25556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.02431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.9076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.5447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 793.385546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 777.73076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 454.26640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.91728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 397.86865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 476.2876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.9037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1436.99365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.5671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngpil.yoon@gmail.com",
            "name": "Aaron Y.",
            "username": "ziwon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b525122fdc28fb34b8695cdaccf15e3f483f14c5",
          "message": "fix(metrics): poll S3 client metrics periodically (#1957)\n\n**What changed and why?**\n\nS3 CRT client gauges (`s3.client.*`) were sampled only when\n`make_meta_request()` ran. The metrics publisher still flushed every\nfive seconds, but it only refreshed process metrics before `publish()`.\nFor meta requests that last longer than that interval, the CRT gauges\nwere therefore frozen after the first sample.\n\nThis change moves sampling onto the existing publisher cycle:\n\n1. `MetricsSinkHandle::register_poller` stores a `Send + Sync` callback\nin a publisher-lifecycle registry. Registration does **not** go through\nthe shutdown/`recv_timeout` channel, so it cannot reset or delay the\nfive-second wait.\n2. On each timeout and on shutdown, the publisher runs\n`poll_process_metrics()`, then the registered client pollers, then\n`publish()`.\n3. After the object client is built, `run` and the FS examples that\ninstall metrics register a clone of the client. `S3CrtClient` is `Clone`\nvia `Arc`, so the final drain can safely sample after the FUSE session\nends.\n4. The poller registry is shared only by the publisher thread and\n`MetricsSinkHandle`. Dropping the handle joins the final publication and\nthen releases the callbacks and captured client clones; the\nprocess-global metrics recorder does not retain them.\n5. `ObjectClient::poll_client_metrics` is a default no-op, overridden by\n`S3CrtClient`. Mock and other non-CRT clients keep working without\nCRT-specific behavior.\n6. The polling call immediately after `make_meta_request()` is removed.\nMetric names, gauge/histogram types, and changed-value emission behavior\nare unchanged.\n\nFixes #1410\n\n### Does this change impact existing behavior?\n\nYes, in the intended way: `s3.client.*` gauges now update on every\nfive-second publication cycle even when no new meta request is created.\nLong-running requests no longer leave those gauges stuck at the value\nfrom request start. Existing `ObjectClient` implementations inherit the\nnew no-op method and do not need to override it.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Unreleased notes were added for `mountpoint-s3`,\n`mountpoint-s3-fs`, and `mountpoint-s3-client`. Version numbers are left\nfor the next release cut.\n\n### Tests\n\nDeterministic unit tests require no AWS credentials, network access, or\nreal S3 service:\n\n- A registered poller runs on repeated publisher timeouts with no meta\nrequests, each poll occurs before the matching `publish()`, and shutdown\nperforms one final poll and publication.\n- Registering pollers during the wait does not reset or stop the cadence\nand does not trigger an immediate publication.\n- Dropping `MetricsSinkHandle` releases registered callbacks even while\nthe metrics sink remains alive.\n- `S3CrtClient::poll_client_metrics`, constructed with `NoSigning`,\nemits the existing `s3.client.*` gauges under a local recorder.\n- Mock `ObjectClient::poll_client_metrics` remains a no-op.\n\nAfter rebasing onto current upstream `main`, `make pre-pr-check`\nsucceeded: formatting, `cargo check --all-targets --all-features`,\nrepository-standard clippy with warnings denied, and 941 nextest tests\npassed with 1 skipped. This PR does **not** include an end-to-end\nAWS/`--log-metrics` mount run.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Aaron Y. <yngpil.yoon@gmail.com>",
          "timestamp": "2026-10-06T10:42:58Z",
          "tree_id": "ffb0700ad0d89c5b3a062df477d12b641f3029e9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b525122fdc28fb34b8695cdaccf15e3f483f14c5"
        },
        "date": 1791293140976,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1484.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1427.2117187499998,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1206.3384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.95205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.65556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.51630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.82412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 744.47841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 728.39453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 194.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 493.58828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.09619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 397.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 451.673046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1124.43427734375,
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
          "distinct": false,
          "id": "77bd88d56091f47b24b06f8fd0bb05a20ea6d598",
          "message": "Bound the CRT thread join at exit and skip cleanup on timeout (#1978)\n\n**Problem:** In #1850 we have added CRT cleanup at exit, but this may\ncause a process hang in some cases during shutdown if CRT threads are\nstill running.\n\n**Solution**: Add 1 second timeout to wait for CRT threads to join\ninstead of waiting indefinitely\n\n**Testing**: Added 2 unit tests that re-produced the hang. They are\ngreen after the fix.\n\n### Does this change impact existing behavior?\n\nProcesses that exit while a CRT client is still alive now exit after up\nto 1 second, without CRT cleanup, instead of hanging. Processes that\ndrop all their clients before exit are unaffected. No public API change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry under `Unreleased` in\n`mountpoint-s3-crt/CHANGELOG.md`. It needs a patch version bump of\n`mountpoint-s3-crt` when released.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T11:38:31Z",
          "tree_id": "689fb38fe0d308d3c5a9fbaf8e181397ba38871d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77bd88d56091f47b24b06f8fd0bb05a20ea6d598"
        },
        "date": 1791294945882,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1523.09736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1470.282421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1292.22705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.40458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.59736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.01201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 872.93896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 834.67998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 157.89267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 344.54326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.33671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 452.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 353.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.289453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.25048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 924.678515625,
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
          "id": "ababef079bd81106c9dce644f797f5ba3cd34cf9",
          "message": "Update changelog in preparation of `mountpoint-s3-crt` release (#1979)\n\nUpdate the CHANGELOG in order to release the `mountpoint-s3-crt` crate:\n\n* `mountpoint-s3-crt` - `v0.16.2`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T13:40:15Z",
          "tree_id": "6906dac3eecb937361d343b2836ea54618e541be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ababef079bd81106c9dce644f797f5ba3cd34cf9"
        },
        "date": 1791303189197,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1542.90625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1449.88388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1234.1076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.4408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.55048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 656.859765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 190.7150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 684.20517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 169.87822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 426.5076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.66181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 374.34794921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 397.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.79228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1470.43291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 951.371875,
            "unit": "MiB/s"
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
          "id": "e373e4159606f66ca07edf214a4fead004153e4b",
          "message": "Update release workflow to create a git tag (#1969)\n\nUpdate the release workflow to be manually triggered with the intended\nrelease version number.\nThis now creates and pushes the git tag to the repository, as well as\ncreating a github release.\n\nExample run:\nhttps://github.com/muddyfish/mountpoint-s3/actions/runs/36004359806/job/107648757049\nExample release:\nhttps://github.com/muddyfish/mountpoint-s3/releases/tag/mountpoint-s3-1.24.0\n\n### Does this change impact existing behavior?\n\nChanges release.yml to be ran on a manual workflow rather than on a tag\npush.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-07T08:54:40Z",
          "tree_id": "2b0e2a928b10a1af574c80c9c8e222570a20f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e373e4159606f66ca07edf214a4fead004153e4b"
        },
        "date": 1791371724214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1539.32646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1487.39931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1280.0134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.13623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 799.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.4115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 812.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 216.18671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 461.21064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.4845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 432.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 425.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.88388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1497.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1164.03095703125,
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
          "id": "1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8",
          "message": "Send If-Match on incremental upload at offset 0 (#1970)\n\nFix inconsistency when during incremental upload we do not attach\n`If-Match` ETag header (when ETag is known) at offset 0.\n\n### Does this change impact existing behavior?\n\nYes. If there was concurrent modification file operation will fail with\nEIO. This now matches behaviour for `offset > 0`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-07T09:38:56Z",
          "tree_id": "2eb04ccdd5ac2df67b8acc94aaefd2a84bda81fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8"
        },
        "date": 1791375015418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1584.559765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1499.3172851562501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1221.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.9525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.60595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 787.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.534375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 784.82685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.27373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 502.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.4453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 513.1681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 457.39267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.86630859375,
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
          "distinct": true,
          "id": "49ba6c8e067aa1c584a1c7008590e5741235ddb0",
          "message": "Bump taiki-e/install-action from 2.87.17 to 2.87.21 (#1977)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.17 to 2.87.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.21</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.129.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.3.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.19.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.13.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.7.0.</p>\n</li>\n</ul>\n<h2>2.87.20</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.0.</p>\n</li>\n</ul>\n<h2>2.87.19</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.146.</p>\n</li>\n</ul>\n<h2>2.87.18</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.84.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.12.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.3.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4cef1412cce204788f482e778a0b9187f9626a29\"><code>4cef141</code></a>\nRelease 2.87.21</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/133135e7fd1570baff8964a044bcf0d2147fc57a\"><code>133135e</code></a>\nUpdate <code>wasm-bindgen@latest</code> to 0.2.129</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8589241798155a8c0c86c7c0ae4f642a90a698e1\"><code>8589241</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/95e5bbc4a58633e12ebefd904f798c1eb76c18f7\"><code>95e5bbc</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/48ce11d4f97676e64a76a3dc4b83a4f59245b702\"><code>48ce11d</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/368e6617a899743920fa751bb5d414b6f0352cc0\"><code>368e661</code></a>\nUpdate wasm-bindgen manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/57f22a457e27d10a13bfcaee43e03dff1c20dedd\"><code>57f22a4</code></a>\nUpdate <code>uv@latest</code> to 0.12.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/888634e2727c1021a94ebfac9a2d266109a366b8\"><code>888634e</code></a>\nUpdate typos manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3bcab01fb9790f533b19647e60396514a9d08f96\"><code>3bcab01</code></a>\nUpdate protoc-gen-connect-openapi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/947e90eb285641d8325cc2d55ae24bd51d5c6b8a\"><code>947e90e</code></a>\nUpdate <code>mise@latest</code> to 2026.9.13</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.17...v2.87.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.17&new-version=2.87.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-08T11:21:48Z",
          "tree_id": "98f3c2ea75860030fbdf62a8581b5634dd8927aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49ba6c8e067aa1c584a1c7008590e5741235ddb0"
        },
        "date": 1791466914577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1550.04755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1495.5318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1273.30439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.6119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.4357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 861.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.20107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 872.2154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 227.5353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 562.03408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 471.9474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 400.080859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 52.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1459.77431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 932.85869140625,
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
          "id": "dc0d76da41691ab73a170345e57a9654bf2c5cc1",
          "message": "Add packaging support for AL2027 (#1980)\n\nAdd support for packaging Mountpoint for Amazon Linux 2027 (currently in\n[Public\nPreview](https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/)).\n\nThis change only ensures that out packaging scripts are compatible with\n2027 and that the package builds correctly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-09T14:48:44Z",
          "tree_id": "97f6e4b9bc841c7caa5cba20a9a290e1beaf1b6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc0d76da41691ab73a170345e57a9654bf2c5cc1"
        },
        "date": 1791567359672,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1547.297265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1509.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1294.60810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.5662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.760546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.59716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 858.78876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 789.2697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 220.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 548.39287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.77890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 454.85712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 454.5998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1401.04169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1096.360546875,
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
          "id": "27f32de4e0b5d97797bf54a00a940c3f3e4065fc",
          "message": "Fix ruff lint failures from new 0.17 default rule set (#1983)\n\nruff 0.17.0 expanded its default lint selection from `E4,E7,E9,F` to\nseveral hundred rules. CI runs `uvx ruff` unpinned, so the release broke\nthe Benchmark and Packaging script checks without any change on our\nside.\n\nApply the autofixes for the newly-enabled rules:\n\n- UP017: use the `datetime.UTC` alias instead of `timezone.utc`.\n- I001: `tomllib` now sorts into the stdlib import block.\n- RUF100: drop the `# noqa: DTZ005`, unused since DTZ is not enabled.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-12T15:31:22Z",
          "tree_id": "39ad30ae58ccd869bda2936dccdb3113dccac4fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27f32de4e0b5d97797bf54a00a940c3f3e4065fc"
        },
        "date": 1791827652858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1589.84404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1530.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1288.30380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.7810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.75771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.81044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.61416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 920.10048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 896.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.94375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 481.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 512.09326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 437.65322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.68310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1423.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.27109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2",
          "message": "Clarify mountpoint can overwrite objects (#1982)\n\nDocuments that Mountpoint can replace an existing object even when\n--allow-overwrite is not set: existence is only checked at file-open\ntime, so an object uploaded to the bucket after that check may be\nreplaced when the write completes. Metadata caching (negative cache)\nwidens this window.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2026-10-12T16:01:13Z",
          "tree_id": "21302bac8198a6e3315040305f42431b9d468ff9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2"
        },
        "date": 1791829882089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1554.51669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1503.4734374999998,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1274.39853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.14560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.65068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.86435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 885.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 860.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.15458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 544.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.02041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 477.6986328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 514.32958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.8021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.0384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.85146484375,
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
          "distinct": true,
          "id": "4f6866c101cae19d1e99a1e89c260c646b4730f6",
          "message": "Bump hydra-core from 1.3.4 to 1.3.7 in /benchmark (#1981)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.4\nto 1.3.7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.7</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state, process-environment mutation, and logging formatters.\nThese checks are not a complete security boundary. (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3442\">#3442</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7</a></p>\n<h2>Hydra 1.3.6</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blacklist to Python logging configuration. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6</a></p>\n<h2>Hydra 1.3.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Warn Hydra 1.3 users relying on Hydra 1.1 behavior (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5\">https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.7/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.7 (2026-09-14)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state,\nprocess-environment mutation, and logging formatters. These checks are\nnot a\ncomplete security boundary. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3442\">#3442</a>)\n1.3.6 (2026-08-29)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blocklist to Python logging configuration.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<h1>1.3.5 (2026-08-06)</h1>\n<h3>API Change (Renames, deprecations and removals)</h3>\n<ul>\n<li>Warn Hydra 1.3 applications that rely on Hydra 1.1 compatibility\nbefore\nupgrading to Hydra 1.4. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3334\">#3334</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81715a5a258ae2657369344f4e3523e5fbabb2af\"><code>81715a5</code></a>\nPrepare hydra-core 1.3.7 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/4720dfca2bde27fa140ec287a05709668fbdf168\"><code>4720dfc</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/27df7550bfd6582a111df148ef96de499474c243\"><code>27df755</code></a>\nPrepare Hydra 1.3.6 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ff3e4dba890c29a21d8c2bb867ee87d37ccf21d0\"><code>ff3e4db</code></a>\nHarden logging target resolution on 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3420\">#3420</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/aa102eaabfa8c93f481ac4938dd7a34203c58d24\"><code>aa102ea</code></a>\nHarden deferred instantiate dispatch on 1.3</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2c82bbb3f39603b336cb852461739fdf7a38798a\"><code>2c82bbb</code></a>\nBackport instantiate target authorization hardening to 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3413\">#3413</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/06613cef4c44bf3473b92ecde533487647784b0b\"><code>06613ce</code></a>\nBump Hydra to 1.3.6.dev0</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/51647a2183512bc4e5556842c494e7efdbd75375\"><code>51647a2</code></a>\nRelease Hydra 1.3.5</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/445b0a7505c0c07a7f0bd3dde3baf4811c2fea27\"><code>445b0a7</code></a>\nWarn Hydra 1.3 users relying on 1.1 compatibility (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.4&new-version=1.3.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-12T16:53:49Z",
          "tree_id": "2cbe058a18d7d75fdf61ce5f778dcc719a9f85bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f6866c101cae19d1e99a1e89c260c646b4730f6"
        },
        "date": 1791832560703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1587.40576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1538.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1282.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.48154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.613671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.01240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.81142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.527734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 837.88603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 799.14228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 214.99814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 531.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.27490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 440.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 494.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.10732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1378.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1109.25419921875,
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
          "id": "2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0",
          "message": "Bump taiki-e/install-action from 2.87.21 to 2.87.26 (#1984)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.21 to 2.87.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.26</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.2.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.3.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.0.0.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 1.21.0.</p>\n</li>\n</ul>\n<h2>2.87.25</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.23.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.2.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.10.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.60.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-semver-checks@latest</code> to 0.51.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.1.</p>\n</li>\n</ul>\n<h2>2.87.24</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.59.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-leptos@latest</code> to 0.3.11.</p>\n</li>\n<li>\n<p>Update <code>cargo-insta@latest</code> to 1.49.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.0.</p>\n</li>\n</ul>\n<h2>2.87.23</h2>\n<ul>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.261.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.22.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.75.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.1.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.28.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f7e5d7c961414b23f5b25b2da9294395d08513ad\"><code>f7e5d7c</code></a>\nRelease 2.87.26</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/148b70c8533f32f0f67928d48f6234c224cc2717\"><code>148b70c</code></a>\nUpdate <code>tombi@latest</code> to 1.7.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9856be60d227976dcbe71f75a36a857c6bf3504a\"><code>9856be6</code></a>\nUpdate <code>prek@latest</code> to 0.5.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/246da9e6f2857c0c408cc9b590117673cd74d06e\"><code>246da9e</code></a>\nUpdate <code>mise@latest</code> to 2026.10.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8ec05a70c3252cd782c8c266ee7c57fdfa6b0699\"><code>8ec05a7</code></a>\nUpdate <code>kache@latest</code> to 1.0.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a5ed626e494481910920bbdee016db18f33bf1df\"><code>a5ed626</code></a>\nUpdate <code>hyperfine@latest</code> to 1.21.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/183e4297cca2404691e9380e1307288dced5c82a\"><code>183e429</code></a>\nRelease 2.87.25</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5e241e4899f64a7ba9011f0c3a46f591b6527640\"><code>5e241e4</code></a>\nUpdate <code>uv@latest</code> to 0.12.23</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/126791b91b3ba2303cb850bbdb6943156fe7c71b\"><code>126791b</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/35ba21c90f3f48ed80e4934a494a422e17488157\"><code>35ba21c</code></a>\nUpdate prek manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.21...v2.87.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.21&new-version=2.87.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:20:46Z",
          "tree_id": "570e1562229933fcc5317a95493cf69da0956e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0"
        },
        "date": 1791917824349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1537.25517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1492.12294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.15703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.96826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.244921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.63603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.330859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.19345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 781.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 195.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 778.49423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 127.5900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 350.79892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 414.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 331.73642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.9470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1410.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.93525390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109811970+samridh10exe@users.noreply.github.com",
            "name": "Samridh",
            "username": "samridh10exe"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b965f46c655b14be6fbbf9db3d93907cbbb6061",
          "message": "Purge the negative cache entry on create (#1985)\n\n`create` doesn't purge the new name from the negative metadata cache.\nWith negative caching enabled, if a lookup misses, the file or directory\nis then created through Mountpoint, and the kernel later forgets its\ninode, lookups for it return `ENOENT` until the negative entry expires.\n\nPurge the entry in `create`, as `rename` already does for its\ndestination. This picks up #1250 by @c-hagem and adds the test requested\nthere: `test_create_purges_negative_cache` covers a file and a\ndirectory, and fails without the change.\n\nAlso reproduced with `--metadata-ttl indefinite` against a local\nS3-compatible endpoint: after dropping the kernel's dentry and inode\ncaches, the created file and directory return `ENOENT` with unpatched\nMountpoint and are found with this change.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Files and directories created after a failed lookup\nof the same name are no longer reported as missing.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Samridh <109811970+samridh10exe@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:25:10Z",
          "tree_id": "15226e77d43d7e2040c2f91b8809e0ed240f0981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6b965f46c655b14be6fbbf9db3d93907cbbb6061"
        },
        "date": 1791919357065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1502.92109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1461.50830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1220.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.6732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.33466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.70859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.71943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.98994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.55947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 657.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 192.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 633.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 153.5064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 392.65400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.99208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 345.85537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 410.62001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.1638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1121.952734375,
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
          "id": "06757889535392d04f03b7b7e676983716700768",
          "message": "Update cargo dependencies (#1987)\n\nIn particular, update `rustls` to 0.23.46 to address\n[RUSTSEC-2026-0347](https://rustsec.org/advisories/RUSTSEC-2026-0347),\n[RUSTSEC-2026-0348](https://rustsec.org/advisories/RUSTSEC-2026-0348),\nand\n[RUSTSEC-2026-0349](https://rustsec.org/advisories/RUSTSEC-2026-0349).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T08:53:11Z",
          "tree_id": "bec0d423d4ab5dd6d059e993e27e4eec237f4346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06757889535392d04f03b7b7e676983716700768"
        },
        "date": 1792062970949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1513.36416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1470.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1233.31416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.30634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.88291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.71474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.66806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.29609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 757.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.1671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 749.25498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 200.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 445.02939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.0943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 400.6021484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 418.353125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.5294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.8546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1164.25390625,
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
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792077335367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1537.0213867187501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1464.65185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1199.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.38486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.34609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.38857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.12177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.66611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.71279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.53046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.3576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 674.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 195.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 682.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 172.008984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 394.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.121875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 349.86982421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 399.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.19482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1404.511328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1142.34267578125,
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
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792412043601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1603.25595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1536.20576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1283.63427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.41650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.28994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 963.81044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.9546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 932.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.59638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 601.51787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 537.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 551.58154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.3634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1573.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1073.55390625,
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
          "id": "498ab6c47f41a744feca5682bca8644107018cfe",
          "message": "Bump taiki-e/install-action from 2.87.26 to 2.87.28 (#1993)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.26 to 2.87.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.28</h2>\n<ul>\n<li>\n<p>Update <code>dprint@latest</code> to 0.62.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.33.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.171.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.2.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.7.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.3.</p>\n</li>\n</ul>\n<h2>2.87.27</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.24.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.54.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.170.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.4.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.11.1.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.61.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.148.</p>\n</li>\n<li>\n<p>Update <code>cargo-neat@latest</code> to 0.6.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.2.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1168f6810a3cb30a3514bf5756a3b7f0422c6df8\"><code>1168f68</code></a>\nRelease 2.87.28</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/db1b9097c912e3ea0e3e3365a6b0b2b5b8cdb5b5\"><code>db1b909</code></a>\nUpdate <code>tombi@latest</code> to 1.8.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4fe7379362f9253601faa9a874184709db566a9e\"><code>4fe7379</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7443747ad21a8d8cfbf02ce264bd9ca0a8c08a6e\"><code>7443747</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6ff1c9bf2d9b6301b7c5a384025b33eb79addc2b\"><code>6ff1c9b</code></a>\nUpdate kingfisher manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cb40720d9a6bd77ff3b42bd2dbf2a11439dd64ab\"><code>cb40720</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4c1bf3400474f19d88f073ec38c34ddff9950f60\"><code>4c1bf34</code></a>\nUpdate <code>dprint@latest</code> to 0.62.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3dfabf76a32e8b71d8ceaf749b0e53a8c9cc5f2c\"><code>3dfabf7</code></a>\nUpdate <code>vacuum@latest</code> to 0.33.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a80e680a4cfbe929ef82b1402f4d57ce06b6d987\"><code>a80e680</code></a>\nUpdate <code>uv@latest</code> to 0.13.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/10f4ee9837c4e8479cd0cd010e2dc6397f5b1bcd\"><code>10f4ee9</code></a>\nUpdate <code>tombi@latest</code> to 1.8.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.26...v2.87.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.26&new-version=2.87.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:11Z",
          "tree_id": "6a08a364a9df424ceb58b6036ec87f8580f40b96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/498ab6c47f41a744feca5682bca8644107018cfe"
        },
        "date": 1792417052862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1594.37802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1544.2362304687501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1293.57724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.88359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.644921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.89951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.11064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.46435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 976.3244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.58603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 911.8462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 589.44638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.25380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 517.88984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 454.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.59326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1488.395703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 944.248046875,
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
          "id": "81dc534ca5cc489cf18d5a34d672e1a95d354605",
          "message": "Bump actions/upload-artifact from 7.0.1 to 7.0.2 (#1991)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 7.0.1 to 7.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Updates <code>@​actions/artifact</code> to v6.3.1.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/821\">actions/upload-artifact#821</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2\">https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cf430e030ddbb5b0abf93d22962f4752f3646cd9\"><code>cf430e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/822\">#822</a>\nfrom actions/tunc-d-prepare-upload-v7-0-2</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/c2acdedd35a8824a1552c7137f8c18288c3ea469\"><code>c2acded</code></a>\nchore: prepare v7.0.2 release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4687c1bbaa0a58abb517d90b4bbade6754c80c1a\"><code>4687c1b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/821\">#821</a>\nfrom actions/tunc-d-upload-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8cbe1bebdb858105d8fdd88f81404d4de4595719\"><code>8cbe1be</code></a>\nBump <code>@​actions/artifact</code> to 6.3.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=7.0.1&new-version=7.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:31Z",
          "tree_id": "57a72ec72e13e2df516584a57cedd49fb9101275",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81dc534ca5cc489cf18d5a34d672e1a95d354605"
        },
        "date": 1792419925708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1592.6692382812498,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1524.3201171874998,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1318.20263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.065234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.03701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.99794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.50908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 922.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.39365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 880.24248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.92392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 586.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.1310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 516.5216796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 528.29306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.0369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.1509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.0095703125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}