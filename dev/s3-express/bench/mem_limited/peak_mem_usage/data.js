window.BENCHMARK_DATA = {
  "lastUpdate": 1792692541747,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone, Memory-Limited)": [
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
        "date": 1789993158270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 474.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 49.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.3046875,
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
          "id": "6d397663f84aaa2e0757fc3b73a6cccb97322866",
          "message": "Update changelogs in preparation of `mountpoint-s3-client` release (#1968)\n\nUpdate the CHANGELOGs in order to release the client crates:\n\n* `mountpoint-s3-crt-sys` - `v0.17.1`\n* `mountpoint-s3-crt` - `v0.16.1`\n* `mountpoint-s3-client` - `v0.22.1`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-09-24T11:40:43Z",
          "tree_id": "64d57fb42fb572817831eef7a2f970fb5e7c184f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d397663f84aaa2e0757fc3b73a6cccb97322866"
        },
        "date": 1790259897002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 63.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 272.515625,
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
          "id": "b039b0f03708bf8cae23b02e353f3ecb9db9d823",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.4 to 6.3.0 (#1975)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.4 to 6.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e1253824e5c10ff9df46874f81ed3ec929e19cfd\"><code>e125382</code></a>\nchore(main): release 6.3.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1963\">#1963</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/438100a0eb37d9180319c727b1e108d9a112a27a\"><code>438100a</code></a>\nchore: add link to GH security docs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1962\">#1962</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e92ebccf3986be80a7535da17f1ed57aec450139\"><code>e92ebcc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\"><code>57b8365</code></a>\nfeat: add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cc49fa741eb53f7c83be6fce8f9b4df000cd3af7\"><code>cc49fa7</code></a>\nchore(docs): README main branch guidance (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1960\">#1960</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/866cb167f1d1a75ae9c75cdb39377cfd9c0f794e\"><code>866cb16</code></a>\nchore(deps-dev): bump smol-toml from 1.7.0 to 1.7.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1958\">#1958</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6782cb1b6df5d32e9354c1e6d6da4f956c0d61c4\"><code>6782cb1</code></a>\nchore(deps-dev): bump generate-license-file from 4.2.4 to 4.2.5 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1951\">#1951</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c20509ac5cba30e782e34cf33a0067e67c746cf0\"><code>c20509a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7a41fc6cd2b4970e71974e29fb3f0979f4eb20cb\"><code>7a41fc6</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1121.0 to\n3.1127.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1954\">#1954</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/726b71346f7761addb59879a6c73e0c64ec8f959\"><code>726b713</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.11 to 2.5.12\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1957\">#1957</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/cbe3b392738ccf3f987d68400dafcf4b0624a56c...e1253824e5c10ff9df46874f81ed3ec929e19cfd\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=6.2.4&new-version=6.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T08:58:34Z",
          "tree_id": "97f6ec44300836f8f24f63c08709d2f7e0dff899",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b039b0f03708bf8cae23b02e353f3ecb9db9d823"
        },
        "date": 1790595578329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 475.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 57.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 431.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 319.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.734375,
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
          "id": "aaf1d7fff474735e8b078ce47060b9793810e57c",
          "message": "Bump benchmark-action/github-action-benchmark from 1.22.1 to 1.22.2 (#1972)\n\nBumps\n[benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)\nfrom 1.22.1 to 1.22.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases\">benchmark-action/github-action-benchmark's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.22.2</h2>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/pull/364\">benchmark-action/github-action-benchmark#364</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md\">benchmark-action/github-action-benchmark's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Unreleased</h2>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.2\">v1.22.2</a>\n- 15 Sep 2026</h1>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/364\">#364</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.1\">v1.22.1</a>\n- 6 May 2026</h1>\n<ul>\n<li><strong>fix</strong> scope tsconfig.build.json to src/ for\nreproducibility (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/352\">#352</a>)</li>\n<li><strong>chore</strong> bump minimatch from 3.1.2 to 3.1.5 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/347\">#347</a>)</li>\n<li><strong>chore</strong> bump uuid and <code>@​actions/core</code> (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/350\">#350</a>)</li>\n<li><strong>chore</strong> bump flatted from 3.2.4 to 3.4.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/346\">#346</a>)</li>\n<li><strong>chore</strong> bump js-yaml (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/344\">#344</a>)</li>\n<li><strong>chore</strong> bump picomatch from 2.3.0 to 2.3.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/342\">#342</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.0\">v1.22.0</a>\n- 31 Mar 2026</h1>\n<ul>\n<li><strong>chore</strong> bump node to 24 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/339\">#339</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.21.0\">v1.21.0</a>\n- 02 Mar 2026</h1>\n<ul>\n<li><strong>fix</strong> include package name for duplicate bench names\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/330\">#330</a>)</li>\n<li><strong>fix</strong> avoid duplicate package suffix in Go benchmarks\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/337\">#337</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.7\">v1.20.7</a>\n- 06 Sep 2025</h1>\n<ul>\n<li><strong>fix</strong> improve parsing for custom benchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/323\">#323</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.5\">v1.20.5</a>\n- 02 Sep 2025</h1>\n<ul>\n<li><strong>feat</strong> allow to parse generic cargo bench/criterion\nunits (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/280\">#280</a>)</li>\n<li><strong>fix</strong> add summary even when failure threshold is\nsurpassed (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/285\">#285</a>)</li>\n<li><strong>fix</strong> time units are not normalized (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/318\">#318</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.4\">v1.20.4</a>\n- 23 Oct 2024</h1>\n<ul>\n<li><strong>feat</strong> add typings and validation workflow (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/257\">#257</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.3\">v1.20.3</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Catch2 v.3.5.0 changed output format (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/247\">#247</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.2\">v1.20.2</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Support sub-nanosecond precision on Cargo\nbenchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/246\">#246</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.1\">v1.20.1</a>\n- 02 Apr 2024</h1>\n<ul>\n<li><strong>fix</strong> release script</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/4322e5726e6334590d251fc4f92bec0efafc45dc\"><code>4322e57</code></a>\nrelease v1.22.2</li>\n<li>See full diff in <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=benchmark-action/github-action-benchmark&package-manager=github_actions&previous-version=1.22.1&new-version=1.22.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:11:01Z",
          "tree_id": "b72889a243cfe253fc90d19b480220b7ac5d2ec7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aaf1d7fff474735e8b078ce47060b9793810e57c"
        },
        "date": 1790604289422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 51.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 435.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 273.65234375,
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
          "id": "338d7062a33a9a9529ebf11f5602214519e028d5",
          "message": "Bump docker/build-push-action from 7.3.0 to 7.4.0 (#1973)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 7.3.0 to 7.4.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.4.0</h2>\n<ul>\n<li>Use the shared error helper for Buildx commands by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1620\">docker/build-push-action#1620</a></li>\n<li>Prevent workflow command injection in metadata logs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1617\">docker/build-push-action#1617</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.92.0 to 0.100.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1614\">docker/build-push-action#1614</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1618\">docker/build-push-action#1618</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1621\">docker/build-push-action#1621</a></li>\n<li>Bump <code>@​humanfs/node</code> from 0.16.7 to 0.16.8 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1609\">docker/build-push-action#1609</a></li>\n<li>Bump brace-expansion from 1.1.13 to 1.1.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1592\">docker/build-push-action#1592</a></li>\n<li>Bump csv-parse from 7.0.0 to 7.0.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1613\">docker/build-push-action#1613</a></li>\n<li>Bump js-yaml from 4.3.0 to 4.3.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1605\">docker/build-push-action#1605</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1615\">docker/build-push-action#1615</a></li>\n<li>Bump nanoid from 3.3.16 to 3.3.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1611\">docker/build-push-action#1611</a></li>\n<li>Bump postcss from 8.5.10 to 8.5.25 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1590\">docker/build-push-action#1590</a></li>\n<li>Bump postcss-selector-parser from 7.1.1 to 7.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1606\">docker/build-push-action#1606</a></li>\n<li>Bump sigstore from 4.1.0 to 4.1.1 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1577\">docker/build-push-action#1577</a></li>\n<li>Bump undici from 6.27.0 to 6.28.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1594\">docker/build-push-action#1594</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0\">https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/c3c9e263c25d99ce0380d002d59b67737d91b0dc\"><code>c3c9e26</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1621\">#1621</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/459b6741834dcd35f946352017e7675bd2089d42\"><code>459b674</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/4dedcb23c91d79c1629bf53ec2c3bcfffef5b34e\"><code>4dedcb2</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.99.0 to\n0.100.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/379bf63a979bd70751945601fa04c50674509952\"><code>379bf63</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1620\">#1620</a>\nfrom crazy-max/buildx-error-message</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/9877975c9e0b0b661592ff61049069507f9bc2f6\"><code>9877975</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7ed0556ffafb8eb312463411ef0a84a1dfe24d94\"><code>7ed0556</code></a>\nuse the shared Buildx error summary helper</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/91670ba5a4df99a24efff8637a78c83fd1b0f6b1\"><code>91670ba</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1618\">#1618</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/80dbc8614a5c0ce4356740f69179cf829ecdc79a\"><code>80dbc86</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/50cac3a3b6f55e6015d6483d1dd72a3ecb90d20d\"><code>50cac3a</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.98.0 to\n0.99.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03b4d6cac0163b44733e1fa60adfd6da560ee4d1\"><code>03b4d6c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1617\">#1617</a>\nfrom crazy-max/fix-metadata-workflow-commands</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/53b7df96c91f9c12dcc8a07bcb9ccacbed38856a...c3c9e263c25d99ce0380d002d59b67737d91b0dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=7.3.0&new-version=7.4.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:15:06Z",
          "tree_id": "967d871b1a4c1b8c1306accf4aca5328075a3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338d7062a33a9a9529ebf11f5602214519e028d5"
        },
        "date": 1790605585909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 260.859375,
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
          "id": "e144a7bb84948045f0d7cde77060afaa7ed91b53",
          "message": "Bump astral-sh/setup-uv from 10.1.0 to 10.2.0 (#1971)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.1.0 to 10.2.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.2.0 🌈 Disable automatic cache saves for merge queues</h2>\n<h2>Changes</h2>\n<p>This release contains the known-checksum of the most recent uv\nreleases and also disabled the uploading(saving) of the cache when in a\nmerge queue since theses caches would almost never be used.</p>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Disable automatic cache saves for merge queues <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.17 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li>chore: update known checksums for 0.12.16 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li>chore: update known checksums for 0.12.15 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li>chore: update known checksums for 0.12.14 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li>chore: update known checksums for 0.12.13 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.1.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c18668ad3cf93ea998bef934396af7bb5c839dc7\"><code>c18668a</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ffe14763056ca34ecd158146a9fc7e144c8a2753\"><code>ffe1476</code></a>\nchore: update known checksums for 0.12.17 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f5548c55522a1db0af3c84f2af3d058bc9bc2de2\"><code>f5548c5</code></a>\nchore: update known checksums for 0.12.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a761a4e9afd7b2f353ae020bd6d3a3af34c6c4d5\"><code>a761a4e</code></a>\nDisable automatic cache saves for merge queues (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3377a30666f438759955882b3eba6a92b2b29b12\"><code>3377a30</code></a>\nchore: update known checksums for 0.12.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/dfb5f386776afcea37f271f3b656318d9949b9f1\"><code>dfb5f38</code></a>\nchore: update known checksums for 0.12.14 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/45c121f982720f3bdf236c2ac06f126ca211949c\"><code>45c121f</code></a>\nchore: update known checksums for 0.12.13 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8073452fd4b566e886f04f731bcdbd8332b0b779\"><code>8073452</code></a>\ndocs: update version references to v10.1.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/bec219d24cd3e171d82865faccec33120bb574f4...c18668ad3cf93ea998bef934396af7bb5c839dc7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.1.0&new-version=10.2.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:25:19Z",
          "tree_id": "c3a5d4c44681f09ea4a336c511a81ba86f7f5f60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e144a7bb84948045f0d7cde77060afaa7ed91b53"
        },
        "date": 1790612781237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 483.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 468.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 58.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 64.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 333.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 417.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.36328125,
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
          "id": "b5019468624d590bf589cb39dfddf0ec1507f45d",
          "message": "Don't mount /mnt on GH actions (#1976)\n\nPrevious workaround for fstab integration tests was failing due to\nGithub changing the name of the device mounted to `/mnt`. Fix the tests\nby ensuring nothing is mounted at `/mnt`\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-02T16:35:09Z",
          "tree_id": "d07f7ee8eb25b5e0ec32c1bac17ae8aecb79144e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b5019468624d590bf589cb39dfddf0ec1507f45d"
        },
        "date": 1790967501906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479.375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 63.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 416.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.6171875,
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
          "distinct": false,
          "id": "b851f704b3a0685b7180e7f064711f565ffb32e0",
          "message": "Fail benchmarks when a memory limit is breached (#1940)\n\nMemory-limited benchmark jobs already report peak RSS breaches in a\nsummary table but still pass. This makes a breach fail the job, after\nthe results have been saved and published.\n\nTesting:\n- `render-mem-summary.sh` over 5 input shapes locally (no results, all\nwithin limit, partial breach, full breach) - correct output and exit\ncode in each.\n- Gate wiring on a real Actions run, 4 cases: a breach fails the job;\n`false` and a skipped render step both pass; a breach still fails when\nan earlier step had already failed.\n- Not covered: a real breaching benchmark run, as `--memory-target` has\na 512 MiB floor.\n\nSupersedes #1935, which was auto-closed when its base branch was\ndeleted. Same change, rebased onto `main`.\n\n### Does this change impact existing behavior?\n\nYes, intentionally: memory-limited benchmark jobs now fail on a breach.\nResults are still saved and published first, and other variants are\nunaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this only changes CI benchmark workflows.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-10-05T13:34:17Z",
          "tree_id": "45533325b67a4c4eda1eda8d5eeacedd1bd3eb9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b851f704b3a0685b7180e7f064711f565ffb32e0"
        },
        "date": 1791217150769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 107.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 91.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 311.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.51953125,
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
          "distinct": false,
          "id": "77bd88d56091f47b24b06f8fd0bb05a20ea6d598",
          "message": "Bound the CRT thread join at exit and skip cleanup on timeout (#1978)\n\n**Problem:** In #1850 we have added CRT cleanup at exit, but this may\ncause a process hang in some cases during shutdown if CRT threads are\nstill running.\n\n**Solution**: Add 1 second timeout to wait for CRT threads to join\ninstead of waiting indefinitely\n\n**Testing**: Added 2 unit tests that re-produced the hang. They are\ngreen after the fix.\n\n### Does this change impact existing behavior?\n\nProcesses that exit while a CRT client is still alive now exit after up\nto 1 second, without CRT cleanup, instead of hanging. Processes that\ndrop all their clients before exit are unaffected. No public API change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry under `Unreleased` in\n`mountpoint-s3-crt/CHANGELOG.md`. It needs a patch version bump of\n`mountpoint-s3-crt` when released.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T11:38:31Z",
          "tree_id": "689fb38fe0d308d3c5a9fbaf8e181397ba38871d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77bd88d56091f47b24b06f8fd0bb05a20ea6d598"
        },
        "date": 1791295492598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 480.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 435.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.28515625,
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
          "id": "ababef079bd81106c9dce644f797f5ba3cd34cf9",
          "message": "Update changelog in preparation of `mountpoint-s3-crt` release (#1979)\n\nUpdate the CHANGELOG in order to release the `mountpoint-s3-crt` crate:\n\n* `mountpoint-s3-crt` - `v0.16.2`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T13:40:15Z",
          "tree_id": "6906dac3eecb937361d343b2836ea54618e541be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ababef079bd81106c9dce644f797f5ba3cd34cf9"
        },
        "date": 1791302403197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 473.25,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 319.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.546875,
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
          "id": "e373e4159606f66ca07edf214a4fead004153e4b",
          "message": "Update release workflow to create a git tag (#1969)\n\nUpdate the release workflow to be manually triggered with the intended\nrelease version number.\nThis now creates and pushes the git tag to the repository, as well as\ncreating a github release.\n\nExample run:\nhttps://github.com/muddyfish/mountpoint-s3/actions/runs/36004359806/job/107648757049\nExample release:\nhttps://github.com/muddyfish/mountpoint-s3/releases/tag/mountpoint-s3-1.24.0\n\n### Does this change impact existing behavior?\n\nChanges release.yml to be ran on a manual workflow rather than on a tag\npush.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-07T08:54:40Z",
          "tree_id": "2b0e2a928b10a1af574c80c9c8e222570a20f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e373e4159606f66ca07edf214a4fead004153e4b"
        },
        "date": 1791371560036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 466.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 329.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.22265625,
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
          "id": "1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8",
          "message": "Send If-Match on incremental upload at offset 0 (#1970)\n\nFix inconsistency when during incremental upload we do not attach\n`If-Match` ETag header (when ETag is known) at offset 0.\n\n### Does this change impact existing behavior?\n\nYes. If there was concurrent modification file operation will fail with\nEIO. This now matches behaviour for `offset > 0`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-07T09:38:56Z",
          "tree_id": "2eb04ccdd5ac2df67b8acc94aaefd2a84bda81fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8"
        },
        "date": 1791376372513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 483.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 470.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.70703125,
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
          "id": "49ba6c8e067aa1c584a1c7008590e5741235ddb0",
          "message": "Bump taiki-e/install-action from 2.87.17 to 2.87.21 (#1977)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.17 to 2.87.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.21</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.129.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.3.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.19.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.13.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.7.0.</p>\n</li>\n</ul>\n<h2>2.87.20</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.0.</p>\n</li>\n</ul>\n<h2>2.87.19</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.146.</p>\n</li>\n</ul>\n<h2>2.87.18</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.84.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.12.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.3.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4cef1412cce204788f482e778a0b9187f9626a29\"><code>4cef141</code></a>\nRelease 2.87.21</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/133135e7fd1570baff8964a044bcf0d2147fc57a\"><code>133135e</code></a>\nUpdate <code>wasm-bindgen@latest</code> to 0.2.129</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8589241798155a8c0c86c7c0ae4f642a90a698e1\"><code>8589241</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/95e5bbc4a58633e12ebefd904f798c1eb76c18f7\"><code>95e5bbc</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/48ce11d4f97676e64a76a3dc4b83a4f59245b702\"><code>48ce11d</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/368e6617a899743920fa751bb5d414b6f0352cc0\"><code>368e661</code></a>\nUpdate wasm-bindgen manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/57f22a457e27d10a13bfcaee43e03dff1c20dedd\"><code>57f22a4</code></a>\nUpdate <code>uv@latest</code> to 0.12.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/888634e2727c1021a94ebfac9a2d266109a366b8\"><code>888634e</code></a>\nUpdate typos manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3bcab01fb9790f533b19647e60396514a9d08f96\"><code>3bcab01</code></a>\nUpdate protoc-gen-connect-openapi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/947e90eb285641d8325cc2d55ae24bd51d5c6b8a\"><code>947e90e</code></a>\nUpdate <code>mise@latest</code> to 2026.9.13</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.17...v2.87.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.17&new-version=2.87.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-08T11:21:48Z",
          "tree_id": "98f3c2ea75860030fbdf62a8581b5634dd8927aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49ba6c8e067aa1c584a1c7008590e5741235ddb0"
        },
        "date": 1791466942001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 480.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 426.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 263.74609375,
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
          "id": "dc0d76da41691ab73a170345e57a9654bf2c5cc1",
          "message": "Add packaging support for AL2027 (#1980)\n\nAdd support for packaging Mountpoint for Amazon Linux 2027 (currently in\n[Public\nPreview](https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/)).\n\nThis change only ensures that out packaging scripts are compatible with\n2027 and that the package builds correctly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-09T14:48:44Z",
          "tree_id": "97f6e4b9bc841c7caa5cba20a9a290e1beaf1b6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc0d76da41691ab73a170345e57a9654bf2c5cc1"
        },
        "date": 1791566437707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 243.33984375,
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
          "id": "27f32de4e0b5d97797bf54a00a940c3f3e4065fc",
          "message": "Fix ruff lint failures from new 0.17 default rule set (#1983)\n\nruff 0.17.0 expanded its default lint selection from `E4,E7,E9,F` to\nseveral hundred rules. CI runs `uvx ruff` unpinned, so the release broke\nthe Benchmark and Packaging script checks without any change on our\nside.\n\nApply the autofixes for the newly-enabled rules:\n\n- UP017: use the `datetime.UTC` alias instead of `timezone.utc`.\n- I001: `tomllib` now sorts into the stdlib import block.\n- RUF100: drop the `# noqa: DTZ005`, unused since DTZ is not enabled.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-12T15:31:22Z",
          "tree_id": "39ad30ae58ccd869bda2936dccdb3113dccac4fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27f32de4e0b5d97797bf54a00a940c3f3e4065fc"
        },
        "date": 1791827707106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 479.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 414.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 412.4296875,
            "unit": "MiB"
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
        "date": 1791829349492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 470.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 457.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 223.078125,
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
          "id": "4f6866c101cae19d1e99a1e89c260c646b4730f6",
          "message": "Bump hydra-core from 1.3.4 to 1.3.7 in /benchmark (#1981)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.4\nto 1.3.7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.7</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state, process-environment mutation, and logging formatters.\nThese checks are not a complete security boundary. (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3442\">#3442</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7</a></p>\n<h2>Hydra 1.3.6</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blacklist to Python logging configuration. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6</a></p>\n<h2>Hydra 1.3.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Warn Hydra 1.3 users relying on Hydra 1.1 behavior (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5\">https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.7/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.7 (2026-09-14)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state,\nprocess-environment mutation, and logging formatters. These checks are\nnot a\ncomplete security boundary. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3442\">#3442</a>)\n1.3.6 (2026-08-29)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blocklist to Python logging configuration.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<h1>1.3.5 (2026-08-06)</h1>\n<h3>API Change (Renames, deprecations and removals)</h3>\n<ul>\n<li>Warn Hydra 1.3 applications that rely on Hydra 1.1 compatibility\nbefore\nupgrading to Hydra 1.4. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3334\">#3334</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81715a5a258ae2657369344f4e3523e5fbabb2af\"><code>81715a5</code></a>\nPrepare hydra-core 1.3.7 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/4720dfca2bde27fa140ec287a05709668fbdf168\"><code>4720dfc</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/27df7550bfd6582a111df148ef96de499474c243\"><code>27df755</code></a>\nPrepare Hydra 1.3.6 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ff3e4dba890c29a21d8c2bb867ee87d37ccf21d0\"><code>ff3e4db</code></a>\nHarden logging target resolution on 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3420\">#3420</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/aa102eaabfa8c93f481ac4938dd7a34203c58d24\"><code>aa102ea</code></a>\nHarden deferred instantiate dispatch on 1.3</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2c82bbb3f39603b336cb852461739fdf7a38798a\"><code>2c82bbb</code></a>\nBackport instantiate target authorization hardening to 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3413\">#3413</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/06613cef4c44bf3473b92ecde533487647784b0b\"><code>06613ce</code></a>\nBump Hydra to 1.3.6.dev0</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/51647a2183512bc4e5556842c494e7efdbd75375\"><code>51647a2</code></a>\nRelease Hydra 1.3.5</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/445b0a7505c0c07a7f0bd3dde3baf4811c2fea27\"><code>445b0a7</code></a>\nWarn Hydra 1.3 users relying on 1.1 compatibility (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.4&new-version=1.3.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-12T16:53:49Z",
          "tree_id": "2cbe058a18d7d75fdf61ce5f778dcc719a9f85bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f6866c101cae19d1e99a1e89c260c646b4730f6"
        },
        "date": 1791834859857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.42578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 459.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 427.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 410.65234375,
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
          "id": "2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0",
          "message": "Bump taiki-e/install-action from 2.87.21 to 2.87.26 (#1984)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.21 to 2.87.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.26</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.2.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.3.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.0.0.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 1.21.0.</p>\n</li>\n</ul>\n<h2>2.87.25</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.23.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.2.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.10.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.60.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-semver-checks@latest</code> to 0.51.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.1.</p>\n</li>\n</ul>\n<h2>2.87.24</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.59.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-leptos@latest</code> to 0.3.11.</p>\n</li>\n<li>\n<p>Update <code>cargo-insta@latest</code> to 1.49.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.0.</p>\n</li>\n</ul>\n<h2>2.87.23</h2>\n<ul>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.261.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.22.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.75.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.1.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.28.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f7e5d7c961414b23f5b25b2da9294395d08513ad\"><code>f7e5d7c</code></a>\nRelease 2.87.26</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/148b70c8533f32f0f67928d48f6234c224cc2717\"><code>148b70c</code></a>\nUpdate <code>tombi@latest</code> to 1.7.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9856be60d227976dcbe71f75a36a857c6bf3504a\"><code>9856be6</code></a>\nUpdate <code>prek@latest</code> to 0.5.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/246da9e6f2857c0c408cc9b590117673cd74d06e\"><code>246da9e</code></a>\nUpdate <code>mise@latest</code> to 2026.10.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8ec05a70c3252cd782c8c266ee7c57fdfa6b0699\"><code>8ec05a7</code></a>\nUpdate <code>kache@latest</code> to 1.0.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a5ed626e494481910920bbdee016db18f33bf1df\"><code>a5ed626</code></a>\nUpdate <code>hyperfine@latest</code> to 1.21.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/183e4297cca2404691e9380e1307288dced5c82a\"><code>183e429</code></a>\nRelease 2.87.25</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5e241e4899f64a7ba9011f0c3a46f591b6527640\"><code>5e241e4</code></a>\nUpdate <code>uv@latest</code> to 0.12.23</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/126791b91b3ba2303cb850bbdb6943156fe7c71b\"><code>126791b</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/35ba21c90f3f48ed80e4934a494a422e17488157\"><code>35ba21c</code></a>\nUpdate prek manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.21...v2.87.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.21&new-version=2.87.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:20:46Z",
          "tree_id": "570e1562229933fcc5317a95493cf69da0956e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0"
        },
        "date": 1791917768310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 309.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.484375,
            "unit": "MiB"
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
        "date": 1791919643320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 480.56640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 477.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.671875,
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
          "id": "06757889535392d04f03b7b7e676983716700768",
          "message": "Update cargo dependencies (#1987)\n\nIn particular, update `rustls` to 0.23.46 to address\n[RUSTSEC-2026-0347](https://rustsec.org/advisories/RUSTSEC-2026-0347),\n[RUSTSEC-2026-0348](https://rustsec.org/advisories/RUSTSEC-2026-0348),\nand\n[RUSTSEC-2026-0349](https://rustsec.org/advisories/RUSTSEC-2026-0349).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T08:53:11Z",
          "tree_id": "bec0d423d4ab5dd6d059e993e27e4eec237f4346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06757889535392d04f03b7b7e676983716700768"
        },
        "date": 1792062802045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 478.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 466.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 457.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 435.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 430.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 412.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.70703125,
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
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792077170753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 52.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 428.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 375.9765625,
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
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792410689165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 480.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 64.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 435.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 224.125,
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
          "id": "498ab6c47f41a744feca5682bca8644107018cfe",
          "message": "Bump taiki-e/install-action from 2.87.26 to 2.87.28 (#1993)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.26 to 2.87.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.28</h2>\n<ul>\n<li>\n<p>Update <code>dprint@latest</code> to 0.62.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.33.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.171.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.2.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.7.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.3.</p>\n</li>\n</ul>\n<h2>2.87.27</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.24.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.54.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.170.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.4.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.11.1.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.61.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.148.</p>\n</li>\n<li>\n<p>Update <code>cargo-neat@latest</code> to 0.6.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.2.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1168f6810a3cb30a3514bf5756a3b7f0422c6df8\"><code>1168f68</code></a>\nRelease 2.87.28</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/db1b9097c912e3ea0e3e3365a6b0b2b5b8cdb5b5\"><code>db1b909</code></a>\nUpdate <code>tombi@latest</code> to 1.8.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4fe7379362f9253601faa9a874184709db566a9e\"><code>4fe7379</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7443747ad21a8d8cfbf02ce264bd9ca0a8c08a6e\"><code>7443747</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6ff1c9bf2d9b6301b7c5a384025b33eb79addc2b\"><code>6ff1c9b</code></a>\nUpdate kingfisher manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cb40720d9a6bd77ff3b42bd2dbf2a11439dd64ab\"><code>cb40720</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4c1bf3400474f19d88f073ec38c34ddff9950f60\"><code>4c1bf34</code></a>\nUpdate <code>dprint@latest</code> to 0.62.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3dfabf76a32e8b71d8ceaf749b0e53a8c9cc5f2c\"><code>3dfabf7</code></a>\nUpdate <code>vacuum@latest</code> to 0.33.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a80e680a4cfbe929ef82b1402f4d57ce06b6d987\"><code>a80e680</code></a>\nUpdate <code>uv@latest</code> to 0.13.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/10f4ee9837c4e8479cd0cd010e2dc6397f5b1bcd\"><code>10f4ee9</code></a>\nUpdate <code>tombi@latest</code> to 1.8.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.26...v2.87.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.26&new-version=2.87.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:11Z",
          "tree_id": "6a08a364a9df424ceb58b6036ec87f8580f40b96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/498ab6c47f41a744feca5682bca8644107018cfe"
        },
        "date": 1792416948106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.05859375,
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
          "id": "81dc534ca5cc489cf18d5a34d672e1a95d354605",
          "message": "Bump actions/upload-artifact from 7.0.1 to 7.0.2 (#1991)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 7.0.1 to 7.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Updates <code>@​actions/artifact</code> to v6.3.1.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/821\">actions/upload-artifact#821</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2\">https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cf430e030ddbb5b0abf93d22962f4752f3646cd9\"><code>cf430e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/822\">#822</a>\nfrom actions/tunc-d-prepare-upload-v7-0-2</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/c2acdedd35a8824a1552c7137f8c18288c3ea469\"><code>c2acded</code></a>\nchore: prepare v7.0.2 release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4687c1bbaa0a58abb517d90b4bbade6754c80c1a\"><code>4687c1b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/821\">#821</a>\nfrom actions/tunc-d-upload-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8cbe1bebdb858105d8fdd88f81404d4de4595719\"><code>8cbe1be</code></a>\nBump <code>@​actions/artifact</code> to 6.3.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=7.0.1&new-version=7.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:31Z",
          "tree_id": "57a72ec72e13e2df516584a57cedd49fb9101275",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81dc534ca5cc489cf18d5a34d672e1a95d354605"
        },
        "date": 1792419353913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 58.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 329.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 331.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 312.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 243.09375,
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
          "id": "f21ec47cb4de7dde6478e307dc5d7be51ad48682",
          "message": "Bump astral-sh/setup-uv from 10.2.0 to 10.3.0 (#1990)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.2.0 to 10.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.0 🌈 Add Python architecture selection</h2>\n<h2>Changes</h2>\n<p>This release adds the <code>python-arch</code> input to select a\nPython architecture independently of the Python version. With\n<code>uv</code> 0.13.0 or later, set <code>python-arch: x86_64</code> to\nuse x64 Python on Windows ARM64 runners.</p>\n<p>It also includes embedded checksums for <code>uv</code> releases\nthrough 0.13.0.</p>\n<ul>\n<li>Use macOS 15 runners for tests <a\nhref=\"https://github.com/charliermarsh\"><code>@​charliermarsh</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Add <code>python-arch</code> support <a\nhref=\"https://github.com/zanieb\"><code>@​zanieb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li>chore: update known checksums for 0.12.24 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li>chore: update known checksums for 0.12.23 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li>chore: update known checksums for 0.12.22 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li>chore: update known checksums for 0.12.21 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li>chore: update known checksums for 0.12.20 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li>chore: update known checksums for 0.12.19 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>chore: update known checksums for 0.12.18 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1065\">#1065</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 @<a\nhref=\"https://github.com/apps/dependabot\">dependabot[bot]</a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1c37ad07a6a961277cf70c0d37d6f313000f5884\"><code>1c37ad0</code></a>\nchore: update known checksums for 0.13.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b3c9b5fc56ebc90760c43b1ac9552c0d1705d3ca\"><code>b3c9b5f</code></a>\nchore: update known checksums for 0.12.24 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b06acff4b6a41bdd9cdac56507ead0bd7734e757\"><code>b06acff</code></a>\nAdd <code>python-arch</code> support (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c84232ca4fde9b022e20a930bfbbecd386b56fdf\"><code>c84232c</code></a>\nchore: update known checksums for 0.12.23 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/51fdd265d38a27ffcbca0da885510bc6fcc0ff55\"><code>51fdd26</code></a>\nUse macOS 15 runners for tests (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a96208bed1fb5efb8da349c9bcc6cc58af9e7d74\"><code>a96208b</code></a>\nchore: update known checksums for 0.12.22 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0e3884b860e20d3f4d5daa2347130beb51ccde47\"><code>0e3884b</code></a>\nchore: update known checksums for 0.12.21 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bcf05803b55ef01a5ec6368521ee1b42f97bc438\"><code>bcf0580</code></a>\nchore: update known checksums for 0.12.20 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b92a892142bde7280cd163c2abff341413314f9f\"><code>b92a892</code></a>\nchore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/227a0f6bea25cde3444f52decccf4a18de6635f4\"><code>227a0f6</code></a>\nchore: update known checksums for 0.12.19 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/c18668ad3cf93ea998bef934396af7bb5c839dc7...1c37ad07a6a961277cf70c0d37d6f313000f5884\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.2.0&new-version=10.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:23:37Z",
          "tree_id": "81070e27645e2fa91faa0be8f22b82ca48c14817",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f21ec47cb4de7dde6478e307dc5d7be51ad48682"
        },
        "date": 1792422181052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 457.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 430.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 429.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.8984375,
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
          "id": "982d5c0933c54c785087407f47bbbef7cbf5e6be",
          "message": "mock-client: align checksum behaviour with S3 (#1988)\n\nAlign the mock client's checksum behaviour with S3:\n\n- Uploads without an additional checksum (PutObject, multipart upload\nwithout trailing checksums, and appends that create a new object) now\nstore S3's default full-object CRC64NVME checksum.\n- An append without a checksum is treated as CRC64NVME. It is accepted\non objects with a CRC64NVME checksum (or none) and rejected with\n`InvalidChecksumType` otherwise.\n- `MockGetObjectResponse::get_object_checksum` now returns\n`DidNotRequestChecksums` unless the request enabled checksum mode,\nmatching `S3CrtClient`. It returns an empty checksum for a ranged GET\nthat does not cover the whole object.\n\n`write_checksums_test` now asserts the default CRC64NVME checksum for\nuploads without checksums, on both the mock and S3, instead of ignoring\nit.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's file system behaviour. The `MockClient`\n(`mock` feature of `mountpoint-s3-client`) changes behaviour: callers of\n`get_object_checksum` must now enable checksum mode on the GET, and\nobjects uploaded without checksums now report a CRC64NVME checksum.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry describing the mock client\nchanges. The crate is already at an unreleased patch version (0.22.2).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-20T13:34:14Z",
          "tree_id": "1e9aca50df41a802434807c0b686726724371ff7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/982d5c0933c54c785087407f47bbbef7cbf5e6be"
        },
        "date": 1792511750322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 477.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 223.5546875,
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
          "id": "102cd612d4e87c6f1cdf77aa907215c28ce81df3",
          "message": "Bump rustls-webpki from 0.103.15 to 0.103.16 (RUSTSEC-2026-0382) (#2001)\n\nBumps rustls-webpki to 0.103.16 to fix RUSTSEC-2026-0382 (certificate\nverification may accept distrusted intermediates), which currently fails\nthe `cargo deny` advisories check. Cargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T16:51:43Z",
          "tree_id": "3de7d53a1a0d8d5f55ddac565df00118b7685447",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/102cd612d4e87c6f1cdf77aa907215c28ce81df3"
        },
        "date": 1792611979830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 415.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 274.0859375,
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
          "id": "9336fd883f6838b15f19aef80bb0f721b369eed4",
          "message": "Run CI on pushes and PRs to feature branches (#1997)\n\nLong-lived feature branches (`feature/**`) should get the same CI as\n`main`. Tests and the PR integration tests already run on PRs to any\nbranch, but some workflows only run for `main`:\n\n- Crate checks and packaging now also run on PRs to feature branches.\n- Tests, integration tests, crate checks and packaging now also run on\npushes to feature branches, so that each merge into them (including\nmerges from `main`) is tested.\n\nScheduled runs, benchmarks and stress tests stay `main`-only. Benchmarks\nand stress tests are still available on feature-branch PRs through their\nlabels.\n\n### Does this change impact existing behavior?\n\nNo. Runs for `main`, PRs to `main` and the merge queue are unchanged.\nExisting feature branches pick up the new triggers only once they merge\n`main`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T18:44:13Z",
          "tree_id": "5d21527e4ba2bee6e55fc7a8b8cf52fe6f8ec696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9336fd883f6838b15f19aef80bb0f721b369eed4"
        },
        "date": 1792621422492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 470.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 452.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 51.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 87.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 394.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 225.7109375,
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
          "id": "fb36799638c268ffd7d7267e936b255e203fe1df",
          "message": "Extract `MockBucket` from `MockClient` (#1989)\n\nExtract the in-memory bucket model of `MockClient` into a new\n`MockBucket`.\n\n`MockBucket` owns the bucket state (objects, in-progress uploads,\noperation counts) and serves HeadObject, ListObjectsV2, DeleteObject and\nRenameObject synchronously. `MockClient` becomes a view over an\n`Arc<MockBucket>` that adds the client-side behaviour: part sizes,\nbackpressure, and the `ObjectClient` interface. A bucket can then be\nshared between a `MockClient` and other in-memory test backends without\ngoing through `ObjectClient`, for example a metadata-only fake for the\nfile system's superblock, so that tests exercising the superblock can\nrun on synchronous operations.\n\nThe configuration is split the same way. `MockBucketConfig` (name,\nlisting order, rename support) builds a `MockBucket`. `MockDataConfig`\n(part size, backpressure, read window checks) configures a `MockClient`\nover an existing bucket with `MockClient::with_bucket`.\n`MockClientConfig` keeps its API and combines both.\n\n### Does this change impact existing behavior?\n\nNo. This only affects test-support code under the `mock` feature of\n`mountpoint-s3-client`. The existing `MockClient` and `MockClientConfig`\nAPIs and their behaviour are unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry for the new public\n`MockBucket`, `MockBucketConfig`, `MockDataConfig`,\n`MockClient::with_bucket` and `MockClient::mock_bucket`. No version\nchange: these are additions, and v0.22.2 is already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T21:21:17Z",
          "tree_id": "b15590ec69e2ff0a11cc962d202eb1c3d68af7dd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb36799638c268ffd7d7267e936b255e203fe1df"
        },
        "date": 1792627767731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 478.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 431.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.046875,
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
          "id": "b36809b56455bf2b1d8c63a7fea9f963a4ee71d3",
          "message": "Narrow the superblock's S3 dependency to a `MetadataClient` interface (#1998)\n\nNarrow the file system's superblock to the S3 metadata operations it\nactually issues, behind a new `MetadataClient` trait, and run the\nsuperblock's slow, deterministic tests (shuttle tests and reftests) on\nan in-memory implementation of it.\n\nThe superblock only issues HeadObject, ListObjectsV2, DeleteObject and\nRenameObject, and only reads a few response fields. `Superblock<OC:\nObjectClient>` becomes `Superblock<M: MetadataClient>`, an interface\nshaped after exactly that: plain request parameters (rename takes\n`overwrite` instead of precondition params), and small result types\n(`HeadInfo`, `ListPage`) with only the fields the superblock uses. Every\n`ObjectClient` implements `MetadataClient` through a blanket\nimplementation that converts its results, so production code paths are\nunchanged.\n\n`MetadataError` classifies the failures the superblock handles\nspecifically (not found, precondition failed, not implemented, key too\nlong) and keeps the client error as its source. It is transparent for\n`Display` and `source()`, and delegates `ProvideErrorMetadata`, so logs\nand error metadata are unchanged. The kinds don't depend on\n`mountpoint-s3-client` error types, so other clients can classify their\nown errors.\n\n`InMemoryMetadata` (new `mock` feature, enabled for the crate's own\ntests) serves the interface synchronously from a `MockBucket` (#1989),\nwhich can be shared with a `MockClient` serving the data path.\nOperations complete on the first poll, without threads or I/O:\n\n* the superblock shuttle tests use it directly, so shuttle only\nschedules at the superblock's own synchronization points;\n* the reftest harness builds its file system with the superblock on\n`InMemoryMetadata` and the data path on `MockClient`, over the same\nbucket. Runtime is unchanged (the mutations reftest is within 2-4%).\n\n### Does this change impact existing behavior?\n\nNo. The `Superblock` bounds are relaxed from `ObjectClient + Send +\nSync` to `MetadataClient`, which every such client implements, so\nexisting uses compile and behave as before. Errors keep the same\ndisplay, source chain and error metadata.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-fs` changelog entry for the new public\n`MetadataClient` interface and the `mock` feature with\n`InMemoryMetadata`. No version change: these are additive, and v0.11.1\nis already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T15:39:59Z",
          "tree_id": "1561f9d5314b778c198deb6a377dda2f71428ac9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b36809b56455bf2b1d8c63a7fea9f963a4ee71d3"
        },
        "date": 1792692541669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 463.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 329.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 308.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.98828125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}