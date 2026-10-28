window.BENCHMARK_DATA = {
  "lastUpdate": 1793189202828,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
        "date": 1790595579302,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5066.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4469.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5754.94453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.97587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.4533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.1888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.54765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6017.29970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.8400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5149.3064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 538.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1618.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1469.2962890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1397.676953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.91083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1800.30009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.71865234375,
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
        "date": 1790604671395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5157.51630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4518.17470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5869.26640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.38388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.6076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.87236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.472265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.40166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6300.05615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 542.7751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5173.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 538.49990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1885.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.2794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1714.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.5693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1530.0806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1147.878515625,
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
        "date": 1790607319536,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5078.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4572.321875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5815.493066406249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 108.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.16171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.21953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.188671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.648828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6502.29677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.66728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5203.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1664.3306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.95830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1745.55712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1356.124609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1770.36630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1143.49462890625,
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
        "date": 1790611898587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5089.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4405.0373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5844.406640624999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.66689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.7892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.87607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.5453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.5193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.92509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6426.84287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 536.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5272.956640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.60224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1666.40146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1820.99296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1432.22431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 134.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2085.6388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1047.839453125,
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
        "date": 1790967478203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5058.592578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4545.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5813.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.19326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.735546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.998828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.87958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.484765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6361.5240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5207.465234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.30888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1989.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.03486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1697.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1439.398046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.44072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1787.25439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1163.87099609375,
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
        "date": 1791217135304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5093.57294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4442.11650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.469042968751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.12548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.0669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.567578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.92548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.22333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.12607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.66474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6322.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.979296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5154.75673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1514.381640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.40478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1825.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1275.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.5169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1762.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.15,
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
        "date": 1791293172710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5083.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4527.04365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5835.523828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.8736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.801171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.937109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.92587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.6888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6295.45283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 536.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5328.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 530.46220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1759.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.18896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1819.13134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1306.960546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.9478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.108203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.9041015625,
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
        "date": 1791295299965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5066.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4441.6623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5859.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 108.93935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.1373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.89921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.60341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.18466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.19853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6459.843359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 539.836328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5306.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.24931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1855.45302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1519.77470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1244.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1379.33291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.83056640625,
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
        "date": 1791302840280,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5037.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4474.41474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5876.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.38427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.59072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.73427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.024609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6363.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 534.9416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5257.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 527.10078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2008.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1536.9283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1321.73720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.17080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1451.47548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.0125,
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
        "date": 1791371661912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5063.56376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4483.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.7603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.89404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.54990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.6162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.61689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.28994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6363.37822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 535.98232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5311.69267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1510.07080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1774.89189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1466.03759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1452.08095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1200.89619140625,
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
        "date": 1791466976179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5081.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4486.26064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5891.44130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.21298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.20419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.27021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.53115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6091.1255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.6505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5224.62099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.25380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1855.86845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.50419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1578.70771484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1274.10146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1945.03427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.9625,
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
        "date": 1791566453583,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5081.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4502.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5780.085742187501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.4744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.328515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.86962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.63046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.41220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6243.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.6255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5242.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 533.46279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1475.53779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.948828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1558.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1385.6958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2003.426953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1137.8986328125,
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
        "date": 1791829373482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4983.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4573.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5832.460546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.1765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.12255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.78828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.769921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.990625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.63076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6188.22998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 532.10244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5310.86162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 533.97412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1959.88251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1701.21865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.465625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1458.8859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1187.48583984375,
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
        "date": 1791917818465,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5106.97333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4566.15869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5911.398535156251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.18017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.7287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.42958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.48564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.94345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.4642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6131.07197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 540.15625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5270.8716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.3794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1838.12001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.90107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1517.42724609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1332.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1456.10390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1176.31298828125,
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
        "date": 1791919903561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5054.938671874999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4450.23662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5941.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.3416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 104.1443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 133.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.623828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.8240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6218.48037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 536.01015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5298.964453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 525.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1547.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.87578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1795.40224609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1525.65986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1620.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.66650390625,
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
        "date": 1792062802862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5076.28583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4487.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5883.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.5265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.9796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.07138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.97802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.8697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.69384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.16474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.73544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6232.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5217.3533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.35400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1451.78447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1638.73642578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.9630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.05966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1657.05849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1123.6416015625,
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
        "date": 1792077200440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5137.7271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4436.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5902.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.383203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.82578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.542578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.47080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.3279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.1,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6337.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5268.43916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.23359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.6017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.29443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1706.10263671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1422.05576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1438.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1183.68232421875,
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
        "date": 1792411382728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5134.97412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4543.05556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5881.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.48193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.6267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.16396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.8556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.26552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.37783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6371.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 534.14638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5210.051171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 530.50947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1501.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.74326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1382.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1345.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.14716796875,
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
        "date": 1792416991449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5012.5734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4465.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5877.7654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.4978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.85625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.98525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6399.2904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.75849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5263.93818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.76884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1584.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.19501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1470.3646484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1307.877734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1521.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1067.944921875,
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
        "date": 1792419055915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5004.3861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4458.7580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5845.75849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.15478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.3107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.743359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.24775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.30283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.1263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.5220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6182.03701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5272.2759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 529.088671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1537.5232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.20654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1460.37275390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.80537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.62861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1901.52373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 932.96669921875,
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
          "id": "f21ec47cb4de7dde6478e307dc5d7be51ad48682",
          "message": "Bump astral-sh/setup-uv from 10.2.0 to 10.3.0 (#1990)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.2.0 to 10.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.0 🌈 Add Python architecture selection</h2>\n<h2>Changes</h2>\n<p>This release adds the <code>python-arch</code> input to select a\nPython architecture independently of the Python version. With\n<code>uv</code> 0.13.0 or later, set <code>python-arch: x86_64</code> to\nuse x64 Python on Windows ARM64 runners.</p>\n<p>It also includes embedded checksums for <code>uv</code> releases\nthrough 0.13.0.</p>\n<ul>\n<li>Use macOS 15 runners for tests <a\nhref=\"https://github.com/charliermarsh\"><code>@​charliermarsh</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Add <code>python-arch</code> support <a\nhref=\"https://github.com/zanieb\"><code>@​zanieb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li>chore: update known checksums for 0.12.24 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li>chore: update known checksums for 0.12.23 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li>chore: update known checksums for 0.12.22 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li>chore: update known checksums for 0.12.21 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li>chore: update known checksums for 0.12.20 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li>chore: update known checksums for 0.12.19 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>chore: update known checksums for 0.12.18 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1065\">#1065</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 @<a\nhref=\"https://github.com/apps/dependabot\">dependabot[bot]</a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1c37ad07a6a961277cf70c0d37d6f313000f5884\"><code>1c37ad0</code></a>\nchore: update known checksums for 0.13.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b3c9b5fc56ebc90760c43b1ac9552c0d1705d3ca\"><code>b3c9b5f</code></a>\nchore: update known checksums for 0.12.24 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b06acff4b6a41bdd9cdac56507ead0bd7734e757\"><code>b06acff</code></a>\nAdd <code>python-arch</code> support (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c84232ca4fde9b022e20a930bfbbecd386b56fdf\"><code>c84232c</code></a>\nchore: update known checksums for 0.12.23 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/51fdd265d38a27ffcbca0da885510bc6fcc0ff55\"><code>51fdd26</code></a>\nUse macOS 15 runners for tests (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a96208bed1fb5efb8da349c9bcc6cc58af9e7d74\"><code>a96208b</code></a>\nchore: update known checksums for 0.12.22 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0e3884b860e20d3f4d5daa2347130beb51ccde47\"><code>0e3884b</code></a>\nchore: update known checksums for 0.12.21 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bcf05803b55ef01a5ec6368521ee1b42f97bc438\"><code>bcf0580</code></a>\nchore: update known checksums for 0.12.20 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b92a892142bde7280cd163c2abff341413314f9f\"><code>b92a892</code></a>\nchore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/227a0f6bea25cde3444f52decccf4a18de6635f4\"><code>227a0f6</code></a>\nchore: update known checksums for 0.12.19 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/c18668ad3cf93ea998bef934396af7bb5c839dc7...1c37ad07a6a961277cf70c0d37d6f313000f5884\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.2.0&new-version=10.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:23:37Z",
          "tree_id": "81070e27645e2fa91faa0be8f22b82ca48c14817",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f21ec47cb4de7dde6478e307dc5d7be51ad48682"
        },
        "date": 1792422297351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5031.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4479.4275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5830.999414062499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 108.17373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.97060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 135.23701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.38154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.41796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.87314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6234.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 535.84052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5246.91298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 530.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1903.227734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.329296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1582.305859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1406.88369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1888.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.44873046875,
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
          "id": "982d5c0933c54c785087407f47bbbef7cbf5e6be",
          "message": "mock-client: align checksum behaviour with S3 (#1988)\n\nAlign the mock client's checksum behaviour with S3:\n\n- Uploads without an additional checksum (PutObject, multipart upload\nwithout trailing checksums, and appends that create a new object) now\nstore S3's default full-object CRC64NVME checksum.\n- An append without a checksum is treated as CRC64NVME. It is accepted\non objects with a CRC64NVME checksum (or none) and rejected with\n`InvalidChecksumType` otherwise.\n- `MockGetObjectResponse::get_object_checksum` now returns\n`DidNotRequestChecksums` unless the request enabled checksum mode,\nmatching `S3CrtClient`. It returns an empty checksum for a ranged GET\nthat does not cover the whole object.\n\n`write_checksums_test` now asserts the default CRC64NVME checksum for\nuploads without checksums, on both the mock and S3, instead of ignoring\nit.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's file system behaviour. The `MockClient`\n(`mock` feature of `mountpoint-s3-client`) changes behaviour: callers of\n`get_object_checksum` must now enable checksum mode on the GET, and\nobjects uploaded without checksums now report a CRC64NVME checksum.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry describing the mock client\nchanges. The crate is already at an unreleased patch version (0.22.2).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-20T13:34:14Z",
          "tree_id": "1e9aca50df41a802434807c0b686726724371ff7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/982d5c0933c54c785087407f47bbbef7cbf5e6be"
        },
        "date": 1792511690615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5095.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4533.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5800.1609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.58916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.221875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.35595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.65849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.84970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5838.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 544.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5209.0267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 535.23896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1849.549609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1780.5326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1376.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1378.53857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1101.16103515625,
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
          "id": "102cd612d4e87c6f1cdf77aa907215c28ce81df3",
          "message": "Bump rustls-webpki from 0.103.15 to 0.103.16 (RUSTSEC-2026-0382) (#2001)\n\nBumps rustls-webpki to 0.103.16 to fix RUSTSEC-2026-0382 (certificate\nverification may accept distrusted intermediates), which currently fails\nthe `cargo deny` advisories check. Cargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T16:51:43Z",
          "tree_id": "3de7d53a1a0d8d5f55ddac565df00118b7685447",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/102cd612d4e87c6f1cdf77aa907215c28ce81df3"
        },
        "date": 1792611993114,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5071.53955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4509.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5776.820996093749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.34072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.39951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.18759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.80400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.69013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6149.331640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.337109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5148.36083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 535.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1497.6830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.6759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1381.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.11953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.68232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1786.709765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.90888671875,
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
          "id": "9336fd883f6838b15f19aef80bb0f721b369eed4",
          "message": "Run CI on pushes and PRs to feature branches (#1997)\n\nLong-lived feature branches (`feature/**`) should get the same CI as\n`main`. Tests and the PR integration tests already run on PRs to any\nbranch, but some workflows only run for `main`:\n\n- Crate checks and packaging now also run on PRs to feature branches.\n- Tests, integration tests, crate checks and packaging now also run on\npushes to feature branches, so that each merge into them (including\nmerges from `main`) is tested.\n\nScheduled runs, benchmarks and stress tests stay `main`-only. Benchmarks\nand stress tests are still available on feature-branch PRs through their\nlabels.\n\n### Does this change impact existing behavior?\n\nNo. Runs for `main`, PRs to `main` and the merge queue are unchanged.\nExisting feature branches pick up the new triggers only once they merge\n`main`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T18:44:13Z",
          "tree_id": "5d21527e4ba2bee6e55fc7a8b8cf52fe6f8ec696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9336fd883f6838b15f19aef80bb0f721b369eed4"
        },
        "date": 1792621480154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5028.54345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4446.909765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5883.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 133.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.47158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6179.8484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 532.27890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5202.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 526.17353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1712.59892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1782.844140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.9458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.73369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1570.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.31142578125,
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
          "id": "fb36799638c268ffd7d7267e936b255e203fe1df",
          "message": "Extract `MockBucket` from `MockClient` (#1989)\n\nExtract the in-memory bucket model of `MockClient` into a new\n`MockBucket`.\n\n`MockBucket` owns the bucket state (objects, in-progress uploads,\noperation counts) and serves HeadObject, ListObjectsV2, DeleteObject and\nRenameObject synchronously. `MockClient` becomes a view over an\n`Arc<MockBucket>` that adds the client-side behaviour: part sizes,\nbackpressure, and the `ObjectClient` interface. A bucket can then be\nshared between a `MockClient` and other in-memory test backends without\ngoing through `ObjectClient`, for example a metadata-only fake for the\nfile system's superblock, so that tests exercising the superblock can\nrun on synchronous operations.\n\nThe configuration is split the same way. `MockBucketConfig` (name,\nlisting order, rename support) builds a `MockBucket`. `MockDataConfig`\n(part size, backpressure, read window checks) configures a `MockClient`\nover an existing bucket with `MockClient::with_bucket`.\n`MockClientConfig` keeps its API and combines both.\n\n### Does this change impact existing behavior?\n\nNo. This only affects test-support code under the `mock` feature of\n`mountpoint-s3-client`. The existing `MockClient` and `MockClientConfig`\nAPIs and their behaviour are unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry for the new public\n`MockBucket`, `MockBucketConfig`, `MockDataConfig`,\n`MockClient::with_bucket` and `MockClient::mock_bucket`. No version\nchange: these are additions, and v0.22.2 is already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T21:21:17Z",
          "tree_id": "b15590ec69e2ff0a11cc962d202eb1c3d68af7dd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb36799638c268ffd7d7267e936b255e203fe1df"
        },
        "date": 1792627716840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5037.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4528.10771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5869.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.83466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.53505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.39794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.05498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.31376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6299.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 537.6048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5185.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 531.3908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1783.45654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1589.0255859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1466.182421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.7919921875,
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
          "id": "b36809b56455bf2b1d8c63a7fea9f963a4ee71d3",
          "message": "Narrow the superblock's S3 dependency to a `MetadataClient` interface (#1998)\n\nNarrow the file system's superblock to the S3 metadata operations it\nactually issues, behind a new `MetadataClient` trait, and run the\nsuperblock's slow, deterministic tests (shuttle tests and reftests) on\nan in-memory implementation of it.\n\nThe superblock only issues HeadObject, ListObjectsV2, DeleteObject and\nRenameObject, and only reads a few response fields. `Superblock<OC:\nObjectClient>` becomes `Superblock<M: MetadataClient>`, an interface\nshaped after exactly that: plain request parameters (rename takes\n`overwrite` instead of precondition params), and small result types\n(`HeadInfo`, `ListPage`) with only the fields the superblock uses. Every\n`ObjectClient` implements `MetadataClient` through a blanket\nimplementation that converts its results, so production code paths are\nunchanged.\n\n`MetadataError` classifies the failures the superblock handles\nspecifically (not found, precondition failed, not implemented, key too\nlong) and keeps the client error as its source. It is transparent for\n`Display` and `source()`, and delegates `ProvideErrorMetadata`, so logs\nand error metadata are unchanged. The kinds don't depend on\n`mountpoint-s3-client` error types, so other clients can classify their\nown errors.\n\n`InMemoryMetadata` (new `mock` feature, enabled for the crate's own\ntests) serves the interface synchronously from a `MockBucket` (#1989),\nwhich can be shared with a `MockClient` serving the data path.\nOperations complete on the first poll, without threads or I/O:\n\n* the superblock shuttle tests use it directly, so shuttle only\nschedules at the superblock's own synchronization points;\n* the reftest harness builds its file system with the superblock on\n`InMemoryMetadata` and the data path on `MockClient`, over the same\nbucket. Runtime is unchanged (the mutations reftest is within 2-4%).\n\n### Does this change impact existing behavior?\n\nNo. The `Superblock` bounds are relaxed from `ObjectClient + Send +\nSync` to `MetadataClient`, which every such client implements, so\nexisting uses compile and behave as before. Errors keep the same\ndisplay, source chain and error metadata.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-fs` changelog entry for the new public\n`MetadataClient` interface and the `mock` feature with\n`InMemoryMetadata`. No version change: these are additive, and v0.11.1\nis already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T15:39:59Z",
          "tree_id": "1561f9d5314b778c198deb6a377dda2f71428ac9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b36809b56455bf2b1d8c63a7fea9f963a4ee71d3"
        },
        "date": 1792692501886,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5090.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4458.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5935.811425781249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.99736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.32451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.88896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 133.2349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.44228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.57939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.0677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6254.8365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 533.00791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5232.7185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 528.54912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1613.35654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1728.63681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1369.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.67158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1817.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.22353515625,
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
          "id": "9e23c24e5962d249ef06370124309d3e52661b33",
          "message": "Restrict FUSE test mounts to the user running the tests (#2000)\n\nThe FUSE test sessions mounted with `allow_other`, so any process on the\nhost could open files in the test file systems. Other processes, such as\nfile scanners, can then interfere with the tests: if one opens a file\nfor reading just after a test closes it, Mountpoint correctly rejects\nthe test's next open of that file for writing with `EPERM` (a file can't\nhave a reader and a writer at the same time, see SEMANTICS.md). That\nmade tests such as `rename_append_mock`, `read_errors_test_mock` and\n`reftests::fuse::proptest_fuse` fail intermittently, more often under\nload.\n\nThis change mounts the test sessions without `allow_other` and with the\nmatching owner-only session ACL, as `mount-s3` does by default. The\nkernel then rejects accesses from other users, root included, and the\ntests remain the only clients of their file systems.\n\n### Does this change impact existing behavior?\n\nNo. Only the test harness changes; Mountpoint's behavior is unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test-only change, no published code is affected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T16:47:08Z",
          "tree_id": "a048439bd443814faa8b72fdea91aca20e6a6c32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9e23c24e5962d249ef06370124309d3e52661b33"
        },
        "date": 1792697143860,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5131.637988281251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4469.0396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5846.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.25556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.79140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.16630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6283.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 528.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5322.96982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 526.387109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1999.4162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1650.627734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1481.5599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2078.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1086.875390625,
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
          "id": "98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e",
          "message": "Update dependencies to fix security vulnerabilities (#2008)\n\nUpdates ctutils from 0.4.3 to 0.4.6 via `cargo update -p ctutils`.\n\nTemporarily adds RUSTSEC-2026-0387 (crypto-bigint) to deny.toml ignore\nlist - this is a pre-existing issue on main, blocked on AWS SDK upstream\nreleasing a version with crypto-bigint 0.7.x.\n### Does this change impact existing behavior?\n\nNo. Security patch only, no API or behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-26T15:25:34Z",
          "tree_id": "7531fded5baaca215c2865e5aab50330dcdbde7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e"
        },
        "date": 1793036885047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5109.5072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4439.93037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5916.7404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.74697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.43486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.38671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.19638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.73134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6361.162890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 532.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5245.06240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 524.68994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1874.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.52998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1528.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1324.53740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.48603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1751.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1040.45283203125,
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
      }
    ]
  }
}