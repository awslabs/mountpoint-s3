window.BENCHMARK_DATA = {
  "lastUpdate": 1794492329480,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
          "id": "e6e4f739c460f5ed356db01df673de220937da5f",
          "message": "Re-enable jemalloc background threads in the background mount process (#1999)\n\n`mount-s3` configures jemalloc with `background_thread:true`, so that\npage purging runs on jemalloc's own threads rather than on the threads\nthat free memory. jemalloc turns its background threads off in a forked\nchild, though, so a mount in background mode (the default, without\n`--foreground`) ran without them, and only foreground mounts had them.\nIn background mode, freed memory was returned to the operating system\n(`madvise`) on the threads that freed it, the ones serving file system\nrequests and S3 transfers, which is what the setting is meant to avoid.\n\nThis change checks whether background threads are enabled before forking\nand, if so, turns them back on in the child before it does anything\nelse, using jemalloc's `background_thread` `mallctl` control. If that\nfails, the mount fails, as a foreground mount does when jemalloc can't\nstart its background thread.\n\njemalloc's background threads can write error messages directly to\nstderr. The background process used to close stdin, stdout and stderr\nonce mounted, so files and sockets opened later could reuse those\ndescriptors and receive such writes. It now points them to `/dev/null`\ninstead.\n\nA new test checks that the mount process has jemalloc background threads\nin both background and foreground mode.\n\n### Does this change impact existing behavior?\n\nBackground-mode mounts now run with jemalloc background threads, like\nforeground mounts. As a result, memory freed after a workload is\nreturned to the operating system gradually by those threads rather than\nimmediately on the thread that freed it: this is the intended behavior\nof the setting, and matches `--foreground` mounts. A background mount\nnow fails if those threads can't be started. Its standard streams are\nredirected to `/dev/null` rather than closed. No CLI or configuration\nchanges. Setting `background_thread:false` through `_RJEM_MALLOC_CONF`\nstill disables them.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in `mountpoint-s3/CHANGELOG.md` under Unreleased\n(v1.24.1). No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-27T15:50:50Z",
          "tree_id": "8c9d0bf566d36d183adb4c0be5bde0a80bcc9873",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6e4f739c460f5ed356db01df673de220937da5f"
        },
        "date": 1793127218657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5184.5376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4568.579296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5846.663769531249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.34296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.05849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.47783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.6509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.03759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.5333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.291796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.53330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6491.77822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 529.11142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5191.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 524.785546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1747.5814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.1798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.61357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1503.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.3845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1471.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.1880859375,
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
          "id": "2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d",
          "message": "Bump taiki-e/install-action from 2.87.28 to 2.87.29 (#2007)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.28 to 2.87.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.29</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.31.0.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.262.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.1.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.172.</p>\n</li>\n<li>\n<p>Update <code>osv-scanner@latest</code> to 2.7.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.11.</p>\n</li>\n<li>\n<p>Update <code>mdbook-d2@latest</code> to 0.3.9.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.13.0.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.2.1.</p>\n</li>\n<li>\n<p>Update <code>just@latest</code> to 1.59.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.63.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-crap@latest</code> to 0.8.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.12.0.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8cca0918f8471c33515202b73f56ab27f2bed283\"><code>8cca091</code></a>\nRelease 2.87.29</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/fc26824601b40bd3b26712c48942016e2b2d12f6\"><code>fc26824</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5018b2ebebbb2657068e91071ea73d9a53a44f2d\"><code>5018b2e</code></a>\nUpdate <code>zizmor@latest</code> to 1.31.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d0e52041f440d731eae552c575c81c4cccd601c8\"><code>d0e5204</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/517774f2ae949bb5d89258edba4466e75f1a33be\"><code>517774f</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.262.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4bc69b1c8214eb6efb50b217dfb04ae04d8af1f5\"><code>4bc69b1</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0470a3f16345a16a36a8b4b51fd72f0de5cc6b5b\"><code>0470a3f</code></a>\nUpdate <code>uv@latest</code> to 0.13.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7a2b747eb5f89f888d956c73464777912a182a35\"><code>7a2b747</code></a>\nUpdate <code>trivy@latest</code> to 0.76.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7efb5337f67975eb612c46a52d9c7790a5829f97\"><code>7efb533</code></a>\nUpdate <code>tombi@latest</code> to 1.8.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e5d37d6fd4d56d59f3bdc428d4138afa60276954\"><code>e5d37d6</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.172</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.28...v2.87.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.28&new-version=2.87.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T09:45:55Z",
          "tree_id": "a43a4984b96baf2ec7f6d9935a8ca8c5660db69f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d"
        },
        "date": 1793189201289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5079.76376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4475.21806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5843.26025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.94970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.82265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.897265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.3443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.62568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.6208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.69716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6299.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.18935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5191.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.11552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1860.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.10009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1549.43876953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1494.12001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.534375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1991.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.99140625,
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
          "id": "59c7bbc1843652ccd239ef8a9235e56ad1842774",
          "message": "Update cargo dependencies (#2009)\n\nRun cargo update to pick up in particular `crypto-bigint v0.7.10` which\naddresses RUSTSEC-2026-0387.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-28T10:56:19Z",
          "tree_id": "7fa69936bf6b5f0af7c779be06b559d490744c43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59c7bbc1843652ccd239ef8a9235e56ad1842774"
        },
        "date": 1793193492619,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5076.355859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4491.8259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5864.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.3609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.847265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.88701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.098828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.8236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.8490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6280.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 530.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5248.09443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 525.41201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1536.04326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.0001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1435.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1380.02041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.06728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.97998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1201.08759765625,
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
          "id": "36b537e5f5e439bdd4f942746e02d86f8851ae48",
          "message": "Bump hydra-core from 1.3.7 to 1.3.8 in /benchmark (#2011)\n\nBumps [hydra-core](https://github.com/hydra-ecosystem/hydra) from 1.3.7\nto 1.3.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.8</h2>\n<h3>Bug fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.8/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.8 (2026-10-25)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/004658aa49f466982433dded1e4f413c5fd35da8\"><code>004658a</code></a>\nClarify the Hydra 1.3.8 security release note</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2f20addd723d2f07eff55cae63e7df5b3170059d\"><code>2f20add</code></a>\nPrepare Hydra 1.3.8 security release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/de5554320c17cd2d974492c03d0b1456adb4a8ef\"><code>de55543</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/39f3b31ae38a44fa3ba9f50fe5859265b3bbaa10\"><code>39f3b31</code></a>\nPrepare Ray launcher 1.2.2 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ed11e57534d93a7e16d7dd1a42665f02859bb4fb\"><code>ed11e57</code></a>\nBackport the Ray version resolver fix to Hydra 1.3 (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3567\">#3567</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d620c0b2b72838a20ff634a49e5cf19b82e5a66d\"><code>d620c0b</code></a>\nUpdate Hydra 1.3 package metadata after repository transfer</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/35cd89dfd67ca1718c33cc9b783529804b9244c7\"><code>35cd89d</code></a>\nSupport publishing 1.3 plugins</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/8429daa0fa1212e57240de5613d7ec74380705e8\"><code>8429daa</code></a>\nPrepare hydra-optuna-sweeper 1.3.0 release</li>\n<li>See full diff in <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.7...v1.3.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.7&new-version=1.3.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T11:41:00Z",
          "tree_id": "d0e1d32ab40a68581cd558f77a859cb6e1f6b8ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36b537e5f5e439bdd4f942746e02d86f8851ae48"
        },
        "date": 1793196420196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5117.10244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4486.2484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5932.10380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 104.55791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.565234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.26494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.951953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6496.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 534.96025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5182.78466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1513.1224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1827.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1483.44130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.34443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1947.8240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.3607421875,
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
          "id": "f0b0e02cbf2a37e912697e5cd4b8830c3ededa04",
          "message": "Update CRT submodules to latest releases (#2010)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.0` -> `v1.0.2`\n* `aws-c-common` `v1.0.1` -> `v1.0.5`\n* `aws-c-http` `v1.0.0` -> `v1.1.1`\n* `aws-c-io` `v1.0.0` -> `v1.1.1`\n* `aws-c-s3` `v1.1.3` -> `v1.5.0`\n* `aws-c-sdkutils` `v1.0.0` -> `v1.0.1`\n* `aws-checksums` `v1.0.0` -> `v1.0.1`\n* `aws-lc` `v5.9.0` -> `v5.12.0`\n* `s2n-tls` `v1.7.10` -> `v1.7.13`\n\nChanges in behavior:\n- With the new `aws-c-io`, the CRT retry strategy no longer rejects more\nthan 63 retries, so setting `AWS_MAX_ATTEMPTS` (or `max_attempts` in the\nclient) above 64 no longer makes the client panic at creation and\nMountpoint at startup. A new test covers it.\n- The new `aws-c-s3` starts up to 8 threads per client for meta requests\nthat upload from or download to a file. `mountpoint-s3-crt` doesn't\nsupport those requests, so its `Client` limits them to one thread, the\nminimum the CRT allows. A new test covers it.\n- The User-Agent header carries new CRT metadata.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 055e822f0..3d29adcec:\n  > chore(release): patch-update to VERSION - 1.0.2\n  > Fix warnings found by the Undefined Behavior Sanitizer- #274 (#305)\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Uri secure cleanup (#307)\n  > Secure cleanup to the key buffers (#304)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 69cd45209..45e930738:\n  > Fix version (#1307)\n  > Set sticky bit on cross process lock file (#1306)\n  > add bignum (#1300)\n  > Make UBSan errors fatal (#1266)\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Uri secure cleanup (#1286)\n  > chore(release): patch-update to VERSION - 1.0.2\n  > fix: reduce warnings and support windows-arm builds (#1278)\n  > Add callback-compatible wrappers for byte cursor equality functions (#1281)\n  > Cache CPU feature detection at library init (#1280)\n  > Windows thread failure cleanup (#1279)\n  > Revert thread detach state to not created when OS thread creation fails (#1277)\n  > Optimize the size of encoded double values (#1268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 2b563f8a7..d19eabf4c:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add path to responds immediately for H2 mock server (#593)\n  > Make ubsan useful (#587)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Move l4 proxy config to end of public structs (#591)\n  > Securely destroying data path  (#590)\n  > fix: strip absolute-form request-target to spec (#584)\n  > fix: validate WebSocket CLOSE frames (#583)\n  > fix: harden HPACK decoding and table sizing (#582)\n  > fix: validate HTTP/2 request pseudo headers (#581)\n  > Socks5 support (#585)\n  > Lower fuzz test log level to avoid ctest running out of memory (#589)\n  > chore: make h2benchmark configurable (#580)\n  > chore: document and pin existing behavior (#578)\n  > chore: remove unreachable OOM handling (#577)\n  > chore: address TODO comments (#576)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1685abcd3..cbc368573:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Update API names to avoid conflict (#857)\n  > [Feat]: Adding Adaptive retry strategy (#849)\n  > Register cleanup callback on accepted socket instead of listener (#855)\n  > Fix Server Channel Use After Free (#854)\n  > chore: tester fix to notify with lock (#853)\n  > [Chore]: Removing max_retry check (#850)\n  > Make ubsan useful (#844)\n  > Fix naming of the arguments (#848)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Fix find s2n result in pre-installed s2n even when we build s2n source together (#845)\n  > Socks5 Implementation  (#832)\n  > Fix and test for thread launch failure leading to shutdown deadlock (#842)\n  > Updated `s_do_read` to handle NULL right slot (#805)\n  > chore: Clarifying comment for SecIdentityCreate Api (#839)\n  > feat: keychain-less macOS identity mode (#826)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 805ca0f4c..fcb0e322b:\n  > chore(release): minor-update to VERSION - 1.5.0\n  > Fix Clang 21 -Wdefault-const-init-field-unsafe error (#707)\n  > Add recv_buffer: buffer-pool  (#693)\n  > fix: limit the eventloops spawned (#702)\n  > chore(release): patch-update to VERSION - 1.4.1\n  > Get Defalut Part Size (#706)\n  > chore(release): minor-update to VERSION - 1.4.0\n  > User Agent fix (#703)\n  > Retry strategy Modes (#705)\n  > fix: prevent segfault from early request finish (#701)\n  > fix: surface errors with first part get (#700)\n  > fix: stream creation failure on odd part sizes (#699)\n  > Validate whole-object checksum before finish decides outcome (#698)\n  > Fix undefined behavior from function pointer type casts flagged by UBSan (#688)\n  > chore(release): patch-update to VERSION - 1.3.1\n  > Run the tests in parallel (#696)\n  > limit the file io threads by default and make it configurable via env… (#694)\n  > Full object checksum for round-trip tests (#690)\n  > chore(release): minor-update to VERSION - 1.3.0\n  > Manual changelog and more validation (#691)\n  > fix the bug where we delete the file even succeed (#689)\n  > Expected checksum and validation mode changes (#684)\n  > chore(release): minor-update to VERSION - 1.2.0\n  > Clarify the bit mask logic. (#687)\n  > Parallel out of order write to file (#679)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils de0fbe807..66a79c011:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Fix misaligned data in endpoints (#76)\n  > Ubsan fixes (#75)\n  > feat:  Add streaming aws-chunked content encoding decoder (#64)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ee7c435de..12cd22e81:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > fix: use clang's intrinsics header under clang-cl on ARM64 (#120)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 39b142ec3..cd481c207:\n  > Prepare v5.12.0 (#3689)\n  > feat(tool-openssl): add ocsp command (#3635)\n  > feat(tool-openssl): support CA signing, revocation, and CRLs in ca (#3634)\n  > Explicitly block a small set of intermediates (#3688)\n  > Hold HPKE key and context buffers out of line (#3637)\n  > feat(tool-openssl): add x509 -serial/-addtrust/-trustout (#3636)\n  > tool-openssl: add password-based key derivation to openssl enc (#3665)\n  > tool-openssl: add openssl rand subcommand (#3664)\n  > Fix PKCS12 password prompt test isolation on OpenBSD (#3680)\n  > Make the SSL_SHA256 constant non-overlapping with the rest (#3659)\n  > tool-openssl: support cipher name as command (e.g. openssl aes-256-cbc) (#3666)\n  > Move AArch64 Keccak round constants out of .text (#3674)\n  > Use CMake find_package for OpenSSL (#3662)\n  > Implement aws-lc-provider error queue handling (#3488)\n  > fix(ssl): Reject non-ECDHE cipher in handback (#3653)\n  > Import s2n-bignum 2026-09-29 (#3661)\n  > Reject ECH configuration on DTLS connections (#3578)\n  > fix(ci): running ci in dedicated msys shell (#3669)\n  > Scope OCSP noCheck exemption to the responder certificate (#3576)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3657)\n  > Bump the cargo-ci-lambda group across 1 directory with 3 updates (#3658)\n  > Add FIPS support to the aws-lc-provider (#3487)\n  > Bump rustls from 0.23.40 to 0.23.45 in /tests/ci/lambda (#3649)\n  > Bump urllib3 from 2.7.0 to 2.8.0 in /tests/ci (#3606)\n  > Bump the github-actions group across 1 directory with 3 updates (#3627)\n  > Ensure UBE is caught between thread-local state init and uniqueness test (#3654)\n  > Validate OCSP HTTP request inputs (#3639)\n  > Fix -Wunused-but-set-global in rand_isolated_test.cc (#3648)\n  > fix(ci): scope id-token permission to report-failures job in integration omnibus (#3640)\n  > Reserve alignment slack in SSLBuffer max capacity (#3642)\n  > Reject failed signature controls (CWE-393) (#3643)\n  > Fix -Wunused-but-set-global in fork_ube_detect.c (#3645)\n  > Verify provider-wide algorithm reachability (#3486)\n  > Reject repeated AES-XTS data unit operations (#3621)\n  > Salt len truncation fix (#3570)\n  > Implement remaining SHA2 digests (#3485)\n  > Adding RC2 EVP key length signed truncation guard (#3589)\n  > Grow BIO_read_asn1's buffer incrementally, not from the claimed length (#3583)\n  > Add SHA2-224 and establish the SHA-2 variant pattern (#3449)\n  > Check `EVP_PKEY_assign_EC_KEY` return (#3620)\n  > Honor restricted PSS min saltlen for AUTO verify (#3470)\n  > Reset cached extension state when reusing an X509 or X509_CRL (#3584)\n  > Deduplicate digest algorithms in PKCS7_dataInit (#3579)\n  > Clear buffered cipher state per record in aead_tls_open (#3587)\n  > Prepare v5.11.0 (#3610)\n  > Harden previous-finished* length in v1/v2 transfer (#3595)\n  > Recognise known safe DH groups/primes and short-circuit Diffie-Hellman test (#3337)\n  > fix(ci): restrict calls for autofix (#3599)\n  > fix(ml_kem): Gate ML-KEM x86-64 on BMI2 in addition to AVX2 (#3596)\n  > Support RSA encryption/decryption and additional ciphers in the OpenSSL CLI (#3605)\n  > Resize md_data when an HMAC EVP_MD_CTX changes digest (#3586)\n  > Use the dummy key when a PKCS#7 content encryption key is the wrong length (#3585)\n  > Remove nameRelativeToCRLIssuer CRL distribution point support (#3598)\n  > fix(x509): Verify CSR proof-of-possession on -req (#3592)\n  > fix(ssl): Check buffer-view bounds before pointer arithmetic (#3566)\n  > Reject unoffered cipher suite in TLS 1.3 client (#3537)\n  > fix: Add patch for failing gRPC master branch (#3591)\n  > feat(duvet): RFC 8032 (EdDSA) requirement coverage + annotation-regression CI (#3477)\n  > Support `pkcs12 -export` and `req -batch` in the OpenSSL CLI (#3575)\n  > fix(acvp): place the IUT public key correctly in KAS-ECC fixedInfo (#3597)\n  > fix: Update Ruby (master) integration patch (#3590)\n  > Extend FIPS 3.x EOS to February 2030 (#3539)\n  > Seed groups and signature algorithms from the system crypto policy (#3504)\n  > Gating PR auth checks on actor pushing the code instead of author (#3567)\n  > Fail openssl ca when the issued certificate cannot be written (#3568)\n  > Guard against NULL attribute type names in X509_NAME_print_ex (#3574)\n  > Harden a number of code-paths to avoid e.g. hangs and invalid input (#3543)\n  > Add OpenSSL-compatible rehash -compat support (#3563)\n  > Reject [UNIVERSAL 0] elements with content as end-of-contents (#3560)\n  > Fix BIO socket error handling (#3459)\n  > Restricting CI permissions so fork-PR code doesn't run CI with ECR push and shared S3 write permissions (#3546)\n  > Record job settings (#3569)\n  > Zeroize ChaCha20-Poly1305 key material (#3552)\n  > Skip AEAD ConcurrentStability under Intel SDE; add deterministic context-immutability test (#3562)\n  > ci: fix openssh-master integration (#3561)\n  > Prepare 5.10.0 (#3553)\n  > Add EVP_add_cipher as a compatibility no-op (#3554)\n  > Fix SIGPIPE race in linkage checks (#3551)\n  > Quote shell arguments in tool tests (#3499)\n  > Bump the github-actions group with 8 updates (#3550)\n  > Reject non-canonical Ed25519 public keys in the nohw decoder (#3457)\n  > Add pkcs12 import subcommand to the CLI (#3532)\n  > Improve verify and x509 CLI compatibility  (#3548)\n  > Seed cipher lists and version bounds from the system crypto policy (#3503)\n  > Prevent tests from creating temporary files in the source tree (#3498)\n  > Return process exit codes from openssl CLI tool entry points (#3536)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check for KEMs (#2709)\n  > Add context length guard in ML-DSA ACVP siggen (#3538)\n  > fix: declare FIPS service-indicator funcs in curve25519.c (#3514)\n  > fix: restore alloc-size >= ivlen invariant in legacy AES-GCM SET_IVLEN (#3466)\n  > Export the crypto-policies reader and add its CI job (#3527)\n  > Add a reader for the system crypto-policies OpenSSL back-end (#3502)\n  > Retry failed rndr register read a bounded number of times (#3475)\n  > Shard WASM gtests across runner CPUs (#3524)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls bce022f41..e7ce83a27:\n  > feat: add 20261021 security policies (#6141)\n  > test: add rust buffered send test (#6060)\n  > feat: Adds API to make fragment length configurable (#6139)\n  > fix(bindings): remove Result from CertValidationCallbackSync (#5779)\n  > fix: validate x509 extension length on the length-only path (#6126)\n  > fix: add null check for quic_transport_parameters (#6135)\n  > refactor: guard libcrypto function calls (#6133)\n  > docs: clarify aws-kms-tls-auth revocation requires KMS key rotation (#6128)\n  > chore: bindings release 0.3.46 (#6130)\n  > fix: prefer ECDSA signature schemes in ELB TLS 1.3 security policies (#6127)\n  > fix(mem): Reverse MADV_DONTDUMP on mlock allocator free (#6120)\n  > fix: treat s2n_allowed_to_cache_connection error return as false (#6125)\n  > chore: add new team member (#6122)\n  > fix: enforce max handshake length in parse_message (#6055)\n  > fix: copy ticket key before use to avoid concurrent rotation UAF (#6043)\n  > fix: initialize s2n_cert fields in s2n_connection_get_peer_cert_chain (#6045)\n  > fix: guard DH param sizes against uint16 truncation (#6062)\n  > refactor: remove length-prefixed logic for PQ key shares (#6041)\n  > chore: bindings release 0.3.45 (#6116)\n  > build(deps): update bindgen requirement from 0.72 to 0.73 in /bindings/rust/standard (#6084)\n  > feat: add OpenSSL 4.0 compatibility (#6111)\n  > fix: prevent trust store switch when s2n_connection_set_config fails (#6105)\n  > feat(rust-examples): add mutual TLS example (#5995)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6098)\n  > fix: re-enable TLS_RSA cipher suites in the Java integration test client (#6114)\n  > revert: new AMI for the kTLS fleet was published with updated PGP key for the github CLI. (#6109)\n  > ci: pin macOS CI to openssl@3 to fix OpenSSL 4 build break (#6113)\n  > build(cmake): add opt-in discovery for a distribution-packaged AWS-LC (#6108)\n  > fix: disable TLS1.3 resumption when client auth is required (#6103)\n  > feat: Adds split API on the Rust bindings Connection (#5774)\n  > fix: report Finished and PSK binder mismatches as decrypt_error (#6104)\n  > chore: bindings bump v.0.3.44 (#6099)\n  > chore: Update gh cli PGP key (#6102)\n  > chore(bindings): Address 2 Rustsec advisories (#6095)\n  > style: order tls 1.3 cipher suites first (#6092)\n  > fix: remove unused variable to fix Clang build with Werror (#6093)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6079)\n  > feat: Preserve count in handshake/compute duration (#6069)\n  > fix: Ensure that TLS1.3 ticket is not accepted on TLS1.2 codepath (#6081)\n  > build(deps): update brass-aphid-wire crates (#6090)\n  > fix: cleanup kms-tls-auth crate (#6094)\n  > feat(bindings): add async cert validation callback (#6071)\n  > feat(metrics): skip export when record is zero (#6087)\n  > fix: relax https test to accept all status codes (#6091)\n  > feat(bindings): deprecate & alias Connection::wipe (#6033)\n  > fix: cleanup dhparams in failure case (#6085)\n  > chore: add simonmarty to the team (#6089)\n  > feat(policy): Add ELB, KMS, and service TLS security policies (#5977)\n```\n</details>\n\n### Does this change impact existing behavior?\n\n`AWS_MAX_ATTEMPTS` values above 64 are now accepted, where Mountpoint\nused to panic at startup. Each client has one additional idle thread.\nSee the changes in behavior above.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: \"Update to latest CRT dependencies\" entries for\n`mountpoint-s3-crt-sys`, `mountpoint-s3-crt` and `mountpoint-s3-client`,\n\"Update to latest S3 client\" for `mountpoint-s3-fs`, and entries for the\n`AWS_MAX_ATTEMPTS` fix in `mountpoint-s3-client` and `mountpoint-s3`.\nMinor version bumps: `mountpoint-s3-crt-sys` 0.18.0, `mountpoint-s3-crt`\n0.17.0, `mountpoint-s3-client` 0.23.0, `mountpoint-s3-fs` 0.12.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-29T06:52:50Z",
          "tree_id": "451fcd2f4a5dd7b7b92a1d893bdac454a0ba1a3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0b0e02cbf2a37e912697e5cd4b8830c3ededa04"
        },
        "date": 1793265220461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5006.04189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4559.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5875.756542968749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.72509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.5896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.65341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.19423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6339.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 534.3953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5253.86826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 525.023046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1580.68447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1436.43466796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1236.7501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.01611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1471.06650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.68603515625,
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
          "id": "f5d283be78d717f3f219d82740608a1483dfa301",
          "message": "Bump libz-sys from 1.1.30 to 1.1.31 (RUSTSEC-2026-0418) (#2013)\n\nBumps libz-sys to 1.1.31 to fix RUSTSEC-2026-0418 (the libz-sys build\nscript logs its compiler probe command, leaking environment variables\ninto the build directory), which currently fails the `cargo deny`\nadvisories check. Cargo.lock only, no code changes.\n\nlibz-sys is a build-time dependency only, reached via\n`built` -> `git2` -> `libgit2-sys` from the `mountpoint-s3` and\n`mountpoint-s3-client` build scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-30T09:44:05Z",
          "tree_id": "23b855040345b40f370758ceb7539c4582cf29a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5d283be78d717f3f219d82740608a1483dfa301"
        },
        "date": 1793361875053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5096.91767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4469.3259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5843.658593749999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.33125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.08828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.32666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.93212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.80146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.3521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6527.64423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.39638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5251.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.471484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1685.694921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.1091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1605.9125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1216.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.90634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1547.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 901.6453125,
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
          "id": "eed2626515d090b005ce3383a2e9ec878c266ecf",
          "message": "Fix lock-order deadlock between forget and rename/opendir in the superblock (#1995)\n\n`Superblock::forget` held the inode map lock while taking the parent\ndirectory's state lock to unlink the forgotten inode. `rename` and\nopening a directory take the inode map lock while holding a directory's\nstate lock. A forget racing with either in the same directory could\ntherefore deadlock and hang the file system.\n\n`forget` now removes the inode from the map under the map lock alone,\nand then locks the parent to unlink it, unless a lookup has remembered\nit again in between. While it is being unlinked, the inode stays in the\nmap with a lookup count of 0, so that the forget of a child still finds\nits parent if the parent is being forgotten at the same time. A\ndirectory that was unlinked before its children were forgotten can still\nhold children that are no longer in the inode map: opening the directory\nskips such local children instead of failing.\n\nTo keep the order from being broken again, the map's lock is now\ninternal to `InodeMap`: its methods lock internally and return clones,\nso no caller can hold the map lock while taking another lock. Operations\nthat need several steps under the lock (lowering an inode's lookup count\nand finding its parent, checking whether a directory is an ancestor of\nanother for rename) are `InodeMap` methods.\n\nAdds shuttle tests for forget racing with rename and opendir (both\ndeadlock without the fix), a lookup of the same inode, and the forget of\nthe parent directory, alone and together with a lookup of it, and a unit\ntest for listing a directory with a local child that is not in the inode\nmap.\n\n### Does this change impact existing behavior?\n\nIt fixes a possible hang, and opening a directory no longer fails when a\nlocal file in it has been forgotten. No other behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: entries in the `mountpoint-s3-fs` and `mountpoint-s3` changelogs.\nBoth crates are already at unreleased patch versions (v0.11.1 and\nv1.24.1).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T12:05:41Z",
          "tree_id": "c3fd6343dc7f4d27bbca39f536afa82b0e243538",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eed2626515d090b005ce3383a2e9ec878c266ecf"
        },
        "date": 1793370382896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5111.248828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4440.03427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5942.550195312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.68779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.69013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.54091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.63896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.3302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6117.13017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 531.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5298.6294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 523.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1958.604296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1610.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.5984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.31953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.75615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1074.87666015625,
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
          "id": "830e8a9d7c7d13d79fa8e143b87bd811d31a1d77",
          "message": "  Upgrade fuser to 0.17 (#2005)\n\nUpgrades the vendored fuser to 0.17 and adopts its typed wrappers.\n\n- `mountpoint-s3-fuser` is re-vendored from `fuser/fork` (`d59a11218`)\nand excluded from the workspace, since fuser 0.17 declares its own\n`[workspace]`.\n- `--auto-unmount` keeps its current behavior: with no `--allow-*`\noption, Mountpoint passes `auto_unmount` and `allow_other` to the kernel\nand keeps the ACL as `Owner`, as the previous fuser did. Tests cover\nthis.\n- `S3Filesystem` now matches fuser's `Filesystem` trait. `INodeNo`,\n`FileHandle`, `Errno`, `Generation`, `LockOwner`, `FopenFlags`,\n`BsdFileFlags`, `WriteFlags` and `u64` offsets are used all the way\ndown. Our `OpenFlags` and `RenameFlags` are kept and converted once in\n`fuse.rs`.\n\n### Does this change impact existing behavior?\n\nNo user-facing behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n - `mountpoint-s3-fuser`: bumped to 0.2.0\n- `mountpoint-s3-fs`: added a changelog entry for the fuser 0.17\nalignment and the type changes. No version change needed.\n \n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-30T16:48:12Z",
          "tree_id": "c3655b84b58bdbcbff463b4dd97f32f8fbb1831a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/830e8a9d7c7d13d79fa8e143b87bd811d31a1d77"
        },
        "date": 1793387991130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4967.75068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4479.61123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5894.127539062501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.101953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.03564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.45673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.19111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.87666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.3767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6401.0328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 532.6345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5260.0953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 526.1380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1691.3806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.00693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1593.69892578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.86884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.35009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.542578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1185.56494140625,
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
          "id": "7c8d62364774d42086c0ac62de1693ef2bc68fc2",
          "message": "Fix `max_attempts = 1` still retrying failed requests (#1996)\n\nSetting the maximum number of attempts to 1\n(`S3ClientConfig::max_attempts` or `AWS_MAX_ATTEMPTS=1`) did not disable\nretries: failed requests were still attempted up to 4 times. The client\npasses `max_retries = attempts - 1` to the CRT's standard retry\nstrategy, which treats `max_retries = 0` as \"use the default\" (3\nretries).\n\nThe client now configures retries through the S3 client's built-in retry\nconfig, with the new `ClientConfig::retry_config` in\n`mountpoint-s3-crt`, instead of building a retry strategy: the no-retry\nmode (`AWS_S3_RETRY_MODE_NONE`, from awslabs/aws-c-s3#705) for 1\nattempt, and the standard mode with `max_attempts - 1` retries\notherwise, with the same backoff settings as before. In the no-retry\nmode the S3 client makes each request once, without acquiring a retry\ntoken, and also turns off the first-byte timeout it otherwise sets on\nUploadPart requests, which relies on retrying the parts that time out.\n\n`AWS_MAX_ATTEMPTS` must now be a positive integer. Other values make\nclient creation fail with `NewClientError::InvalidConfiguration`, so\nMountpoint fails to start with a clear error. Previously `0` selected\nthe CRT's default of 4 attempts, and other invalid values were silently\nignored.\n\nNew tests run against a local mock server (wiremock). They count the\nrequests made for failing ListObjectsV2 and HeadObject calls with 1, 2\nand 3 attempts, set from the client config or the environment, and check\nthat invalid `AWS_MAX_ATTEMPTS` values are rejected. The single-attempt\nand invalid-value tests fail without this fix.\n\n### Does this change impact existing behavior?\n\nYes:\n- Bug fix: `AWS_MAX_ATTEMPTS=1` and `max_attempts(1)` now make a single\nattempt.\n- Breaking change: Mountpoint and `S3CrtClient::new` now fail when\n`AWS_MAX_ATTEMPTS` is set to anything other than a positive integer (for\nexample `0`, `-1`, `\"\"` or `many`). These values were silently ignored,\nexcept `0`, which gave 4 attempts instead of no retries. Failing at\nstartup is safer than running with a different number of attempts than\nthe user asked for.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. There are changelog entries for `mountpoint-s3-crt`,\n`mountpoint-s3-client` and `mountpoint-s3`.\n- `mountpoint-s3` is bumped to 1.25.0 for the breaking change.\n- `mountpoint-s3-crt` 0.17.0 (new `ClientConfig::retry_config`, which\nreplaces the removed `ClientConfig::retry_strategy`) and\n`mountpoint-s3-client` 0.23.0 are already bumped past their latest\nreleases.\n- `mountpoint-s3-fs` gets the change through its existing \"Update to\nlatest S3 client\" entry (0.12.0, already bumped).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T18:39:55Z",
          "tree_id": "a98db25d75e805a696db1f0ab5a364c65c8df83f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c8d62364774d42086c0ac62de1693ef2bc68fc2"
        },
        "date": 1793397385533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5071.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4432.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5925.56201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.19228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.83134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.96640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.80517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.10849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.4939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6396.43046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.648046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5219.17626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 534.71669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 136.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1536.97939453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1363.87119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.17021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1849.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 938.4052734375,
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
          "id": "75b9f7ee92ac92be333a2fbd815e6d68776234fe",
          "message": "Name Amazon Linux source tarballs after the release tag (#2015)\n\nThe source and vendor tarballs used to build the Amazon Linux 2023 and\n2027 packages will be using `v<version>` release tag. They are named\nafter the tag and differ from the tarballs we build today:\n\n| | Before | After |\n|---|---|---|\n| `Source0` | `mountpoint-s3-<version>.tar.gz`, unpacking into\n`mountpoint-s3/` | `mountpoint-s3-v<version>.tar.gz`, unpacking into\n`mountpoint-s3-<version>/` |\n| `Source1` | `mountpoint-s3-<version>-vendor.tar.gz`, unpacking into\n`vendor/` | `mountpoint-s3-v<version>-vendor.tar.xz`, unpacking into\n`vendor/` |\n\nThis change updates the spec template to match, and updates\n`generate_amzn_srpm.sh` to build the CI tarballs with the same names and\nlayout, so the `Build SRPM` and `Test RPM` jobs keep testing the spec\nthat is submitted to Amazon Linux.\n\n### Does this change impact existing behavior?\n\nNo. It only changes the names and layout of the tarballs used to build\nthe Amazon Linux RPMs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is a packaging-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-30T22:01:00Z",
          "tree_id": "140c752615ef45094631d955cf5a4eb1900ba576",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75b9f7ee92ac92be333a2fbd815e6d68776234fe"
        },
        "date": 1793406196859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5092.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4521.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.643261718749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.162890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.6421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.21767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.59169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.34921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.51552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6510.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 529.21103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5264.5240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1497.27958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.4703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1624.699609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1360.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.32353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1794.08896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 936.93955078125,
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
          "id": "ae9e47e98aec7333616d51a3d440c8bbf64c2a2d",
          "message": "Bump astral-sh/setup-uv from 10.3.0 to 10.3.2 (#2016)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.3.0 to 10.3.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.2 🌈 update known checksums for 0.13.5</h2>\n<h2>Changes</h2>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.5 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1103\">#1103</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.3.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1102\">#1102</a>)</li>\n</ul>\n<h2>v10.3.1 🌈 preserve cache error class names in save-cache bundle</h2>\n<h2>Changes</h2>\n<p>This release includes a fix so that multiple concurrent workflows\ntrying to upload the same cache no longer warn</p>\n<p><code>##[warning]Failed to save: Unable to reserve cache with key\n..., another job may be creating this cache.</code></p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>fix: preserve cache error class names in save-cache bundle <a\nhref=\"https://github.com/dannyward630\"><code>@​dannyward630</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1093\">#1093</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1099\">#1099</a>)</li>\n<li>chore: update known checksums for 0.13.2/0.13.3 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1098\">#1098</a>)</li>\n<li>chore: update known checksums for 0.13.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1094\">#1094</a>)</li>\n<li>Verify npm dependency signatures before builds <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1027\">#1027</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: cache-dependency-glob matches relative to the working\ndirectory <a\nhref=\"https://github.com/flange-ipb\"><code>@​flange-ipb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1092\">#1092</a>)</li>\n<li>docs: update version references to v10.3.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1090\">#1090</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1101\">#1101</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/07a047e608db84b3d8c06cd9a7c7dcc9c355c18e\"><code>07a047e</code></a>\nchore: update known checksums for 0.13.5 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1103\">#1103</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e1b85369e72750369c935b004eccf97311bdf5dc\"><code>e1b8536</code></a>\ndocs: update version references to v10.3.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1102\">#1102</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/18d369b23da25a81e9458561248e1aafff6a70fa\"><code>18d369b</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1101\">#1101</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4ad2329c1e377d882fcae221cd1d17e7c0ad788e\"><code>4ad2329</code></a>\nchore: update known checksums for 0.13.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1099\">#1099</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4bc6759c82322ff7efa28de54a45404ca6869912\"><code>4bc6759</code></a>\nchore: update known checksums for 0.13.2/0.13.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1098\">#1098</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c97f06e356bcca1b426f396ef93ec35ce149ce7b\"><code>c97f06e</code></a>\nfix: preserve cache error class names in save-cache bundle (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1093\">#1093</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ca4be000bfa5f8e6aaa01d8470878c90aa728d3\"><code>8ca4be0</code></a>\nchore: update known checksums for 0.13.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1094\">#1094</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b627d85691ead579b598a36169571b1c7123526f\"><code>b627d85</code></a>\ndocs: cache-dependency-glob matches relative to the working directory\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1092\">#1092</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f8c88970fcd8fff8e97bc62edc5f5c073a0527fe\"><code>f8c8897</code></a>\nVerify npm dependency signatures before builds (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1027\">#1027</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f64d32b1cd6cc11405a74665b3dfb7bb86fea9f0\"><code>f64d32b</code></a>\ndocs: update version references to v10.3.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1090\">#1090</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/1c37ad07a6a961277cf70c0d37d6f313000f5884...07a047e608db84b3d8c06cd9a7c7dcc9c355c18e\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.3.0&new-version=10.3.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T11:15:17Z",
          "tree_id": "90f98cc44ea6a2652fc81cf07c4a2dd5422d8f8d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae9e47e98aec7333616d51a3d440c8bbf64c2a2d"
        },
        "date": 1793626783827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5101.0587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4552.0099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5814.28154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.93388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.0939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.85986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.7791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.63564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.54453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.40732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.9861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6069.9005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 544.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5276.0890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 534.3609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1498.914453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.3556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1539.22431640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1820.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1169.65849609375,
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
          "id": "b7664ba77feb258418d8629302d6f77bf73f81c8",
          "message": "Bump taiki-e/install-action from 2.87.29 to 2.87.32 (#2018)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.29 to 2.87.32.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.32</h2>\n<ul>\n<li>\n<p>Update <code>wild@latest</code> to 0.11.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.35.2.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.5.</p>\n</li>\n<li>\n<p>Update <code>sccache@latest</code> to 0.19.0.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.4.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.19.</p>\n</li>\n<li>\n<p>Update <code>knope@latest</code> to 0.23.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.64.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-vet@latest</code> to 0.10.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-sort@latest</code> to 2.1.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.26.1.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.3.</p>\n</li>\n</ul>\n<h2>2.87.31</h2>\n<ul>\n<li>\n<p>Downgrade <code>cargo-sort@latest</code> to 2.1.3.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.35.0.</p>\n</li>\n<li>\n<p>Update <code>xh@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.5.</p>\n</li>\n<li>\n<p>Update <code>ubi@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.0.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.174.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.7.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.17.</p>\n</li>\n<li>\n<p>Update <code>jaq@latest</code> to 3.1.2.</p>\n</li>\n<li>\n<p>Update <code>espup@latest</code> to 0.17.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5488ac5a951645ce95062214902ac4b6bc1a1037\"><code>5488ac5</code></a>\nRelease 2.87.32</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/688322dd8dfd7f9d8217a7c2ac457d4fa2fe3436\"><code>688322d</code></a>\nci: Mark cargo-vet as glibc_pre_2_34_incompat</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cebf56e0546f8cbe3a317a3dbc527e4cb5c8c3a1\"><code>cebf56e</code></a>\nUpdate <code>wild@latest</code> to 0.11.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/84f1fb195ce4aaeb61ac0c67fc39e032938542b9\"><code>84f1fb1</code></a>\nUpdate <code>vacuum@latest</code> to 0.35.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/22b4d72da777df58c5ce1018d97c3436f2b40413\"><code>22b4d72</code></a>\nUpdate trunk manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4aa26a3b8bcd9925bd25797b31dcb5647804e8de\"><code>4aa26a3</code></a>\nUpdate <code>tombi@latest</code> to 1.9.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/354bf5e1fe5e0639198bcea068b705c2f3714614\"><code>354bf5e</code></a>\nUpdate <code>sccache@latest</code> to 0.19.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/89eb2014d3d6cb70abda0a573687a03fafa32b12\"><code>89eb201</code></a>\nUpdate <code>release-plz@latest</code> to 0.4.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/304ba0dcffc8ad84cdb9f3d7c359b2a4223c2a42\"><code>304ba0d</code></a>\nUpdate <code>mise@latest</code> to 2026.10.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/104910e39f1be359337b9c0b2069bc5749f06c0d\"><code>104910e</code></a>\nUpdate <code>knope@latest</code> to 0.23.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.29...v2.87.32\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.29&new-version=2.87.32)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T13:26:19Z",
          "tree_id": "61ad6b9b6a442de4ab17e321d6ddd512fa3178d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b7664ba77feb258418d8629302d6f77bf73f81c8"
        },
        "date": 1793635824546,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5069.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4507.965234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.84892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.82646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.27626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.63486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.40078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.45341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6384.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 536.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5284.3560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.06201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1886.24833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.1501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1486.81416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.08125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.8390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1720.89423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1062.43515625,
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
          "id": "dcda7b59458ac3d6228a5c1a3fb99cf4bcf68152",
          "message": "Bump actions/setup-python from 7.0.0 to 7.1.0 (#2017)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 7.0.0 to 7.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.1.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements</h3>\n<ul>\n<li>Add <code>mirror</code> and <code>mirror-token</code> inputs for\ncustom Python distribution sources by <a\nhref=\"https://github.com/luhenry\"><code>@​luhenry</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1302\">actions/setup-python#1302</a></li>\n<li>Improve error message clarity by <a\nhref=\"https://github.com/v-lmvysakh\"><code>@​v-lmvysakh</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1351\">actions/setup-python#1351</a></li>\n</ul>\n<h3>Dependency Upgrade</h3>\n<ul>\n<li>Upgrade browserslist from 4.28.2 to 4.28.9 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1353\">actions/setup-python#1353</a></li>\n<li>Upgrade <code>@​typescript-eslint/parser</code> from 8.62.0 to\n8.70.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1343\">actions/setup-python#1343</a></li>\n<li>Upgrade eslint-plugin-jest from 29.15.2 to 29.16.6 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1342\">actions/setup-python#1342</a></li>\n<li>Upgrade <code>@​vercel/ncc</code> from 0.44.0 to 0.45.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1357\">actions/setup-python#1357</a></li>\n<li>Upgrade <code>@​types/semver</code> from 7.7.1 to 7.8.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1359\">actions/setup-python#1359</a></li>\n<li>Upgrade undici from 6.28.0 to 6.29.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1364\">actions/setup-python#1364</a></li>\n<li>Upgrade ts-jest from 29.4.11 to 29.4.14 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1361\">actions/setup-python#1361</a></li>\n<li>Upgrade brace-expansion from 5.0.9 to 5.0.12 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1365\">actions/setup-python#1365</a></li>\n<li>Upgrade prettier from 3.8.4 to 3.9.9 and package.json from 7.0.0 to\n7.1.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1363\">actions/setup-python#1363</a></li>\n<li>Upgrade <code>@​typescript-eslint/eslint-plugin</code> from 8.62.0\nto 8.71.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1369\">actions/setup-python#1369</a></li>\n<li>Upgrade actions/checkout from 7.0.0 to 7.0.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1345\">actions/setup-python#1345</a></li>\n<li>Upgrade cache to 6.3.0 by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1370\">actions/setup-python#1370</a></li>\n<li>Resolve Basic Validation audit failures by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1347\">actions/setup-python#1347</a></li>\n<li>Resolve npm audit failures by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1350\">actions/setup-python#1350</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/luhenry\"><code>@​luhenry</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1302\">actions/setup-python#1302</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v7.0.0...v7.1.0\">https://github.com/actions/setup-python/compare/v7.0.0...v7.1.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/6d4fd22b20465ccc0f7354476588e8df7c9ca0e0\"><code>6d4fd22</code></a>\nCache upgrade to 6.3.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1370\">#1370</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/ec52d0af729a7c50ced4261d17a07916f43f5b8e\"><code>ec52d0a</code></a>\nBump <code>@​typescript-eslint/eslint-plugin</code> from 8.62.0 to\n8.71.1 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1369\">#1369</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/ff73b2463e2f3baa703f830da214b8dfeeaeccf8\"><code>ff73b24</code></a>\nBump prettier from 3.8.4 to 3.9.9 and package.json from 7.0.0 to 7.1.0\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1363\">#1363</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0e40890053525508c059c61932a6b8614f9e95db\"><code>0e40890</code></a>\nBump brace-expansion from 5.0.9 to 5.0.12 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1365\">#1365</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3892123fbe74688ccc83ec7c465dc688359e5199\"><code>3892123</code></a>\nBump ts-jest from 29.4.11 to 29.4.14 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1361\">#1361</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/660965736c4aecc62797ea07d351a3c259f14660\"><code>6609657</code></a>\nBump undici from 6.28.0 to 6.29.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1364\">#1364</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/e1be392b26fb1917a7b2c455817e4b4dad6544ce\"><code>e1be392</code></a>\nBump <code>@​types/semver</code> from 7.7.1 to 7.8.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1359\">#1359</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/06da6279cdbca41027908073e81a4544dc79c06b\"><code>06da627</code></a>\nBump <code>@​vercel/ncc</code> from 0.44.0 to 0.45.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1357\">#1357</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/af9bcc7548695e66d75709de6f29e337624b8de8\"><code>af9bcc7</code></a>\nBump eslint-plugin-jest from 29.15.2 to 29.16.6 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1342\">#1342</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/7aeabeba5501120d873c50398519dbfd0657031c\"><code>7aeabeb</code></a>\nBump <code>@​typescript-eslint/parser</code> from 8.62.0 to 8.70.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1343\">#1343</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/setup-python/compare/5fda3b95a4ea91299a34e894583c3862153e4b97...6d4fd22b20465ccc0f7354476588e8df7c9ca0e0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T19:54:37Z",
          "tree_id": "2d50d7e9cf3d0bf40dfc66a9aa5c8c347f6fe312",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcda7b59458ac3d6228a5c1a3fb99cf4bcf68152"
        },
        "date": 1793659586235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5087.5689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4437.8853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5880.0275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.87265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.78974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.55087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.11171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6140.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.05537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5276.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 539.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1765.5568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.3501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1446.69375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.55419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1774.88154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 978.2505859375,
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
          "distinct": false,
          "id": "fe23b080942dd6f505b05b45ffbfa85a96e330bf",
          "message": "Replace the crc32c crate with the CRT's CRC32C combine function (#2019)\n\nMountpoint used the `crc32c` crate only to combine CRC32C checksums. It\nwas added in #367 because the CRT had no combine function at the time.\nThe CRT has since added one\n([aws-checksums#109](https://github.com/awslabs/aws-checksums/pull/109)),\nand #1744 brought that version into Mountpoint, so this change uses it\nand removes the crate.\n\n- `mountpoint-s3-crt`: add `checksums::crc32c::combine`, matching\n`crc64nvme::combine`.\n- `mountpoint-s3-fs`: remove `checksums::combine_checksums` and call\n`crc32c::combine` directly, as is already done for CRC64NVME.\n\nThe CRT function returns the same results as the crate and is faster:\nabout 70 ns per combine, against 4–100 µs for the crate.\n\n### Does this change impact existing behavior?\n\nNo user-facing changes. Removing `combine_checksums` from\n`mountpoint-s3-fs` is a breaking change for library users, who should\nuse `crc32c::combine` instead.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries added for `mountpoint-s3-crt`, `mountpoint-s3-client`\nand `mountpoint-s3-fs`. No version change needed, because all three\nalready have unreleased version bumps.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-02T22:51:49Z",
          "tree_id": "0d3641477f868971c5d6b5111dbc832eb7684cc4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe23b080942dd6f505b05b45ffbfa85a96e330bf"
        },
        "date": 1793669101863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5125.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4575.10302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5791.04052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.84873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.312890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.36875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.17353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.5189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.88076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.98447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.00810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5962.116015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5258.378515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 537.5486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2029.48095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1521.1322265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1379.937890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1731.93740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1062.189453125,
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
          "id": "5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb",
          "message": "Update CRT submodules to latest releases (#2020)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.2` -> `v1.0.3`\n* `aws-c-s3` `v1.5.0` -> `v1.5.2`\n\nAll other submodules are already at their latest release.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Changes in behavior:\n- Requests to S3 carry the `amz-sdk-invocation-id` and `amz-sdk-request`\nheaders on every attempt.\n- Credential provider endpoints for `eusc-` regions now use the\n`amazonaws.eu` DNS suffix.\n\nThe new `aws-c-s3` also accepts `request_body` on `PUT_OBJECT` meta\nrequests. `mountpoint-s3-client` only sets `request_body` for single\nPutObject requests, which use the `DEFAULT` meta request type, so this\nchange does not affect it.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. The unreleased sections of `mountpoint-s3-crt-sys` (v0.18.0),\n`mountpoint-s3-crt` (v0.17.0) and `mountpoint-s3-client` (v0.23.0)\nalready include \"Update to latest CRT dependencies.\" and the version\nbumps from #2010.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 3d29adcec..6f9496f2f:\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Add aws-eusc partition DNS suffix for credential provider endpoints (#309)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 fcb0e322b..bc923d67e:\n  > chore(release): patch-update to VERSION - 1.5.2\n  > Zero-copy uploads: request_body on PUT_OBJECT (#709)\n  > Adding Retry headers to every attempt (#710)\n  > chore(release): patch-update to VERSION - 1.5.1\n  > Getters for default max part size and configured memory limit (#711)\n  > Resume token ETag with caller If-Match (#708)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-03T10:16:27Z",
          "tree_id": "115ded402e2824de775b5776a896f73c2bbe323f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb"
        },
        "date": 1793709544908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5104.3703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4516.89794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5816.297070312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.43466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.62724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.812890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.205859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.6251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6417.65263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.74296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5293.73203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2039.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1553.24765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1323.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.25849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.84365234375,
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
          "id": "583dfe8e8f9b20861e3095b37a13f29df477b2c4",
          "message": "Authenticate packaging image pulls against Amazon ECR Public (#2014)\n\nThe `Packaging` job pulls its CentOS 7 build image anonymously from\n`public.ecr.aws`. That quota is enforced per source IP, and\nGitHub-hosted runners\nshare a NAT pool with other tenants, so we regularly inherited an\nalready-exhausted\nbudget and failed with:\n\n```\npublic.ecr.aws/docker/library/centos:7: failed to resolve source metadata:\n429 Too Many Requests - Server message: toomanyrequests: Data limit exceeded\n```\n\nThis accounted for **15 of the last 40 `Packaging` runs** (~38%),\nincluding merge-queue\nruns, where it blocked unrelated pull requests. Only the `x86_64` leg\nfailed; the\n`aarch64` leg runs on a self-hosted runner, which egresses from our own\naddress rather\nthan a shared one.\n\n1. **Authenticate the pull** against ECR Public using the existing\n`ACTIONS_IAM_ROLE`,\nso we use the account quota instead of the shared anonymous one. Both\ncredential\nsteps are best effort: where we can't authenticate, we fall back to an\nanonymous\n   pull.\n2. **The job moves into the integration tests workflow**, so it sits\nbehind the same\napproval gate as the other jobs that use our own credentials and\nrunners.\n3. **`fail-fast: false`** keeps a failure on one architecture from\ncancelling an\n   otherwise healthy build on the other.\n\n`.github/workflows/package.yml` is removed; the job is now `packaging`\nin\n`integration.yml` and is included in the `Integration Tests Complete`\naggregate check.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-03T14:28:11Z",
          "tree_id": "9ff696b13437c4fb10dfda18ab8cabce1030d8f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/583dfe8e8f9b20861e3095b37a13f29df477b2c4"
        },
        "date": 1793724760763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5157.432421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4523.09521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5930.123828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.00859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 151.80908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.75078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.4740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.98671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.87744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6308.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 543.26416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5388.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 534.8587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1506.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.66494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1685.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1347.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1472.90078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.986328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120339761+Manishram-ai@users.noreply.github.com",
            "name": "Manish Ram",
            "username": "Manishram-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "51e28e1b7f7dbc73e67b28d21e78dc98403757e6",
          "message": "Fix the CSI driver install link in INSTALL.md (#2021)\n\nThe CSI driver install link in `doc/INSTALL.md` goes to\n`docs/install.md`, which is a 404. The file in the CSI driver repo is\n`docs/INSTALL.md`, so I fixed the case. The `#installation` anchor is\nstill right.\n\n### Does this change impact existing behavior?\n\nNo, it's a docs link fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only changes docs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Manish Ram <manishrm@uw.edu>",
          "timestamp": "2026-11-03T16:16:32Z",
          "tree_id": "c4d3ede5007e4f524c0352996f4f476eca7d6ce0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/51e28e1b7f7dbc73e67b28d21e78dc98403757e6"
        },
        "date": 1793731238270,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5166.256640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4585.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5892.378515625001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.69833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.13251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.0458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.21103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.36474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.81015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6608.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 534.90322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5246.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.97724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1537.56240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.5548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1440.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.76396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.06533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1521.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.358203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120339761+Manishram-ai@users.noreply.github.com",
            "name": "Manish Ram",
            "username": "Manishram-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3d031a125c3e47ec67073d18c285ee5846e7f36d",
          "message": "Keep listing a directory after empty S3 list pages (#2023)\n\n#1954 fixed lookup for the case where S3 returns empty `ListObjectsV2`\npages with a continuation token. `readdir` has the same problem.\n\n`RemoteIter::next` lists one page when it has no buffered entries, then\nreturns the first entry. If that page is empty, it returns `None` even\nthough there's a continuation token. `Superblock::readdir` ends the\nreply on `None`, and if that leaves the reply with no entries, the\nkernel treats it as the end of the directory. So when a readdir call\nstarts on an empty page, the rest of the listing is never read. For\nexample, with two empty pages at the start, `ls` shows the directory as\nempty.\n\nThis changes the `if` to a `while`, so `next` keeps listing until it has\nentries or the listing is finished.\n\nThe new unit test lists `dir/` through a `MetadataClient` that returns\ntwo empty pages and then a page with two objects, for both the ordered\nand unordered iterators. On `main` it lists nothing, and with this\nchange it lists both objects. I didn't reproduce this against real S3.\n#1954 showed S3 does return these pages.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. A listing that used to stop early after an empty\npage now returns the rest of the directory, which can take more\nListObjectsV2 requests in that case.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, I added an entry to `mountpoint-s3-fs/CHANGELOG.md`. No version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Manish Ram <manishrm@uw.edu>",
          "timestamp": "2026-11-07T07:05:08Z",
          "tree_id": "ea6896fc7d60ec755fe0181a3530b1b4bdabb928",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d031a125c3e47ec67073d18c285ee5846e7f36d"
        },
        "date": 1794043437812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5191.0162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4653.33271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5945.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.7970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.1388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.97509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.0384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6509.36259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5360.0794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 526.98017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2151.012890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.4515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1514.1677734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1350.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1814.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 951.6783203125,
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
          "id": "31b7fd21940f3aec759e57bc041822b561fe0290",
          "message": "Bump rusqlite to 0.41 to fix RUSTSEC-2026-0459 (#2031)\n\nBump `rusqlite` to 0.41 (`libsqlite3-sys` 0.39.1) to fix\n[RUSTSEC-2026-0459](https://rustsec.org/advisories/RUSTSEC-2026-0459),\nwhich fails `cargo deny` and blocks the merge queue\n([failure](https://github.com/awslabs/mountpoint-s3/actions/runs/42625679396/job/129188703909)).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-11-09T15:02:45Z",
          "tree_id": "3ff32059a6f4810b70f24743e0dc0fb21c7a21e7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31b7fd21940f3aec759e57bc041822b561fe0290"
        },
        "date": 1794246424258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5020.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4525.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5892.53583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.91953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.72587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.98974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.87431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.96162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.33779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6207.52587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 536.58818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5223.5482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.28583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2023.75791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.62900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1825.3328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1269.178125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.33681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1519.6080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1147.26357421875,
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
          "id": "e1bcb1e0424797788b0ded51bb91dead91ef3860",
          "message": "Detect EC2 instance type from the instance's DMI tables (#2006)\n\nMountpoint reads the EC2 instance type from IMDS to auto-configure the\ndefault target throughput. When IMDS is disabled or unreachable, the\ntarget falls back to 10 Gbps regardless of the instance's bandwidth.\n`InstanceInfo::instance_type` now reads the DMI tables the kernel\nexposes in `sysfs` first, falling back to IMDS.\n\n### Does this change impact existing behavior?\n\nNo breaking change. Where IMDS is unavailable but the DMI tables are\nreadable, the default target throughput changes from 10 Gbps to the\ninstance's network bandwidth. `AWS_EC2_METADATA_DISABLED=true` no longer\nsuppresses instance-type detection.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-11-09T20:18:35Z",
          "tree_id": "c85482498b31376e51af3249ba9134e834b3255e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1bcb1e0424797788b0ded51bb91dead91ef3860"
        },
        "date": 1794266085489,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5144.51357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4553.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5949.983300781249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.15126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.7693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.84736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.99404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6329.15380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.50703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5363.854296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.8328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1144.30048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.25732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1774.64794921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1375.0359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2054.75947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1171.480859375,
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
          "id": "b6ade41d83f79d8a9201b2681398560ccc4e9fb9",
          "message": "Bump astral-sh/setup-uv from 10.3.2 to 10.3.3 (#2030)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.3.2 to 10.3.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.3 🌈 Use Astral mirror for version manifests with GitHub\nfallback</h2>\n<h2>Changes</h2>\n<p>This release contains something that should have been included a very\nlong time ago. Sorry for sleeping on that.</p>\n<p>This action now retrieves the release manifest that contains the\navailable versions, their download links and checksums from the Astral\nmirror, rather than trying GitHub first. This should present much more\nstable.\n(Known checksums are still checked, so the security impact does not\nchange)</p>\n<p>Also a big thank you to <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> for a set\nof bugfixes 👏</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Use Astral mirror for version manifests with GitHub fallback <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1119\">#1119</a>)</li>\n<li>fix: allow whitespace in uv requirement specifiers <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1112\">#1112</a>)</li>\n<li>fix: resolve ~= specifiers with PEP 440 semantics <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1111\">#1111</a>)</li>\n<li>fix: only report a saved cache when saving succeeded <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1110\">#1110</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.6 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1117\">#1117</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: use JSDoc for compatible release specifier comment <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1113\">#1113</a>)</li>\n<li>docs: update version references to v10.3.2 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1104\">#1104</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/68559e99cc807c1eb7e9238fd43a15bba460eec2\"><code>68559e9</code></a>\nUse Astral mirror for version manifests with GitHub fallback (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1119\">#1119</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0192b6951893e558e24cfbd971d641a8cd336a95\"><code>0192b69</code></a>\nchore: update known checksums for 0.13.6 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1117\">#1117</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/2f29784424ba0f5755e2d0bbc18227082a5daff1\"><code>2f29784</code></a>\ndocs: use JSDoc for compatible release specifier comment (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1113\">#1113</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/9c7332190cf7291329c770bedb2ba1b3e441b37c\"><code>9c73321</code></a>\nfix: allow whitespace in uv requirement specifiers (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1112\">#1112</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/80fbe0140ccf08d50eff5eeb98dff9021c415a21\"><code>80fbe01</code></a>\nfix: resolve ~= specifiers with PEP 440 semantics (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1111\">#1111</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/36b7b57007634b5d947fd73fcd85c7b44863efec\"><code>36b7b57</code></a>\nfix: only report a saved cache when saving succeeded (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1110\">#1110</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/56618cab7a58e3efc9b282dd3de75bbf1075db9b\"><code>56618ca</code></a>\ndocs: update version references to v10.3.2 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1104\">#1104</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/07a047e608db84b3d8c06cd9a7c7dcc9c355c18e...68559e99cc807c1eb7e9238fd43a15bba460eec2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.3.2&new-version=10.3.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T09:10:45Z",
          "tree_id": "16af884da90e9e56902ffaff849d378643e0307b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6ade41d83f79d8a9201b2681398560ccc4e9fb9"
        },
        "date": 1794310441783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5119.60087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4508.57685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5926.88349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.3634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.07294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.423046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.1109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.21865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.96337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.631640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.771875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6535.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 539.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5330.0787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2084.50341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.375390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1225.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.8498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1082.4044921875,
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
          "id": "e1839ccffba19574c61849803b59862d5bcc3854",
          "message": "Add an opt-in to retry without the retry quota (#2032)\n\n- Add an opt-in to retry without the retry quota using\n`UNSTABLE_MOUNTPOINT_DISABLE_RETRY_QUOTA` env variable.\n- Update docs to mention retry quota and how to disable it.\n- Update docs to say that polling for files that do not exist yet is not\nrecommended.\n\nRef:\nhttps://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html#retry-quota-token-bucket\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-10T10:16:09Z",
          "tree_id": "e2816179c87bd44c3d6260e034faeab816e7fc76",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1839ccffba19574c61849803b59862d5bcc3854"
        },
        "date": 1794314971687,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5171.00517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4500.363476562499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5926.840429687501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.05849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.69375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.99736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.54150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.02373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6585.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.81796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5303.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2123.2603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.8888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1515.9931640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1512.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 134.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1457.76201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1170.69072265625,
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
          "id": "804fd135ef5e89c0e91c9df8115b64eeda8fe268",
          "message": "Make the metrics tests diagnosable and stop concurrent runs sharing objects (#2022)\n\nThe metrics tests fail intermittently, and a failure tells us nothing:\nevery `dd` sent its stderr to `/dev/null`, and cleanup deleted the\nMountpoint logs on its way out.\n\nThe cause looks like the two legs of the job, which run at the same time\nand mounted the same prefix, writing the same keys with\n`--allow-overwrite`: in [run\n41068113615](https://github.com/awslabs/mountpoint-s3/actions/runs/41068113615)\nthe arm leg failed 3s after the x86 leg started writing those keys in\nthe same mode, and in [run\n41051242705](https://github.com/awslabs/mountpoint-s3/actions/runs/41051242705)\nboth legs were in their file operations at once and both failed.\nRe-running one leg on its own passed.\n\n- **Report which operation fails**: `dd status=none` keeps error\nmessages, and an `ERR` trap names the failing command. `pipefail` goes\nwith it, so the `jq` reading the exported metrics now tolerates a torn\nread explicitly, and the per-metric check uses `grep -qxF` instead of a\npipeline.\n- **Keep the logs of a failed test**: print their tail and, if\n`FAILED_LOGS_DIR` is set, copy them there for the workflow to upload.\nCleanup no longer recurses into the mount point, which would delete the\ntest's objects from S3, or hang, if the unmount failed.\n- **Give each run its own prefix**, named after the runner and PID, and\neach test one within it, so no test overwrites another's objects. The\ncollector's output file is named after the PID too, since `/tmp` is\nshared between a self-hosted runner's processes.\n\n### Does this change impact existing behavior?\n\nNo. Test and workflow only; the same metrics are asserted in the same\nthree configurations.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo: no change to any published crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-10T11:38:08Z",
          "tree_id": "8d51e1916673cb06ca19a2426f970ae6a47e8fe1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/804fd135ef5e89c0e91c9df8115b64eeda8fe268"
        },
        "date": 1794319695989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5179.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4529.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5902.838671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.42626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.3263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.4060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.561328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.47822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.9142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6484.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.29609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5330.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.041796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1672.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.55830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1467.14296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.2404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1797.0416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1110.72763671875,
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
          "id": "12229d073cc14ac7c760d705bf81cca0353914df",
          "message": "Bump actions-rust-lang/setup-rust-toolchain from 2.0.0 to 2.0.1 (#2029)\n\nBumps\n[actions-rust-lang/setup-rust-toolchain](https://github.com/actions-rust-lang/setup-rust-toolchain)\nfrom 2.0.0 to 2.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/releases\">actions-rust-lang/setup-rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.9.2 to 2.9.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/pull/109\">actions-rust-lang/setup-rust-toolchain#109</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v2.0.0...v2.0.1\">https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v2.0.0...v2.0.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/blob/main/CHANGELOG.md\">actions-rust-lang/setup-rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>The format is based on <a\nhref=\"https://keepachangelog.com/en/1.0.0/\">Keep a Changelog</a>,\nand this project adheres to <a\nhref=\"https://semver.org/spec/v2.0.0.html\">Semantic Versioning</a>.</p>\n<h2>[Unreleased]</h2>\n<h2>[2.0.1] - 2026-11-02</h2>\n<ul>\n<li>Update Swatinem/rust-cache to 2.9.3</li>\n</ul>\n<h2>[2.0.0] - 2026-09-07</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>[1.17.0] - 2026-06-25</h2>\n<ul>\n<li>Add new parameter <code>cache-targets</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>cache-targets</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/84\">#84</a>).\nThis allows disabling caching of the workspace <code>target</code>\ndirectory, e.g. when using <code>sccache</code>, while keeping the rest\nof the cache enabled.</li>\n</ul>\n<h2>[1.16.1] - 2026-05-08</h2>\n<ul>\n<li>Renamed internally used variable to avoid clashes with globally\nexisting variables.\nThis fixes the interference of the TOOLCHAIN variable as reported in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/91\">#91</a>.</li>\n</ul>\n<h2>[1.16.0] - 2026-04-13</h2>\n<ul>\n<li>Add new parameter <code>cache-save-if</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>save-if</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/90\">#90</a>\nby <a\nhref=\"https://github.com/ChanTsune\"><code>@​ChanTsune</code></a>)</li>\n</ul>\n<h2>[1.15.4] - 2026-03-15</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.2 to 2.9.1 (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/87\">#87</a>\nby <a\nhref=\"https://github.com/hyperfinitism\"><code>@​hyperfinitism</code></a>)\nThis gets rid of the warnings about Node.js 20.</li>\n</ul>\n<h2>[1.15.3] - 2026-03-01</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.1 to 2.8.2</li>\n</ul>\n<h2>[1.15.2] - 2025-10-04</h2>\n<ul>\n<li>Fix: Run the version detection steps in the selected\n<code>rust-src-dir</code> directory.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/a188e68d0fd2bd36ad51dccb2b07ba6e75105f30\"><code>a188e68</code></a>\nUpdate CHANGELOG for 2.0.1</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/b328d6be848e9b620901df2e49d27ad7e5536c0b\"><code>b328d6b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/109\">#109</a>\nfrom actions-rust-lang/dependabot/github_actions/Swat...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/238616c8889661c4193c26311ba8ad9a36d57c23\"><code>238616c</code></a>\nBump Swatinem/rust-cache from 2.9.2 to 2.9.3</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c8ff772090ab9d00f7f7bd7b388f3c3032282e3b\"><code>c8ff772</code></a>\nUpdate Readme</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/ecabd13d1c56bd1345c230e542e9144811ad706f...a188e68d0fd2bd36ad51dccb2b07ba6e75105f30\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions-rust-lang/setup-rust-toolchain&package-manager=github_actions&previous-version=2.0.0&new-version=2.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T12:18:03Z",
          "tree_id": "8366a214ccceae7569fb89dcc4f3d904fc16b780",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12229d073cc14ac7c760d705bf81cca0353914df"
        },
        "date": 1794322121497,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5145.12177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4479.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6011.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.350390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.7095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.79140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.7025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.54326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.94990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6333.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 535.39931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5311.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.9142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1534.02333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1554.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1222.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.32958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2100.9875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1156.2091796875,
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
          "id": "19aade0f4a0be86113e22cd9f2ed9fe988550747",
          "message": "Bump taiki-e/install-action from 2.87.32 to 2.89.1 (#2028)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.32 to 2.89.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.89.1</h2>\n<ul>\n<li>\n<p>Install <code>ld.mold</code> symlink when installing\n<code>mold</code> on Linux. Previously, only <code>mold</code> binary\nwas installed. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2050\">#2050</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Update <code>parse-dockerfile@latest</code> to 0.1.9.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog@latest</code> to 0.6.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-minimal-versions@latest</code> to 0.1.38.</p>\n</li>\n<li>\n<p>Update <code>cargo-hack@latest</code> to 0.6.46.</p>\n</li>\n</ul>\n<h2>2.89.0</h2>\n<ul>\n<li>\n<p>Support <code>yq</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2036\">#2036</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Support <code>mold</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2044\">#2044</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Fix an error when old cargo-binstall had already been installed at\nnon-standard location. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2048\">#2048</a>)</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.263.0.</p>\n</li>\n<li>\n<p>Update <code>wasm-pack@latest</code> to 0.15.1.</p>\n</li>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.130.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.36.1.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.9.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.25.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.16.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.26.2.</p>\n</li>\n</ul>\n<h2>2.88.1</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 50.0.1.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.36.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.8.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.23.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.15.0.</p>\n</li>\n<li>\n<p>Update <code>espup@latest</code> to 0.19.0.</p>\n</li>\n<li>\n<p>Update <code>deepsource@latest</code> to 0.10.2.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.4.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/682ce6c3c696a4cd5168a05f98e51aa02b877941\"><code>682ce6c</code></a>\nRelease 2.89.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0d9077fcb6e81df0a88ab9271028fb5e92d08f51\"><code>0d9077f</code></a>\nUpdate changelog</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/ad358d449d89d465b6257a630f6b390216287f27\"><code>ad358d4</code></a>\nAdd missing bin <code>ld.mold</code> (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/issues/2050\">#2050</a>)</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/353b306589491a9b1a29fad27af80008d6c5f790\"><code>353b306</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e1a0ce81ae2c0b2940fa5bce1bb79605b22723ef\"><code>e1a0ce8</code></a>\nUpdate syft manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/2a3464cd4b7debd4f1a129a3fcb4bcd54bf8bd96\"><code>2a3464c</code></a>\nUpdate release-plz manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5f1e428a2af15b0861239c953f2fd29b7afc6ccf\"><code>5f1e428</code></a>\nUpdate <code>parse-dockerfile@latest</code> to 0.1.9</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/96f9ee39b02b7d8380b3a00fd947ca8fa6d698ef\"><code>96f9ee3</code></a>\nUpdate <code>parse-changelog@latest</code> to 0.6.18</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/75d961f4a7fca5eaedda9bddd7d95cb4bc39aa2b\"><code>75d961f</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/202fd96ad6091c6d22356e6ec36ed1e75feca1c9\"><code>202fd96</code></a>\nUpdate <code>cargo-minimal-versions@latest</code> to 0.1.38</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.32...v2.89.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.32&new-version=2.89.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T12:25:50Z",
          "tree_id": "98cdd4fb25ad2a26c3fe70e51d6ad0b3d50adb71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19aade0f4a0be86113e22cd9f2ed9fe988550747"
        },
        "date": 1794322856244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.39365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4514.86611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5907.461523437501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.9033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.37255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.307421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.50908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.49658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.84541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6692.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 539.59130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5380.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.36875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1894.77890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.00703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1717.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.02509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1065.76162109375,
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
          "id": "4b955fb9034bde037c79e6f94da4a67eb297a8e7",
          "message": "Bump taiki-e/create-gh-release-action from 1.11.0 to 1.12.0 (#2027)\n\nBumps\n[taiki-e/create-gh-release-action](https://github.com/taiki-e/create-gh-release-action)\nfrom 1.11.0 to 1.12.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/releases\">taiki-e/create-gh-release-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.12.0</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.18. This improves\ncompatibility with GFM (GitHub Flavored Markdown) and CommonMark,\nimproves performance, and fixes bugs.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/blob/main/CHANGELOG.md\">taiki-e/create-gh-release-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>This project adheres to <a href=\"https://semver.org\">Semantic\nVersioning</a>.</p>\n<!-- raw HTML omitted -->\n<h2>[Unreleased]</h2>\n<h2>[1.12.0] - 2026-11-02</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.18. This improves\ncompatibility with GFM (GitHub Flavored Markdown) and CommonMark,\nimproves performance, and fixes bugs.</li>\n</ul>\n<h2>[1.11.0] - 2026-04-17</h2>\n<ul>\n<li>\n<p>Support powerpc64le/riscv64/s390x Linux host.</p>\n</li>\n<li>\n<p>Improve support for AArch64 macOS/Windows host.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog</code> to 0.6.16.</p>\n</li>\n<li>\n<p>Improve robustness for network failure.</p>\n</li>\n</ul>\n<h2>[1.10.0] - 2026-04-04</h2>\n<ul>\n<li>\n<p>create-gh-release-action no longer requires <code>token</code> input.\nThis action now uses <code>${{ github.token }}</code> as the default\ntoken, like <code>actions/checkout</code> does.</p>\n</li>\n<li>\n<p>Documentation improvements.</p>\n</li>\n</ul>\n<h2>[1.9.3] - 2026-03-08</h2>\n<ul>\n<li>Avoid triggering <a\nhref=\"https://docs.zizmor.sh/audits/#ref-confusion\">zizmor\nref-confusion</a> when using this action in form of <code>uses:\ntaiki-e/create-gh-release-action@v1</code>.</li>\n</ul>\n<h2>[1.9.2] - 2026-01-06</h2>\n<ul>\n<li>\n<p>Enable <a\nhref=\"https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/immutable-releases\">release\nimmutability</a>.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog</code> to 0.6.15.</p>\n</li>\n</ul>\n<h2>[1.9.1] - 2025-03-29</h2>\n<ul>\n<li>Increase version for workaround Dependabot issue.</li>\n</ul>\n<h2>[1.8.4] - 2025-01-20</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.11.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/045e5c0ed9c50cc1f96de7e891a09ad3daea245f\"><code>045e5c0</code></a>\nRelease 1.12.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/e6bff2d1273683ac961edaf0b739fac3e39d8c1a\"><code>e6bff2d</code></a>\nTweak action.yml</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/009312afa6921eef17011893055c2b30ce94a72d\"><code>009312a</code></a>\nUpdate parse-changelog to 0.6.18</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/8c8bed32a7ffc299e8a509a6da809f61f35e2a15\"><code>8c8bed3</code></a>\ntools: Update tidy.sh</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/3a8aeda082471badc50f9369df618ee9307707c6\"><code>3a8aeda</code></a>\nci: Update taiki-e/github-actions workflows</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/fda69944781cb7ec4d9cf88843398beb68683c09\"><code>fda6994</code></a>\ntools: Update tidy.sh</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/68b72686453efc50fdddec8a9168a07b4d89c27b\"><code>68b7268</code></a>\nci: Update config</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/e99032f137a6fe81a69305fcfd06c809618b24da\"><code>e99032f</code></a>\nci: Update taiki-e/github-actions workflows</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/d95ab4c4dc917cfa4a7cfc6468a0e5267ede79ac\"><code>d95ab4c</code></a>\nci,tools: Update config and script</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/96023fa29ad717ebcc72f6b808878a9013d7f15c\"><code>96023fa</code></a>\nAdd note about unset</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/compare/eba8ea96c86cca8a37f1b56e94b4d13301fba651...045e5c0ed9c50cc1f96de7e891a09ad3daea245f\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/create-gh-release-action&package-manager=github_actions&previous-version=1.11.0&new-version=1.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T13:32:26Z",
          "tree_id": "44ada5c81f355a137e03ab4fbceda35ea78233ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4b955fb9034bde037c79e6f94da4a67eb297a8e7"
        },
        "date": 1794328271937,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5118.61142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4467.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5922.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.00830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.3755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.99375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.72177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.516015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6161.63896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.6716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5283.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1554.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.82578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1688,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1460.45419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2038.49423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.8859375,
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
          "id": "29943bac8ca91be45532cf88bf041a9bbdfffad4",
          "message": "Use a single event loop thread for the IMDS client (#2034)\n\n`ImdsCrtClient::new` created its event loop group with the CRT default\nthread count, which starts one event loop thread for every two logical\nCPUs. Mountpoint uses this client at startup to query the instance\nidentity document, so on large instances it started dozens of threads\n(96 on a 192-vCPU instance) to send a couple of requests to IMDS. It\nthen dropped them while it set up the S3 client, which starts its own\nevent loop group of the same size.\n\nCreate the IMDS client's event loop group with a single thread. Also\npropagate errors from creating the event loop group, host resolver, and\nclient bootstrap instead of unwrapping them. `ImdsCrtClient::new`\nalready returns a `Result`, and `InstanceInfo` already falls back to its\ndefaults when the client cannot be created.\n\nTesting: `imds_crt_client` integration test passes on an EC2 instance.\nOn an 8-vCPU instance, creating the client and querying the identity\ndocument now adds 2 threads to the process (1 event loop and the host\nresolver) instead of 5.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Mountpoint starts fewer threads at startup when it\nqueries IMDS. If the IMDS client cannot be set up, Mountpoint now falls\nback to its defaults instead of panicking. No public API change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added entries under `Unreleased` in `mountpoint-s3/CHANGELOG.md`\nand `mountpoint-s3-client/CHANGELOG.md`. Both crates are already bumped\non `main` relative to their latest releases (`mountpoint-s3` 1.25.0,\n`mountpoint-s3-client` 0.23.0), so no further version change is needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-11T21:01:35Z",
          "tree_id": "5735076567578e858c970ca2618f9f0873e1489f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29943bac8ca91be45532cf88bf041a9bbdfffad4"
        },
        "date": 1794450379486,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5158.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4470.62412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5933.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.8599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 151.8748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.6576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.46845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.64306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.5337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6413.96552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 540.5708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5220.13544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 537.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1593.56728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.62314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1444.49716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1466.00732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.996875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1989.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1134.02314453125,
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
          "distinct": false,
          "id": "61a93af6715d16f474a5684ba7ab5dc61e4a5b8c",
          "message": "Remove remaining Amazon Linux 2 references (#2033)\n\nAmazon Linux 2 reached end of support on June 30, 2026. This adds a\nchangelog entry announcing that AL2 is no longer tested and recommending\nAmazon Linux 2023, and enables FUSE 3 tests on the AL2023 arm CI runner.\n\n- Add a changelog entry under breaking changes recommending Amazon Linux\n2023.\n- Remove the FUSE 3 exclusion for the AL2023 arm runner in\n`integration.yml`. It was added when that runner was Amazon Linux 2,\nwhich has no fuse3. The runner is now AL2023, which does.\n\nThe PyTorch example update will follow in a separate PR.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint itself. The changelog entry is listed under\nbreaking changes because AL2 is no longer tested or supported, although\nreleases may continue to install and run on it. CI now also runs the\nFUSE 3 tests on the AL2023 arm runner.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a changelog entry announcing that Amazon Linux 2 is no longer\ntested. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-11T22:07:58Z",
          "tree_id": "e9aee27d4884a74475f980c5aabac7a50c974723",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61a93af6715d16f474a5684ba7ab5dc61e4a5b8c"
        },
        "date": 1794451880987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5078.531640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4463.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5833.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.82255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.12861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.95146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.692578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.07109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6272.726171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.73779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5359.215625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.49228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2099.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 136.33671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1550.1119140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1535.89482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1708.8189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.6931640625,
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
          "distinct": false,
          "id": "12f00c23775ed78a6a687cf34c39fd118dba95d8",
          "message": "Fix mount timeout when cleaning up a large cache (#2024)\n\nWhen Mountpoint runs in the background, the child process removes any\ncache directory left over from a previous run before mounting, while the\nparent waits at most 30 seconds for the mount status. Removing a large\nleftover cache can take longer, so the mount fails with `Timeout after\n30 seconds while waiting for mount process to be ready`. Fixes #1251.\n\n* The child still removes the directory synchronously, as today.\n* While it does, a separate thread in the child sends a heartbeat byte\nto the parent every second. Heartbeats stop as soon as the cleanup ends,\nso the rest of the mount keeps the 30 second timeout.\n* The parent waits with `poll` instead of a separate thread and channel.\nEach heartbeat restarts the 30 second timeout, and signals interrupting\n`poll` don't extend it. The parent prints a warning if the cleanup takes\nlonger than 30 seconds.\n* If the parent can't read the child's status, it stops the child\ninstead of waiting for it to exit.\n* The child closes the read end of the pipe right after the fork.\n\nThe new code is in `mountpoint-s3/src/mount_progress.rs`.\n\n### Testing\n\n* Unit tests for the status and heartbeat messages, the timeout once\nheartbeats stop, the child exiting without a status, and errors reading\nthe status.\n* Added `run_in_background_large_cache_cleanup_does_not_time_out` to\n`fork_test.rs`. It creates 2M files, so it's `#[ignore]` and needs to be\nrun manually.\n* Manually mounted in the background with a 400,000-file leftover cache:\nthe mount succeeded after 78 seconds, printed the warning at 30 seconds,\nand emptied the cache.\n\n### Does this change impact existing behavior?\n\nYes. With a large leftover cache, the mount now waits for the cleanup to\nfinish instead of failing after 30 seconds. There's no timeout while the\nold cache is removed, but the rest of the mount still fails if it makes\nno progress for 30 seconds. That error now reads `Timeout while waiting\nfor mount process to be ready: no progress for 30 seconds`. Other mounts\nare unaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, changelog entry added for `mountpoint-s3`. No version change\nneeded, it's already at an unreleased v1.25.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-12T02:07:22Z",
          "tree_id": "82a3c26348674b30cdd30abb3dcd3ebd5dd22ba4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12f00c23775ed78a6a687cf34c39fd118dba95d8"
        },
        "date": 1794459866784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5144.53154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4632.00283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5979.35107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.9322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.13740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.289453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.45439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.26201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.534765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6499.95732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 531.67060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5349.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.49306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1481.35517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 136.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1493.47314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1481.08837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.12783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1984.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1185.11474609375,
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
          "distinct": false,
          "id": "51c4d18fad9b1af0945852a24a023de5886fcb70",
          "message": "Move release package validation from Amazon Linux 2 to AL2023 (#2036)\n\nAmazon Linux 2 reached end of support on June 30, 2026. This moves the\nrelease validation scripts for the rpm and tar.gz artifacts from Amazon\nLinux 2 to Amazon Linux 2023.\n\n- `validate.py`: replace the `al2` OS option with `al2023`, using the\n`amazonlinux:2023` image.\n- Rename `validate-{rpm,gzip}-al2.sh` to `-al2023.sh` and switch `yum`\nto `dnf`.\n- Install the full `gnupg2` with `--allowerasing`. The AL2023 image\nships `gnupg2-minimal`, which conflicts with `gnupg2` and has no\n`gpg-agent`, so `gpg --import` fails without it.\n- Drop the `yum update -y` step. `dnf install` refreshes repository\nmetadata itself, and skipping a full system update keeps validation\nfaster and more reproducible.\n\nTested locally on x86_64 following the release runbook (1.3.4), against\n1.24.0 and the `giab` bucket:\n- `--artifact rpm --os al2023`: signature verified, `mount-s3 1.24.0`\ninstalled, bucket mounted and listed.\n- `--artifact gzip --os al2023`: signature verified, `mount-s3 1.24.0`\ninstalled, bucket mounted and listed.\n\narm64 not tested locally.\n\n### Does this change impact existing behavior?\n\nOnly the manual release validation tooling. The `--os al2` option\nbecomes `--os al2023`, and the release runbook will be updated to match\nafter this merges.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. This is internal release tooling and doesn't affect Mountpoint or\nany crate. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-12T11:43:26Z",
          "tree_id": "96abe1e472398e6cebc6103b51aed9b1660790ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/51c4d18fad9b1af0945852a24a023de5886fcb70"
        },
        "date": 1794492327821,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5053.1986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4515.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5994.58076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.32353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.50693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.481640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.2201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.92763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.81982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6405.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.854296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5307.81572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1917.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.979296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1491.85302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1299.2037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1724.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.6833984375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}